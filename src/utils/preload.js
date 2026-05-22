import { aetherisConfig } from '../data/aetherisConfig'
import { landingConfig } from '../data/landingConfig'
import { imageAssets, resolveImageSrc } from './images'

const loaded = new Set()
const inflight = new Map()

export function isImageCached(src) {
  return src ? loaded.has(src) : true
}

export function markImageLoaded(src) {
  if (src) loaded.add(src)
}

export function preloadImage(src) {
  if (!src || loaded.has(src)) return Promise.resolve(true)

  const pending = inflight.get(src)
  if (pending) return pending

  const promise = new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => {
      loaded.add(src)
      inflight.delete(src)
      resolve(true)
    }
    img.onerror = () => {
      inflight.delete(src)
      resolve(false)
    }
    img.src = src
  })

  inflight.set(src, promise)
  return promise
}

export function preloadImages(srcs) {
  const unique = [...new Set(srcs.filter(Boolean))]
  return Promise.all(unique.map(preloadImage))
}

function collectImagesFromConfig() {
  const keys = new Set()

  const add = (image) => {
    const src = resolveImageSrc(image)
    if (src) keys.add(src)
  }

  add(aetherisConfig.hero.image)
  aetherisConfig.classes?.forEach((c) => add(c.image))
  landingConfig.transformation.phases.forEach((p) => add(p.image))
  add(landingConfig.facility.image)
  landingConfig.facility.gallery.forEach(add)
  add(aetherisConfig.climax.image)

  return [...keys]
}

/** Hero + first visible scene — highest priority */
export function getCriticalPreloadUrls() {
  const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

  return mobile
    ? [imageAssets.hero640, imageAssets.hero960, imageAssets.performance, imageAssets.combat]
    : [imageAssets.hero960, imageAssets.hero, imageAssets.performance, imageAssets.combat, imageAssets.darkGym]
}

/** Scene-id → URLs for progressive preload */
export function getScenePreloadMap() {
  return {
    programs: aetherisConfig.classes.map((c) => resolveImageSrc(c.image)).filter(Boolean),
    journey: landingConfig.transformation.phases.map((p) => resolveImageSrc(p.image)).filter(Boolean),
    facility: [
      resolveImageSrc(landingConfig.facility.image),
      ...landingConfig.facility.gallery.map((g) => resolveImageSrc(g)),
    ].filter(Boolean),
    access: [resolveImageSrc(aetherisConfig.climax.image)].filter(Boolean),
  }
}

export async function preloadCriticalAssets() {
  return preloadImages(getCriticalPreloadUrls())
}

export function preloadSecondaryAssets() {
  const all = collectImagesFromConfig()
  const critical = new Set(getCriticalPreloadUrls())
  const secondary = all.filter((src) => !critical.has(src))
  return preloadImages(secondary)
}

let lastScrollY = 0

export function attachScrollPrefetch() {
  if (typeof window === 'undefined') return () => {}

  const map = getScenePreloadMap()
  const order = ['programs', 'journey', 'facility', 'access']
  let prefetchIndex = 0

  const onScroll = () => {
    const y = window.scrollY
    const down = y >= lastScrollY
    lastScrollY = y

    if (!down) return

    const nextId = order[prefetchIndex]
    if (nextId && map[nextId]) {
      preloadImages(map[nextId])
      prefetchIndex = Math.min(prefetchIndex + 1, order.length - 1)
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

export function warmStart() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.add('boot-warm')
  preloadCriticalAssets().then(() => {
    document.documentElement.classList.add('cinematic-ready')
    document.documentElement.classList.remove('boot-warm')
    preloadImages(getScenePreloadMap().programs)
  })

  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 600))
  idle(() => {
    preloadSecondaryAssets()
    attachScrollPrefetch()
  })
}

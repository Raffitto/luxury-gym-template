import { aetherisConfig } from '../data/aetherisConfig'
import { landingConfig } from '../data/landingConfig'
import { imageAssets, resolveImageSrc } from './images'

const loaded = new Set()
const inflight = new Map()

export const HOME_SCENE_ORDER = ['programs', 'journey', 'facility', 'access']

export function isImageCached(src) {
  return src ? loaded.has(src) : true
}

export function markImageLoaded(src) {
  if (src) loaded.add(src)
}

function decodeBitmap(img) {
  if (img?.decode) {
    return img.decode().catch(() => undefined)
  }
  return Promise.resolve()
}

export function preloadImage(src) {
  if (!src || loaded.has(src)) return Promise.resolve(true)

  const pending = inflight.get(src)
  if (pending) return pending

  const promise = new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    const finish = (ok) => {
      if (ok) loaded.add(src)
      inflight.delete(src)
      resolve(ok)
    }
    img.onload = () => {
      decodeBitmap(img).finally(() => finish(true))
    }
    img.onerror = () => finish(false)
    img.src = src
  })

  inflight.set(src, promise)
  return promise
}

export function preloadImages(srcs) {
  const unique = [...new Set(srcs.filter(Boolean))]
  return Promise.all(unique.map(preloadImage))
}

function isHandheld() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
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

/** Hero + first visible scene assets */
export function getCriticalPreloadUrls() {
  const phone = isHandheld()
  const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  const programs = getScenePreloadMap().programs ?? []
  const journey = getScenePreloadMap().journey ?? []

  const heroStack = phone
    ? [imageAssets.hero640, imageAssets.hero960]
    : mobile
      ? [imageAssets.hero640, imageAssets.hero960, imageAssets.hero]
      : [imageAssets.hero960, imageAssets.hero]

  return [
    ...heroStack,
    programs[0],
    programs[1],
    journey[0],
    journey[1],
  ].filter(Boolean)
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

/** Preload programs immediately after hero critical path */
export function preloadProgramsAfterHero() {
  return preloadImages(getScenePreloadMap().programs)
}

/** Preload current scene + next N scenes (inclusive of current) */
export function preloadScenesAhead(fromIndex, count = 2) {
  const map = getScenePreloadMap()
  const urls = []
  for (let i = 0; i <= count; i++) {
    const id = HOME_SCENE_ORDER[fromIndex + i]
    if (id && map[id]) urls.push(...map[id])
  }
  return preloadImages([...new Set(urls)])
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
let scrollAheadIndex = 0

export function attachScrollPrefetch() {
  if (typeof window === 'undefined') return () => {}

  const map = getScenePreloadMap()
  const order = HOME_SCENE_ORDER

  const sectionEls = order
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  const onScroll = () => {
    const y = window.scrollY
    const down = y >= lastScrollY
    lastScrollY = y
    if (!down || !sectionEls.length) return

    const vh = window.innerHeight
    let nearest = 0
    let best = Infinity

    sectionEls.forEach((el, i) => {
      const dist = Math.abs(el.getBoundingClientRect().top - vh * 0.35)
      if (dist < best) {
        best = dist
        nearest = i
      }
    })

    const target = Math.max(nearest, scrollAheadIndex)
    scrollAheadIndex = target
    preloadScenesAhead(target, 2)

    const tail = order[target + 3]
    if (tail && map[tail]) preloadImages(map[tail])
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

export function warmStart() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.add('boot-warm')
  const phone = isHandheld()

  const critical = preloadCriticalAssets()
  const programsWarm = preloadProgramsAfterHero()
  preloadScenesAhead(0, phone ? 2 : 1)

  Promise.all([critical, programsWarm]).then(() => {
    document.documentElement.classList.add('cinematic-ready')
    document.documentElement.classList.remove('boot-warm')
  })

  preloadScenesAhead(1, phone ? 2 : 1)

  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, phone ? 80 : 350))
  idle(() => {
    preloadScenesAhead(0, 3)
    preloadSecondaryAssets()
    attachScrollPrefetch()
  })
}

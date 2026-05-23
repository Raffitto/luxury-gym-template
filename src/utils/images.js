import { isGrindBrand } from '../data/brand'

/** Local static assets — production-safe, no remote CDN dependency */
export const ASSET_ROOT = isGrindBrand ? '/grind' : '/aetheris'

function assetPair(base) {
  return {
    jpg: `${ASSET_ROOT}/${base}.jpg`,
    webp: `${ASSET_ROOT}/${base}.webp`,
  }
}

const heroAssets = assetPair('hero')
const hero960Assets = assetPair('hero-960')
const hero640Assets = assetPair('hero-640')

export const imageAssets = {
  hero: heroAssets.jpg,
  heroWebp: heroAssets.webp,
  hero960: hero960Assets.jpg,
  hero960Webp: hero960Assets.webp,
  hero640: hero640Assets.jpg,
  hero640Webp: hero640Assets.webp,
  performance: `${ASSET_ROOT}/performance.jpg`,
  combat: `${ASSET_ROOT}/combat.jpg`,
  recovery: `${ASSET_ROOT}/recovery.jpg`,
  sprint: `${ASSET_ROOT}/sprint.jpg`,
  metabolic: `${ASSET_ROOT}/metabolic.jpg`,
  luxuryGym: `${ASSET_ROOT}/luxury-gym.jpg`,
  darkGym: `${ASSET_ROOT}/dark-gym.jpg`,
  facility: `${ASSET_ROOT}/facility.jpg`,
  strengthFloor: `${ASSET_ROOT}/strength-floor.jpg`,
  chamberTokyo: `${ASSET_ROOT}/chamber-tokyo.jpg`,
  architectCoach: `${ASSET_ROOT}/architect-coach.jpg`,
  architectFemale: `${ASSET_ROOT}/architect-female.jpg`,
  architectMale: `${ASSET_ROOT}/architect-male.jpg`,
  fallback: `${ASSET_ROOT}/fallback.jpg`,
}

/** @deprecated Use imageAssets keys in config */
export const photos = {
  hero: 'hero',
  performance: 'performance',
  recovery: 'recovery',
  strengthFloor: 'strengthFloor',
  luxuryGym: 'luxuryGym',
  darkGym: 'darkGym',
  facility: 'facility',
  combat: 'combat',
  sprint: 'sprint',
  metabolic: 'metabolic',
  architectMale: 'architectMale',
  architectFemale: 'architectFemale',
  architectCoach: 'architectCoach',
  chamberTokyo: 'chamberTokyo',
}

export function webpFromSrc(src) {
  if (!src || typeof src !== 'string') return null
  if (!src.endsWith('.jpg')) return null
  return src.replace(/\.jpg$/, '.webp')
}

const PRESET_WIDTHS = {
  hero: [
    { w: 640, src: imageAssets.hero640, webp: imageAssets.hero640Webp },
    { w: 960, src: imageAssets.hero960, webp: imageAssets.hero960Webp },
    { w: 1920, src: imageAssets.hero, webp: imageAssets.heroWebp },
  ],
  section: [{ w: 1280, src: null }],
  card: [
    { w: 480, src: null },
    { w: 800, src: null },
  ],
  portrait: [{ w: 800, src: null }],
}

export const FALLBACK_SRC = imageAssets.fallback

/**
 * Resolve image src from config shape:
 * { src, alt } | { id: assetKey, alt } | assetKey string | absolute path
 */
export function resolveImageSrc(image) {
  if (!image) return null

  if (typeof image === 'string') {
    if (image.startsWith('/') || image.startsWith('http')) return image
    return imageAssets[image] || null
  }

  if (image.src) return image.src

  if (image.id) {
    if (image.id.startsWith('/') || image.id.startsWith('http')) return image.id
    return imageAssets[image.id] || null
  }

  return null
}

export function resolveAlt(image, fallback = '') {
  if (!image) return fallback
  if (typeof image === 'object' && image.alt) return image.alt
  return fallback
}

export function buildSrcSet(image, preset = 'section') {
  const primary = resolveImageSrc(image)
  if (!primary) return { src: FALLBACK_SRC, srcSet: undefined }

  if (preset === 'hero') {
    const parts = PRESET_WIDTHS.hero.map(({ w, src }) => `${src} ${w}w`)
    const webpParts = PRESET_WIDTHS.hero
      .filter(({ webp }) => webp)
      .map(({ w, webp }) => `${webp} ${w}w`)
    return {
      src: imageAssets.hero640 || imageAssets.hero,
      srcSet: parts.join(', '),
      webpSrc: imageAssets.hero640Webp || imageAssets.heroWebp,
      webpSrcSet: webpParts.length ? webpParts.join(', ') : undefined,
    }
  }

  if (preset === 'card') {
    return { src: primary, srcSet: `${primary} 480w, ${primary} 800w` }
  }

  return { src: primary, srcSet: undefined }
}

export function getWidths(preset = 'section') {
  const map = { hero: [640, 960, 1920], section: [1280], card: [480, 800], portrait: [800] }
  return map[preset] || map.section
}

import { isGrindBrand } from '../data/brand'

/** Local static assets — production-safe, no remote CDN dependency */
export const ASSET_ROOT = isGrindBrand ? '/grind' : '/aetheris'

export const imageAssets = {
  hero: `${ASSET_ROOT}/hero.jpg`,
  hero960: `${ASSET_ROOT}/hero-960.jpg`,
  hero640: `${ASSET_ROOT}/hero-640.jpg`,
  performance: `${ASSET_ROOT}/performance.jpg`,
  combat: `${ASSET_ROOT}/combat.jpg`,
  recovery: `${ASSET_ROOT}/recovery.jpg`,
  sprint: `${ASSET_ROOT}/sprint.jpg`,
  metabolic: `${ASSET_ROOT}/metabolic.jpg`,
  luxuryGym: `${ASSET_ROOT}/luxury-gym.jpg`,
  darkGym: `${ASSET_ROOT}/dark-gym.jpg`,
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
  combat: 'combat',
  sprint: 'sprint',
  metabolic: 'metabolic',
  architectMale: 'architectMale',
  architectFemale: 'architectFemale',
  architectCoach: 'architectCoach',
  chamberTokyo: 'chamberTokyo',
}

const PRESET_WIDTHS = {
  hero: [
    { w: 640, src: imageAssets.hero640 },
    { w: 960, src: imageAssets.hero960 },
    { w: 1920, src: imageAssets.hero },
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
    return { src: imageAssets.hero, srcSet: parts.join(', ') }
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

const UNSPLASH_BASE = 'https://images.unsplash.com'

/** Dark luxury athletic photography — Unsplash photo IDs */
export const photos = {
  hero: 'photo-1571902943202-507ec2618e8f',
  performance: 'photo-1517836357463-d25dfeac3438',
  recovery: 'photo-1574680096145-06deb3a03063',
  strengthFloor: 'photo-1534438327276-14e5300c3a48',
  luxuryGym: 'photo-1540497077202-7c8a3999166f',
  darkGym: 'photo-1593079831268-3381b0de6f93',
  combat: 'photo-1581001835019-54888a290ca0',
  sprint: 'photo-1476480862126-209bfaa8fbaa',
  metabolic: 'photo-1541534741688-6078c6afa925',
  architectMale: 'photo-1594736797933-d0401ba99888',
  architectFemale: 'photo-1571019613454-1cb2f99b2d8b',
  architectCoach: 'photo-1583454110551-8461caebae3f',
  cryo: 'photo-1544367507-0f4fcb009e34',
  chamberTokyo: 'photo-1549060276-afa531f72c29',
}

const DEFAULT_WIDTHS = {
  hero: [640, 960, 1280, 1600, 1920],
  section: [480, 768, 1024, 1280],
  card: [400, 600, 800],
  portrait: [400, 600, 800],
}

/**
 * Unsplash CDN URL — auto=format serves WebP/AVIF where supported.
 * @param {string} photoId - e.g. photo-1571902943202-507ec2618e8f
 */
export function unsplashUrl(photoId, { w = 1280, q = 75, crop = 'entropy', sharp = 10 } = {}) {
  const id = photoId.replace(/^https?:\/\/images\.unsplash\.com\//, '').split('?')[0]
  const params = new URLSearchParams({
    w: String(w),
    q: String(q),
    auto: 'format',
    fit: 'crop',
    crop,
    sharp: String(sharp),
  })
  return `${UNSPLASH_BASE}/${id}?${params}`
}

export function unsplashSrcSet(photoId, widths, q = 75) {
  return widths.map((w) => `${unsplashUrl(photoId, { w, q })} ${w}w`).join(', ')
}

export function getWidths(preset = 'section') {
  return DEFAULT_WIDTHS[preset] || DEFAULT_WIDTHS.section
}

/** @param {{ id?: string, alt?: string } | string} image */
export function resolvePhotoId(image) {
  if (!image) return null
  if (typeof image === 'string') {
    if (image.startsWith('photo-')) return image
    const match = image.match(/photo-[\w-]+/)
    return match ? match[0] : null
  }
  return image.id || null
}

export function resolveAlt(image, fallback = '') {
  if (!image) return fallback
  if (typeof image === 'object' && image.alt) return image.alt
  return fallback
}

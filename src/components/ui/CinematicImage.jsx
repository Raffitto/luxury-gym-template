import { unsplashUrl, unsplashSrcSet, resolvePhotoId, getWidths } from '../../utils/images'

/**
 * Responsive, lazy-loaded performance imagery.
 * @param {object} props
 * @param {{ id: string, alt?: string } | string} props.image - photo id or image object
 * @param {'hero'|'section'|'card'|'portrait'} [props.preset]
 * @param {string} [props.sizes]
 * @param {boolean} [props.priority] - LCP / above-fold
 * @param {string} [props.className]
 */
export default function CinematicImage({
  image,
  alt = '',
  preset = 'section',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px',
  priority = false,
  className = '',
  widths: customWidths,
}) {
  const photoId = resolvePhotoId(image)
  if (!photoId) return null

  const label = alt || resolveAlt(image, '')
  const widths = customWidths || getWidths(preset)
  const maxW = widths[widths.length - 1]
  const src = unsplashUrl(photoId, { w: maxW, q: priority ? 80 : 75 })
  const srcSet = unsplashSrcSet(photoId, widths, priority ? 80 : 75)

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={label}
      width={maxW}
      height={Math.round(maxW * 0.625)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`cinematic-img ${className}`.trim()}
    />
  )
}

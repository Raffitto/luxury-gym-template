import { resolveImageSrc, resolveAlt, buildSrcSet, webpFromSrc, FALLBACK_SRC } from '../../utils/images'

export default function GrindImage({
  image,
  alt = '',
  preset = 'section',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 1200px',
}) {
  const src = resolveImageSrc(image) || FALLBACK_SRC
  const { src: sized, srcSet, webpSrc, webpSrcSet } = buildSrcSet(image, preset)
  const display = sized || src
  const webp = webpSrc || webpFromSrc(display)
  const label = resolveAlt(image, alt)

  return (
    <picture className={className}>
      {webp ? (
        <source
          type="image/webp"
          srcSet={webpSrcSet || webp}
          sizes={srcSet ? sizes : undefined}
        />
      ) : null}
      <img
        src={display}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={label}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}

import { useState, useCallback } from 'react'
import {
  resolveImageSrc,
  resolveAlt,
  buildSrcSet,
  FALLBACK_SRC,
  getWidths,
} from '../../utils/images'

/**
 * Local static imagery with gradient fallback — never shows broken icon.
 */
export default function CinematicImage({
  image,
  alt = '',
  preset = 'section',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px',
  priority = false,
  className = '',
  fill = false,
}) {
  const primarySrc = resolveImageSrc(image) || FALLBACK_SRC
  const { src, srcSet } = buildSrcSet(image, preset)
  const displayPrimary = src || primarySrc

  const [currentSrc, setCurrentSrc] = useState(displayPrimary)
  const [errored, setErrored] = useState(false)

  const label = alt || resolveAlt(image, '')
  const widths = getWidths(preset)
  const maxW = widths[widths.length - 1]

  const handleError = useCallback(() => {
    if (currentSrc !== FALLBACK_SRC) {
      setCurrentSrc(FALLBACK_SRC)
      return
    }
    setErrored(true)
  }, [currentSrc])

  return (
    <div
      className={`cinematic-img-wrap ${fill ? 'absolute inset-0' : 'h-full w-full'} ${className}`.trim()}
      data-errored={errored || undefined}
    >
      <div className="cinematic-img-fallback-bg" aria-hidden />
      {!errored ? (
        <img
          src={currentSrc}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={label}
          width={maxW}
          height={Math.round(maxW * 0.625)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={handleError}
          className="cinematic-img"
        />
      ) : null}
    </div>
  )
}

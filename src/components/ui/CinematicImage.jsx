import { useState, useCallback, useRef, useEffect } from 'react'
import {
  resolveImageSrc,
  resolveAlt,
  buildSrcSet,
  FALLBACK_SRC,
  getWidths,
} from '../../utils/images'
import { isImageCached, markImageLoaded } from '../../utils/preload'

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
  const imgRef = useRef(null)

  const [currentSrc, setCurrentSrc] = useState(displayPrimary)
  const [errored, setErrored] = useState(false)
  const [revealed, setRevealed] = useState(
    priority && (isImageCached(displayPrimary) || isImageCached(primarySrc)),
  )

  const label = alt || resolveAlt(image, '')
  const widths = getWidths(preset)
  const maxW = widths[widths.length - 1]

  useEffect(() => {
    if (priority && imgRef.current?.complete) setRevealed(true)
  }, [priority, displayPrimary])

  const handleLoad = useCallback(() => {
    setRevealed(true)
    markImageLoaded(displayPrimary)
  }, [displayPrimary])

  const handleError = useCallback(() => {
    if (currentSrc !== FALLBACK_SRC) {
      setCurrentSrc(FALLBACK_SRC)
      return
    }
    setErrored(true)
  }, [currentSrc])

  return (
    <div
      className={`cinematic-img-wrap ${fill ? 'absolute inset-0' : 'h-full w-full'} ${priority ? 'cinematic-img-wrap--priority' : ''} ${className}`.trim()}
      data-errored={errored || undefined}
      data-revealed={revealed || undefined}
    >
      <div className="cinematic-img-fallback-bg" aria-hidden />
      {!errored ? (
        <img
          ref={imgRef}
          src={currentSrc}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={label}
          width={maxW}
          height={Math.round(maxW * 0.625)}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          className={`cinematic-img ${revealed ? 'cinematic-img--revealed' : ''}`}
        />
      ) : null}
    </div>
  )
}

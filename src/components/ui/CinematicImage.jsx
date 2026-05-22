import { useState, useCallback, useRef, useLayoutEffect } from 'react'
import { useIsPhone } from '../../hooks/useIsPhone'
import {
  resolveImageSrc,
  resolveAlt,
  buildSrcSet,
  FALLBACK_SRC,
  getWidths,
} from '../../utils/images'
import { isImageCached, markImageLoaded } from '../../utils/preload'

function cachedForSrcs(...srcs) {
  return srcs.some((s) => s && isImageCached(s))
}

/**
 * Local static imagery with gradient fallback — never shows broken icon.
 */
export default function CinematicImage({
  image,
  alt = '',
  preset = 'section',
  sizes = '(max-width: 767px) 100vw, (max-width: 1280px) 80vw, 1200px',
  priority = false,
  className = '',
  fill = false,
}) {
  const primarySrc = resolveImageSrc(image) || FALLBACK_SRC
  const { src, srcSet } = buildSrcSet(image, preset)
  const displayPrimary = src || primarySrc
  const imgRef = useRef(null)
  const phone = useIsPhone()
  const cached = cachedForSrcs(displayPrimary, primarySrc, src)

  const [currentSrc, setCurrentSrc] = useState(displayPrimary)
  const [errored, setErrored] = useState(false)
  const [revealed, setRevealed] = useState(() => {
    if (cached || phone || priority) return true
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('cinematic-ready')
  })

  const label = alt || resolveAlt(image, '')
  const widths = getWidths(preset)
  const maxW = widths[widths.length - 1]

  const revealNow = useCallback(() => {
    setRevealed(true)
    markImageLoaded(displayPrimary)
    if (src && src !== displayPrimary) markImageLoaded(src)
  }, [displayPrimary, src])

  useLayoutEffect(() => {
    const el = imgRef.current
    if (!el) return
    if (cached || el.complete) {
      if (el.decode) {
        el.decode().then(revealNow).catch(revealNow)
      } else {
        revealNow()
      }
      return
    }
    if (phone) revealNow()
  }, [displayPrimary, primarySrc, src, revealNow, cached, phone])

  const handleLoad = useCallback(
    (e) => {
      const el = e?.currentTarget ?? imgRef.current
      if (el?.decode) {
        el.decode().then(revealNow).catch(revealNow)
      } else {
        revealNow()
      }
    },
    [revealNow],
  )

  const handleError = useCallback(() => {
    if (currentSrc !== FALLBACK_SRC) {
      setCurrentSrc(FALLBACK_SRC)
      return
    }
    setErrored(true)
  }, [currentSrc])

  return (
    <div
      className={`cinematic-img-wrap ${fill ? 'absolute inset-0' : 'h-full w-full'} ${priority ? 'cinematic-img-wrap--priority' : ''} ${phone ? 'cinematic-img-wrap--native' : ''} ${className}`.trim()}
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
          className={`cinematic-img cinematic-img--render ${revealed ? 'cinematic-img--revealed' : ''}`}
        />
      ) : null}
    </div>
  )
}

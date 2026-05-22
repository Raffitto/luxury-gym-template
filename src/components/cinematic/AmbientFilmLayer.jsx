import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { useAmbientFilm } from '../../hooks/useAmbientFilm'
import { cinematicVideo } from '../../data/cinematicVideo'

/**
 * Luxury ambient film — poster instant, CSS motion, optional muted video when assets exist.
 */
export default function AmbientFilmLayer({
  slot = 'hero',
  className = '',
  intensity = 'medium',
  allowVideo,
}) {
  const config = cinematicVideo[slot] ?? cinematicVideo.hero
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const videoAllowed =
    allowVideo ?? (config.mobileVideo ? true : !phone && Boolean(config.webm || config.mp4))

  const {
    containerRef,
    videoRef,
    showVideo,
    filmOnly,
    visibilityClass,
    dormant,
    onVideoReady,
    onVideoError,
    canUseVideo,
    preload,
  } = useAmbientFilm({
    enabled: Boolean(config.poster) || slot === 'bridge',
    allowVideo: videoAllowed,
    slot,
    preload: config.preload ?? (slot === 'hero' ? 'metadata' : 'none'),
  })

  if (!config.poster && slot !== 'bridge') return null

  const bridgeOnly = slot === 'bridge' && !config.poster

  const motionClass =
    slot === 'bridge'
      ? 'ambient-film--bridge'
      : config.secondary
        ? 'ambient-film--crossfade'
        : 'ambient-film--kenburns'

  return (
    <div
      ref={containerRef}
      className={`ambient-film ambient-film--${slot} ambient-film--${intensity} ${motionClass} ${filmOnly ? 'ambient-film--css' : ''} ${dormant ? 'ambient-film--dormant' : ''} ${visibilityClass} ${className}`.trim()}
      aria-hidden
    >
      {config.poster && !bridgeOnly ? (
        <div className="ambient-film-posters">
          <img
            src={config.poster}
            alt=""
            className="ambient-film-poster ambient-film-poster--primary"
            decoding="async"
            loading={slot === 'hero' ? 'eager' : 'lazy'}
            fetchPriority={slot === 'hero' ? 'high' : 'auto'}
          />
          {config.secondary ? (
            <img
              src={config.secondary}
              alt=""
              className="ambient-film-poster ambient-film-poster--secondary"
              decoding="async"
              loading="lazy"
            />
          ) : null}
        </div>
      ) : null}

      {canUseVideo && (config.webm || config.mp4) ? (
        <video
          ref={videoRef}
          className={`ambient-film-video ${showVideo ? 'ambient-film-video--live' : ''}`}
          muted
          playsInline
          loop
          autoPlay={false}
          preload={preload}
          poster={config.poster || undefined}
          onLoadedData={onVideoReady}
          onCanPlay={onVideoReady}
          onError={onVideoError}
        >
          {config.webm ? <source src={config.webm} type="video/webm" /> : null}
          {config.mp4 ? <source src={config.mp4} type="video/mp4" /> : null}
        </video>
      ) : null}

      {!reduced ? (
        <>
          <div className="ambient-film-shade" />
          <div className="ambient-film-sweep" />
          <div className="ambient-film-vignette" />
          <div className="ambient-film-grain" />
        </>
      ) : null}
    </div>
  )
}

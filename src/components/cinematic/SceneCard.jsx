import { Link } from 'react-router-dom'
import CinematicImage from '../ui/CinematicImage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { useOffscreenPause } from '../../hooks/useOffscreenPause'

export default function SceneCard({
  image,
  alt,
  title,
  meta,
  description,
  index,
  href,
  ctaLabel = 'Enter',
  priority = false,
}) {
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const living = !reduced
  const { ref: mediaRef, className: visibilityClass } = useOffscreenPause({
    rootMargin: '30% 0px',
    enabled: living,
  })

  const content = (
    <article className="scene-card scene-card--still scene-card--poster edge-lit">
      <div
        ref={mediaRef}
        className={`scene-card-media scene-card-media--depth ${living ? 'scene-card-media--living' : ''} ${visibilityClass}`.trim()}
      >
        <div className="scene-card-media-inner">
          <CinematicImage image={image} alt={alt} preset="card" fill priority={priority} />
        </div>
        {living ? (
          <>
            <div className="scene-card-live-sweep" aria-hidden />
            <div className="scene-card-live-breathe" aria-hidden />
            <div className="scene-card-live-grain" aria-hidden />
            <div className="scene-card-live-particles" aria-hidden>
              <span />
              <span />
              <span />
            </div>
          </>
        ) : null}
        <div className="scene-card-dof" aria-hidden />
        <div className="scene-card-specular" aria-hidden />
        <div className="scene-card-reflection" aria-hidden />
        <div className="scene-card-scrim" aria-hidden />
        {index != null ? (
          <span className="scene-card-index font-ritual">{String(index).padStart(2, '0')}</span>
        ) : null}
      </div>
      <div className="scene-card-body">
        {meta ? <p className="scene-card-meta font-ritual">{meta}</p> : null}
        <h3 className="scene-card-title font-display">{title}</h3>
        {description ? <p className="scene-card-desc">{description}</p> : null}
        {href ? (
          <span className="scene-card-cta font-ritual">{ctaLabel}</span>
        ) : null}
      </div>
    </article>
  )

  if (href) {
    return (
      <Link to={href} className="scene-card-link scene-card-link--instant">
        {content}
      </Link>
    )
  }

  return content
}

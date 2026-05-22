import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CinematicImage from '../ui/CinematicImage'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { spring, viewportOnce } from '../../motion/choreography'

export default function SceneCard({
  image,
  alt,
  title,
  meta,
  description,
  index,
  href,
  ctaLabel = 'Explore',
}) {
  const reduced = useReducedMotion()

  const content = (
    <article className="scene-card edge-lit">
      <div className="scene-card-media">
        <CinematicImage image={image} alt={alt} preset="card" fill />
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

  if (reduced) {
    return href ? (
      <Link to={href} className="scene-card-link">
        {content}
      </Link>
    ) : (
      content
    )
  }

  const wrapped = (
    <motion.div
      className="scene-card-motion gpu-layer"
      whileTap={{ scale: 0.992, transition: spring.tap }}
      initial={{ opacity: 0, y: 12, scale: 0.992 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce('-3%')}
      transition={spring.liquid}
    >
      {content}
    </motion.div>
  )

  return href ? (
    <Link to={href} className="scene-card-link">
      {wrapped}
    </Link>
  ) : (
    wrapped
  )
}

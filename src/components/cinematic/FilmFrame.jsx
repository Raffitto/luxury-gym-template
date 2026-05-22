import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { spring, viewportOnce } from '../../motion/choreography'

export default function FilmFrame({
  children,
  className = '',
  aspect = 'auto',
  bleed = false,
  delay = 0,
}) {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const useBleed = bleed && !mobile
  const aspectClass =
    aspect === 'cinematic'
      ? 'film-frame--cinematic'
      : aspect === 'portrait'
        ? 'film-frame--portrait'
        : ''

  const frame = (
    <div
      className={`film-frame ${aspectClass} ${useBleed ? 'film-frame--bleed' : ''} ${className}`.trim()}
    >
      <div className="film-frame-vignette" aria-hidden />
      <div className="film-frame-inner">{children}</div>
    </div>
  )

  if (reduced) return frame

  return (
    <motion.div
      className={`film-frame-wrap gpu-layer ${useBleed ? 'film-frame-wrap--bleed' : ''}`}
      initial={{ opacity: 0, y: 14, scale: 0.994 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce('-5%')}
      transition={{ ...spring.reveal, delay }}
    >
      {frame}
    </motion.div>
  )
}

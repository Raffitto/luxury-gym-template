import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { spring } from '../../motion/choreography'

const AMBIENT = { duration: 8, repeat: Infinity, ease: [0.42, 0, 0.2, 1] }
const BEAM = { duration: 7, repeat: Infinity, ease: [0.42, 0, 0.2, 1] }

export default function HeroLivingLayer() {
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  if (reduced) {
    return (
      <div className="hero-living-layer" aria-hidden>
        <div className="hero-living-glow" />
      </div>
    )
  }

  if (phone) {
    return (
      <div className="hero-living-layer hero-living-layer--handheld" aria-hidden>
        <div className="hero-fog-breathe hero-fog-breathe--static" />
        <div className="hero-living-glow" />
      </div>
    )
  }

  return (
    <div className="hero-living-layer gpu-layer" aria-hidden>
      <motion.div
        className="hero-fog-breathe"
        initial={false}
        animate={{ opacity: [0.32, 0.48, 0.35] }}
        transition={AMBIENT}
      />
      <motion.div
        className="hero-light-beam hero-light-beam--a"
        animate={{ opacity: [0.08, 0.28, 0.1], x: ['-42%', '128%'] }}
        transition={{ ...BEAM, repeatDelay: 2.4 }}
      />
      <motion.div
        className="hero-light-beam hero-light-beam--b"
        animate={{ opacity: [0.05, 0.22, 0.08], x: ['102%', '-38%'] }}
        transition={{ ...BEAM, delay: 1, repeatDelay: 2.8 }}
      />
      <motion.div
        className="hero-living-glow"
        animate={{ scale: [1, 1.02, 1], opacity: [0.42, 0.52, 0.44] }}
        transition={AMBIENT}
      />
    </div>
  )
}

export function HeroHorizontalCue() {
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  if (reduced || phone) return null

  return (
    <motion.div
      className="hero-horizontal-cue gpu-layer"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring.glide, delay: 0.2 }}
      aria-hidden
    >
      <div className="hero-horizontal-rail">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="hero-horizontal-tick"
            animate={{ opacity: [0.3, 0.9, 0.3], scaleY: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.12,
              ease: [0.42, 0, 0.2, 1],
            }}
          />
        ))}
      </div>
      <span className="font-ritual hero-horizontal-label">Scroll the continuum</span>
      <ChevronRight className="h-3.5 w-3.5 opacity-50" strokeWidth={1} />
    </motion.div>
  )
}

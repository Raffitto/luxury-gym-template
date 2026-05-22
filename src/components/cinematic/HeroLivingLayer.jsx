import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { spring } from '../../motion/choreography'

const AMBIENT = { duration: 5.5, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }
const BEAM = { duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }

export default function HeroLivingLayer() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className="hero-living-layer" aria-hidden>
        <div className="hero-living-glow" />
      </div>
    )
  }

  return (
    <div className="hero-living-layer gpu-layer" aria-hidden>
      <motion.div
        className="hero-fog-breathe"
        initial={false}
        animate={{ opacity: [0.38, 0.62, 0.42] }}
        transition={AMBIENT}
      />
      <motion.div
        className="hero-light-beam hero-light-beam--a"
        animate={{ opacity: [0.12, 0.48, 0.18], x: ['-42%', '128%'] }}
        transition={{ ...BEAM, repeatDelay: 1.8 }}
      />
      <motion.div
        className="hero-light-beam hero-light-beam--b"
        animate={{ opacity: [0.08, 0.38, 0.12], x: ['102%', '-38%'] }}
        transition={{ ...BEAM, delay: 0.8, repeatDelay: 2 }}
      />
      <motion.div
        className="hero-light-beam hero-light-beam--c"
        animate={{ opacity: [0.18, 0.32, 0.2] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }}
      />
      <motion.div
        className="hero-living-glow"
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.68, 0.52] }}
        transition={AMBIENT}
      />
    </div>
  )
}

export function HeroHorizontalCue() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <p className="hero-horizontal-cue font-ritual" aria-hidden>
        Horizontal cinematic experience
      </p>
    )
  }

  return (
    <motion.div
      className="hero-horizontal-cue gpu-layer"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring.liquid, delay: 0.2 }}
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
              ease: [0.45, 0.05, 0.25, 1],
            }}
          />
        ))}
        <motion.span
          className="hero-horizontal-scan"
          animate={{ x: ['0%', '210%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }}
        />
      </div>
      <span className="hero-horizontal-label font-ritual">
        Horizontal cinematic experience
      </span>
      <motion.span
        className="hero-horizontal-arrow"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }}
      >
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        <ChevronRight className="h-3.5 w-3.5 -ml-2" strokeWidth={1.5} />
      </motion.span>
    </motion.div>
  )
}

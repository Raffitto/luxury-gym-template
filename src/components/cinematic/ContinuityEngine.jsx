import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

/** Persistent ambient veil — static shadow, no restless drift */
export default function ContinuityEngine() {
  const { scrollYProgress, reduced, memory, temporal } = useCinematicOS()

  const washOpacity = useTransform(scrollYProgress, camera.continuity.lightWash, [
    0.04 + memory.immersion * 0.01,
    0.07 + temporal.lightShift * 0.01,
    0.06,
    0.08 + memory.atmosphereEvolution * 0.015,
  ])
  const gradientY = useTransform(scrollYProgress, [0, 1], ['0%', '42%'])

  if (reduced) return null

  return (
    <div className="continuity-engine continuity-engine--restrained" aria-hidden>
      <motion.div className="continuity-veil gpu-layer" style={{ opacity: washOpacity }} />
      <motion.div className="continuity-spectrum gpu-layer" style={{ y: gradientY }} />
      <div className="continuity-shadow-drift gpu-layer" />
    </div>
  )
}

import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

/** Persistent ambient layers — evolves with session memory */
export default function ContinuityEngine() {
  const { scrollYProgress, reduced, memory, temporal, tierConfig } = useCinematicOS()

  const washOpacity = useTransform(scrollYProgress, camera.continuity.lightWash, [
    0.06 + memory.immersion * 0.02,
    0.11 + temporal.lightShift * 0.02,
    0.09 + memory.immersion * 0.02,
    0.13 + memory.atmosphereEvolution * 0.03,
  ])
  const gradientY = useTransform(scrollYProgress, [0, 1], ['0%', '55%'])

  if (reduced) return null

  return (
    <div className="continuity-engine continuity-engine--intelligent" aria-hidden>
      <motion.div className="continuity-veil gpu-layer" style={{ opacity: washOpacity }} />
      <motion.div className="continuity-spectrum gpu-layer" style={{ y: gradientY }} />
      {tierConfig.shadowDrift ? (
        <div className="continuity-shadow-drift gpu-layer continuity-shadow-drift--alive" />
      ) : (
        <div className="continuity-shadow-drift gpu-layer" />
      )}
    </div>
  )
}

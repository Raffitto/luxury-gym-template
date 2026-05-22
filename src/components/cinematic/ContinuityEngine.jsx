import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

/** Persistent ambient layers — one continuous film strip */
export default function ContinuityEngine() {
  const { scrollYProgress, reduced } = useCinematicOS()

  const washOpacity = useTransform(scrollYProgress, camera.continuity.lightWash, [0.06, 0.11, 0.09, 0.13])
  const gradientY = useTransform(scrollYProgress, [0, 1], ['0%', '55%'])

  if (reduced) return null

  return (
    <div className="continuity-engine" aria-hidden>
      <motion.div className="continuity-veil gpu-layer" style={{ opacity: washOpacity }} />
      <motion.div className="continuity-spectrum gpu-layer" style={{ y: gradientY }} />
      <div className="continuity-shadow-drift gpu-layer" />
    </div>
  )
}

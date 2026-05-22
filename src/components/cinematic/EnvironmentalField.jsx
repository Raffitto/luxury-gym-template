import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

export default function EnvironmentalField() {
  const { energy, reduced, scrollYProgress } = useCinematicOS()

  const washY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '40%', '75%'])

  if (reduced) return null

  const fog = 0.06 + energy * 0.14
  const grain = 0.018 + energy * 0.022
  const bloom = 0.08 + energy * 0.2
  const sweepSpeed = 4.5 - energy * 1.8

  return (
    <div className="environmental-field" aria-hidden>
      <motion.div
        className="env-layer env-fog gpu-layer"
        animate={{ opacity: [fog * 0.9, fog * 1.1, fog * 0.95] }}
        transition={{ duration: camera.breathing.duration, repeat: Infinity, ease: camera.breathing.ease }}
      />
      <motion.div
        className="env-layer env-bloom gpu-layer"
        style={{ opacity: bloom }}
        animate={{ opacity: [bloom * 0.85, bloom, bloom * 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: camera.breathing.ease }}
      />
      <motion.div
        className="env-layer env-sweep gpu-layer"
        animate={{ x: ['-130%', '140%'] }}
        transition={{
          duration: sweepSpeed,
          repeat: Infinity,
          ease: camera.breathing.ease,
          repeatDelay: 1.2,
        }}
      />
      <motion.div className="env-layer env-wash gpu-layer" style={{ y: washY }} />
      <motion.div
        className="env-layer env-grain gpu-layer"
        animate={{ opacity: grain }}
        transition={camera.spring.drift}
      />
      <motion.div
        className="env-layer env-chroma gpu-layer"
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: camera.breathing.ease }}
      />
      <motion.div
        className="env-layer env-breathe gpu-layer"
        animate={{ scale: [1, 1.03, 1], opacity: [0.35, 0.55, 0.38] }}
        transition={{ duration: camera.breathing.duration, repeat: Infinity, ease: camera.breathing.ease }}
      />
    </div>
  )
}

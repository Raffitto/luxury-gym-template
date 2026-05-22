import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

/** Restrained atmosphere — fewer layers, slower breath, no visual noise */
export default function EnvironmentalField() {
  const { energy, reduced, scrollYProgress, tierConfig, temporal, breathing } = useCinematicOS()

  const washY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '28%', '60%'])

  if (reduced) return null

  const tier = tierConfig
  const fog = (0.035 + energy * 0.06 + temporal.fogPhase * 0.02) * tier.fog
  const grain = 0.012 * tier.grain
  const bloom = (0.04 + energy * 0.06 + temporal.lightShift * 0.02) * tier.bloom
  const breathDuration = temporal.breathDuration * (breathing ? 1.08 : 1)
  const showSweep = tier.sweep > 0.2

  return (
    <div className="environmental-field environmental-field--restrained" aria-hidden>
      <motion.div
        className="env-layer env-fog gpu-layer"
        animate={{ opacity: [fog * 0.94, fog, fog * 0.96] }}
        transition={{
          duration: breathDuration,
          repeat: Infinity,
          ease: camera.breathing.ease,
          repeatType: 'mirror',
        }}
      />
      {tier.bloom > 0.35 ? (
        <motion.div
          className="env-layer env-bloom gpu-layer"
          style={{ opacity: bloom }}
          animate={{ opacity: [bloom * 0.92, bloom, bloom * 0.94] }}
          transition={{ duration: breathDuration * 1.1, repeat: Infinity, ease: camera.breathing.ease }}
        />
      ) : null}
      {showSweep ? (
        <motion.div
          className="env-layer env-sweep env-sweep--rare gpu-layer"
          animate={{ x: ['-120%', '130%'] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: camera.breathing.ease,
            repeatDelay: 8,
          }}
        />
      ) : null}
      <motion.div className="env-layer env-wash gpu-layer" style={{ y: washY }} />
      {tier.grain > 0.25 ? (
        <div className="env-layer env-grain env-grain--static gpu-layer" style={{ opacity: grain }} />
      ) : null}
      <motion.div
        className="env-layer env-breathe gpu-layer"
        animate={{ opacity: breathing ? [0.18, 0.28, 0.2] : [0.14, 0.22, 0.16] }}
        transition={{
          duration: breathDuration,
          repeat: Infinity,
          ease: camera.breathing.ease,
          repeatType: 'mirror',
        }}
      />
    </div>
  )
}

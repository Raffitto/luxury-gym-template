import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'

export default function EnvironmentalField() {
  const {
    energy,
    reduced,
    scrollYProgress,
    tierConfig,
    temporal,
    breathing,
    memory,
    deviceTier,
  } = useCinematicOS()

  const washY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '40%', '75%'])

  if (reduced) return null

  const tier = tierConfig
  const evolution = memory.atmosphereEvolution
  const fog = (0.05 + energy * 0.14 + temporal.fogPhase * 0.04) * tier.fog * (1 + evolution * 0.12)
  const grain = (0.016 + energy * 0.02) * tier.grain
  const bloom = (0.07 + energy * 0.18 + temporal.lightShift * 0.04) * tier.bloom
  const sweepSpeed = (5.2 - energy * 1.6) / temporal.sweepBias
  const breathDuration = temporal.breathDuration * (breathing ? 1.15 : 1)

  const showChroma = tier.chroma > 0 && deviceTier !== 'essential'
  const showSweep = tier.sweep > 0.5

  return (
    <div className="environmental-field environmental-field--intelligent" aria-hidden>
      <motion.div
        className="env-layer env-fog gpu-layer"
        animate={{ opacity: [fog * 0.88, fog * 1.08, fog * 0.94] }}
        transition={{
          duration: breathDuration,
          repeat: Infinity,
          ease: camera.breathing.ease,
          repeatType: 'mirror',
        }}
      />
      {tier.bloom > 0 ? (
        <motion.div
          className="env-layer env-bloom gpu-layer"
          style={{ opacity: bloom }}
          animate={{ opacity: [bloom * 0.82, bloom * (1 + temporal.lightShift * 0.08), bloom * 0.9] }}
          transition={{ duration: breathDuration * 0.85, repeat: Infinity, ease: camera.breathing.ease }}
        />
      ) : null}
      {showSweep ? (
        <motion.div
          className="env-layer env-sweep gpu-layer"
          animate={{ x: ['-130%', '140%'] }}
          transition={{
            duration: sweepSpeed,
            repeat: Infinity,
            ease: camera.breathing.ease,
            repeatDelay: 1.4 + temporal.epoch * 0.2,
          }}
        />
      ) : null}
      <motion.div className="env-layer env-wash gpu-layer" style={{ y: washY }} />
      {tier.grain > 0.3 ? (
        <motion.div
          className="env-layer env-grain gpu-layer"
          animate={{ opacity: grain }}
          transition={camera.spring.drift}
        />
      ) : null}
      {showChroma ? (
        <motion.div
          className="env-layer env-chroma gpu-layer"
          animate={{ opacity: [0.03 * tier.chroma, 0.06 * tier.chroma, 0.03 * tier.chroma] }}
          transition={{ duration: breathDuration * 1.1, repeat: Infinity, ease: camera.breathing.ease }}
        />
      ) : null}
      <motion.div
        className="env-layer env-breathe gpu-layer"
        animate={{
          scale: breathing ? [1, 1.04, 1] : [1, 1.025, 1],
          opacity: breathing ? [0.32, 0.58, 0.35] : [0.28, 0.48, 0.3],
        }}
        transition={{
          duration: breathDuration,
          repeat: Infinity,
          ease: camera.breathing.ease,
          repeatType: 'mirror',
        }}
      />
      {deviceTier === 'immersive' ? (
        <motion.div
          className="env-layer env-depth gpu-layer"
          animate={{ opacity: [0.04, 0.09 + evolution * 0.05, 0.05] }}
          transition={{ duration: breathDuration * 1.35, repeat: Infinity, ease: camera.breathing.ease }}
        />
      ) : null}
    </div>
  )
}

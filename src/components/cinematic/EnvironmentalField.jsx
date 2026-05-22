import { motion, useTransform } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { useIsPhone } from '../../hooks/useIsPhone'
import { camera } from '../../motion/camera'

/** Restrained atmosphere — static on handheld for luxury stillness */
export default function EnvironmentalField() {
  const { energy, reduced, scrollYProgress, tierConfig, temporal, breathing } = useCinematicOS()
  const phone = useIsPhone()

  const washY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '24%', '52%'])

  if (reduced) return null

  const tier = tierConfig
  const fog = (0.028 + energy * 0.04 + temporal.fogPhase * 0.012) * tier.fog
  const grain = 0.008 * tier.grain
  const bloom = (0.032 + energy * 0.04 + temporal.lightShift * 0.012) * tier.bloom
  const breathDuration = temporal.breathDuration * (breathing ? 1.05 : 1)
  const showSweep = tier.sweep > 0.2 && !phone

  if (phone) {
    return (
      <div className="environmental-field environmental-field--handheld-static" aria-hidden>
        <div className="env-layer env-fog" style={{ opacity: fog }} />
        <div className="env-layer env-bloom" style={{ opacity: bloom * 0.85 }} />
        <motion.div className="env-layer env-wash" style={{ y: washY }} />
        {tier.grain > 0.2 ? (
          <div className="env-layer env-grain env-grain--static" style={{ opacity: grain }} />
        ) : null}
        <div className="env-layer env-breathe env-breathe--still" style={{ opacity: 0.12 }} />
      </div>
    )
  }

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
        animate={{ opacity: breathing ? [0.14, 0.22, 0.16] : [0.1, 0.16, 0.12] }}
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

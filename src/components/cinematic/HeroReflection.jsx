import { motion, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function HeroReflection({ scrollYProgress }) {
  const reduced = useReducedMotion()
  const sweepOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7], [0.7, 0.35, 0])
  const reflectionY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  if (reduced) return null

  return (
    <div className="hero-reflection-layer" aria-hidden>
      <motion.div
        className="hero-reflection-sweep gpu-layer"
        style={{ opacity: sweepOpacity, y: reflectionY }}
      />
      <motion.div
        className="hero-reflection-gleam gpu-layer"
        animate={{ x: ['-120%', '140%'] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.25, 1],
          repeatDelay: 2.5,
        }}
      />
      <motion.div
        className="hero-reflection-floor gpu-layer"
        style={{ opacity: sweepOpacity }}
        animate={{ opacity: [0.25, 0.45, 0.28] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }}
      />
    </div>
  )
}

import { motion, useSpring, useTransform } from 'framer-motion'

export default function VelocityGlow({ intensity = 0 }) {
  const smooth = useSpring(intensity, { stiffness: 60, damping: 18, mass: 0.8 })
  const opacity = useTransform(smooth, [0, 1], [0.12, 0.42])

  return (
    <motion.div
      className="velocity-glow gpu-layer"
      style={{ opacity }}
      aria-hidden
    />
  )
}

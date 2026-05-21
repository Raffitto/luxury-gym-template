import { motion } from 'framer-motion'
import { variants, transition, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ChamberReveal({
  children,
  className = '',
  delay = 0,
  variant = 'rise',
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={variants[variant] || variants.rise}
      transition={transition.cinematic(0.85, delay)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChamber({ children, className = '', stagger = 0.14 }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={variants.staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  )
}

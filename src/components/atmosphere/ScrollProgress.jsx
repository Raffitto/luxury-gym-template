import { motion, useScroll } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (reduced) return null

  return (
    <>
      <motion.div
        className="scroll-progress scroll-progress--bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
      <motion.div
        className="scroll-progress scroll-progress--glow"
        style={{ scaleX: scrollYProgress, opacity: 0.35 }}
        aria-hidden
      />
    </>
  )
}

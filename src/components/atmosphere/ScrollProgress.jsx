import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-px origin-left bg-[var(--accent)]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}

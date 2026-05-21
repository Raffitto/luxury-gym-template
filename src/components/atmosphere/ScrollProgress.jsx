import { motion, useScroll } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function ScrollProgress() {
  const mobile = useIsMobile()
  const { scrollYProgress } = useScroll()

  if (mobile) return null

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-px origin-left bg-[var(--accent)]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  )
}

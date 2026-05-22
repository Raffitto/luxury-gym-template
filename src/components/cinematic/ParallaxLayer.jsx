import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function ParallaxLayer({
  children,
  speed = 0.15,
  className = '',
  offset = ['start end', 'end start'],
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const lite = reduced || mobile
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed * -40, speed * 40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 0.99])

  if (lite) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`parallax-layer ${className}`.trim()}>
      <motion.div className="parallax-layer-inner" style={{ y, scale }}>
        {children}
      </motion.div>
    </div>
  )
}

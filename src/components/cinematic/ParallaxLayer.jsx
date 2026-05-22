import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useLiquidScroll } from '../../motion/choreography'

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
  const drift = speed * 28
  const y = useLiquidScroll(scrollYProgress, [0, 1], [-drift, drift])
  const scale = useLiquidScroll(scrollYProgress, [0, 0.5, 1], [1.008, 1, 0.998])

  if (lite) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`parallax-layer ${className}`.trim()}>
      <motion.div className="parallax-layer-inner gpu-layer" style={{ y, scale }}>
        {children}
      </motion.div>
    </div>
  )
}

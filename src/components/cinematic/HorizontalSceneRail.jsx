import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useLiquidTransform } from '../../motion/choreography'

export default function HorizontalSceneRail({ children, label, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const xRaw = useTransform(scrollYProgress, [0, 1], ['3%', '-14%'])
  const x = useLiquidTransform(xRaw)

  return (
    <div ref={ref} className={`horizontal-scene-rail ${className}`.trim()}>
      {label ? <p className="horizontal-scene-rail-label font-ritual">{label}</p> : null}
      {reduced ? (
        <div className="horizontal-scene-rail-scroll">{children}</div>
      ) : (
        <motion.div className="horizontal-scene-rail-scroll gpu-layer" style={{ x }}>
          {children}
        </motion.div>
      )}
    </div>
  )
}

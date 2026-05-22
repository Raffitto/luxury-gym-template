import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function HorizontalSceneRail({ children, label, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-18%'])

  return (
    <div ref={ref} className={`horizontal-scene-rail ${className}`.trim()}>
      {label ? <p className="horizontal-scene-rail-label font-ritual">{label}</p> : null}
      {reduced ? (
        <div className="horizontal-scene-rail-scroll">{children}</div>
      ) : (
        <motion.div className="horizontal-scene-rail-scroll" style={{ x }}>
          {children}
        </motion.div>
      )}
    </div>
  )
}

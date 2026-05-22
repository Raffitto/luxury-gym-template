import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useLiquidScroll } from '../../motion/choreography'

export default function FilmContinuum({ children }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const driftX = useLiquidScroll(scrollYProgress, [0, 0.5, 1], ['0%', '0.25%', '-0.2%'])
  const driftY = useLiquidScroll(scrollYProgress, [0, 1], ['0%', '-0.45%'])

  if (reduced) {
    return <div className="film-continuum">{children}</div>
  }

  return (
    <div ref={ref} className="film-continuum">
      <motion.div
        className="film-continuum-track gpu-layer"
        style={{ x: driftX, y: driftY }}
      >
        {children}
      </motion.div>
    </div>
  )
}

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { spring, useLiquidScroll } from '../../motion/choreography'

export default function FilmContinuum({ children, gyro = null }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const driftX = useLiquidScroll(scrollYProgress, [0, 0.5, 1], ['0%', '0.22%', '-0.18%'])
  const driftY = useLiquidScroll(scrollYProgress, [0, 1], ['0%', '-0.4%'])

  if (reduced) {
    return <div className="film-continuum">{children}</div>
  }

  return (
    <div ref={ref} className="film-continuum">
      <motion.div className="film-continuum-track gpu-layer" style={{ x: driftX, y: driftY }}>
        <motion.div
          className="film-continuum-gyro gpu-layer"
          animate={{ x: gyro?.x ?? 0, y: gyro?.y ?? 0 }}
          transition={spring.drift}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

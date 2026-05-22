import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { useLiquidScroll } from '../../motion/choreography'

export default function DepthField({ scrollProgress, hero = false }) {
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  const farY = useLiquidScroll(scrollProgress, [0, 1], [0, hero ? -24 : -12])
  const midY = useLiquidScroll(scrollProgress, [0, 1], [0, hero ? -48 : -22])
  const nearY = useLiquidScroll(scrollProgress, [0, 1], [0, hero ? -12 : -6])

  if (reduced) return null

  if (phone) {
    return (
      <div className="depth-field depth-field--handheld" aria-hidden>
        <div className="depth-plane depth-plane--far" />
        <div className="depth-perspective" />
      </div>
    )
  }

  return (
    <div className="depth-field" aria-hidden>
      <motion.div className="depth-plane depth-plane--far gpu-layer" style={{ y: farY }} />
      <motion.div className="depth-plane depth-plane--mid gpu-layer" style={{ y: midY }} />
      <motion.div className="depth-plane depth-plane--near gpu-layer" style={{ y: nearY }} />
      <div className="depth-perspective" />
    </div>
  )
}

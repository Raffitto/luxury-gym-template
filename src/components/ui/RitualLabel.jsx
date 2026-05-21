import { motion } from 'framer-motion'
import { variants, transition, viewportOnce } from '../../motion/choreography'

export default function RitualLabel({ children, className = '' }) {
  return (
    <motion.p
      className={`font-ritual ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={variants.riseSubtle}
      transition={transition.reveal(0.6)}
    >
      {children}
    </motion.p>
  )
}

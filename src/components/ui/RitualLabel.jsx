import { motion } from 'framer-motion'
import { variants, spring, viewportOnce } from '../../motion/choreography'

export default function RitualLabel({ children, className = '' }) {
  return (
    <motion.p
      className={`font-ritual ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={variants.riseSubtle}
      transition={spring.liquid}
    >
      {children}
    </motion.p>
  )
}

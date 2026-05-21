import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { fadeUp, motionTransition } from '../../utils/motion'

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  id,
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={motionTransition(0.5, delay)}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

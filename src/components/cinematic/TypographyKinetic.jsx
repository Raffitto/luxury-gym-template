import { motion } from 'framer-motion'
import { headlineVariants, ritualVariants } from '../../intelligence/emotionalMotion'
import { spring, viewportOnce } from '../../motion/choreography'
import { useCinematicOS } from '../../context/CinematicOSContext'

export function KineticRitual({ children, className = '' }) {
  const { reduced, energy, memory } = useCinematicOS()
  const bias = memory.transitionBias

  if (reduced) {
    return <p className={`font-ritual ${className}`}>{children}</p>
  }

  return (
    <motion.p
      className={`font-ritual kinetic-ritual ${className}`}
      style={{ '--type-energy': energy }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-6%')}
      variants={ritualVariants(bias)}
    >
      {children}
    </motion.p>
  )
}

export function KineticHeadline({ children, className = '', lines }) {
  const { reduced, memory } = useCinematicOS()
  const bias = memory.transitionBias

  if (reduced) {
    return <h2 className={className}>{children}</h2>
  }

  if (lines) {
    return (
      <h2 className={className}>
        {lines.map((line, i) => (
          <motion.span
            key={line}
            className="kinetic-headline-line block"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce('-5%')}
            variants={headlineVariants(bias)}
            transition={{ ...spring.reveal, delay: i * (0.05 + bias * 0.02) }}
          >
            {line}
          </motion.span>
        ))}
      </h2>
    )
  }

  return (
    <motion.h2
      className={`kinetic-headline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-5%')}
      variants={headlineVariants(bias)}
    >
      {children}
    </motion.h2>
  )
}

export function KineticCopy({ children, className = '', delay = 0.12 }) {
  const { reduced, memory } = useCinematicOS()
  const bias = memory.transitionBias

  if (reduced) {
    return <p className={className}>{children}</p>
  }

  return (
    <motion.p
      className={`kinetic-copy ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-4%')}
      variants={headlineVariants(bias * 0.85)}
      transition={{ ...spring.liquid, delay: delay * (1 - bias * 0.2) }}
    >
      {children}
    </motion.p>
  )
}

export function KineticBlock({ children, className = '' }) {
  const { reduced, memory } = useCinematicOS()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={headlineVariants(memory.transitionBias * 0.75)}
    >
      {children}
    </motion.div>
  )
}

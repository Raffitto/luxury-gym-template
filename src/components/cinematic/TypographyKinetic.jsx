import { motion } from 'framer-motion'
import { camera } from '../../motion/camera'
import { spring, viewportOnce } from '../../motion/choreography'
import { useCinematicOS } from '../../context/CinematicOSContext'

export function KineticRitual({ children, className = '' }) {
  const { reduced, energy } = useCinematicOS()

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
      variants={camera.typography.ritual}
    >
      {children}
    </motion.p>
  )
}

export function KineticHeadline({ children, className = '', lines }) {
  const { reduced } = useCinematicOS()

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
            variants={camera.typography.headlineLine}
            transition={{ ...spring.reveal, delay: i * 0.06 }}
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
      variants={camera.typography.headline}
    >
      {children}
    </motion.h2>
  )
}

export function KineticCopy({ children, className = '', delay = 0.12 }) {
  const { reduced } = useCinematicOS()

  if (reduced) {
    return <p className={className}>{children}</p>
  }

  return (
    <motion.p
      className={`kinetic-copy ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-4%')}
      variants={camera.typography.copy}
      transition={{ ...spring.liquid, delay }}
    >
      {children}
    </motion.p>
  )
}

export function KineticBlock({ children, className = '' }) {
  const { reduced } = useCinematicOS()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={camera.typography.copy}
    >
      {children}
    </motion.div>
  )
}

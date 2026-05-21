import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { magneticHover, transition } from '../../motion/choreography'

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  fullWidth = false,
  icon: Icon,
}) {
  const reduced = useReducedMotion()
  const base =
    variant === 'ghost'
      ? 'btn-magnetic btn-magnetic-ghost'
      : 'btn-magnetic'

  const motionProps = magneticHover(reduced)

  const content = (
    <>
      {children}
      {Icon ? <Icon className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} /> : null}
    </>
  )

  const wrapClass = fullWidth ? 'block w-full' : 'inline-block'

  if (to) {
    return (
      <motion.div {...motionProps} className={wrapClass}>
        <Link to={to} className={`${base} ${fullWidth ? 'w-full' : ''} ${className}`}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
        {...motionProps}
        transition={transition.reveal(0.35)}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...motionProps}
      transition={transition.reveal(0.35)}
    >
      {content}
    </motion.button>
  )
}

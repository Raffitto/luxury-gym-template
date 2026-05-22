import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { magneticHover, magneticThumb, transition } from '../../motion/choreography'
import { useIsPhone } from '../../hooks/useIsPhone'

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
  const mobile = useIsMobile()
  const phone = useIsPhone()
  const base =
    variant === 'ghost'
      ? 'btn-magnetic btn-magnetic-ghost'
      : 'btn-magnetic'

  const motionProps = reduced ? {} : phone ? magneticThumb(reduced) : mobile ? {} : magneticHover(reduced)

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
        <Link to={to} className={`${base} ${fullWidth ? 'w-full' : ''} ${className}`} onClick={onClick}>
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
        className={`${base} ${fullWidth ? 'w-full' : ''} ${className}`}
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

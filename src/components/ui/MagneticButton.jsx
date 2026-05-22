import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { magneticHover, magneticThumb } from '../../motion/choreography'
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

  const motionProps = reduced || phone ? {} : mobile ? {} : magneticHover(reduced)
  const tapProps = reduced || phone ? {} : mobile ? magneticThumb(reduced) : {}

  const content = (
    <>
      {children}
      {Icon ? <Icon className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} /> : null}
    </>
  )

  const wrapClass = fullWidth ? 'block w-full' : 'inline-block'
  const linkClass = `${base} ${fullWidth ? 'w-full' : ''} ${className}`.trim()

  if (to) {
    if (phone || reduced) {
      return (
        <Link to={to} className={`${wrapClass} ${linkClass}`} onClick={onClick}>
          {content}
        </Link>
      )
    }
    return (
      <motion.div {...motionProps} {...tapProps} className={wrapClass}>
        <Link to={to} className={linkClass} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    if (phone || reduced) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {content}
        </a>
      )
    }
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        {...motionProps}
        {...tapProps}
      >
        {content}
      </motion.a>
    )
  }

  if (phone || reduced) {
    return (
      <button type={type} onClick={onClick} className={linkClass}>
        {content}
      </button>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={linkClass}
      {...motionProps}
      {...tapProps}
    >
      {content}
    </motion.button>
  )
}

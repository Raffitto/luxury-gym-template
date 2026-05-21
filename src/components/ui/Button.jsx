import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { hoverTapProps } from '../../utils/motion'

const variants = {
  primary:
    'bg-[var(--color-yellow)] text-black hover:brightness-110 shadow-[0_0_30px_rgba(255,229,0,0.25)]',
  secondary:
    'border border-white/20 bg-white/5 text-white hover:border-[var(--color-yellow)]/60 hover:bg-white/10',
  ghost: 'text-[var(--color-yellow)] hover:text-white',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  type = 'button',
  ariaLabel,
  icon: Icon,
  fullWidth = false,
}) {
  const reduced = useReducedMotion()
  const widthClass = fullWidth ? 'w-full max-w-full' : 'w-full sm:w-auto'
  const classes = `btn-touch inline-flex max-w-full items-center justify-center gap-2 rounded-full font-semibold tracking-wide uppercase transition ${variants[variant]} ${widthClass} ${className}`
  const motionProps = hoverTapProps(reduced)

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      <span className="text-center leading-tight">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  )
}

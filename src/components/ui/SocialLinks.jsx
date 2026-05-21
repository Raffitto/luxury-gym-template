import { motion } from 'framer-motion'
import { activeConfig } from '../../data/activeConfig'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Facebook, Instagram } from './socialIcons'

const items = [
  {
    key: 'instagram',
    href: activeConfig.social.instagram,
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    key: 'facebook',
    href: activeConfig.social.facebook,
    label: 'Facebook',
    Icon: Facebook,
  },
]

const sizeClasses = {
  sm: 'tap-target h-9 w-9 [&_svg]:h-4 [&_svg]:w-4 sm:h-10 sm:w-10',
  md: 'tap-target h-12 w-12 [&_svg]:h-[1.125rem] [&_svg]:w-[1.125rem]',
}

export default function SocialLinks({ size = 'md', className = '' }) {
  const reduced = useReducedMotion()

  return (
    <div
      className={`flex shrink-0 items-center gap-1.5 sm:gap-2 ${className}`}
      role="list"
      aria-label="Social media"
    >
      {items.map(({ key, href, label, Icon }) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          role="listitem"
          aria-label={`${activeConfig.shortName} on ${label}`}
          className={`inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition-colors hover:border-[var(--color-yellow)]/45 hover:bg-[var(--color-yellow)]/10 hover:text-[var(--color-yellow)] ${sizeClasses[size]}`}
          {...(reduced ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.96 } })}
        >
          <Icon aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  )
}

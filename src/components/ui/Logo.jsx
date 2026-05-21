import { activeConfig } from '../../data/activeConfig'

export default function Logo({ className = 'h-8 w-auto max-w-[7.5rem] object-contain sm:max-w-[8.5rem] md:h-9 md:max-w-[9.5rem]' }) {
  return (
    <a href="#hero" className="inline-flex shrink-0 items-center" aria-label={activeConfig.brandName}>
      <img
        src={activeConfig.logo}
        alt={`${activeConfig.brandName} logo`}
        className={className}
      />
    </a>
  )
}

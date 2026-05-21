import { activeConfig } from '../data/activeConfig'
import Logo from './ui/Logo'
import SocialLinks from './ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()
  const { footer, location } = activeConfig

  return (
    <footer className="page-mobile-footer border-t border-white/10 bg-black px-[var(--page-gutter)] py-8 sm:py-10 md:pb-10">
      <div className="mx-auto w-full min-w-0 max-w-7xl space-y-5 sm:space-y-6">
        <Logo className="h-7 w-auto max-w-[6.5rem] object-contain sm:h-8" />
        <p className="max-w-md text-sm leading-relaxed text-[var(--color-gray)]">
          {location.address}
        </p>
        <SocialLinks size="md" />
        {footer.tagline ? (
          <p className="font-display text-sm tracking-[0.12em] text-[var(--color-yellow)] uppercase sm:text-base">
            {footer.tagline}
          </p>
        ) : null}
        <p className="text-xs text-white/45">
          © {year} {activeConfig.brandName}. {footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  )
}

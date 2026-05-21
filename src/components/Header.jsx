import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { scrollToId, whatsappHref } from '../utils/links'
import Logo from './ui/Logo'
import Button from './ui/Button'
import SocialLinks from './ui/SocialLinks'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (href) => {
    const id = href.replace('#', '')
    scrollToId(id)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/[0.92] backdrop-blur-md">
      <div
        className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-[var(--page-gutter)]"
        style={{ minHeight: 'var(--header-h)' }}
      >
        <div className="min-w-0 shrink">
          <Logo className="h-8 w-auto max-w-[6.25rem] object-contain sm:max-w-[7.5rem] md:h-9" />
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {activeConfig.nav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase transition hover:text-[var(--color-yellow)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks size="sm" />
          <Button
            href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
            ariaLabel="Join on WhatsApp"
          >
            {activeConfig.copy.headerJoinCta}
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 lg:hidden">
          <SocialLinks size="sm" />
          <button
            type="button"
            className="tap-target inline-flex items-center justify-center rounded-lg border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[70svh] overflow-y-auto overflow-x-hidden border-t border-white/10 bg-black/95 px-[var(--page-gutter)] py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {activeConfig.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNav(item.href)}
                className="tap-target text-left text-sm font-semibold tracking-[0.14em] text-white/85 uppercase"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p className="text-xs tracking-[0.14em] text-white/50 uppercase">
                {activeConfig.copy.mobileFollowLabel}
              </p>
              <SocialLinks size="md" />
            </div>
            <Button
              href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
              fullWidth
              ariaLabel="Join on WhatsApp"
            >
              {activeConfig.copy.headerJoinCta}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

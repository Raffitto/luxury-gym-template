import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { prepareRouteChange } from '../../utils/preload'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { isGrindBrand } from '../../data/brand'
import { routes } from '../../design-system/tokens'
import MagneticButton from '../ui/MagneticButton'
import MobileNavOverlay from './MobileNavOverlay'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (!open) {
      document.body.classList.remove('nav-locked')
      return undefined
    }
    document.body.classList.add('nav-locked')
    return () => document.body.classList.remove('nav-locked')
  }, [open])

  useLayoutEffect(() => {
    prepareRouteChange()
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const primaryCta = activeConfig.hero.primaryHref
    ? { href: activeConfig.hero.primaryHref }
    : { to: routes.trial }

  return (
    <>
      <header
        className={`site-header ${scrolled || open ? 'site-header--solid' : ''} ${open ? 'site-header--menu-open' : ''}`}
      >
        <div className="site-header-bar chamber-inner">
          <Link
            to={routes.home}
            className="brand-lockup site-header-brand group flex min-w-0 flex-col"
            aria-label={`${activeConfig.brand.name} home`}
          >
            <span className="brand-mark font-display text-[var(--platinum)] uppercase">
              {activeConfig.brand.name}
            </span>
            <span className="brand-descriptor font-ritual">
              {activeConfig.brand.descriptor}
            </span>
          </Link>

          <nav className="site-header-nav-desktop hidden items-center gap-11 lg:flex" aria-label="Primary">
            {activeConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="site-nav-link"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-desktop-cta hidden items-center gap-7 lg:flex">
            <Link
              to={routes.contact}
              className="site-nav-utility font-ritual text-[0.625rem] tracking-[0.22em] text-[var(--ash)] hover:text-[var(--platinum)]"
            >
              {isGrindBrand ? 'Contact' : 'Correspondence'}
            </Link>
            <MagneticButton {...primaryCta}>{activeConfig.hero.primaryCta}</MagneticButton>
          </div>

          <div className="site-header-actions lg:hidden">
            <MagneticButton {...primaryCta} className="site-header-cta">
              {activeConfig.hero.primaryCta}
            </MagneticButton>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              aria-controls="mobile-nav-dialog"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1} /> : <Menu className="h-5 w-5" strokeWidth={1} />}
            </button>
          </div>
        </div>
      </header>

      <MobileNavOverlay open={open} onClose={closeMenu} />
    </>
  )
}

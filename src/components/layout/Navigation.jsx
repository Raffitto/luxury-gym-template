import { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { prepareRouteChange } from '../../utils/preload'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
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

  return (
    <>
      <header
        className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}
      >
        <div className="site-header-bar chamber-inner">
          <Link
            to={routes.home}
            className="brand-lockup group flex min-w-0 flex-col"
            aria-label="AETHERIS home"
          >
            <span className="brand-mark font-display text-[var(--platinum)] uppercase">
              {aetherisConfig.brand.name}
            </span>
            <span className="brand-descriptor font-ritual">
              {aetherisConfig.brand.descriptor}
            </span>
          </Link>

          <nav className="hidden items-center gap-11 lg:flex" aria-label="Primary">
            {aetherisConfig.nav.map((item) => (
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

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to={routes.contact}
              className="site-nav-utility font-ritual text-[0.625rem] tracking-[0.22em] text-[var(--ash)] hover:text-[var(--platinum)]"
            >
              Correspondence
            </Link>
            <MagneticButton to={routes.trial}>{aetherisConfig.hero.primaryCta}</MagneticButton>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-nav-dialog"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1} /> : <Menu className="h-5 w-5" strokeWidth={1} />}
          </button>
        </div>
      </header>

      <MobileNavOverlay open={open} onClose={closeMenu} />
    </>
  )
}

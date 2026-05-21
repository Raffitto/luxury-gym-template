import { useState, useEffect, useCallback } from 'react'
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

  useEffect(() => {
    document.body.classList.toggle('nav-locked', open)
    return () => document.body.classList.remove('nav-locked')
  }, [open])

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
            className="group flex min-w-0 flex-col"
            aria-label="AETHERIS home"
          >
            <span className="font-display text-lg tracking-[0.2em] text-[var(--platinum)] uppercase">
              {aetherisConfig.brand.name}
            </span>
            <span className="font-ritual text-[0.5rem] tracking-[0.32em] text-[var(--ash)] transition group-hover:text-[var(--silver)]">
              {aetherisConfig.brand.descriptor}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {aetherisConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-ritual text-[0.625rem] tracking-[0.2em] transition duration-500 ${
                  location.pathname === item.path
                    ? 'text-[var(--platinum)]'
                    : 'text-[var(--ash)] hover:text-[var(--silver)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              to={routes.contact}
              className="font-ritual text-[0.625rem] tracking-[0.2em] text-[var(--ash)] transition hover:text-[var(--silver)]"
            >
              Contact
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

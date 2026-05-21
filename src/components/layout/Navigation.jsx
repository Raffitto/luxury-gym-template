import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-700 ${
        scrolled || open
          ? 'border-b border-[var(--edge)] bg-[var(--void)]/92 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className="chamber-inner flex items-center justify-between px-[var(--page-gutter)]"
        style={{ minHeight: 'var(--header-h)' }}
      >
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
          className="flex h-12 w-12 items-center justify-center border border-[var(--edge)] text-[var(--platinum)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1} /> : <Menu className="h-5 w-5" strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition.reveal(0.4)}
            className="mobile-nav-overlay lg:hidden"
          >
            <nav
              className="flex min-h-full flex-col justify-between px-[var(--page-gutter)] py-10"
              aria-label="Mobile"
            >
              <div className="space-y-2">
                {aetherisConfig.nav.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition.reveal(0.45, i * 0.05)}
                  >
                    <Link
                      to={item.path}
                      className="mobile-nav-link"
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={transition.reveal(0.45, 0.35)}
                >
                  <Link
                    to={routes.contact}
                    className="mobile-nav-link"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition.reveal(0.5, 0.4)}
                className="space-y-4 border-t border-[var(--edge)] pt-8"
              >
                <p className="font-ritual text-[var(--ash)]">Selective admission · Assessment required</p>
                <MagneticButton to={routes.trial} fullWidth>
                  {aetherisConfig.hero.primaryCta}
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

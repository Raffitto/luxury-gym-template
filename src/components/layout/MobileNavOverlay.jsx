import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { isGrindBrand } from '../../data/brand'
import { routes } from '../../design-system/tokens'
import { prepareRouteChange } from '../../utils/preload'
import MagneticButton from '../ui/MagneticButton'

const overlayEase = [0.22, 1, 0.36, 1]

const linkMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.055, duration: 0.48, ease: overlayEase },
  }),
}

export default function MobileNavOverlay({ open, onClose }) {
  const location = useLocation()

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const onNavigate = () => {
    prepareRouteChange()
    onClose()
  }

  const navItems = [
    ...activeConfig.nav,
    { label: 'Contact', path: routes.contact },
  ]

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: overlayEase }}
        >
          <motion.div
            className="mobile-nav-backdrop"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: overlayEase }}
          />

          <div className="mobile-nav-overlay-inner">
            <header className="mobile-nav-header">
              <span className="font-display text-lg tracking-[0.14em] text-[var(--platinum)] uppercase">
                {activeConfig.brand.name}
              </span>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={onClose}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" strokeWidth={1} />
              </button>
            </header>

            <nav className="mobile-nav-body" aria-label="Mobile">
              <motion.div
                className="mobile-nav-links"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              >
                {navItems.map((item, i) => (
                  <motion.div key={item.path} custom={i} variants={linkMotion}>
                    <Link
                      to={item.path}
                      className="mobile-nav-link"
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                      onClick={onNavigate}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mobile-nav-footer">
                <p className="font-ritual text-[var(--ash)]">
                  {isGrindBrand ? '4.8★ · Mtaileb, Lebanon' : 'Selective admission · Private assessment'}
                </p>
                {activeConfig.hero.primaryHref ? (
                  <MagneticButton href={activeConfig.hero.primaryHref} fullWidth onClick={onNavigate}>
                    {activeConfig.hero.primaryCta}
                  </MagneticButton>
                ) : (
                  <MagneticButton to={routes.trial} fullWidth onClick={onNavigate}>
                    {activeConfig.hero.primaryCta}
                  </MagneticButton>
                )}
              </div>
            </nav>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

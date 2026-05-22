import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import MagneticButton from '../ui/MagneticButton'

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

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12, ease: [0.22, 1, 0.32, 1] }}
          className="mobile-nav-overlay"
        >
          <div className="mobile-nav-header">
            <span className="font-ritual text-[var(--ash)]">Navigation</span>
            <button
              type="button"
              className="mobile-nav-close"
              onClick={onClose}
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" strokeWidth={1} />
            </button>
          </div>

          <nav className="mobile-nav-body" aria-label="Mobile">
            <div className="space-y-1">
              {aetherisConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="mobile-nav-link"
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={routes.contact}
                className="mobile-nav-link"
                onClick={onClose}
              >
                Contact
              </Link>
            </div>

            <div className="mobile-nav-footer">
              <p className="font-ritual text-[var(--ash)]">Selective admission · Assessment required</p>
              <MagneticButton to={routes.trial} fullWidth onClick={onClose}>
                {aetherisConfig.hero.primaryCta}
              </MagneticButton>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

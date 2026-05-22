import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import { prepareRouteChange } from '../../utils/preload'
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

  const onNavigate = () => {
    prepareRouteChange()
    onClose()
  }

  if (typeof document === 'undefined' || !open) return null

  return createPortal(
    <div
      id="mobile-nav-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="mobile-nav-overlay"
    >
      <div className="mobile-nav-header">
          <span className="font-ritual text-[var(--ash)]">{aetherisConfig.brand.name}</span>
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
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={routes.contact}
            className="mobile-nav-link"
            onClick={onNavigate}
          >
            Contact
          </Link>
        </div>

        <div className="mobile-nav-footer">
              <p className="font-ritual text-[var(--ash)]">Selective admission · Private assessment</p>
          <MagneticButton to={routes.trial} fullWidth onClick={onNavigate}>
            {aetherisConfig.hero.primaryCta}
          </MagneticButton>
        </div>
      </nav>
    </div>,
    document.body,
  )
}

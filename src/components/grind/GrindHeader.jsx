import { useState, useEffect, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'

export default function GrindHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const mapsUrl = activeConfig.location?.googleMapsUrl

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useLayoutEffect(() => {
    document.body.classList.toggle('g-menu-open', menuOpen)
    return () => document.body.classList.remove('g-menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = activeConfig.nav.filter((item) => item.path !== routes.home)

  return (
    <>
      <header className={`g-header ${scrolled || menuOpen ? 'g-header--solid' : ''}`}>
        <div className="g-header__bar">
          <Link to={routes.home} className="g-header__logo">
            {activeConfig.brand.name}
          </Link>

          <nav className="g-header__nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="g-header__link"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="g-header__actions">
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--primary g-btn--sm g-header__cta-mobile"
              >
                {activeConfig.location?.directionsLabel || 'Directions'}
              </a>
            ) : null}
            <button
              type="button"
              className="g-header__menu lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="g-menu lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="g-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X strokeWidth={1.5} />
          </button>
          {activeConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="g-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  )
}

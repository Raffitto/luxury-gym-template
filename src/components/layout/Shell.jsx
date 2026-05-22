import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileStickyAccess from './MobileStickyAccess'
import FilmGrain from '../atmosphere/FilmGrain'
import ScrollProgress from '../atmosphere/ScrollProgress'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useIsPhone } from '../../hooks/useIsPhone'
import { ensureCinematicReady } from '../../utils/preload'
import { routes } from '../../design-system/tokens'

export default function Shell() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const phone = useIsPhone()

  useLayoutEffect(() => {
    document.body.classList.remove('nav-locked')
    window.scrollTo(0, 0)
    if (location.pathname === routes.home) ensureCinematicReady()
  }, [location.pathname])

  useLayoutEffect(() => {
    document.body.classList.toggle('aetheris-handheld', phone)
    document.documentElement.classList.toggle('aetheris-native', phone)
  }, [phone])

  return (
    <div className="env-void min-h-screen">
      {!mobile && !reduced ? <FilmGrain /> : null}
      {!reduced && !mobile ? <ScrollProgress /> : null}
      <Navigation />
      <main
        className={`page-with-sticky min-h-screen page-instant ${mobile ? 'page-native' : ''}`}
      >
        <Outlet />
      </main>
      <Footer />
      <MobileStickyAccess />
    </div>
  )
}

import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileStickyAccess from './MobileStickyAccess'
import FilmGrain from '../atmosphere/FilmGrain'
import ScrollProgress from '../atmosphere/ScrollProgress'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Shell() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="env-void min-h-screen">
      {!mobile && !reduced ? <FilmGrain /> : null}
      {!reduced && !mobile ? <ScrollProgress /> : null}
      <Navigation />
      <main key={location.pathname} className="page-with-sticky min-h-screen page-instant">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyAccess />
    </div>
  )
}

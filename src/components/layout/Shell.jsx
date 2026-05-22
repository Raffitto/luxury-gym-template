import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileStickyAccess from './MobileStickyAccess'
import FilmGrain from '../atmosphere/FilmGrain'
import ScrollProgress from '../atmosphere/ScrollProgress'
import { spring } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Shell() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const lite = reduced || mobile

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="env-void min-h-screen">
      {!mobile && !reduced ? <FilmGrain /> : null}
      {!reduced ? <ScrollProgress /> : null}
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: lite ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: spring.liquid }}
          transition={spring.liquid}
          className="page-with-sticky min-h-screen"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileStickyAccess />
    </div>
  )
}

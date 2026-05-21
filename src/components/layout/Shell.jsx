import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileStickyAccess from './MobileStickyAccess'
import FilmGrain from '../atmosphere/FilmGrain'
import ScrollProgress from '../atmosphere/ScrollProgress'
import { transition } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Shell() {
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="env-void min-h-screen">
      <FilmGrain />
      <ScrollProgress />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : -10 }}
          transition={transition.weight(reduced ? 0.35 : 0.7)}
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

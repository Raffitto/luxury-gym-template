import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import { useIsMobile } from '../../hooks/useIsMobile'
import { spring } from '../../motion/choreography'

export default function MobileStickyAccess() {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isMobile || pathname === routes.trial) {
      setVisible(false)
      return undefined
    }

    const heroCta = document.getElementById('hero-primary-cta')

    if (!heroCta) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '0px 0px -15% 0px' },
    )

    observer.observe(heroCta)
    return () => observer.disconnect()
  }, [isMobile, pathname])

  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', visible)
    return () => document.body.classList.remove('has-sticky-cta')
  }, [visible])

  return (
    <AnimatePresence>
      {visible && isMobile ? (
        <motion.div
          key="sticky-cta"
          className="mobile-sticky-access lg:hidden"
          role="complementary"
          aria-label="Request access"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ type: 'spring', stiffness: 98, damping: 36, mass: 1.08 }}
        >
          <Link to={routes.trial} className="btn-magnetic w-full justify-center">
            {aetherisConfig.hero.primaryCta}
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

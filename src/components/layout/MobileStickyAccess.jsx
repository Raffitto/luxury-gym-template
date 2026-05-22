import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'
import { useIsMobile } from '../../hooks/useIsMobile'

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
      { root: null, threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(heroCta)
    return () => observer.disconnect()
  }, [isMobile, pathname])

  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', visible)
    return () => document.body.classList.remove('has-sticky-cta')
  }, [visible])

  if (!isMobile) return null

  return (
    <div
      className={`mobile-sticky-access lg:hidden ${visible ? 'mobile-sticky-access--visible' : ''}`}
      role="complementary"
      aria-label="Request access"
      aria-hidden={!visible}
    >
      <Link to={routes.trial} className="btn-magnetic w-full justify-center">
        {activeConfig.hero.primaryCta}
      </Link>
    </div>
  )
}

import { Link, useLocation } from 'react-router-dom'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'

export default function MobileStickyAccess() {
  const { pathname } = useLocation()

  if (pathname === routes.trial) return null

  return (
    <div className="mobile-sticky-access lg:hidden" role="complementary" aria-label="Request access">
      <Link to={routes.trial} className="btn-magnetic w-full justify-center">
        {aetherisConfig.hero.primaryCta}
      </Link>
    </div>
  )
}

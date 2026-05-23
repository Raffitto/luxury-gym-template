import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GrindHeader from './GrindHeader'
import GrindFooter from './GrindFooter'
import { routes } from '../../design-system/tokens'
import { preloadImage } from '../../utils/preload'
import { imageAssets } from '../../utils/images'

export default function GrindShell() {
  const location = useLocation()

  useLayoutEffect(() => {
    document.body.classList.remove('nav-locked', 'g-menu-open', 'has-sticky-cta')
    window.scrollTo(0, 0)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (location.pathname === routes.home) {
      preloadImage(imageAssets.hero640Webp || imageAssets.hero640)
      preloadImage(imageAssets.hero640)
    }
  }, [location.pathname])

  return (
    <div className="grind-site g-main">
      <GrindHeader />
      <main>
        <Outlet />
      </main>
      <GrindFooter />
    </div>
  )
}

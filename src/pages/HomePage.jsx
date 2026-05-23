import { useLayoutEffect } from 'react'
import { isGrindBrand } from '../data/brand'
import CinematicOS from '../components/cinematic/CinematicOS'
import GrindHomePage from './grind/GrindHomePage'
import { ensureCinematicReady } from '../utils/preload'

export default function HomePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (!isGrindBrand) ensureCinematicReady()
  }, [])

  if (isGrindBrand) return <GrindHomePage />

  return <CinematicOS />
}

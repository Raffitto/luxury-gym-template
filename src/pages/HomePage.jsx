import { useLayoutEffect } from 'react'
import CinematicOS from '../components/cinematic/CinematicOS'
import { ensureCinematicReady } from '../utils/preload'

export default function HomePage() {
  useLayoutEffect(() => {
    ensureCinematicReady()
    window.scrollTo(0, 0)
  }, [])

  return <CinematicOS />
}

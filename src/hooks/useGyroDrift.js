import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useIsMobile } from './useIsMobile'

/** Subtle device tilt drift — luxury interface feel on mobile. */
export function useGyroDrift() {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const [drift, setDrift] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced || !mobile || !window.DeviceOrientationEvent) return undefined

    const onOrientation = (event) => {
      const gamma = event.gamma ?? 0
      const beta = (event.beta ?? 0) - 50
      setDrift({
        x: Math.max(-6, Math.min(6, gamma * 0.12)),
        y: Math.max(-4, Math.min(4, beta * 0.08)),
      })
    }

    window.addEventListener('deviceorientation', onOrientation, true)
    return () => window.removeEventListener('deviceorientation', onOrientation, true)
  }, [reduced, mobile])

  return drift
}

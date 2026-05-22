import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useIsPhone } from './useIsPhone'

/** Subtle handheld tilt — felt, not seen */
export function useGyroDrift() {
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const [drift, setDrift] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced || !phone || !window.DeviceOrientationEvent) return undefined

    const onOrientation = (event) => {
      const gamma = event.gamma ?? 0
      const beta = (event.beta ?? 0) - 50
      setDrift({
        x: Math.max(-2, Math.min(2, gamma * 0.035)),
        y: Math.max(-1.5, Math.min(1.5, beta * 0.025)),
      })
    }

    window.addEventListener('deviceorientation', onOrientation, true)
    return () => window.removeEventListener('deviceorientation', onOrientation, true)
  }, [reduced, phone])

  return drift
}

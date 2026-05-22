import { useEffect, useState } from 'react'
import { detectDeviceCinematicTier, getTierConfig } from '../intelligence/deviceTier'

export function useDeviceCinematicTier() {
  const [tier, setTier] = useState(() => detectDeviceCinematicTier())

  useEffect(() => {
    const update = () => setTier(detectDeviceCinematicTier())
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', update)
    window.addEventListener('resize', update)
    return () => {
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return { tier, config: getTierConfig(tier) }
}

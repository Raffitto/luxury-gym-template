import { useState } from 'react'
import { useSpring, useMotionValueEvent } from 'framer-motion'
import { camera } from '../motion/camera'

/**
 * Calm ↔ energetic environment state with inertia.
 * Fast scroll → higher energy; stillness → cinematic calm.
 */
export function useEnvironmentalEnergy(velocity) {
  const smooth = useSpring(velocity, camera.energy.ramp)
  const [energy, setEnergy] = useState(0)

  useMotionValueEvent(smooth, 'change', (v) => {
    setEnergy((prev) => prev * 0.88 + Math.min(v, 1) * 0.12)
  })

  return energy
}

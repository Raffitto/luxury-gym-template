import { createContext, useContext, useMemo, useRef } from 'react'
import { useScroll } from 'framer-motion'
import { useScrollVelocity } from '../hooks/useScrollVelocity'
import { useEnvironmentalEnergy } from '../hooks/useEnvironmentalEnergy'
import { useGyroDrift } from '../hooks/useGyroDrift'
import { useScenePreload } from '../hooks/useScenePreload'
import { useReducedMotion } from '../hooks/useReducedMotion'

const CinematicOSContext = createContext(null)

export function CinematicOSProvider({ children }) {
  const reduced = useReducedMotion()
  const rootRef = useRef(null)
  const velocity = useScrollVelocity()
  const energy = useEnvironmentalEnergy(velocity)
  const gyro = useGyroDrift()

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  })

  useScenePreload()

  const value = useMemo(
    () => ({
      reduced,
      velocity,
      energy,
      gyro,
      scrollYProgress,
      rootRef,
    }),
    [reduced, velocity, energy, gyro, scrollYProgress],
  )

  return (
    <CinematicOSContext.Provider value={value}>
      <div
        ref={rootRef}
        className="cinematic-os"
        style={{ '--env-energy': energy }}
        data-energy={energy > 0.45 ? 'high' : energy > 0.2 ? 'mid' : 'calm'}
      >
        {children}
      </div>
    </CinematicOSContext.Provider>
  )
}

export function useCinematicOS() {
  const ctx = useContext(CinematicOSContext)
  if (!ctx) {
    throw new Error('useCinematicOS must be used within CinematicOSProvider')
  }
  return ctx
}

export function useCinematicOSOptional() {
  return useContext(CinematicOSContext)
}

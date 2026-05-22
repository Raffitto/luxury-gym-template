import { createContext, useContext, useMemo, useRef } from 'react'
import { useScroll } from 'framer-motion'
import { useGyroDrift } from '../hooks/useGyroDrift'
import { useScenePreload } from '../hooks/useScenePreload'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useAdaptiveIntelligence } from '../hooks/useAdaptiveIntelligence'

const CinematicOSContext = createContext(null)

export function CinematicOSProvider({ children }) {
  const reduced = useReducedMotion()
  const rootRef = useRef(null)
  const gyro = useGyroDrift()

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  })

  const intelligence = useAdaptiveIntelligence(scrollYProgress)

  useScenePreload()

  const value = useMemo(
    () => ({
      reduced,
      gyro,
      scrollYProgress,
      rootRef,
      energy: intelligence.energy,
      velocity: intelligence.velocity,
      idle: intelligence.breathing,
      calm: intelligence.calm,
      aggressive: intelligence.aggressive,
      breathing: intelligence.breathing,
      interactionIntensity: intelligence.interactionIntensity,
      swipeIntensity: intelligence.swipeIntensity,
      sceneDepth: intelligence.sceneDepth,
      rhythm: intelligence.rhythm,
      memory: intelligence.memory,
      deviceTier: intelligence.deviceTier,
      tierConfig: intelligence.tierConfig,
      temporal: intelligence.temporal,
      recordSwipe: intelligence.recordSwipe,
      recordInteraction: intelligence.recordInteraction,
      audio: intelligence.audio,
    }),
    [reduced, gyro, scrollYProgress, intelligence],
  )

  const dataAttrs = {
    'data-energy': intelligence.energy > 0.45 ? 'high' : intelligence.energy > 0.2 ? 'mid' : 'calm',
    'data-tier': intelligence.deviceTier,
    'data-breathing': intelligence.breathing ? 'true' : undefined,
    'data-aggressive': intelligence.aggressive ? 'true' : undefined,
  }

  return (
    <CinematicOSContext.Provider value={value}>
      <div
        ref={rootRef}
        className="cinematic-os cinematic-os--intelligent"
        style={{
          '--env-energy': intelligence.energy,
          '--env-immersion': intelligence.memory.immersion,
          '--env-phase': intelligence.temporal.phase,
          '--env-light': intelligence.temporal.lightShift,
          '--transition-bias': intelligence.memory.transitionBias,
        }}
        {...dataAttrs}
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

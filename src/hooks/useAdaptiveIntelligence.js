import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMotionValueEvent, useSpring } from 'framer-motion'
import { fuseAdaptiveEnergy } from '../intelligence/adaptiveEnergy'
import {
  createCinematicMemory,
  deriveMemoryState,
  updateCinematicMemory,
} from '../intelligence/cinematicMemory'
import { getTemporalState } from '../intelligence/temporalFlow'
import { cinematicAudio } from '../audio/CinematicAudioSystem'
import { camera } from '../motion/camera'
import { useScrollVelocity } from './useScrollVelocity'
import { useDeviceCinematicTier } from './useDeviceCinematicTier'

const IDLE_BREATH_MS = 2800

export function useAdaptiveIntelligence(scrollYProgress) {
  const velocity = useScrollVelocity()
  const { tier, config: tierConfig } = useDeviceCinematicTier()
  const memoryRef = useRef(createCinematicMemory())
  const [memoryState, setMemoryState] = useState(() => deriveMemoryState(memoryRef.current))
  const [idleMs, setIdleMs] = useState(0)
  const [interactionIntensity, setInteractionIntensity] = useState(0)
  const [swipeIntensity, setSwipeIntensity] = useState(0)
  const [rhythm, setRhythm] = useState(0)
  const [sceneDepth, setSceneDepth] = useState(0)
  const [temporal, setTemporal] = useState(() => getTemporalState(0, 0, 0))
  const lastActivityRef = useRef(performance.now())
  const lastRhythmRef = useRef(performance.now())
  const smoothVelocity = useSpring(velocity, camera.energy.ramp)

  const touchActivityRef = useRef(() => {})
  touchActivityRef.current = () => {
    const now = performance.now()
    const delta = now - lastRhythmRef.current
    lastRhythmRef.current = now
    lastActivityRef.current = now

    if (delta > 80 && delta < 4000) {
      const sample = 1 - Math.min(delta / 1200, 1)
      updateCinematicMemory(memoryRef.current, {
        interaction: true,
        rhythmSample: sample,
      })
      setRhythm((r) => r * 0.75 + sample * 0.25)
    }

    setInteractionIntensity((v) => Math.min(1, v * 0.7 + 0.35))
    updateCinematicMemory(memoryRef.current, { interaction: true })
  }

  const recordSwipe = useCallback((vx = 0) => {
    const intensity = Math.min(Math.abs(vx) / 900, 1)
    setSwipeIntensity((s) => Math.max(s * 0.6, intensity))
    updateCinematicMemory(memoryRef.current, { swipeIntensity: intensity, interaction: true })
    touchActivityRef.current()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      lastActivityRef.current = performance.now()
      const y = window.scrollY
      updateCinematicMemory(memoryRef.current, {
        scrollDelta: 1,
        depth: scrollYProgress?.get?.() ?? y / (document.documentElement.scrollHeight || 1),
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollYProgress])

  useEffect(() => {
    const onActivity = () => touchActivityRef.current()
    const events = ['pointerdown', 'touchstart', 'keydown', 'wheel']
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }))
    return () => events.forEach((e) => window.removeEventListener(e, onActivity))
  }, [])

  useEffect(() => {
    let raf = 0
    let lastY = window.scrollY
    let frame = 0
    const phone =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

    const tick = () => {
      frame += 1
      if (phone && frame % 3 !== 0) {
        raf = requestAnimationFrame(tick)
        return
      }
      const now = performance.now()
      setIdleMs(now - lastActivityRef.current)

      const dy = Math.abs(window.scrollY - lastY)
      lastY = window.scrollY
      if (dy > 0) {
        updateCinematicMemory(memoryRef.current, { scrollDelta: dy })
      }

      setInteractionIntensity((v) => v * 0.96)
      setSwipeIntensity((s) => s * 0.94)

      const mem = memoryRef.current
      const depth = scrollYProgress?.get?.() ?? 0
      setSceneDepth(depth)
      updateCinematicMemory(memoryRef.current, { depth, velocity })

      setMemoryState(deriveMemoryState(mem, now))
      setTemporal(getTemporalState(now - mem.startedAt, velocity, deriveMemoryState(mem, now).immersion))

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [scrollYProgress, velocity])

  useMotionValueEvent(smoothVelocity, 'change', (v) => {
    updateCinematicMemory(memoryRef.current, { velocity: v })
  })

  const adaptive = useMemo(() => {
    const breathingMode = idleMs > IDLE_BREATH_MS && velocity < 0.12
    return fuseAdaptiveEnergy({
      velocity,
      idleMs,
      interactionIntensity,
      swipeIntensity,
      sceneDepth,
      rhythm,
      memoryImmersion: memoryState.immersion,
      breathingMode,
    })
  }, [
    velocity,
    idleMs,
    interactionIntensity,
    swipeIntensity,
    sceneDepth,
    rhythm,
    memoryState.immersion,
  ])

  useEffect(() => {
    cinematicAudio.updateReactiveEnergy(adaptive.energy)
  }, [adaptive.energy])

  return useMemo(
    () => ({
      ...adaptive,
      velocity,
      memory: memoryState,
      deviceTier: tier,
      tierConfig,
      temporal,
      recordSwipe,
      recordInteraction: () => touchActivityRef.current(),
      audio: cinematicAudio,
    }),
    [adaptive, velocity, memoryState, tier, tierConfig, temporal, recordSwipe],
  )
}

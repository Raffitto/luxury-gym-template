import { useEffect, useState } from 'react'

function isHandheld() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

/** Smoothed scroll velocity for momentum-reactive atmosphere (0–1 normalized). */
export function useScrollVelocity() {
  const [intensity, setIntensity] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    let lastT = performance.now()
    let raf = 0
    const phone = isHandheld()
    const decay = phone ? 0.9 : 0.82
    const gain = phone ? 0.1 : 0.18
    const divisor = phone ? 14 : 12

    const tick = (now) => {
      const dt = Math.max(now - lastT, 1)
      const dy = Math.abs(window.scrollY - lastY)
      const raw = Math.min(dy / dt / divisor, 1)
      setIntensity((prev) => prev * decay + raw * gain)
      lastY = window.scrollY
      lastT = now
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return intensity
}

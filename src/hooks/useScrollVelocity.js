import { useEffect, useState } from 'react'

/** Smoothed scroll velocity for momentum-reactive atmosphere (0–1 normalized). */
export function useScrollVelocity() {
  const [intensity, setIntensity] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    let lastT = performance.now()
    let raf = 0

    const tick = (now) => {
      const dt = Math.max(now - lastT, 1)
      const dy = Math.abs(window.scrollY - lastY)
      const raw = Math.min(dy / dt / 12, 1)
      setIntensity((prev) => prev * 0.82 + raw * 0.18)
      lastY = window.scrollY
      lastT = now
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return intensity
}

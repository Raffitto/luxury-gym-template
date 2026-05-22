import { useEffect, useRef, useState } from 'react'

/** Pause CSS-driven motion when element leaves viewport */
export function useOffscreenPause(options = {}) {
  const { rootMargin = '20% 0px', threshold = 0.05, enabled = true } = options
  const ref = useRef(null)
  const [offscreen, setOffscreen] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setOffscreen(false)
      return undefined
    }
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setOffscreen(!entry.isIntersecting),
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled, rootMargin, threshold])

  return { ref, offscreen, className: offscreen ? 'is-offscreen' : '' }
}

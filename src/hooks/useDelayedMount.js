import { useEffect, useState } from 'react'

/** Defer heavy cinematic layers until after first paint (mobile perf) */
export function useDelayedMount(delayMs = 850, enabled = true) {
  const [ready, setReady] = useState(!enabled)

  useEffect(() => {
    if (!enabled) {
      setReady(false)
      return undefined
    }
    const t = window.setTimeout(() => setReady(true), delayMs)
    return () => window.clearTimeout(t)
  }, [delayMs, enabled])

  return ready
}

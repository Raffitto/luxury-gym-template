import { useEffect, useState } from 'react'

/** Viewport ≤1023px — aligns with lg breakpoint */
export function useIsMobile() {
  const query = '(max-width: 1023px)'

  const [mobile, setMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return mobile
}

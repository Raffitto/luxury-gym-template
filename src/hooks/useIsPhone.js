import { useEffect, useState } from 'react'

/** Handheld viewport — iPhone-first (≤767px) */
export function useIsPhone() {
  const query = '(max-width: 767px)'

  const [phone, setPhone] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setPhone(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return phone
}

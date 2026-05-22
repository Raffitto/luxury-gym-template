import { useEffect, useRef, useState, useCallback } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useIsPhone } from './useIsPhone'

function prefersReducedData() {
  if (typeof navigator === 'undefined') return false
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (conn?.saveData) return true
  const effective = conn?.effectiveType
  return effective === 'slow-2g' || effective === '2g' || effective === '3g'
}

/** Viewport-gated ambient playback — video only when allowed and available */
export function useAmbientFilm({ enabled = true, allowVideo = false }) {
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const canUseVideo =
    enabled && allowVideo && !reduced && !videoFailed && !(phone && prefersReducedData())

  const play = useCallback(() => {
    const v = videoRef.current
    if (!v || !canUseVideo) return
    v.play().catch(() => setVideoFailed(true))
  }, [canUseVideo])

  const pause = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
  }, [])

  useEffect(() => {
    if (!canUseVideo) return undefined
    const root = containerRef.current
    if (!root) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play()
        else pause()
      },
      { threshold: 0.08, rootMargin: '12% 0px' },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [canUseVideo, play, pause])

  useEffect(() => {
    if (!canUseVideo) pause()
  }, [canUseVideo, pause])

  return {
    containerRef,
    videoRef,
    videoReady,
    videoFailed,
    canUseVideo,
    showVideo: canUseVideo && videoReady,
    onVideoReady: () => setVideoReady(true),
    onVideoError: () => setVideoFailed(true),
    filmOnly: reduced || !canUseVideo,
  }
}

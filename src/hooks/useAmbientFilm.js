import { useEffect, useRef, useState, useCallback } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useIsPhone } from './useIsPhone'
import { useOffscreenPause } from './useOffscreenPause'
import { requestAmbientPlay, releaseAmbientPlay } from '../utils/ambientVideoBus'

function prefersReducedData() {
  if (typeof navigator === 'undefined') return false
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (conn?.saveData) return true
  const effective = conn?.effectiveType
  return effective === 'slow-2g' || effective === '2g' || effective === '3g'
}

/** Viewport-gated ambient playback — one video at a time, poster always visible */
export function useAmbientFilm({
  enabled = true,
  allowVideo = false,
  slot = 'hero',
  preload = 'metadata',
}) {
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const { ref: containerRef, className: visibilityClass } = useOffscreenPause({
    rootMargin: '15% 0px',
    enabled: enabled && !reduced,
  })

  const canUseVideo =
    enabled && allowVideo && !reduced && !videoFailed && !(phone && prefersReducedData())

  const pauseVideo = useCallback(() => {
    const v = videoRef.current
    if (v) {
      v.pause()
      try {
        v.currentTime = 0
      } catch {
        /* ignore */
      }
    }
    releaseAmbientPlay(slot)
  }, [slot])

  const playVideo = useCallback(() => {
    const v = videoRef.current
    if (!v || !canUseVideo) return
    requestAmbientPlay(slot, () => {
      v.play().catch(() => setVideoFailed(true))
    }, pauseVideo)
  }, [canUseVideo, slot, pauseVideo])

  useEffect(() => {
    if (!canUseVideo) {
      pauseVideo()
      return undefined
    }

    const root = containerRef.current
    if (!root) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playVideo()
        else pauseVideo()
      },
      { threshold: 0.12, rootMargin: '10% 0px' },
    )

    observer.observe(root)
    return () => {
      observer.disconnect()
      pauseVideo()
    }
  }, [canUseVideo, playVideo, pauseVideo])

  return {
    containerRef,
    videoRef,
    videoReady,
    videoFailed,
    canUseVideo,
    showVideo: canUseVideo && videoReady,
    visibilityClass,
    dormant: visibilityClass === 'is-offscreen',
    onVideoReady: () => setVideoReady(true),
    onVideoError: () => setVideoFailed(true),
    filmOnly: reduced || !canUseVideo,
    preload: slot === 'hero' ? preload : 'none',
  }
}

import { useEffect } from 'react'
import { getScenePreloadMap, preloadImages } from '../utils/preload'

const SECTION_IDS = ['programs', 'journey', 'facility', 'access']

/** Predictive preload — scenes load before they enter the viewport. */
export function useScenePreload() {
  useEffect(() => {
    const map = getScenePreloadMap()
    const observed = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          if (observed.has(id)) return
          observed.add(id)
          const urls = map[id]
          if (urls?.length) preloadImages(urls)
        })
      },
      { rootMargin: '140% 0px 80% 0px', threshold: 0 },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const programs = document.getElementById('programs')
    if (programs) preloadImages(map.programs)

    return () => observer.disconnect()
  }, [])
}

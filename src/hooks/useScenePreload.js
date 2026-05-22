import { useEffect } from 'react'
import {
  HOME_SCENE_ORDER,
  getScenePreloadMap,
  preloadImages,
  preloadProgramsAfterHero,
  preloadScenesAhead,
} from '../utils/preload'

/** Predictive preload — scenes ready before they enter the viewport. */
export function useScenePreload() {
  useEffect(() => {
    const map = getScenePreloadMap()
    const warmed = new Set()

    const warm = (key, urls) => {
      if (!urls?.length || warmed.has(key)) return
      warmed.add(key)
      preloadImages(urls)
    }

    preloadProgramsAfterHero()
    warm('journey-early', map.journey?.slice(0, 2))
    warm('facility-hero', map.facility?.slice(0, 1))
    preloadScenesAhead(0, 2)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          const idx = HOME_SCENE_ORDER.indexOf(id)
          if (idx < 0) return
          warm(id, map[id])
          preloadScenesAhead(idx, 2)
        })
      },
      { rootMargin: '220% 0px 120% 0px', threshold: 0 },
    )

    HOME_SCENE_ORDER.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

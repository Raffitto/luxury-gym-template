/** Per-scene emotional rhythm — responsive first on handheld */
export const SCENE_EMOTION = {
  hero: 'mystery',
  programs: 'power',
  journey: 'aspiration',
  facility: 'exclusivity',
  access: 'transcendence',
}

export const scenePacing = {
  mystery: {
    revealY: 10,
    ritualY: 5,
    delay: 0.06,
    copyDelay: 0.1,
    stiffness: 88,
    damping: 26,
    mass: 0.9,
    chapterDrift: 0.4,
  },
  power: {
    revealY: 6,
    ritualY: 3,
    delay: 0.03,
    copyDelay: 0.08,
    stiffness: 100,
    damping: 28,
    mass: 0.88,
    chapterDrift: 0.35,
  },
  aspiration: {
    revealY: 8,
    ritualY: 4,
    delay: 0.06,
    copyDelay: 0.12,
    stiffness: 82,
    damping: 24,
    mass: 0.92,
    chapterDrift: 0.38,
  },
  exclusivity: {
    revealY: 5,
    ritualY: 3,
    delay: 0.07,
    copyDelay: 0.14,
    stiffness: 78,
    damping: 26,
    mass: 0.94,
    chapterDrift: 0.32,
  },
  transcendence: {
    revealY: 10,
    ritualY: 5,
    delay: 0.08,
    copyDelay: 0.16,
    stiffness: 72,
    damping: 22,
    mass: 0.96,
    chapterDrift: 0.28,
  },
}

export function pacingForScene(sceneId, { handheld = false } = {}) {
  const emotion = SCENE_EMOTION[sceneId] ?? 'exclusivity'
  const base = scenePacing[emotion]
  if (!handheld) return { emotion, ...base }
  return {
    emotion,
    ...base,
    revealY: base.revealY * 0.45,
    ritualY: base.ritualY * 0.45,
    delay: Math.min(base.delay * 0.35, 0.04),
    copyDelay: Math.min(base.copyDelay * 0.4, 0.08),
    stiffness: Math.round(base.stiffness * 1.15),
    damping: Math.round(base.damping * 0.92),
    mass: base.mass * 0.88,
    chapterDrift: 0,
  }
}

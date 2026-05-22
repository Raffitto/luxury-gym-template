/** Per-scene emotional rhythm — no generic choreography */
export const SCENE_EMOTION = {
  hero: 'mystery',
  programs: 'power',
  journey: 'aspiration',
  facility: 'exclusivity',
  access: 'transcendence',
}

export const scenePacing = {
  mystery: {
    revealY: 12,
    ritualY: 6,
    delay: 0.1,
    copyDelay: 0.18,
    stiffness: 52,
    damping: 24,
    mass: 1.1,
    chapterDrift: 0.55,
  },
  power: {
    revealY: 8,
    ritualY: 4,
    delay: 0.05,
    copyDelay: 0.12,
    stiffness: 64,
    damping: 26,
    mass: 1,
    chapterDrift: 0.7,
  },
  aspiration: {
    revealY: 10,
    ritualY: 5,
    delay: 0.12,
    copyDelay: 0.2,
    stiffness: 46,
    damping: 22,
    mass: 1.12,
    chapterDrift: 0.6,
  },
  exclusivity: {
    revealY: 7,
    ritualY: 4,
    delay: 0.14,
    copyDelay: 0.22,
    stiffness: 42,
    damping: 24,
    mass: 1.15,
    chapterDrift: 0.5,
  },
  transcendence: {
    revealY: 14,
    ritualY: 6,
    delay: 0.16,
    copyDelay: 0.26,
    stiffness: 38,
    damping: 20,
    mass: 1.2,
    chapterDrift: 0.45,
  },
}

export function pacingForScene(sceneId, { handheld = false } = {}) {
  const emotion = SCENE_EMOTION[sceneId] ?? 'exclusivity'
  const base = scenePacing[emotion]
  if (!handheld) return { emotion, ...base }
  return {
    emotion,
    ...base,
    revealY: base.revealY * 0.7,
    ritualY: base.ritualY * 0.75,
    delay: base.delay * 1.3,
    copyDelay: base.copyDelay * 1.25,
    stiffness: Math.round(base.stiffness * 0.82),
    damping: Math.round(base.damping * 1.1),
    mass: base.mass * 1.08,
    chapterDrift: base.chapterDrift * 0.55,
  }
}

import { scenePacing, pacingForScene } from './scenePacing'

const HANDHELD_EASE = [0.22, 1, 0.32, 1]

function transitionFromPacing(pacing, handheld = false) {
  if (handheld) {
    return { duration: 0.14, ease: HANDHELD_EASE }
  }
  return {
    type: 'spring',
    stiffness: pacing.stiffness,
    damping: pacing.damping,
    mass: pacing.mass,
  }
}

function resolvePacing(emotion, sceneId, handheld) {
  if (handheld && sceneId) return pacingForScene(sceneId, { handheld: true })
  return scenePacing[emotion] ?? scenePacing.exclusivity
}

export function headlineVariants(emotion = 'exclusivity', bias = 0.15, sceneId, handheld = false) {
  const pacing = resolvePacing(emotion, sceneId, handheld)
  const y = pacing.revealY + (handheld ? bias : bias * 2)
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...transitionFromPacing(pacing, handheld), delay: pacing.delay },
    },
  }
}

export function ritualVariants(emotion = 'exclusivity', sceneId, handheld = false) {
  const pacing = resolvePacing(emotion, sceneId, handheld)
  return {
    hidden: { opacity: 0, y: pacing.ritualY, letterSpacing: '0.24em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.22em',
      transition: { ...transitionFromPacing(pacing, handheld), delay: pacing.delay * 0.4 },
    },
  }
}

export function copyVariants(emotion = 'exclusivity', bias = 0.1, sceneId, handheld = false) {
  const pacing = resolvePacing(emotion, sceneId, handheld)
  return {
    hidden: { opacity: 0, y: 5 + bias * 2 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...transitionFromPacing(pacing, handheld), delay: pacing.copyDelay },
    },
  }
}

import { scenePacing } from './scenePacing'

function springFromPacing(pacing) {
  return {
    type: 'spring',
    stiffness: pacing.stiffness,
    damping: pacing.damping,
    mass: pacing.mass,
  }
}

export function headlineVariants(emotion = 'exclusivity', bias = 0.15) {
  const pacing = scenePacing[emotion] ?? scenePacing.exclusivity
  const y = pacing.revealY + bias * 2
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...springFromPacing(pacing), delay: pacing.delay, opacity: { duration: 0.7 } },
    },
  }
}

export function ritualVariants(emotion = 'exclusivity') {
  const pacing = scenePacing[emotion] ?? scenePacing.exclusivity
  return {
    hidden: { opacity: 0, y: pacing.ritualY, letterSpacing: '0.26em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.22em',
      transition: { ...springFromPacing(pacing), delay: pacing.delay * 0.5 },
    },
  }
}

export function copyVariants(emotion = 'exclusivity', bias = 0.1) {
  const pacing = scenePacing[emotion] ?? scenePacing.exclusivity
  return {
    hidden: { opacity: 0, y: 6 + bias * 2 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...springFromPacing(pacing),
        delay: pacing.copyDelay,
        opacity: { duration: 0.75 },
      },
    },
  }
}

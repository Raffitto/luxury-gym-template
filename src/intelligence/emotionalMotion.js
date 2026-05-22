import { spring } from '../motion/choreography'

/** Motion psychology — power, discipline, exclusivity, transformation */
export const emotion = {
  power: { type: 'spring', stiffness: 95, damping: 22, mass: 1.05 },
  discipline: { type: 'spring', stiffness: 72, damping: 24, mass: 1.1 },
  exclusivity: { type: 'spring', stiffness: 58, damping: 18, mass: 1.15 },
  transcend: { type: 'spring', stiffness: 48, damping: 16, mass: 1.2 },
}

export function motionForBias(bias = 0.2) {
  if (bias > 0.55) return emotion.power
  if (bias > 0.35) return emotion.discipline
  if (bias > 0.2) return emotion.exclusivity
  return emotion.transcend
}

export function revealTransition(bias = 0.2, delay = 0) {
  const base = motionForBias(bias)
  return { ...base, delay: delay * (1.1 - bias * 0.35) }
}

export function headlineVariants(bias = 0.2) {
  const y = 18 + bias * 14
  const scale = 0.988 - bias * 0.006
  return {
    hidden: { opacity: 0, y, scale },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: revealTransition(bias),
    },
  }
}

export function ritualVariants(bias = 0.2) {
  return {
    hidden: { opacity: 0, y: 8 + bias * 4, letterSpacing: '0.3em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.22em',
      transition: { ...spring.liquid, ...revealTransition(bias, 0.02) },
    },
  }
}

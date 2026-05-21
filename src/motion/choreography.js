import { tokens } from '../design-system/tokens'

const { easing, duration } = tokens

export const ease = {
  cinematic: easing.cinematic,
  reveal: easing.reveal,
  weight: easing.weight,
  magnetic: easing.magnetic,
}

export const transition = {
  cinematic: (d = duration.measured, delay = 0) => ({
    duration: d,
    ease: ease.cinematic,
    delay,
  }),
  reveal: (d = duration.swift, delay = 0) => ({
    duration: d,
    ease: ease.reveal,
    delay,
  }),
  weight: (d = duration.cinematic, delay = 0) => ({
    duration: d,
    ease: ease.weight,
    delay,
  }),
}

export const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  rise: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  riseSubtle: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  scalePresence: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  staggerContainer: (stagger = 0.12, delayChildren = 0.08) => ({
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }),
  lineDraw: {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 },
  },
}

export function viewportOnce(margin = '-12%') {
  return { once: true, margin, amount: 0.2 }
}

export function magneticHover(reduced) {
  if (reduced) return {}
  return {
    whileHover: { scale: 1.015, y: -2 },
    whileTap: { scale: 0.985, y: 0 },
    transition: transition.reveal(0.35),
  }
}

export function parallaxY(scrollY, range, offset = 0) {
  return offset + scrollY * range
}

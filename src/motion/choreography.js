import { useSpring, useTransform } from 'framer-motion'
import { tokens } from '../design-system/tokens'

const { easing, duration } = tokens

export const ease = {
  cinematic: easing.cinematic,
  reveal: easing.reveal,
  weight: easing.weight,
  magnetic: easing.magnetic,
  liquid: [0.25, 0.8, 0.35, 1],
  drift: [0.45, 0.05, 0.25, 1],
  inevitable: [0.33, 0.68, 0.24, 1],
}

/** Spring presets — liquid inevitability */
export const spring = {
  liquid: { type: 'spring', stiffness: 68, damping: 26, mass: 1.1 },
  reveal: { type: 'spring', stiffness: 54, damping: 24, mass: 1.12 },
  glide: { type: 'spring', stiffness: 46, damping: 22, mass: 1.14 },
  drift: { type: 'spring', stiffness: 36, damping: 20, mass: 1.16 },
  scroll: { type: 'spring', stiffness: 34, damping: 24, mass: 1.2 },
  snap: { type: 'spring', stiffness: 180, damping: 36, mass: 1 },
  tap: { type: 'spring', stiffness: 240, damping: 32, mass: 0.82 },
  sticky: { type: 'spring', stiffness: 150, damping: 30, mass: 1 },
}

export const drag = {
  elastic: 0.1,
  momentum: 0.2,
  transition: { power: 0.14, timeConstant: 420 },
}

/** Thumb swipe — soft resistance, weighted settle */
export const dragThumb = {
  elastic: 0.04,
  momentum: 0.09,
  transition: { power: 0.07, timeConstant: 620 },
}

export const springThumb = {
  snap: { type: 'spring', stiffness: 112, damping: 38, mass: 1.1 },
  tap: { type: 'spring', stiffness: 200, damping: 34, mass: 0.9 },
}

export function magneticThumb(reduced) {
  if (reduced) return {}
  return {
    whileTap: { scale: 0.997 },
    transition: springThumb.tap,
  }
}

export const transition = {
  cinematic: (d = duration.measured, delay = 0) => ({
    duration: d,
    ease: ease.liquid,
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
  liquid: (delay = 0) => ({ ...spring.liquid, delay }),
  glide: (delay = 0) => ({ ...spring.glide, delay }),
}

export const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: spring.liquid,
    },
  },
  rise: {
    hidden: { opacity: 0, y: 32, scale: 0.988 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: spring.reveal,
    },
  },
  riseSubtle: {
    hidden: { opacity: 0, y: 14, scale: 0.994 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: spring.liquid,
    },
  },
  scalePresence: {
    hidden: { opacity: 0, scale: 0.982 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: spring.reveal,
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: spring.liquid,
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: spring.liquid,
    },
  },
  staggerContainer: (stagger = 0.07, delayChildren = 0.04) => ({
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }),
  lineDraw: {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: spring.glide,
    },
  },
}

export function viewportOnce(margin = '-8%') {
  return { once: true, margin, amount: 0.15 }
}

export function viewportHandheld() {
  return { once: true, margin: '-14%', amount: 0.1 }
}

export function magneticHover(reduced) {
  if (reduced) return {}
  return {
    whileHover: { scale: 1.004, y: -0.5 },
    whileTap: { scale: 0.994, y: 0 },
    transition: spring.tap,
  }
}

/** Smooth scroll-linked values — camera drift, not snapping elements */
export function useLiquidTransform(motionValue, config = spring.drift) {
  return useSpring(motionValue, config)
}

export function useLiquidScroll(scrollProgress, inputRange, outputRange, config = spring.scroll) {
  const raw = useTransform(scrollProgress, inputRange, outputRange)
  return useSpring(raw, config)
}

export function parallaxY(scrollY, range, offset = 0) {
  return offset + scrollY * range
}

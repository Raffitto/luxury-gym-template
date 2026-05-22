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
  instant: [0.22, 1, 0.32, 1],
}

/** Responsive first — snappy defaults */
export const spring = {
  liquid: { type: 'spring', stiffness: 120, damping: 28, mass: 0.85 },
  reveal: { type: 'spring', stiffness: 100, damping: 26, mass: 0.9 },
  glide: { type: 'spring', stiffness: 88, damping: 24, mass: 0.92 },
  drift: { type: 'spring', stiffness: 72, damping: 22, mass: 0.95 },
  /** Scroll-linked — follows thumb immediately */
  scroll: { type: 'spring', stiffness: 520, damping: 48, mass: 0.55 },
  snap: { type: 'spring', stiffness: 280, damping: 32, mass: 0.88 },
  tap: { type: 'spring', stiffness: 380, damping: 30, mass: 0.7 },
  sticky: { type: 'spring', stiffness: 220, damping: 30, mass: 0.88 },
}

export const drag = {
  elastic: 0.12,
  momentum: 0.24,
  transition: { power: 0.2, timeConstant: 280 },
}

export const dragThumb = {
  elastic: 0.08,
  momentum: 0.18,
  transition: { power: 0.16, timeConstant: 320 },
}

export const springThumb = {
  snap: { type: 'spring', stiffness: 240, damping: 34, mass: 0.9 },
  tap: { type: 'spring', stiffness: 320, damping: 30, mass: 0.75 },
}

export function magneticThumb(reduced) {
  if (reduced) return {}
  return {
    whileTap: { scale: 0.996 },
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
  instant: { duration: 0.18, ease: ease.instant },
}

export const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.22, ease: ease.instant },
    },
  },
  rise: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring.reveal,
    },
  },
  riseSubtle: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring.glide,
    },
  },
  scalePresence: {
    hidden: { opacity: 0, scale: 0.994 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: spring.reveal,
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: spring.glide,
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: spring.glide,
    },
  },
  staggerContainer: (stagger = 0.05, delayChildren = 0.02) => ({
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

export function viewportOnce(margin = '-6%') {
  return { once: true, margin, amount: 0.12 }
}

export function viewportHandheld() {
  return { once: true, margin: '-4%', amount: 0.08 }
}

export function magneticHover(reduced) {
  if (reduced) return {}
  return {
    whileHover: { scale: 1.003, y: -0.5 },
    whileTap: { scale: 0.995, y: 0 },
    transition: spring.tap,
  }
}

export function useLiquidTransform(motionValue, config = spring.drift) {
  return useSpring(motionValue, config)
}

/** Scroll-linked — high-stiffness spring tracks thumb immediately */
export function useLiquidScroll(scrollProgress, inputRange, outputRange, config = spring.scroll) {
  const raw = useTransform(scrollProgress, inputRange, outputRange)
  return useSpring(raw, config)
}

export function parallaxY(scrollY, range, offset = 0) {
  return offset + scrollY * range
}

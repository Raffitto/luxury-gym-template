import { spring } from './choreography'

/** Unified cinematic camera language — shared across the operating system */
export const camera = {
  spring: {
    drift: spring.drift,
    glide: spring.glide,
    reveal: spring.reveal,
    liquid: spring.liquid,
  },

  drift: {
    pageX: ['0%', '0.1%', '-0.06%', '0.04%'],
    pageY: ['0%', '-0.14%', '-0.2%'],
    chapterY: [0, -5, -10],
    depthScale: [1.001, 1, 0.999],
  },

  breathing: {
    duration: 12,
    ease: [0.42, 0, 0.2, 1],
  },

  energy: {
    calm: 0.22,
    active: 0.85,
    ramp: { stiffness: 42, damping: 20, mass: 0.9 },
  },

  typography: {
    ritual: {
      hidden: { opacity: 0, y: 10, letterSpacing: '0.32em' },
      visible: {
        opacity: 1,
        y: 0,
        letterSpacing: '0.22em',
        transition: spring.liquid,
      },
    },
    headline: {
      hidden: { opacity: 0, y: 26, scale: 0.986 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: spring.reveal,
      },
    },
    headlineLine: {
      hidden: { opacity: 0, y: 18, rotateX: 8 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: spring.reveal,
      },
    },
    copy: {
      hidden: { opacity: 0, y: 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: spring.liquid,
      },
    },
  },

  continuity: {
    ambientShift: ['0%', '35%', '68%', '100%'],
    lightWash: [0, 0.35, 0.68, 1],
  },

  intelligence: {
    idleBreathMs: 2200,
    energyDecay: 0.88,
  },
}

export function chapterDepth(index) {
  return 0.92 + index * 0.04
}

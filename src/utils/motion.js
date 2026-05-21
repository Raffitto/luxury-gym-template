/** @deprecated Use ../motion/choreography.js — re-exported for compatibility */
export {
  ease as easePremium,
  variants,
  transition as motionTransition,
  magneticHover as hoverTapProps,
} from '../motion/choreography'

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

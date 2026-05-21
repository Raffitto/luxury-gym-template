/** Shared motion presets — keep animations light for mobile/Android. */
export const easePremium = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function motionTransition(duration = 0.55, delay = 0) {
  return { duration, ease: easePremium, delay }
}

export function hoverTapProps(reduced) {
  if (reduced) return {}
  return {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  }
}

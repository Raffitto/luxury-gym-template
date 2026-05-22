export const CINEMATIC_TIERS = ['essential', 'refined', 'immersive']

const TIER_CONFIG = {
  essential: {
    maxLayers: 2,
    bloom: 0.4,
    fog: 0.55,
    grain: 0.35,
    sweep: 0,
    chroma: 0,
    gyro: false,
    cameraDrift: 0.5,
    shadowDrift: false,
  },
  refined: {
    maxLayers: 3,
    bloom: 0.5,
    fog: 0.65,
    grain: 0.45,
    sweep: 0,
    chroma: 0,
    gyro: true,
    cameraDrift: 0.62,
    shadowDrift: false,
  },
  immersive: {
    maxLayers: 4,
    bloom: 0.62,
    fog: 0.75,
    grain: 0.5,
    sweep: 0.25,
    chroma: 0,
    gyro: true,
    cameraDrift: 0.72,
    shadowDrift: false,
  },
}

export function detectDeviceCinematicTier() {
  if (typeof window === 'undefined') return 'refined'

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'essential'
  }

  const memory = navigator.deviceMemory ?? 4
  const cores = navigator.hardwareConcurrency ?? 4
  const mobile = window.matchMedia('(max-width: 768px)').matches
  const conn = navigator.connection?.effectiveType
  const slowNet = conn === 'slow-2g' || conn === '2g' || conn === '3g'
  const saveData = navigator.connection?.saveData === true

  const phone = window.matchMedia('(max-width: 767px)').matches

  if (saveData || slowNet || (phone && memory <= 4)) return 'essential'
  if (!phone && memory >= 8 && cores >= 8) return 'immersive'
  if (phone) return 'essential'
  return 'refined'
}

export function getTierConfig(tier) {
  return TIER_CONFIG[tier] ?? TIER_CONFIG.refined
}

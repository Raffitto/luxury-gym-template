export const CINEMATIC_TIERS = ['essential', 'refined', 'immersive']

const TIER_CONFIG = {
  essential: {
    maxLayers: 3,
    bloom: 0.55,
    fog: 0.7,
    grain: 0.45,
    sweep: 0.6,
    chroma: 0,
    gyro: false,
    cameraDrift: 0.65,
    shadowDrift: false,
  },
  refined: {
    maxLayers: 5,
    bloom: 0.85,
    fog: 0.9,
    grain: 0.75,
    sweep: 0.85,
    chroma: 0.7,
    gyro: true,
    cameraDrift: 1,
    shadowDrift: true,
  },
  immersive: {
    maxLayers: 6,
    bloom: 1,
    fog: 1,
    grain: 1,
    sweep: 1,
    chroma: 1,
    gyro: true,
    cameraDrift: 1.12,
    shadowDrift: true,
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

  if (saveData || slowNet || (mobile && memory <= 3)) return 'essential'
  if (!mobile && memory >= 8 && cores >= 8) return 'immersive'
  if (mobile && memory >= 6) return 'refined'
  return mobile ? 'essential' : 'refined'
}

export function getTierConfig(tier) {
  return TIER_CONFIG[tier] ?? TIER_CONFIG.refined
}

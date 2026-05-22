/**
 * Active experience config — switches by VITE_BRAND.
 * Default: AETHERIS (cinematic luxury showcase).
 * GRIND: VITE_BRAND=grind (grind-gym-lb build).
 */
import { isGrindBrand } from './brand'
import { aetherisConfig } from './aetherisConfig'
import { grindGymLbConfig } from './clients/grindGymLbConfig'

function resolveActiveConfig() {
  try {
    if (isGrindBrand) return grindGymLbConfig
    return aetherisConfig
  } catch (err) {
    console.warn('[activeConfig] fallback to Grind Gym config', err)
    return grindGymLbConfig
  }
}

export const activeConfig = resolveActiveConfig()

// Legacy gym template:
// export { ufgConfig as activeConfig } from './clients/ufgConfig'

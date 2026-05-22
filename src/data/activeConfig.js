/**
 * Active experience config — switches by VITE_BRAND.
 * Default: AETHERIS (cinematic luxury showcase).
 * GRIND: VITE_BRAND=grind (grind-gym-lb build).
 */
import { isGrindBrand } from './brand'
import { aetherisConfig } from './aetherisConfig'
import { grindGymLbConfig } from './clients/grindGymLbConfig'

export const activeConfig = isGrindBrand ? grindGymLbConfig : aetherisConfig

// Legacy gym template:
// export { ufgConfig as activeConfig } from './clients/ufgConfig'

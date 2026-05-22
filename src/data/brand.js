/** Active brand slug — set via VITE_BRAND (default: aetheris) */
export const BRAND = import.meta.env.VITE_BRAND || 'aetheris'
export const isGrindBrand = BRAND === 'grind'

import { photos } from '../utils/images'

export const landingConfig = {
  programs: {
    ritual: 'II · Disciplines',
    headline: 'Signature disciplines.',
    subline: 'Five protocols. One house.',
  },

  transformation: {
    ritual: 'III · Evolution',
    headline: 'The inward arc.',
    subline: 'Threshold to sovereignty — each phase a revision.',
    phases: [
      {
        phase: '01',
        title: 'Threshold',
        body: 'Private assessment. Biometric truth. Measurement only.',
        image: { id: photos.sprint, alt: 'Threshold — athletic screening under editorial light' },
      },
      {
        phase: '02',
        title: 'Architecture',
        body: 'Bespoke programming under architect guidance. Load, neural drive, recovery in sync.',
        image: { id: photos.performance, alt: 'Architecture — structural strength chamber' },
      },
      {
        phase: '03',
        title: 'Dominion',
        body: 'Controlled obsession becomes precision. Identity revision through ritual.',
        image: { id: photos.combat, alt: 'Dominion — combat flow conditioning' },
      },
      {
        phase: '04',
        title: 'Sovereignty',
        body: 'Full house access. Global chambers. The future version operational.',
        image: { id: photos.luxuryGym, alt: 'Sovereignty — luxury performance chamber' },
      },
    ],
  },

  facility: {
    ritual: 'IV · Chambers',
    headline: 'Atmosphere as discipline.',
    subline: 'Dark luxury. Neural focus. Controlled obsession.',
    features: [
      { label: 'Volumetric light', detail: 'Low lux · high contrast' },
      { label: 'Acoustic isolation', detail: 'Neural focus chambers' },
      { label: 'Recovery suite', detail: 'Cryo · hyperbaric · thermal' },
      { label: 'Global network', detail: '12 sovereign chambers' },
    ],
    image: { id: photos.darkGym, alt: 'Chamber interior — cinematic performance space' },
    gallery: [
      { id: photos.luxuryGym, alt: 'Strength floor — editorial composition' },
      { id: photos.strengthFloor, alt: 'Free-weight floor — premium lit' },
      { id: photos.chamberTokyo, alt: 'Tokyo chamber — atmospheric depth' },
    ],
  },
}

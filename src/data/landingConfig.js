import { photos } from '../utils/images'

export const landingConfig = {
  programs: {
    ritual: 'Kinetic Architecture',
    headline: 'Signature programs.',
    subline: 'Five disciplines. One continuum.',
  },

  transformation: {
    ritual: 'Evolution Protocol',
    headline: 'The journey inward.',
    subline: 'Threshold to sovereignty — each phase a recalibration.',
    phases: [
      {
        phase: '01',
        title: 'Threshold',
        body: 'Private assessment. Biometric truth. No presentation — only measurement.',
        image: { id: photos.sprint, alt: 'Threshold phase — explosive athletic screening' },
      },
      {
        phase: '02',
        title: 'Architecture',
        body: 'Bespoke programming under architect guidance. Load, neural drive, recovery in sync.',
        image: { id: photos.performance, alt: 'Architecture phase — structural strength training' },
      },
      {
        phase: '03',
        title: 'Dominion',
        body: 'Controlled obsession becomes precision. Identity revision through ritual.',
        image: { id: photos.combat, alt: 'Dominion phase — combat flow conditioning' },
      },
      {
        phase: '04',
        title: 'Sovereignty',
        body: 'Full continuum access. Global chambers. The future version operational.',
        image: { id: photos.luxuryGym, alt: 'Sovereignty phase — luxury performance chamber' },
      },
    ],
  },

  facility: {
    ritual: 'Chamber Immersion',
    headline: 'Atmosphere as discipline.',
    subline: 'Dark luxury. Neural focus. Controlled obsession.',
    features: [
      { label: 'Volumetric lighting', detail: 'Low lux · high contrast' },
      { label: 'Acoustic isolation', detail: 'Neural focus chambers' },
      { label: 'Recovery continuum', detail: 'Cryo · hyperbaric · thermal' },
      { label: 'Global network', detail: '12 sovereign chambers' },
    ],
    image: { id: photos.darkGym, alt: 'Dark luxury gym interior — cinematic facility' },
    gallery: [
      { id: photos.luxuryGym, alt: 'Premium strength floor' },
      { id: photos.strengthFloor, alt: 'Elite free-weight performance floor' },
      { id: photos.chamberTokyo, alt: 'Tokyo atmospheric chamber' },
    ],
  },
}

import { photos } from '../utils/images'

export const landingConfig = {
  programs: {
    ritual: 'Sequence 02 · Kinetic Architecture',
    headline: 'Signature training programs.',
    subline: 'Five engineered disciplines. One continuum. Swipe the ritual.',
  },

  transformation: {
    ritual: 'Sequence 03 · Evolution Protocol',
    headline: 'The transformation journey.',
    subline: 'From threshold to sovereignty — each phase recalibrates identity.',
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
    ritual: 'Sequence 04 · Chamber Immersion',
    headline: 'Where atmosphere becomes discipline.',
    subline: 'Dark luxury interiors engineered for psychological recalibration.',
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

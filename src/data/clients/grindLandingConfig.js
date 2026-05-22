import { photos } from '../../utils/images'

export const grindLandingConfig = {
  programs: {
    ritual: 'II · Training Zones',
    headline: 'Four zones. One serious floor.',
    subline: 'Machines, turf, cardio, and open weight — swipe to explore.',
  },

  transformation: {
    ritual: 'III · Atmosphere',
    headline: 'Train in a cinematic room.',
    subline: 'Mirrors, LED geometry, and dark athletic light — the vibe members rate 4.8★.',
    phases: [
      {
        phase: '01',
        title: 'LED Ceiling',
        body: 'Geometric white LED strips on matte concrete — high contrast, modern, focused.',
        image: {
          id: photos.facility,
          alt: 'Geometric LED ceiling — Grind Gym Mtaileb',
        },
      },
      {
        phase: '02',
        title: 'Turf Lane',
        body: 'Marked functional lane with mirrors for sled work, plyos, and athletic drills.',
        image: {
          id: photos.performance,
          alt: 'Turf functional training lane',
        },
      },
      {
        phase: '03',
        title: 'Strength Lines',
        body: 'Premium machine rows and open floor layout along mirrored walls.',
        image: {
          id: photos.strengthFloor,
          alt: 'Strength machines and gym floor',
        },
      },
      {
        phase: '04',
        title: 'Cardio Light',
        body: 'Window-lined cardio with sunset views — conditioning with atmosphere.',
        image: {
          id: photos.metabolic,
          alt: 'Cardio and interior lighting — Grind Gym',
        },
      },
    ],
  },

  facility: {
    ritual: 'III · Facility',
    headline: 'Facility built for performance.',
    subline: 'Black/grey interior, geometric LEDs, mirrors, turf, and premium machines.',
    features: [
      { label: 'LED geometry', detail: 'Ceiling light architecture' },
      { label: 'Mirror walls', detail: 'Form · pacing · focus' },
      { label: 'Turf lane', detail: 'Functional · athletic work' },
      { label: 'Premium machines', detail: 'Strength + cardio zones' },
    ],
    image: {
      id: photos.facility,
      alt: 'Grind Gym — geometric LED ceiling and strength floor',
    },
    gallery: [
      { id: photos.facility, alt: 'Main floor — LED ceiling and machines' },
      { id: photos.performance, alt: 'Turf lane with mirrors' },
      { id: photos.darkGym, alt: 'Dark athletic gym lighting' },
    ],
  },
}

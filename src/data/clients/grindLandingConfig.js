import { photos } from '../../utils/images'

export const grindLandingConfig = {
  programs: {
    ritual: 'II · Training',
    headline: 'Training that hits like a reel.',
    subline: 'Five programs. One standard — elite output.',
  },

  transformation: {
    ritual: 'III · Results',
    headline: 'Proof on the floor.',
    subline: 'From first rep to transformation — documented, real, loud.',
    phases: [
      {
        phase: '01',
        title: 'Ignite',
        body: 'Baseline testing. Movement screen. You meet the coaches and the room.',
        image: { id: photos.sprint, alt: 'Ignite — athletic assessment under gym light' },
      },
      {
        phase: '02',
        title: 'Build',
        body: 'Custom blocks for strength, engine, and composition — tracked every week.',
        image: { id: photos.performance, alt: 'Build — progressive strength work' },
      },
      {
        phase: '03',
        title: 'Surge',
        body: 'Intensity peaks. Community accountability. PRs start stacking.',
        image: { id: photos.combat, alt: 'Surge — combat conditioning intensity' },
      },
      {
        phase: '04',
        title: 'Elite',
        body: 'You become the athlete your feed pretends to be — consistent, visible, undeniable.',
        image: { id: photos.luxuryGym, alt: 'Elite — transformation on the GRIND floor' },
      },
    ],
  },

  facility: {
    ritual: 'IV · Culture',
    headline: 'The room is the brand.',
    subline: 'Smoke, chrome, red light, and a community that moves together.',
    features: [
      { label: 'Premium iron', detail: 'Rogue · elite free weights' },
      { label: 'Cinematic lighting', detail: 'Contrast · shadow · focus' },
      { label: 'Combat zone', detail: 'Bags · mats · flow lanes' },
      { label: 'Community wall', detail: 'Wins · PRs · member spotlight' },
    ],
    image: { id: photos.darkGym, alt: 'GRIND floor — dark chrome gym atmosphere' },
    gallery: [
      { id: photos.luxuryGym, alt: 'Strength floor — GRIND GYM LB' },
      { id: photos.strengthFloor, alt: 'Free-weight zone under dramatic light' },
      { id: photos.combat, alt: 'Combat conditioning — athlete focus' },
    ],
  },
}

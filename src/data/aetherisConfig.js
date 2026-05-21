import { photos } from '../utils/images'

/** AETHERIS — fictional luxury performance continuum */
export const aetherisConfig = {
  brand: {
    name: 'AETHERIS',
    descriptor: 'Performance Continuum',
    mantra: 'Become the architecture of yourself.',
    founding: 'Est. MMXXIV · Geneva Protocol',
  },

  seo: {
    title: 'AETHERIS | The Performance Continuum',
    description:
      'A private order for identity evolution, physical mastery, and controlled obsession. Beyond the category of gym.',
  },

  contact: {
    email: 'access@aetheris.continuum',
    phone: '+41 22 000 0000',
    whatsapp: '41220000000',
    whatsappMessage:
      'I am requesting access to the AETHERIS continuum. I understand admission is selective.',
  },

  nav: [
    { label: 'Continuum', path: '/' },
    { label: 'Kinetic', path: '/classes' },
    { label: 'Architects', path: '/trainers' },
    { label: 'Access', path: '/membership' },
    { label: 'Chambers', path: '/locations' },
    { label: 'Doctrine', path: '/about' },
  ],

  hero: {
    ritual: 'Sequence 01 · Initiation',
    headline: ['You were', 'not built', 'to remain.'],
    subline:
      'A private order for those who treat the body as architecture and discipline as identity.',
    primaryCta: 'Request Access',
    secondaryCta: 'Enter the Doctrine',
    image: {
      id: photos.hero,
      alt: 'Elite athlete training under dramatic light in a dark performance chamber',
    },
  },

  philosophy: {
    ritual: 'Sequence 02 · Doctrine',
    headline: 'Identity is engineered.',
    image: {
      id: photos.combat,
      alt: 'Combat conditioning — controlled aggression in low light',
    },
    pillars: [
      {
        index: 'I',
        title: 'Evolution',
        body: 'You do not train. You undergo revision. Every session is a recalibration of who you are becoming.',
      },
      {
        index: 'II',
        title: 'Discipline',
        body: 'Obsession, when controlled, becomes precision. We architect ritual, not routine.',
      },
      {
        index: 'III',
        title: 'Presence',
        body: 'The body is the only instrument that cannot be replaced. Mastery begins with reverence.',
      },
    ],
  },

  performance: {
    ritual: 'Sequence 03 · Kinetic',
    headline: 'Controlled aggression.',
    subline: 'Movement architecture engineered for momentum, power transfer, and neurological dominance.',
    disciplines: [
      { name: 'Structural Load', metric: 'Force vectoring' },
      { name: 'Neural Drive', metric: 'CNS optimization' },
      { name: 'Metabolic Edge', metric: 'Threshold expansion' },
      { name: 'Combat Flow', metric: 'Kinetic chains' },
    ],
    image: {
      id: photos.performance,
      alt: 'Athlete under heavy structural load — barbell strength training',
    },
  },

  architects: [
    {
      name: 'Dr. Elias Venn',
      role: 'Neural Performance Architect',
      specialty: 'CNS · Longevity · Load Periodization',
      image: {
        id: photos.architectCoach,
        alt: 'Dr. Elias Venn — performance architect portrait',
      },
    },
    {
      name: 'Maren Okoye',
      role: 'Kinetic Systems Director',
      specialty: 'Movement Architecture · Combat Flow',
      image: {
        id: photos.architectFemale,
        alt: 'Maren Okoye — kinetic systems director',
      },
    },
    {
      name: 'Lucien Ashford',
      role: 'Metabolic Continuum Lead',
      specialty: 'Threshold Science · Body Recomposition',
      image: {
        id: photos.architectMale,
        alt: 'Lucien Ashford — metabolic continuum lead',
      },
    },
  ],

  membership: {
    ritual: 'Sequence 05 · Access',
    headline: 'Admission is a threshold.',
    image: {
      id: photos.luxuryGym,
      alt: 'Premium strength floor — dark luxury training environment',
    },
    tiers: [
      {
        code: 'I',
        name: 'Continuum',
        descriptor: 'Foundational access',
        features: ['Chamber access · 12 sessions', 'Performance diagnostics', 'Digital OS — Core'],
        note: 'By application',
      },
      {
        code: 'II',
        name: 'Sovereign',
        descriptor: 'Full continuum',
        features: [
          'Unlimited chamber access',
          'Architect assignment',
          'Recovery suite · Longevity protocol',
          'Digital OS — Complete',
        ],
        featured: true,
        note: 'Invitation only',
      },
      {
        code: 'III',
        name: 'Architect',
        descriptor: 'Private order',
        features: [
          'Dedicated chamber',
          '24/7 access · Global chambers',
          'Bespoke programming',
          'Concierge continuum',
        ],
        note: 'Referral required',
      },
    ],
  },

  recovery: {
    ritual: 'Sequence 06 · Regeneration',
    headline: 'Recovery is warfare.',
    subline: 'Luxury wellness meets future health science. Optimization as elevated living.',
    image: {
      id: photos.recovery,
      alt: 'Athlete in regeneration protocol — mobility and recovery discipline',
    },
    modalities: [
      { name: 'Cryo Continuum', desc: 'Neural reset · Inflammation protocol' },
      { name: 'Hyperbaric Chamber', desc: 'Oxygen saturation · Cellular repair' },
      { name: 'Thermal Contrast', desc: 'Vascular optimization' },
      { name: 'Sleep Architecture', desc: 'Circadian recalibration' },
    ],
  },

  digital: {
    ritual: 'Sequence 07 · Interface',
    headline: 'Your operating system for becoming.',
    features: [
      'Biometric continuum tracking',
      'Session choreography sync',
      'Recovery load balancing',
      'Identity evolution metrics',
    ],
  },

  locations: [
    {
      city: 'Geneva',
      code: 'CH-GVA-01',
      descriptor: 'Strength & longevity chamber',
      image: {
        id: photos.luxuryGym,
        alt: 'Geneva chamber — premium dark strength floor',
      },
    },
    {
      city: 'Tokyo',
      code: 'JP-TYO-02',
      descriptor: 'Combat conditioning wing',
      image: {
        id: photos.chamberTokyo,
        alt: 'Tokyo chamber — atmospheric training environment',
      },
    },
    {
      city: 'Dubai',
      code: 'AE-DXB-03',
      descriptor: 'Performance sovereignty suite',
      image: {
        id: photos.strengthFloor,
        alt: 'Dubai chamber — elite free-weight performance floor',
      },
    },
  ],

  proof: {
    ritual: 'Sequence 09 · Witness',
    headline: 'Those who crossed the threshold.',
    testimonials: [
      {
        quote:
          'I did not enter a facility. I entered a system that reorganized how I perceive my own potential.',
        author: '— Sovereign Member, Geneva',
      },
      {
        quote:
          'The atmosphere alone recalibrates your psychology. Discipline becomes inevitable.',
        author: '— Continuum Member, Tokyo',
      },
    ],
    metrics: [
      { value: '94%', label: 'Retention beyond year one' },
      { value: '12', label: 'Global chambers' },
      { value: '1:4', label: 'Architect ratio' },
    ],
  },

  climax: {
    ritual: 'Sequence 10 · Threshold',
    headline: ['The future version', 'of you is waiting.'],
    subline: 'Request a private assessment. Admission is selective. Transformation is not.',
    cta: 'Initiate Assessment',
    image: {
      id: photos.sprint,
      alt: 'Athlete in explosive sprint motion — neural drive training',
    },
  },

  classes: [
    {
      name: 'Structural Dominion',
      duration: '75 min',
      intensity: 'Maximum load',
      desc: 'Force vectoring and compound architecture for elite strength development.',
      image: { id: photos.performance, alt: 'Structural dominion — heavy barbell training' },
    },
    {
      name: 'Neural Surge',
      duration: '60 min',
      intensity: 'CNS peak',
      desc: 'Explosive power transfer and neurological drive optimization.',
      image: { id: photos.sprint, alt: 'Neural surge — explosive athletic drive' },
    },
    {
      name: 'Threshold Ritual',
      duration: '50 min',
      intensity: 'Metabolic edge',
      desc: 'Controlled suffering. Threshold expansion through precision pacing.',
      image: { id: photos.metabolic, alt: 'Threshold ritual — metabolic edge conditioning' },
    },
    {
      name: 'Combat Continuum',
      duration: '65 min',
      intensity: 'Kinetic flow',
      desc: 'Movement chains borrowed from combat disciplines. Flow as architecture.',
      image: { id: photos.combat, alt: 'Combat continuum — striking and flow work' },
    },
    {
      name: 'Regeneration Protocol',
      duration: '45 min',
      intensity: 'Recovery',
      desc: 'Mobility, breath architecture, and parasympathetic recalibration.',
      image: { id: photos.recovery, alt: 'Regeneration protocol — recovery and mobility' },
    },
  ],

  pageHero: {
    classes: {
      id: photos.combat,
      alt: 'Kinetic rituals — combat conditioning chamber',
    },
    trainers: {
      id: photos.architectCoach,
      alt: 'Performance architects — elite coaching',
    },
    membership: {
      id: photos.darkGym,
      alt: 'Access protocol — dark luxury training chamber',
    },
    locations: {
      id: photos.luxuryGym,
      alt: 'Global performance chambers',
    },
    about: {
      id: photos.hero,
      alt: 'AETHERIS doctrine — elite human performance',
    },
    trial: {
      id: photos.sprint,
      alt: 'Private assessment — athletic performance screening',
    },
  },

  about: {
    origin:
      'AETHERIS was founded on a single conviction: the category of "gym" has failed human potential. We built a continuum — a private order where transformation is engineered with the precision of luxury science and the gravity of belief.',
    principles: [
      'The body is architecture.',
      'Discipline is identity.',
      'Recovery is not rest — it is warfare.',
      'Access is earned, not purchased.',
    ],
  },

  trial: {
    headline: 'Private Assessment',
    subline:
      'A 90-minute immersion into the continuum. No presentation. Only measurement, atmosphere, and truth.',
    cta: 'Initiate Assessment',
    steps: [
      'Biometric baseline & movement screen',
      'Chamber immersion · 45 min',
      'Architect alignment review',
    ],
    fields: [
      { name: 'name', label: 'Full name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'chamber', label: 'Preferred chamber', type: 'select' },
      {
        name: 'discipline',
        label: 'Current discipline level',
        type: 'select',
        options: ['Initiate', 'Committed', 'Advanced', 'Elite'],
      },
    ],
  },
}

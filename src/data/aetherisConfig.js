import { photos } from '../utils/images'

/** AETHERIS — global private performance house */
export const aetherisConfig = {
  brand: {
    name: 'AETHERIS',
    descriptor: 'Private Performance House',
    mantra: 'The body is architecture.',
    founding: 'Geneva · MMXXIV',
  },

  seo: {
    title: 'AETHERIS',
    description:
      'A global private house for physical mastery, identity revision, and selective admission.',
  },

  contact: {
    email: 'access@aetheris.house',
    phone: '+41 22 000 0000',
    whatsapp: '41220000000',
    whatsappMessage: 'Requesting admission to AETHERIS. I understand access is selective.',
  },

  nav: [
    { label: 'House', path: '/' },
    { label: 'Disciplines', path: '/classes' },
    { label: 'Architects', path: '/trainers' },
    { label: 'Admission', path: '/membership' },
    { label: 'Chambers', path: '/locations' },
    { label: 'Doctrine', path: '/about' },
  ],

  hero: {
    ritual: 'I · House',
    headline: ['You were', 'not built', 'to remain.'],
    subline: 'A private house for those who treat discipline as identity.',
    primaryCta: 'Request Access',
    secondaryCta: 'The Doctrine',
    image: {
      id: photos.hero,
      alt: 'Athlete in controlled light — AETHERIS performance chamber',
    },
  },

  philosophy: {
    ritual: 'II · Doctrine',
    headline: 'Identity is engineered.',
    image: {
      id: photos.combat,
      alt: 'Combat discipline — low lux performance chamber',
    },
    pillars: [
      {
        index: 'I',
        title: 'Revision',
        body: 'Each session is a recalibration. You do not repeat effort — you revise who you are becoming.',
      },
      {
        index: 'II',
        title: 'Precision',
        body: 'Obsession, when governed, becomes architecture. Ritual replaces noise.',
      },
      {
        index: 'III',
        title: 'Reverence',
        body: 'The body is the only instrument that cannot be replaced. Mastery begins here.',
      },
    ],
  },

  performance: {
    ritual: 'III · Kinetic',
    headline: 'Controlled force.',
    subline: 'Movement engineered for momentum, power transfer, and neural dominance.',
    disciplines: [
      { name: 'Structural Load', metric: 'Force vectoring' },
      { name: 'Neural Drive', metric: 'CNS priming' },
      { name: 'Metabolic Edge', metric: 'Threshold design' },
      { name: 'Combat Flow', metric: 'Kinetic chains' },
    ],
    image: {
      id: photos.performance,
      alt: 'Structural load — barbell under editorial light',
    },
  },

  architects: [
    {
      name: 'Dr. Elias Venn',
      role: 'Neural Performance Architect',
      specialty: 'CNS · Longevity · Load periodization',
      image: {
        id: photos.architectCoach,
        alt: 'Dr. Elias Venn — AETHERIS architect',
      },
    },
    {
      name: 'Maren Okoye',
      role: 'Kinetic Systems Director',
      specialty: 'Movement architecture · Combat flow',
      image: {
        id: photos.architectFemale,
        alt: 'Maren Okoye — kinetic systems director',
      },
    },
    {
      name: 'Lucien Ashford',
      role: 'Metabolic Continuum Lead',
      specialty: 'Threshold science · Body recomposition',
      image: {
        id: photos.architectMale,
        alt: 'Lucien Ashford — metabolic lead',
      },
    },
  ],

  membership: {
    ritual: 'V · Admission',
    headline: 'Admission is a threshold.',
    subline: 'Access is granted — after assessment, alignment, and proof of discipline.',
    image: {
      id: photos.luxuryGym,
      alt: 'Strength chamber — dark luxury performance environment',
    },
    tiers: [
      {
        code: 'I',
        name: 'Continuum',
        descriptor: 'Foundational house access',
        features: ['Chamber access · 12 sessions', 'Performance diagnostics', 'House OS — Core'],
        note: 'By application',
      },
      {
        code: 'II',
        name: 'Sovereign',
        descriptor: 'Full house privileges',
        features: [
          'Unlimited chamber access',
          'Architect assignment',
          'Recovery suite · Longevity protocol',
          'House OS — Complete',
        ],
        featured: true,
        note: 'By invitation',
      },
      {
        code: 'III',
        name: 'Architect',
        descriptor: 'Private order',
        features: [
          'Dedicated chamber',
          '24/7 access · Global chambers',
          'Bespoke programming',
          'House concierge',
        ],
        note: 'Referral only',
      },
    ],
  },

  recovery: {
    ritual: 'VI · Regeneration',
    headline: 'Recovery as protocol.',
    subline: 'Regeneration treated with the same gravity as load.',
    image: {
      id: photos.recovery,
      alt: 'Regeneration protocol — mobility under controlled light',
    },
    modalities: [
      { name: 'Cryo Suite', desc: 'Neural reset · Inflammation control' },
      { name: 'Hyperbaric', desc: 'Oxygen saturation · Cellular repair' },
      { name: 'Thermal Contrast', desc: 'Vascular optimization' },
      { name: 'Sleep Architecture', desc: 'Circadian recalibration' },
    ],
  },

  digital: {
    ritual: 'VII · Interface',
    headline: 'Your operating system for becoming.',
    features: [
      'Biometric house telemetry',
      'Session choreography sync',
      'Recovery load balancing',
      'Identity revision metrics',
    ],
  },

  locations: [
    {
      city: 'Geneva',
      code: 'CH-GVA-01',
      descriptor: 'Strength & longevity chamber',
      image: {
        id: photos.luxuryGym,
        alt: 'Geneva chamber — editorial strength floor',
      },
    },
    {
      city: 'Tokyo',
      code: 'JP-TYO-02',
      descriptor: 'Combat conditioning wing',
      image: {
        id: photos.chamberTokyo,
        alt: 'Tokyo chamber — atmospheric performance space',
      },
    },
    {
      city: 'Dubai',
      code: 'AE-DXB-03',
      descriptor: 'Performance sovereignty suite',
      image: {
        id: photos.strengthFloor,
        alt: 'Dubai chamber — elite free-weight floor',
      },
    },
  ],

  proof: {
    ritual: 'VIII · Witness',
    headline: 'Those who crossed the threshold.',
    testimonials: [
      {
        quote:
          'I did not enter a facility. I entered a house that reorganized how I perceive my own potential.',
        author: '— Sovereign Member, Geneva',
      },
      {
        quote: 'The atmosphere recalibrates psychology before the first rep. Discipline becomes inevitable.',
        author: '— House Member, Tokyo',
      },
    ],
    metrics: [
      { value: '94%', label: 'Retention beyond year one' },
      { value: '12', label: 'Global chambers' },
      { value: '1:4', label: 'Architect ratio' },
    ],
  },

  climax: {
    ritual: 'Threshold',
    headline: ['The future version', 'of you is waiting.'],
    subline: 'Private assessment. Selective admission.',
    cta: 'Begin Assessment',
    secondaryCta: 'View Admission',
    image: {
      id: photos.sprint,
      alt: 'Explosive drive — neural performance screening',
    },
  },

  classes: [
    {
      name: 'Structural Dominion',
      duration: '75 min',
      intensity: 'Maximum load',
      desc: 'Force vectoring and compound architecture for elite strength development.',
      image: { id: photos.performance, alt: 'Structural dominion — editorial barbell work' },
    },
    {
      name: 'Neural Surge',
      duration: '60 min',
      intensity: 'CNS peak',
      desc: 'Explosive power transfer and neurological priming under architect supervision.',
      image: { id: photos.sprint, alt: 'Neural surge — explosive athletic drive' },
    },
    {
      name: 'Threshold Ritual',
      duration: '50 min',
      intensity: 'Metabolic edge',
      desc: 'Controlled threshold expansion through precision pacing — no spectacle.',
      image: { id: photos.metabolic, alt: 'Threshold ritual — metabolic edge work' },
    },
    {
      name: 'Combat Continuum',
      duration: '65 min',
      intensity: 'Kinetic flow',
      desc: 'Movement chains from combat disciplines. Flow as architecture.',
      image: { id: photos.combat, alt: 'Combat continuum — striking and flow' },
    },
    {
      name: 'Regeneration Protocol',
      duration: '45 min',
      intensity: 'Recovery',
      desc: 'Mobility, breath architecture, and parasympathetic recalibration.',
      image: { id: photos.recovery, alt: 'Regeneration — recovery protocol' },
    },
  ],

  pageHero: {
    classes: {
      id: photos.combat,
      alt: 'Disciplines catalogue — performance chamber',
    },
    trainers: {
      id: photos.architectCoach,
      alt: 'Performance architects — AETHERIS council',
    },
    membership: {
      id: photos.darkGym,
      alt: 'Admission protocol — private performance chamber',
    },
    locations: {
      id: photos.luxuryGym,
      alt: 'Global chambers — AETHERIS network',
    },
    about: {
      id: photos.hero,
      alt: 'AETHERIS doctrine — elite human performance',
    },
    trial: {
      id: photos.sprint,
      alt: 'Private assessment — performance screening',
    },
  },

  pageCopy: {
    classes: {
      ritual: 'II · Disciplines',
      headline: 'The kinetic catalogue.',
      subline: 'Each session is choreographed for a single physiological outcome. Selection is intentional.',
    },
    trainers: {
      ritual: 'III · Architects',
      headline: 'The council.',
      subline: 'Architects are assigned — not booked. Alignment precedes programming.',
    },
    membership: {
      ritual: 'V · Admission',
      headline: 'Admission is a threshold.',
      subline: 'Access is granted — after assessment, alignment, and proof of discipline.',
    },
    locations: {
      ritual: 'IV · Chambers',
      headline: 'Twelve chambers. One house.',
      subline: 'Geneva, Tokyo, Dubai — unified atmosphere, local sovereignty.',
    },
    about: {
      ritual: 'I · Doctrine',
      headline: 'Beyond the old category.',
      subline: null,
    },
    contact: {
      ritual: 'Access Line',
      headline: 'Direct chamber correspondence.',
      subline: 'Inquiries are reviewed privately. Response within forty-eight hours.',
    },
    trial: {
      ritual: 'Assessment',
      headline: 'Private Assessment',
      subline: 'Ninety minutes. Measurement, atmosphere, and truth — no presentation.',
    },
  },

  about: {
    origin:
      'AETHERIS was founded on one conviction: the category of “gym” has failed human potential. We built a private house — where transformation is engineered with the precision of luxury science and the gravity of belief.',
    principles: [
      'The body is architecture.',
      'Discipline is identity.',
      'Recovery is protocol — not pause.',
      'Access is earned.',
    ],
  },

  trial: {
    headline: 'Private Assessment',
    subline: 'Ninety minutes. Measurement, atmosphere, and truth — no presentation.',
    cta: 'Begin Assessment',
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

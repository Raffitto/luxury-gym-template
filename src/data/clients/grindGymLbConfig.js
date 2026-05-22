import { photos } from '../../utils/images'

const MAPS_QUERY = 'Grind+Gym+WJF6+MQ4+Mtaileb+Lebanon'

/** Grind Gym — Mtaileb, Lebanon (real client data) */
export const grindGymLbConfig = {
  brand: {
    name: 'GRIND',
    descriptor: 'GYM',
    mantra: 'Built through discipline.',
    founding: 'Mtaileb, Lebanon',
    locationLine: 'MTAILEB, LEBANON',
  },

  seo: {
    title: 'Grind Gym | Mtaileb, Lebanon',
    description:
      '4.8★ gym in Mtaileb. Modern strength floor, LED-lit interior, turf lane, cardio, and premium machines. Get directions and start training.',
  },

  social: {
    instagram: 'https://www.instagram.com/grindgymlb',
    instagramHandle: 'grindgymlb',
  },

  contact: {
    email: 'info@grindgymlb.com',
    phone: '',
    whatsapp: '',
    whatsappMessage: 'Hi Grind Gym — I want to visit and learn about membership.',
  },

  location: {
    name: 'Grind Gym',
    category: 'Gym',
    plusCode: 'WJF6+MQ4',
    city: 'Mtaileb',
    country: 'Lebanon',
    address: 'WJF6+MQ4, Mtaileb, Lebanon',
    addressAr: 'WJF6+MQ4, مطيلب',
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    directionsLabel: 'Get Directions',
    ritual: 'V · Location',
    headline: 'Find us in Mtaileb.',
    subline: 'Open the map, pull up, and walk into a modern performance space.',
    image: {
      id: photos.facility,
      alt: 'Grind Gym interior — geometric LED ceiling and strength machines',
    },
  },

  googleReviews: {
    ritual: 'IV · Proof',
    headline: '4.8 ★★★★★ from 20 Google reviews',
    subline: 'Rated by members who train here every week.',
    rating: 4.8,
    count: 20,
    countLabel: '20 Google reviews',
    sourceLabel: 'Google Reviews',
    trustLine: 'Trusted by local members in Mtaileb',
    distribution: [0, 0, 0, 2, 18],
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Training', path: '/classes' },
    { label: 'Membership', path: '/membership' },
    { label: 'Location', path: '/locations' },
    { label: 'About', path: '/about' },
  ],

  hero: {
    ritual: 'GRIND GYM · MTAILEB, LEBANON',
    headline: ['BUILT THROUGH', 'DISCIPLINE.'],
    subline:
      'Train inside a modern performance space built for strength, conditioning, transformation, and consistency.',
    primaryCta: 'Get Directions',
    secondaryCta: 'Training Zones',
    primaryHref: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    secondaryTo: '/classes',
    image: {
      id: photos.hero,
      alt: 'Grind Gym — dark interior with geometric LED ceiling lighting',
    },
  },

  philosophy: {
    ritual: 'II · Standard',
    headline: 'The room sets the tone.',
    image: {
      id: photos.darkGym,
      alt: 'Grind Gym — black and grey athletic interior',
    },
    pillars: [
      {
        index: '01',
        title: 'Modern floor',
        body: 'Geometric LED ceilings, large mirrors, and a clean black/grey palette built for focus.',
      },
      {
        index: '02',
        title: 'Real equipment',
        body: 'Premium machines, free weights, turf, and cardio — everything you need in one space.',
      },
      {
        index: '03',
        title: 'Local culture',
        body: 'A Mtaileb gym with 4.8 stars and members who actually show up.',
      },
    ],
  },

  performance: {
    ritual: 'III · Zones',
    headline: 'Every zone has a job.',
    subline: 'Strength machines, turf work, mirrors, and cardio — laid out for serious training.',
    disciplines: [
      { name: 'Strength Floor', metric: 'Premium machines' },
      { name: 'Turf Lane', metric: 'Functional work' },
      { name: 'Cardio Deck', metric: 'Window-lined treadmills' },
      { name: 'Mirror Lines', metric: 'Form · pacing · focus' },
    ],
    image: {
      id: photos.performance,
      alt: 'Functional turf lane with mirrors and LED strips — Grind Gym',
    },
  },

  architects: [],

  membership: {
    ritual: 'VI · Join',
    headline: 'Train where the room matches your standard.',
    subline: 'Visit in person, tour the floor, and choose the membership that fits your schedule.',
    image: {
      id: photos.facility,
      alt: 'Grind Gym strength floor with LED ceiling geometry',
    },
    tiers: [
      {
        code: '01',
        name: 'Open Gym',
        descriptor: 'Full floor access',
        features: ['Training floor access', 'Cardio + strength zones', 'Locker area'],
        note: 'Ask at front desk',
      },
      {
        code: '02',
        name: 'Monthly',
        descriptor: 'Consistent training',
        features: [
          'Unlimited floor access',
          'Turf + machine zones',
          'Member community',
        ],
        featured: true,
        note: 'Most popular',
      },
      {
        code: '03',
        name: 'Coached',
        descriptor: 'Guided programming',
        features: [
          'Coached sessions',
          'Custom training plan',
          'Progress check-ins',
        ],
        note: 'Limited availability',
      },
    ],
  },

  recovery: {
    ritual: 'Recovery',
    headline: 'Stretch. Reset. Return.',
    subline: 'Use the open floor and mirrors for mobility between heavy sessions.',
    image: {
      id: photos.recovery,
      alt: 'Recovery and mobility area — Grind Gym mirrors',
    },
    modalities: [
      { name: 'Mobility', desc: 'Open floor · mirror lines' },
      { name: 'Contrast', desc: 'Ask staff for availability' },
    ],
  },

  digital: {
    ritual: 'Stay connected',
    headline: 'Follow the gym culture.',
    features: [
      'Daily training atmosphere on Instagram',
      'Member wins and floor energy',
      'Class and floor updates',
    ],
  },

  locations: [
    {
      city: 'Mtaileb',
      code: 'WJF6+MQ4',
      descriptor: 'Grind Gym · Lebanon',
      image: {
        id: photos.facility,
        alt: 'Grind Gym Mtaileb — LED ceiling and machines',
      },
    },
  ],

  proof: {
    ritual: 'IV · Proof',
    headline: '4.8 ★★★★★ from 20 Google reviews',
    subline: 'Trusted by local members in Mtaileb',
    testimonials: [
      {
        quote:
          'Clean, modern, and serious. The LED ceiling and machines make it feel premium — not like a generic gym.',
        author: '— Google reviewer',
      },
      {
        quote:
          'Great atmosphere for strength and conditioning. Easy to find in Mtaileb.',
        author: '— Google reviewer',
      },
    ],
    metrics: [
      { value: '4.8', label: 'Google rating' },
      { value: '20', label: 'Reviews' },
      { value: 'Gym', label: 'Category' },
    ],
  },

  climax: {
    ritual: 'Join',
    headline: ['Show up.', 'Put in the work.'],
    subline: 'Visit Grind Gym in Mtaileb — get directions and start on the floor.',
    cta: 'Get Directions',
    secondaryCta: 'View Membership',
    ctaHref: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    image: {
      id: photos.hero,
      alt: 'Grind Gym — dramatic black facility lighting',
    },
  },

  classes: [
    {
      name: 'Strength Machines',
      duration: 'Open floor',
      intensity: 'Heavy',
      desc: 'Premium machine lines along the perimeter — built for controlled strength work under LED light.',
      image: {
        id: photos.strengthFloor,
        alt: 'Strength machines — Grind Gym floor',
      },
    },
    {
      name: 'Turf & Functional',
      duration: 'Open lane',
      intensity: 'Athletic',
      desc: 'Marked turf lane for sleds, plyos, and functional sessions with full mirror feedback.',
      image: {
        id: photos.performance,
        alt: 'Turf functional lane — Grind Gym',
      },
    },
    {
      name: 'Cardio Deck',
      duration: 'Self-paced',
      intensity: 'Engine',
      desc: 'Treadmills facing wide windows — sunrise sessions and steady-state conditioning.',
      image: {
        id: photos.metabolic,
        alt: 'Cardio zone — Grind Gym interior',
      },
    },
    {
      name: 'Free Weights',
      duration: 'Open floor',
      intensity: 'Strength',
      desc: 'Open floor layout with mirrors and dark athletic lighting for barbell and dumbbell work.',
      image: {
        id: photos.darkGym,
        alt: 'Free weight area — Grind Gym',
      },
    },
  ],

  pageHero: {
    classes: {
      id: photos.performance,
      alt: 'Training zones — turf and functional lane',
    },
    trainers: {
      id: photos.facility,
      alt: 'Grind Gym training floor',
    },
    membership: {
      id: photos.facility,
      alt: 'Grind Gym membership — Mtaileb',
    },
    locations: {
      id: photos.facility,
      alt: 'Grind Gym location — Mtaileb Lebanon',
    },
    about: {
      id: photos.hero,
      alt: 'Grind Gym culture — modern performance space',
    },
    trial: {
      id: photos.sprint,
      alt: 'Visit Grind Gym — Mtaileb',
    },
  },

  pageCopy: {
    classes: {
      ritual: 'II · Training',
      headline: 'Training zones on the floor.',
      subline: 'Machines, turf, cardio, and mirrors — pick your lane.',
    },
    trainers: {
      ritual: 'Coaches',
      headline: 'Coaching on the floor.',
      subline: 'Ask at the desk for coached sessions and programming.',
    },
    membership: {
      ritual: 'VI · Membership',
      headline: 'Membership that matches the room.',
      subline: 'Tour the gym in Mtaileb and choose your access level.',
    },
    locations: {
      ritual: 'V · Location',
      headline: 'WJF6+MQ4, Mtaileb.',
      subline: 'Tap directions and pull up to the entrance.',
    },
    about: {
      ritual: 'I · Culture',
      headline: 'Modern gym. Local standard.',
      subline: null,
    },
    contact: {
      ritual: 'Contact',
      headline: 'Visit or DM.',
      subline: 'Find us on Instagram or get directions to the gym.',
    },
    trial: {
      ritual: 'Visit',
      headline: 'Walk in and see the floor.',
      subline: 'Get directions, tour the space, and talk membership at the desk.',
    },
  },

  about: {
    origin:
      'Grind Gym in Mtaileb is a modern black-and-grey performance space — geometric LED ceilings, large mirrors, premium machines, a turf lane, and cardio with window light. Built for people who want a serious gym, not a generic template.',
    principles: [
      'Built through discipline.',
      'Modern equipment. Real atmosphere.',
      '4.8 stars from 20 Google reviews.',
      'Show up. Train. Repeat.',
    ],
  },

  trial: {
    headline: 'Visit the gym',
    subline: 'Get directions to WJF6+MQ4, Mtaileb and see the floor in person.',
    cta: 'Get Directions',
    ctaHref: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    steps: [
      'Open Google Maps directions',
      'Tour the strength + turf zones',
      'Ask about membership at the desk',
    ],
    fields: [
      { name: 'name', label: 'Full name', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      {
        name: 'goal',
        label: 'Training focus',
        type: 'select',
        options: ['Strength', 'Conditioning', 'Fat loss', 'General fitness'],
      },
    ],
  },
}

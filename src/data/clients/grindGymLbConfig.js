import { photos } from '../../utils/images'

/** GRIND GYM LB — elite urban performance culture (Long Beach) */
export const grindGymLbConfig = {
  brand: {
    name: 'GRIND',
    descriptor: 'Gym LB',
    mantra: 'Outwork everyone.',
    founding: 'Long Beach · Est. 2019',
  },

  seo: {
    title: 'GRIND GYM LB | Elite Training · Long Beach',
    description:
      'Premium strength, conditioning, and community culture in Long Beach. Train with intensity. Join the grind.',
  },

  social: {
    instagram: 'https://www.instagram.com/grindgymlb',
    instagramHandle: 'grindgymlb',
  },

  contact: {
    email: 'info@grindgymlb.com',
    phone: '+1 (562) 000-0000',
    whatsapp: '15620000000',
    whatsappMessage: 'Hey GRIND — I want to train. Send me membership + trial info.',
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Training', path: '/classes' },
    { label: 'Coaches', path: '/trainers' },
    { label: 'Membership', path: '/membership' },
    { label: 'Location', path: '/locations' },
    { label: 'Culture', path: '/about' },
  ],

  hero: {
    ritual: 'I · GRIND',
    headline: ['Built in', 'the dark.', 'Proven in light.'],
    subline: 'Elite strength culture for athletes who show up loud and leave stronger.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'See Training',
    image: {
      id: photos.hero,
      alt: 'Athlete under premium gym lighting — GRIND GYM LB',
    },
  },

  philosophy: {
    ritual: 'II · Standard',
    headline: 'No excuses. Only reps.',
    image: {
      id: photos.combat,
      alt: 'High-intensity training — GRIND floor energy',
    },
    pillars: [
      {
        index: '01',
        title: 'Intensity',
        body: 'Every session hits like a reel cut — fast pacing, heavy intent, zero wasted motion.',
      },
      {
        index: '02',
        title: 'Community',
        body: 'You do not train alone. The room pushes you before the weight does.',
      },
      {
        index: '03',
        title: 'Identity',
        body: 'GRIND is not a visit. It is who you become between sets.',
      },
    ],
  },

  performance: {
    ritual: 'III · Output',
    headline: 'Train like the camera is rolling.',
    subline: 'Power, hypertrophy, conditioning, and combat flow — programmed for real athletes.',
    disciplines: [
      { name: 'Heavy Strength', metric: 'Progressive overload' },
      { name: 'Athletic Power', metric: 'Explosive output' },
      { name: 'Metabolic Burn', metric: 'Engine capacity' },
      { name: 'Combat Conditioning', metric: 'Fight-ready flow' },
    ],
    image: {
      id: photos.performance,
      alt: 'Barbell work under dramatic gym lighting',
    },
  },

  architects: [
    {
      name: 'Coach Marcus Hale',
      role: 'Head Strength Coach',
      specialty: 'Powerlifting · Hypertrophy · Form',
      image: {
        id: photos.architectCoach,
        alt: 'Coach Marcus Hale — GRIND GYM LB',
      },
    },
    {
      name: 'Coach Nina Reyes',
      role: 'Performance & Conditioning',
      specialty: 'Athletic performance · Metabolic circuits',
      image: {
        id: photos.architectFemale,
        alt: 'Coach Nina Reyes — GRIND GYM LB',
      },
    },
    {
      name: 'Coach Derrick Cole',
      role: 'Combat & Mobility',
      specialty: 'Striking flow · Mobility · Recovery',
      image: {
        id: photos.architectMale,
        alt: 'Coach Derrick Cole — GRIND GYM LB',
      },
    },
  ],

  membership: {
    ritual: 'V · Access',
    headline: 'Membership is earned in sweat.',
    subline: 'Straight pricing. Premium equipment. A culture that does not coast.',
    image: {
      id: photos.luxuryGym,
      alt: 'GRIND strength floor — chrome and shadow',
    },
    tiers: [
      {
        code: '01',
        name: 'Core',
        descriptor: 'Full floor access',
        features: ['Unlimited training floor', 'Open gym hours', 'Member community chat'],
        note: 'Month-to-month',
      },
      {
        code: '02',
        name: 'Elite',
        descriptor: 'Coaching + priority',
        features: [
          'Everything in Core',
          '2 coached sessions / week',
          'Program design check-ins',
          'Recovery zone access',
        ],
        featured: true,
        note: 'Most popular',
      },
      {
        code: '03',
        name: 'Pro',
        descriptor: '1:1 performance track',
        features: [
          'Dedicated coach',
          'Custom macro + training block',
          'Video form review',
          'Priority class booking',
        ],
        note: 'Limited spots',
      },
    ],
  },

  recovery: {
    ritual: 'VI · Recovery',
    headline: 'Recover like you train — hard and smart.',
    subline: 'Mobility, contrast, and breath work so you can hit tomorrow louder.',
    image: {
      id: photos.recovery,
      alt: 'Recovery and mobility — GRIND athlete reset',
    },
    modalities: [
      { name: 'Mobility Lab', desc: 'ROM · tissue prep · injury prevention' },
      { name: 'Contrast Suite', desc: 'Hot / cold · flush · reset' },
      { name: 'Breath & Core', desc: 'Bracing · diaphragm · stability' },
      { name: 'Sleep Stack', desc: 'Recovery habits · HRV basics' },
    ],
  },

  digital: {
    ritual: 'VII · App',
    headline: 'Your training, in your pocket.',
    features: [
      'Workout logging + PR tracking',
      'Class booking & waitlist',
      'Coach messaging',
      'Community wins feed',
    ],
  },

  locations: [
    {
      city: 'Long Beach',
      code: 'LB-GRIND-01',
      descriptor: 'Flagship training floor · GRIND GYM LB',
      image: {
        id: photos.luxuryGym,
        alt: 'GRIND GYM LB — Long Beach flagship floor',
      },
    },
  ],

  proof: {
    ritual: 'VIII · Results',
    headline: 'Real people. Real transformations.',
    testimonials: [
      {
        quote:
          'This gym hits different. The energy is like a highlight reel — you walk in fired up and leave destroyed in the best way.',
        author: '— Member, Long Beach',
      },
      {
        quote:
          'Coaches actually care about your form and your progress. Community keeps you accountable.',
        author: '— Elite Member',
      },
    ],
    metrics: [
      { value: '4.9', label: 'Member rating' },
      { value: '12K+', label: 'Community followers' },
      { value: '1:8', label: 'Coach ratio' },
    ],
  },

  climax: {
    ritual: 'Join',
    headline: ['Stop scrolling.', 'Start grinding.'],
    subline: 'Free trial. No fluff. Show up ready.',
    cta: 'Claim Free Trial',
    secondaryCta: 'View Membership',
    image: {
      id: photos.sprint,
      alt: 'Explosive athlete drive — GRIND training',
    },
  },

  classes: [
    {
      name: 'GRIND Strength',
      duration: '60 min',
      intensity: 'Heavy',
      desc: 'Compound lifts, progressive overload, and brutal volume for serious strength.',
      image: { id: photos.performance, alt: 'GRIND Strength — barbell session' },
    },
    {
      name: 'Power Engine',
      duration: '45 min',
      intensity: 'Explosive',
      desc: 'Plyometrics, sleds, and athletic power — built for speed and force.',
      image: { id: photos.sprint, alt: 'Power Engine — athletic explosiveness' },
    },
    {
      name: 'Burn Lab',
      duration: '40 min',
      intensity: 'Metabolic',
      desc: 'High-tempo circuits, assault bikes, and sweat-drenched finishers.',
      image: { id: photos.metabolic, alt: 'Burn Lab — metabolic conditioning' },
    },
    {
      name: 'Fight Flow',
      duration: '50 min',
      intensity: 'Combat',
      desc: 'Striking drills, bag work, and conditioning for fight-ready athletes.',
      image: { id: photos.combat, alt: 'Fight Flow — combat conditioning' },
    },
    {
      name: 'Rebuild',
      duration: '35 min',
      intensity: 'Recovery',
      desc: 'Mobility, breath, and tissue work to keep you in the game.',
      image: { id: photos.recovery, alt: 'Rebuild — recovery session' },
    },
  ],

  pageHero: {
    classes: {
      id: photos.combat,
      alt: 'Training programs — GRIND GYM LB',
    },
    trainers: {
      id: photos.architectCoach,
      alt: 'GRIND coaching team',
    },
    membership: {
      id: photos.darkGym,
      alt: 'Membership — premium gym atmosphere',
    },
    locations: {
      id: photos.luxuryGym,
      alt: 'GRIND GYM LB — Long Beach location',
    },
    about: {
      id: photos.hero,
      alt: 'GRIND culture — elite gym community',
    },
    trial: {
      id: photos.sprint,
      alt: 'Free trial — start at GRIND GYM LB',
    },
  },

  pageCopy: {
    classes: {
      ritual: 'II · Training',
      headline: 'Programs that hit.',
      subline: 'Strength, power, burn, and flow — pick your weapon.',
    },
    trainers: {
      ritual: 'III · Coaches',
      headline: 'Coaches who compete with you.',
      subline: 'Elite operators. Real programming. No influencer nonsense.',
    },
    membership: {
      ritual: 'V · Membership',
      headline: 'Pick your level. Bring the work.',
      subline: 'Transparent tiers. Premium floor. Culture included.',
    },
    locations: {
      ritual: 'IV · Location',
      headline: 'Long Beach flagship.',
      subline: 'Urban chrome, smoke-lit floors, and a community that shows up.',
    },
    about: {
      ritual: 'I · Culture',
      headline: 'Underground elite.',
      subline: null,
    },
    contact: {
      ritual: 'Contact',
      headline: 'Talk to the front desk.',
      subline: 'DMs, calls, and walk-ins — we respond fast.',
    },
    trial: {
      ritual: 'Trial',
      headline: 'Free Trial Session',
      subline: 'One session. Full energy. See if you belong in the room.',
    },
  },

  about: {
    origin:
      'GRIND GYM LB was built for athletes who want the reel energy in real life — black floors, red accents, heavy iron, and a community that cheers loud and trains harder.',
    principles: [
      'Show up with intent.',
      'Outwork your last session.',
      'Respect the room.',
      'Earn everything.',
    ],
  },

  trial: {
    headline: 'Free Trial Session',
    subline: '60 minutes on the floor. Meet the coaches. Feel the culture.',
    cta: 'Book Free Trial',
    steps: [
      'Floor tour + culture intro',
      'Coach-led intro workout',
      'Membership options if you are a fit',
    ],
    fields: [
      { name: 'name', label: 'Full name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      {
        name: 'goal',
        label: 'Primary goal',
        type: 'select',
        options: ['Strength', 'Fat loss', 'Athletic performance', 'Combat / conditioning'],
      },
    ],
  },
}

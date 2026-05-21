/** Generic gym / fitness club template — replace values per client */
export const templateConfig = {
  brandName: 'Your Fitness Club',
  shortName: 'YFC',
  tagline: 'Elite transformation club',
  logo: '/logo.svg',

  colors: {
    black: '#050505',
    yellow: '#ffe500',
    white: '#f5f5f5',
    gray: '#8a8a8a',
    surface: '#121212',
    border: 'rgba(255, 255, 255, 0.08)',
  },

  seo: {
    title: 'Your Fitness Club | Train With Purpose',
    description:
      'Premium strength, conditioning, and transformation training. Join your local fitness club today.',
  },

  phone: '+1 000 000 0000',
  whatsapp: '10000000000',
  whatsappMessage: 'Hi, I would like membership information for your fitness club.',

  location: {
    address: '123 Main Street, Your City',
    shortAddress: 'Downtown',
    googleMapsUrl: 'https://www.google.com/maps',
    embedUrl: null,
  },

  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    instagramHandle: 'yourfitnessclub',
    facebookHandle: 'yourfitnessclub',
  },

  googleRating: {
    score: 4.9,
    count: 120,
    reviewUrl: 'https://www.google.com/maps',
  },

  openingHours: [
    { day: 'Monday – Friday', hours: '6:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 6:00 PM' },
  ],
  opensAt: '6 AM',
  opensDisplay: '6AM',

  hero: {
    badge: 'Limited Time Offer',
    headline: 'BUILT DIFFERENT',
    subheadline: 'Train harder. Move better. Become stronger.',
    backgroundImage: null,
    primaryCta: 'Join on WhatsApp',
    secondaryCta: 'View Memberships',
  },

  offer: {
    title: 'New Member Offer',
    subtitle: 'Limited-time membership',
    price: '$49',
    priceNote: 'Starting membership',
    urgency: 'Limited time · Limited spots',
    description:
      'Start your transformation with professional coaching, premium equipment, and a results-driven culture.',
    cta: 'Claim Offer on WhatsApp',
  },

  sections: {
    offer: { eyebrow: 'Limited Time' },
    services: {
      eyebrow: 'What We Offer',
      title: 'Train With Purpose',
      subtitle: 'Strength, conditioning, and transformation under one roof.',
    },
    memberships: {
      eyebrow: 'Memberships',
      title: 'Choose Your Level',
      subtitle: 'Flexible plans for every training goal.',
    },
    transformations: { eyebrow: 'Transformation' },
    trainers: {
      eyebrow: 'Coaching Team',
      title: 'Expert Trainers',
      subtitle: 'Certified coaches focused on your progress.',
    },
    gallery: {
      eyebrow: 'Inside The Club',
      title: 'The Training Floor',
      subtitle: 'Premium equipment in a focused training environment.',
      itemLabel: 'Club Gallery',
    },
    reviews: { eyebrow: 'Google Reviews' },
    location: {
      eyebrow: 'Visit Us',
      title: 'Find The Club',
      locationCardTitle: 'Location',
      hoursCardTitle: 'Opening Hours',
      opensFromLabel: 'Opens from',
      followTitle: 'Follow Us',
      followHint: 'Updates, offers, and training tips',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick Answers',
      subtitle: 'Everything you need before your first session.',
    },
  },

  services: [
    {
      id: 'personal-training',
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your goals and schedule.',
      icon: 'dumbbell',
    },
    {
      id: 'strength',
      title: 'Strength Training',
      description: 'Free weights and racks for serious strength development.',
      icon: 'flame',
    },
    {
      id: 'functional',
      title: 'Functional Training',
      description: 'Athletic conditioning and movement-based workouts.',
      icon: 'zap',
    },
    {
      id: 'cardio',
      title: 'Cardio Zone',
      description: 'Endurance equipment for conditioning and heart health.',
      icon: 'heart-pulse',
    },
    {
      id: 'nutrition',
      title: 'Nutrition Guidance',
      description: 'Practical nutrition support to fuel your results.',
      icon: 'apple',
    },
    {
      id: 'bodybuilding',
      title: 'Hypertrophy Training',
      description: 'Programs built for muscle growth and definition.',
      icon: 'trophy',
    },
    {
      id: 'transformation',
      title: 'Transformation Programs',
      description: 'Structured plans for measurable body composition change.',
      icon: 'target',
    },
    {
      id: 'recovery',
      title: 'Recovery Lounge',
      description: 'Space and tools to recover between hard sessions.',
      icon: 'cup-soda',
    },
  ],

  memberships: [
    {
      id: 'basic',
      name: 'Basic',
      price: '$39',
      period: '/ month',
      description: 'Essential access to the training floor.',
      features: ['Gym access', 'Cardio & strength zones', 'Locker access'],
      popular: false,
      cta: 'Join Basic',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$59',
      period: '/ month',
      description: 'More coaching and more accountability.',
      features: ['Everything in Basic', '2 PT sessions / month', 'Program check-ins'],
      popular: true,
      cta: 'Join Premium',
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '$99',
      period: '/ month',
      description: 'Maximum support for serious transformation.',
      features: ['Everything in Premium', 'Weekly coaching', 'Nutrition plan'],
      popular: false,
      cta: 'Join Elite',
    },
  ],

  transformations: {
    headline: 'Real Results. Real Commitment.',
    subheadline: 'Structured programs designed for visible change.',
    cta: 'Book Consultation',
    items: [
      { id: 1, label: 'Fat Loss Phase', caption: 'Leaner · Stronger · Focused' },
      { id: 2, label: 'Muscle Build', caption: 'Size · Power · Confidence' },
      { id: 3, label: 'Performance', caption: 'Mobility · Conditioning · Athleticism' },
    ],
  },

  trainers: [
    {
      id: 'trainer-1',
      name: 'Coach Alex',
      specialty: 'Strength & Conditioning',
      bio: 'Focused on technique, progression, and sustainable strength gains.',
      image: null,
    },
    {
      id: 'trainer-2',
      name: 'Coach Sam',
      specialty: 'Transformation',
      bio: 'High-accountability coaching for members ready to commit.',
      image: null,
    },
    {
      id: 'trainer-3',
      name: 'Coach Jordan',
      specialty: 'Functional Performance',
      bio: 'Athletic training for mobility, power, and endurance.',
      image: null,
    },
  ],

  gallery: [
    { id: 'g1', alt: 'Strength training area', caption: 'Strength Floor' },
    { id: 'g2', alt: 'Cardio training zone', caption: 'Cardio Zone' },
    { id: 'g3', alt: 'Free weights section', caption: 'Free Weights' },
    { id: 'g4', alt: 'Functional training space', caption: 'Functional Zone' },
    { id: 'g5', alt: 'Members training', caption: 'Training Session' },
    { id: 'g6', alt: 'Fitness club interior', caption: 'Club Atmosphere' },
  ],

  reviews: {
    headline: 'Trusted by Members',
    subheadline: 'See what members say about training here.',
    items: [
      {
        id: 'r1',
        name: 'Member Review',
        rating: 5,
        text: 'Great equipment and motivating atmosphere for consistent training.',
        date: 'Recent',
      },
      {
        id: 'r2',
        name: 'Member Review',
        rating: 5,
        text: 'Coaches are knowledgeable and the community keeps you accountable.',
        date: 'Recent',
      },
      {
        id: 'r3',
        name: 'Member Review',
        rating: 4,
        text: 'Clean facility and solid value for membership.',
        date: 'Recent',
      },
    ],
  },

  faqs: [
    {
      question: 'What are your opening hours?',
      answer: 'See the opening hours listed in our location section.',
    },
    {
      question: 'Do you offer personal training?',
      answer: 'Yes. Personal training and transformation programs are available.',
    },
    {
      question: 'How do I join?',
      answer: 'Message us on WhatsApp or call to get started with a membership.',
    },
    {
      question: 'Where are you located?',
      answer: 'See our full address in the location section.',
    },
  ],

  finalCta: {
    headline: 'Your next version starts here.',
    subheadline: 'Commit today. Train with purpose.',
    cta: 'Join on WhatsApp',
  },

  footer: {
    tagline: 'Built for transformation.',
    copyrightSuffix: 'All rights reserved.',
  },

  nav: [
    { label: 'Offer', href: '#offer' },
    { label: 'Services', href: '#services' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Results', href: '#results' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ],

  copy: {
    builtFor: 'Built for discipline.',
    trainWithPurpose: 'Train with purpose.',
    startToday: 'Start today.',
    opensDailyLabel: 'Opens Daily',
    googleRatingLabel: 'Google Rating',
    headerJoinCta: 'Join Now',
    callCta: 'Call Now',
    whatsappCta: 'WhatsApp',
    reviewOnGoogleCta: 'Review on Google',
    seeLocationCta: 'See Location',
    openMapsCta: 'Open in Google Maps',
    mobileFollowLabel: 'Follow',
  },
}

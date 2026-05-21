/** Ultimate Fitness Gym — client-specific configuration */
export const ufgConfig = {
  brandName: 'Ultimate Fitness Gym',
  shortName: 'UFG',
  tagline: 'Elite transformation club',
  logo: '/ufg-logo.jpg',

  colors: {
    black: '#050505',
    yellow: '#ffe500',
    white: '#f5f5f5',
    gray: '#8a8a8a',
    surface: '#121212',
    border: 'rgba(255, 255, 255, 0.08)',
  },

  seo: {
    title: 'Ultimate Fitness Gym | Built Different',
    description:
      'Premium strength, conditioning, and transformation training in Mtayleb, Lebanon. Join Ultimate Fitness Gym today.',
  },

  phone: '+961 3 081 084',
  whatsapp: '9613081084',
  whatsappMessage: 'Hi, I want to join Ultimate Fitness Gym. Please share membership details.',

  location: {
    address: 'Mtayleb center, Cotton Mall building, Mtayleb, Lebanon',
    shortAddress: 'Cotton Mall, Mtayleb',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Ultimate+Fitness+Gym+Mtayleb+Lebanon',
    embedUrl: null,
  },

  social: {
    instagram: 'https://www.instagram.com/ufglebanon?igsh=Ym9zbGRnM2RpbGs4',
    facebook:
      'https://www.facebook.com/ufglebanon?mibextid=wwXIfr&mibextid=wwXIfr',
    instagramHandle: 'ufglebanon',
    facebookHandle: 'ufglebanon',
  },

  googleRating: {
    score: 3.8,
    count: 48,
    reviewUrl:
      'https://www.google.com/maps/search/?api=1&query=Ultimate+Fitness+Gym+Mtayleb+Lebanon',
  },

  openingHours: [
    { day: 'Monday – Friday', hours: '7:00 AM – 10:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 6:00 PM' },
  ],
  opensAt: '7 AM',
  opensDisplay: '7AM',

  hero: {
    badge: 'Limited Time Offer',
    headline: 'BUILT DIFFERENT',
    subheadline: 'Train harder. Move better. Become stronger.',
    backgroundImage: null,
    primaryCta: 'Join on WhatsApp',
    secondaryCta: 'View Memberships',
  },

  offer: {
    title: 'Welcome 2026',
    subtitle: 'New membership launch',
    price: '$50',
    priceNote: 'Starting membership',
    urgency: 'Limited time · Limited spots',
    description:
      'Start your transformation with elite coaching, premium equipment, and a disciplined training culture.',
    cta: 'Claim Offer on WhatsApp',
  },

  sections: {
    offer: { eyebrow: 'Limited Time' },
    services: {
      eyebrow: 'What We Offer',
      title: 'Train With Purpose',
      subtitle:
        'Strength, conditioning, transformation. Built for members who show up.',
    },
    memberships: {
      eyebrow: 'Memberships',
      title: 'Choose Your Level',
      subtitle: 'Flexible plans. Serious training. Upgrade when you are ready.',
    },
    transformations: { eyebrow: 'Transformation' },
    trainers: {
      eyebrow: 'Coaching Team',
      title: 'Elite Trainers',
      subtitle:
        'Disciplined coaches. Direct feedback. Results-driven programming.',
    },
    gallery: {
      eyebrow: 'Inside The Club',
      title: 'The Training Floor',
      subtitle:
        'Dark luxury atmosphere. Premium equipment. Built for serious work.',
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
      followHint: 'Daily updates and membership offers',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick Answers',
      subtitle: 'Everything you need before you walk in.',
    },
  },

  services: [
    {
      id: 'personal-training',
      title: 'Personal Training',
      description: 'One-on-one coaching built around your goals, form, and progression.',
      icon: 'dumbbell',
    },
    {
      id: 'strength',
      title: 'Strength Area',
      description: 'Heavy racks, free weights, and serious lifting zones for real strength.',
      icon: 'flame',
    },
    {
      id: 'functional',
      title: 'Functional Training',
      description: 'Athletic movement, conditioning, and performance-based workouts.',
      icon: 'zap',
    },
    {
      id: 'cardio',
      title: 'Cardio Zone',
      description: 'Treadmills, bikes, and endurance stations for peak conditioning.',
      icon: 'heart-pulse',
    },
    {
      id: 'nutrition',
      title: 'Nutrition Advice',
      description: 'Practical guidance to fuel performance and accelerate results.',
      icon: 'apple',
    },
    {
      id: 'bodybuilding',
      title: 'Bodybuilding',
      description: 'Hypertrophy-focused training for size, symmetry, and definition.',
      icon: 'trophy',
    },
    {
      id: 'transformation',
      title: 'Transformation Programs',
      description: 'Structured plans for fat loss, muscle gain, and total body change.',
      icon: 'target',
    },
    {
      id: 'smoothie-bar',
      title: 'Smoothie Bar',
      description: 'Post-workout shakes and supplements to recover and perform.',
      icon: 'cup-soda',
    },
  ],

  memberships: [
    {
      id: 'basic',
      name: 'Basic',
      price: '$45',
      period: '/ month',
      description: 'Full gym access and essential training freedom.',
      features: ['Gym floor access', 'Cardio & strength zones', 'Locker access', 'Member community'],
      popular: false,
      cta: 'Join Basic',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$65',
      period: '/ month',
      description: 'More structure, more coaching, more results.',
      features: [
        'Everything in Basic',
        '2 PT sessions / month',
        'Program check-ins',
        'Priority booking',
      ],
      popular: true,
      cta: 'Join Premium',
    },
    {
      id: 'transformation',
      name: 'Transformation',
      price: '$120',
      period: '/ month',
      description: 'Maximum accountability for serious body change.',
      features: [
        'Everything in Premium',
        'Weekly coaching',
        'Nutrition plan',
        'Progress tracking',
      ],
      popular: false,
      cta: 'Start Transformation',
    },
  ],

  transformations: {
    headline: 'Real Results. Real Discipline.',
    subheadline:
      'Every transformation starts with a decision. We build the system. You execute.',
    cta: 'Book Consultation',
    items: [
      { id: 1, label: '12-Week Cut', caption: 'Fat loss · Strength retained' },
      { id: 2, label: 'Muscle Build', caption: 'Size · Power · Confidence' },
      { id: 3, label: 'Athletic Reset', caption: 'Mobility · Conditioning · Performance' },
    ],
  },

  trainers: [
    {
      id: 'trainer-1',
      name: 'Coach Karim',
      specialty: 'Strength & Hypertrophy',
      bio: 'Built for lifters who want size, power, and clean technique under heavy load.',
      image: null,
    },
    {
      id: 'trainer-2',
      name: 'Coach Maya',
      specialty: 'Fat Loss & Conditioning',
      bio: 'High-intensity programming with precision coaching for visible transformation.',
      image: null,
    },
    {
      id: 'trainer-3',
      name: 'Coach Elias',
      specialty: 'Functional Performance',
      bio: 'Athletic movement, mobility, and performance for members who train like athletes.',
      image: null,
    },
  ],

  gallery: [
    { id: 'g1', alt: 'Strength floor at Ultimate Fitness Gym', caption: 'Strength Floor' },
    { id: 'g2', alt: 'Cardio zone at Ultimate Fitness Gym', caption: 'Cardio Zone' },
    { id: 'g3', alt: 'Free weights area at Ultimate Fitness Gym', caption: 'Free Weights' },
    { id: 'g4', alt: 'Functional training zone at Ultimate Fitness Gym', caption: 'Functional Zone' },
    { id: 'g5', alt: 'Training session at Ultimate Fitness Gym', caption: 'Training Session' },
    { id: 'g6', alt: 'Club atmosphere at Ultimate Fitness Gym', caption: 'Club Atmosphere' },
  ],

  reviews: {
    headline: 'Trusted by the Community',
    subheadline: 'Rated on Google by members who train with us every week.',
    items: [
      {
        id: 'r1',
        name: 'Member Review',
        rating: 5,
        text: 'Serious gym energy. Good equipment and motivating atmosphere for consistent training.',
        date: 'Recent',
      },
      {
        id: 'r2',
        name: 'Member Review',
        rating: 4,
        text: 'Strong community feel. Trainers push you and the vibe keeps you accountable.',
        date: 'Recent',
      },
      {
        id: 'r3',
        name: 'Member Review',
        rating: 4,
        text: 'Great location in Mtayleb. Clean space and solid value for membership.',
        date: 'Recent',
      },
    ],
  },

  faqs: [
    {
      question: 'What time do you open?',
      answer: 'We open at 7 AM on weekdays. See opening hours in the location section.',
    },
    {
      question: 'Is the $50 offer still available?',
      answer:
        'The Welcome 2026 offer is limited-time. Message us on WhatsApp for current availability.',
    },
    {
      question: 'Do you offer personal training?',
      answer:
        'Yes. Personal training and transformation programs are available with our coaching team.',
    },
    {
      question: 'Where are you located?',
      answer: 'Mtayleb center, Cotton Mall building, Mtayleb, Lebanon.',
    },
  ],

  finalCta: {
    headline: 'Your next version starts here.',
    subheadline: 'No excuses. Just progress. Start today.',
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

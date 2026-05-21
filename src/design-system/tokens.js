/** Centralized design tokens — AETHERIS performance continuum */
export const tokens = {
  brand: {
    name: 'AETHERIS',
    descriptor: 'Performance Continuum',
    mantra: 'Become the architecture of yourself.',
  },
  color: {
    void: '#020202',
    depth: '#080808',
    surface: '#0e0e0e',
    elevated: '#141414',
    platinum: '#e8e4dc',
    silver: '#9a968e',
    ash: '#5c5a56',
    accent: '#c4b59a',
    accentDim: 'rgba(196, 181, 154, 0.35)',
    edge: 'rgba(232, 228, 220, 0.08)',
    glow: 'rgba(196, 181, 154, 0.12)',
  },
  font: {
    display: '"Syne", system-ui, sans-serif',
    body: '"IBM Plex Sans", system-ui, sans-serif',
    ritual: '"IBM Plex Mono", monospace',
  },
  easing: {
    cinematic: [0.16, 1, 0.3, 1],
    reveal: [0.22, 1, 0.36, 1],
    weight: [0.65, 0, 0.35, 1],
    magnetic: [0.33, 1, 0.68, 1],
  },
  duration: {
    instant: 0.2,
    swift: 0.45,
    measured: 0.75,
    cinematic: 1.1,
    ritual: 1.6,
  },
  layout: {
    maxWidth: '90rem',
    headerHeight: '4rem',
    chamberPadding: 'clamp(4rem, 12vh, 8rem)',
  },
}

export const routes = {
  home: '/',
  classes: '/classes',
  trainers: '/trainers',
  membership: '/membership',
  locations: '/locations',
  about: '/about',
  contact: '/contact',
  trial: '/trial',
}

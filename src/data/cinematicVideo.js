import { imageAssets } from '../utils/images'

/** Ambient slots — null video = CSS living stills only */
export const cinematicVideo = {
  hero: {
    poster: imageAssets.hero640,
    secondary: imageAssets.performance,
    webm: null,
    mp4: null,
    mobileVideo: false,
    preload: 'metadata',
  },
  programs: {
    poster: imageAssets.combat,
    secondary: imageAssets.performance,
    webm: null,
    mp4: null,
    mobileVideo: false,
    preload: 'none',
  },
  facility: {
    poster: imageAssets.darkGym,
    secondary: imageAssets.luxuryGym,
    webm: null,
    mp4: null,
    mobileVideo: false,
    preload: 'none',
  },
  finale: {
    poster: imageAssets.sprint,
    secondary: imageAssets.darkGym,
    webm: null,
    mp4: null,
    mobileVideo: false,
    preload: 'none',
  },
  bridge: {
    poster: null,
    secondary: null,
    webm: null,
    mp4: null,
    preload: 'none',
  },
}

export function hasVideoSource(slot) {
  const s = cinematicVideo[slot]
  return Boolean(s?.webm || s?.mp4)
}

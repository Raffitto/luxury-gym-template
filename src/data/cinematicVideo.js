import { imageAssets } from '../utils/images'

/** Optional ambient loops — null src = CSS film language only (poster + motion) */
export const cinematicVideo = {
  hero: {
    poster: imageAssets.hero640,
    secondary: imageAssets.performance,
    webm: null,
    mp4: null,
    mobileVideo: false,
  },
  facility: {
    poster: imageAssets.darkGym,
    secondary: imageAssets.luxuryGym,
    webm: null,
    mp4: null,
    mobileVideo: false,
  },
  finale: {
    poster: imageAssets.sprint,
    secondary: imageAssets.darkGym,
    webm: null,
    mp4: null,
    mobileVideo: false,
  },
  bridge: {
    poster: null,
    secondary: null,
    webm: null,
    mp4: null,
  },
}

export function hasVideoSource(slot) {
  const s = cinematicVideo[slot]
  return Boolean(s?.webm || s?.mp4)
}

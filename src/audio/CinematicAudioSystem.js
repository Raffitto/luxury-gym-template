/**
 * Optional ambient audio architecture — no autoplay; unlock on explicit user gesture.
 */

const STORAGE_KEY = 'aetheris-audio-muted'

class CinematicAudioSystem {
  constructor() {
    this.context = null
    this.enabled = false
    this.unlocked = false
    this.muted = this.readMutedPreference()
    this.ambients = new Map()
    this.energy = 0
  }

  readMutedPreference() {
    if (typeof window === 'undefined') return true
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored !== 'false'
    } catch {
      return true
    }
  }

  setMuted(muted) {
    this.muted = muted
    try {
      localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false')
    } catch {
      /* ignore */
    }
    this.ambients.forEach((entry) => {
      if (entry.node) entry.node.volume = muted ? 0 : entry.baseVolume
    })
  }

  /** Call from a user gesture (button tap) before any playback */
  async unlock() {
    if (this.unlocked || typeof window === 'undefined') return false
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return false
    this.context = new AudioCtx()
    await this.context.resume()
    this.unlocked = true
    this.enabled = true
    return true
  }

  registerAmbient({ id, src, baseVolume = 0.12, reactive = true }) {
    this.ambients.set(id, { src, baseVolume, reactive, node: null, loaded: false })
    return () => this.ambients.delete(id)
  }

  /** Future: load and play when user enables sound */
  async playAmbient(id) {
    if (!this.unlocked || this.muted || !this.enabled) return
    const entry = this.ambients.get(id)
    if (!entry || entry.node) return
    // Placeholder — actual decode/play wired when assets exist
    entry.loaded = true
  }

  updateReactiveEnergy(energy) {
    this.energy = energy
    if (!this.enabled || this.muted) return
    this.ambients.forEach((entry) => {
      if (!entry.reactive || !entry.node) return
      const vol = entry.baseVolume * (0.35 + energy * 0.65)
      entry.node.volume = Math.min(0.22, vol)
    })
  }

  dispose() {
    this.ambients.clear()
    if (this.context) {
      this.context.close()
      this.context = null
    }
    this.unlocked = false
    this.enabled = false
  }
}

export const cinematicAudio = new CinematicAudioSystem()

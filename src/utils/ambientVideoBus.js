/** Only one ambient video may play at a time (Android-safe budget). */
let activeSlot = null
const registry = new Map()

export function requestAmbientPlay(slot, play, pause) {
  if (activeSlot && activeSlot !== slot) {
    registry.get(activeSlot)?.pause?.()
  }
  activeSlot = slot
  registry.set(slot, { play, pause })
  play()
}

export function releaseAmbientPlay(slot) {
  registry.get(slot)?.pause?.()
  registry.delete(slot)
  if (activeSlot === slot) activeSlot = null
}

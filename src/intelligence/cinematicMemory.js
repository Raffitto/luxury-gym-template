const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))

export function createCinematicMemory() {
  return {
    startedAt: performance.now(),
    scrollDistance: 0,
    interactionCount: 0,
    swipePeaks: 0,
    velocityPeaks: 0,
    maxDepth: 0,
    rhythmSamples: [],
    lastInteractionAt: performance.now(),
  }
}

export function updateCinematicMemory(memory, patch) {
  if (patch.scrollDelta) {
    memory.scrollDistance += Math.abs(patch.scrollDelta)
  }
  if (patch.depth != null) {
    memory.maxDepth = Math.max(memory.maxDepth, patch.depth)
  }
  if (patch.interaction) {
    memory.interactionCount += 1
    memory.lastInteractionAt = performance.now()
  }
  if (patch.swipeIntensity != null) {
    memory.swipePeaks = memory.swipePeaks * 0.92 + patch.swipeIntensity * 0.08
  }
  if (patch.velocity != null) {
    memory.velocityPeaks = memory.velocityPeaks * 0.9 + patch.velocity * 0.1
  }
  if (patch.rhythmSample != null) {
    memory.rhythmSamples.push(patch.rhythmSample)
    if (memory.rhythmSamples.length > 12) memory.rhythmSamples.shift()
  }
  return memory
}

export function deriveMemoryState(memory, now = performance.now()) {
  const elapsed = (now - memory.startedAt) / 1000
  const exploration = clamp(memory.maxDepth * 0.85 + memory.scrollDistance / 12000)
  const engagement = clamp(
    memory.interactionCount / 28 + memory.swipePeaks * 0.35 + memory.velocityPeaks * 0.25,
  )
  const immersion = clamp(exploration * 0.55 + engagement * 0.35 + Math.min(elapsed / 180, 0.25))
  const transitionBias = clamp(0.12 + immersion * 0.55 + memory.velocityPeaks * 0.2)
  const atmosphereEvolution = clamp(immersion * 0.7 + exploration * 0.3)

  const rhythmVariance =
    memory.rhythmSamples.length > 2
      ? memory.rhythmSamples.reduce((a, b) => a + b, 0) / memory.rhythmSamples.length
      : 0.5

  return {
    immersion,
    exploration,
    engagement,
    transitionBias,
    atmosphereEvolution,
    rhythmVariance,
    elapsed,
  }
}

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))

/**
 * Fuse scroll, idle, interaction, swipe, depth, rhythm, and memory into one living energy signal.
 */
export function fuseAdaptiveEnergy({
  velocity = 0,
  idleMs = 0,
  interactionIntensity = 0,
  swipeIntensity = 0,
  sceneDepth = 0,
  rhythm = 0,
  memoryImmersion = 0,
  breathingMode = false,
}) {
  const scrollDrive = velocity * 0.48
  const interactionDrive = interactionIntensity * 0.32
  const swipeDrive = swipeIntensity * 0.26
  const depthDrive = sceneDepth * 0.22
  const rhythmDrive = rhythm * 0.14
  const memoryDrive = memoryImmersion * 0.1

  const raw =
    scrollDrive + interactionDrive + swipeDrive + depthDrive + rhythmDrive + memoryDrive

  const idleBreath =
    breathingMode || (idleMs > 2200 && velocity < 0.1)
      ? clamp(0.28 - velocity * 0.35 + memoryImmersion * 0.08, 0.1, 0.42)
      : 0

  const energy = clamp(raw + idleBreath * 0.35, 0, 1)

  return {
    energy,
    breathing: breathingMode || (idleMs > 2200 && velocity < 0.12),
    calm: velocity < 0.14 && idleMs > 600 && swipeIntensity < 0.2,
    aggressive: velocity > 0.55 || swipeIntensity > 0.65 || interactionIntensity > 0.7,
    idleMs,
  }
}

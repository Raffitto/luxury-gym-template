const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))

/** Restrained energy — calm by default, subtle response only when needed */
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
  const scrollDrive = velocity * 0.28
  const interactionDrive = interactionIntensity * 0.14
  const swipeDrive = swipeIntensity * 0.12
  const depthDrive = sceneDepth * 0.1
  const rhythmDrive = rhythm * 0.06
  const memoryDrive = memoryImmersion * 0.05

  const raw =
    scrollDrive + interactionDrive + swipeDrive + depthDrive + rhythmDrive + memoryDrive

  const idleBreath =
    breathingMode || (idleMs > 2800 && velocity < 0.08)
      ? clamp(0.14 - velocity * 0.2 + memoryImmersion * 0.04, 0.06, 0.22)
      : 0

  const energy = clamp(raw + idleBreath * 0.2, 0, 0.72)

  return {
    energy,
    breathing: breathingMode || (idleMs > 2800 && velocity < 0.1),
    calm: velocity < 0.12 && idleMs > 800,
    aggressive: velocity > 0.62 || swipeIntensity > 0.75,
    idleMs,
  }
}

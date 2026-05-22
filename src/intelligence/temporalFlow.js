/**
 * Slow, non-repeating environmental cycles — phase evolves with session + immersion.
 */
export function getTemporalState(elapsedMs, energy, immersion = 0) {
  const basePeriod = 95000
  const period = basePeriod + immersion * 55000 + energy * 12000
  const epoch = Math.floor(elapsedMs / period)
  const phase = (elapsedMs - epoch * period) / period

  const lightShift = 0.42 + 0.58 * (0.5 + 0.5 * Math.sin(phase * Math.PI * 2 + epoch * 0.4))
  const fogPhase = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2 + 1.2)
  const breathDuration = 6.5 + immersion * 2.8 + (1 - energy) * 1.5
  const sweepBias = 0.85 + energy * 0.35 + Math.sin(phase * Math.PI) * 0.12

  return {
    phase,
    epoch,
    period,
    lightShift,
    fogPhase,
    breathDuration,
    sweepBias,
  }
}

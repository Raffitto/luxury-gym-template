/** Slow living cycles — never frantic, never identical loops */
export function getTemporalState(elapsedMs, energy, immersion = 0) {
  const basePeriod = 165000
  const period = basePeriod + immersion * 40000
  const epoch = Math.floor(elapsedMs / period)
  const phase = (elapsedMs - epoch * period) / period

  const lightShift = 0.48 + 0.22 * Math.sin(phase * Math.PI * 2 + epoch * 0.25)
  const fogPhase = 0.5 + 0.18 * Math.sin(phase * Math.PI * 2 + 0.8)
  const breathDuration = 11 + immersion * 2.5 + (1 - energy) * 2
  const sweepBias = 1.15

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

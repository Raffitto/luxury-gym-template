/** Seamless crossfade between film chapters — no hard section cuts */
export default function SceneBridge({ variant = 'flow' }) {
  return (
    <div
      className={`scene-bridge scene-bridge--${variant}`}
      aria-hidden
    />
  )
}

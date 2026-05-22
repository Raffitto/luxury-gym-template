import AmbientFilmLayer from './AmbientFilmLayer'

/** Seamless crossfade between film chapters — no hard section cuts */
export default function SceneBridge({ variant = 'flow' }) {
  return (
    <div
      className={`scene-bridge scene-bridge--${variant}`}
      aria-hidden
    >
      <AmbientFilmLayer slot="bridge" intensity="low" />
      <div className="scene-bridge-film" />
    </div>
  )
}

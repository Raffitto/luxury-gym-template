import { useIsPhone } from '../../hooks/useIsPhone'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useDelayedMount } from '../../hooks/useDelayedMount'
import FilmGrain from './FilmGrain'

export default function DelayedFilmGrain() {
  const phone = useIsPhone()
  const reduced = useReducedMotion()
  const show = useDelayedMount(phone ? 900 : 0, phone && !reduced)

  if (reduced || (phone && !show)) return null
  if (!phone) return <FilmGrain />

  return (
    <div className="film-grain-deferred" data-ready={show || undefined}>
      {show ? <FilmGrain /> : null}
    </div>
  )
}

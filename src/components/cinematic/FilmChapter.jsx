import { forwardRef, useRef } from 'react'
import { motion } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { useIsPhone } from '../../hooks/useIsPhone'
import { pacingForScene } from '../../intelligence/scenePacing'

const FilmChapter = forwardRef(function FilmChapter(
  {
    id,
    children,
    className = '',
    depthIndex = 1,
    atmosphere = 'section',
    sceneId,
  },
  forwardedRef,
) {
  const innerRef = useRef(null)
  const ref = forwardedRef || innerRef
  const { reduced } = useCinematicOS()
  const phone = useIsPhone()
  const pacing = pacingForScene(sceneId ?? id, { handheld: phone })

  const staticChapter = reduced || phone

  return (
    <section
      id={id}
      ref={ref}
      data-chapter={id}
      data-scene-emotion={pacing.emotion}
      className={`film-chapter film-chapter--${pacing.emotion} editorial-chapter landing-scene relative overflow-hidden ${className}`.trim()}
    >
      <div className="film-chapter-carry" aria-hidden />
      {!phone ? (
        <div className={`film-chapter-atmo film-chapter-atmo--${atmosphere}`} aria-hidden />
      ) : null}
      {staticChapter ? (
        <div className="film-chapter-camera">{children}</div>
      ) : (
        <motion.div className="film-chapter-camera gpu-layer">{children}</motion.div>
      )}
    </section>
  )
})

export default FilmChapter

import { forwardRef, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { useIsPhone } from '../../hooks/useIsPhone'
import { camera, chapterDepth } from '../../motion/camera'
import { pacingForScene } from '../../intelligence/scenePacing'
import { useLiquidScroll } from '../../motion/choreography'

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const driftEnd = camera.drift.chapterY[2] * chapterDepth(depthIndex) * pacing.chapterDrift
  const y = useLiquidScroll(scrollYProgress, [0, 1], [0, -driftEnd])
  const fadeIn = phone ? 0.92 : 0.86
  const opacity = useLiquidScroll(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [fadeIn, 1, 1, phone ? 0.98 : 0.96],
  )

  return (
    <section
      id={id}
      ref={ref}
      data-chapter={id}
      data-scene-emotion={pacing.emotion}
      className={`film-chapter film-chapter--${pacing.emotion} landing-scene relative overflow-hidden ${className}`.trim()}
    >
      <div className="film-chapter-carry" aria-hidden />
      <div className={`film-chapter-atmo film-chapter-atmo--${atmosphere}`} aria-hidden />
      {!reduced ? (
        <motion.div className="film-chapter-camera gpu-layer" style={{ y, opacity }}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  )
})

export default FilmChapter

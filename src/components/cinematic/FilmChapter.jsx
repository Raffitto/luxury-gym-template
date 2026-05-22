import { forwardRef, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera, chapterDepth } from '../../motion/camera'
import { useLiquidScroll } from '../../motion/choreography'

const FilmChapter = forwardRef(function FilmChapter(
  {
    id,
    children,
    className = '',
    depthIndex = 1,
    atmosphere = 'section',
  },
  forwardedRef,
) {
  const innerRef = useRef(null)
  const ref = forwardedRef || innerRef
  const { reduced } = useCinematicOS()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useLiquidScroll(
    scrollYProgress,
    [0, 1],
    [camera.drift.chapterY[0], camera.drift.chapterY[2] * chapterDepth(depthIndex)],
  )
  const opacity = useLiquidScroll(scrollYProgress, [0, 0.15, 0.85, 1], [0.72, 1, 1, 0.88])

  return (
    <section
      id={id}
      ref={ref}
      data-chapter={id}
      className={`film-chapter landing-scene relative overflow-hidden ${className}`.trim()}
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

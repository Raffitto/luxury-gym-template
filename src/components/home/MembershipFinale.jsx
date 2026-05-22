import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import AmbientFilmLayer from '../cinematic/AmbientFilmLayer'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import MagneticButton from '../ui/MagneticButton'
import { spring } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function MembershipFinale() {
  const { climax } = aetherisConfig
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.08, 0.1])

  return (
    <FilmChapter
      id="access"
      ref={ref}
      className="landing-scene--finale min-h-[88svh] md:min-h-[100svh]"
      depthIndex={5}
      atmosphere="climax"
    >
      <AmbientFilmLayer slot="finale" intensity="low" />
      {!phone ? <CinematicAtmosphere intensity="climax" /> : null}
      <CinematicBackdrop
        image={climax.image}
        alt={climax.image.alt}
        priority={phone}
        preset="section"
        scrim="default"
        imageClassName="opacity-30"
      />

      {!reduced && !phone ? (
        <motion.div
          className="finale-glow-pulse gpu-layer"
          style={{ opacity: glowOpacity }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[var(--page-gutter)] py-[var(--chamber-pad)]">
        <div className="chamber-inner mx-auto w-full max-w-4xl text-center">
          <FilmFrame aspect="auto">
            <div className="finale-frame-content finale-frame-content--myth editorial-chapter-head editorial-chapter-head--center">
              <EditorialChapterHead
                sceneId="access"
                ritual={climax.ritual}
                lines={climax.headline}
                subline={climax.subline}
                className="mx-auto text-center"
              />

              {reduced || phone ? (
                <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
                  <MagneticButton to={routes.membership} variant="ghost">
                    {climax.secondaryCta}
                  </MagneticButton>
                </div>
              ) : (
                <motion.div
                  className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring.glide, delay: 0.12 }}
                >
                  <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
                  <MagneticButton to={routes.membership} variant="ghost">
                    {climax.secondaryCta}
                  </MagneticButton>
                </motion.div>
              )}

              <p className="font-ritual myth-whisper mt-10">Selective admission · Private assessment required</p>
            </div>
          </FilmFrame>
        </div>
      </div>
    </FilmChapter>
  )
}

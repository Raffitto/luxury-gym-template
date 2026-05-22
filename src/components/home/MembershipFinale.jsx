import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import MagneticButton from '../ui/MagneticButton'
import { KineticCopy, KineticHeadline, KineticRitual } from '../cinematic/TypographyKinetic'
import { spring, useLiquidScroll } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function MembershipFinale() {
  const { climax } = aetherisConfig
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const headlineY = useLiquidScroll(scrollYProgress, [0, 1], [14, -6])
  const glowOpacity = useLiquidScroll(scrollYProgress, [0, 0.5, 1], [0.28, 0.55, 0.75])

  return (
    <FilmChapter
      id="access"
      ref={ref}
      className="landing-scene--finale min-h-[88svh] md:min-h-[100svh]"
      depthIndex={5}
      atmosphere="climax"
    >
      <CinematicAtmosphere intensity="climax" />
      <CinematicBackdrop
        image={climax.image}
        alt={climax.image.alt}
        preset="section"
        scrim="default"
        imageClassName="opacity-30"
      />

      {!reduced ? (
        <motion.div
          className="finale-glow-pulse gpu-layer"
          style={{ opacity: glowOpacity }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[var(--page-gutter)] py-[var(--chamber-pad)]">
        <div className="chamber-inner mx-auto w-full max-w-4xl text-center">
          <FilmFrame aspect="auto">
            <div className="finale-frame-content finale-frame-content--myth">
              <KineticRitual>{climax.ritual}</KineticRitual>

              <motion.div style={reduced ? undefined : { y: headlineY }}>
                <KineticHeadline
                  className="headline-emotional font-display mt-8 text-[var(--platinum)]"
                  lines={climax.headline}
                />
              </motion.div>

              <KineticCopy className="copy-cinematic mx-auto mt-8 max-w-lg text-center" delay={0.2}>
                {climax.subline}
              </KineticCopy>

              <motion.div
                className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring.liquid, delay: 0.35 }}
              >
                <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
                <MagneticButton to={routes.membership} variant="ghost">
                  Enter the continuum
                </MagneticButton>
              </motion.div>

              <p className="font-ritual myth-whisper mt-10">Admission is selective · Transformation is inevitable</p>
            </div>
          </FilmFrame>
        </div>
      </div>
    </FilmChapter>
  )
}

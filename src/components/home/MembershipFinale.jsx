import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmFrame from '../cinematic/FilmFrame'
import RitualLabel from '../ui/RitualLabel'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function MembershipFinale() {
  const { climax } = aetherisConfig
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const headlineY = useTransform(scrollYProgress, [0, 1], [24, -12])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1])

  return (
    <section
      id="access"
      ref={ref}
      className="landing-scene landing-scene--finale relative min-h-[88svh] overflow-hidden md:min-h-[100svh]"
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
          className="finale-glow-pulse"
          style={{ opacity: glowOpacity }}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[var(--page-gutter)] py-[var(--chamber-pad)]">
        <div className="chamber-inner mx-auto w-full max-w-4xl text-center">
          <FilmFrame aspect="auto">
            <div className="finale-frame-content">
              <RitualLabel>{climax.ritual}</RitualLabel>

              <motion.h2
                className="headline-mythic font-display mt-8 text-[var(--platinum)]"
                style={reduced ? undefined : { y: headlineY }}
              >
                {climax.headline.map((line, i) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={reduced ? false : { opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8%' }}
                    transition={transition.cinematic(0.95, i * 0.12)}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                className="body-measured mx-auto mt-8 max-w-lg"
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={transition.cinematic(0.75, 0.3)}
              >
                {climax.subline}
              </motion.p>

              <motion.div
                className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition.cinematic(0.7, 0.45)}
              >
                <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
                <MagneticButton to={routes.membership} variant="ghost">
                  Explore access tiers
                </MagneticButton>
              </motion.div>
            </div>
          </FilmFrame>
        </div>
      </div>
    </section>
  )
}

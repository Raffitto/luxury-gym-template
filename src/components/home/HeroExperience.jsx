import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import AtmosphericCanvas from '../atmosphere/AtmosphericCanvas'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import RitualLabel from '../ui/RitualLabel'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function HeroExperience() {
  const { hero } = aetherisConfig
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  return (
    <section className="hero-experience relative min-h-[100svh] overflow-hidden">
      <AtmosphericCanvas intensity="hero" />

      <CinematicBackdrop
        image={hero.image}
        alt={hero.image.alt}
        priority
        preset="hero"
        scrim="default"
        imageClassName="opacity-40 md:opacity-35"
      />

      <div className="hero-experience-content relative z-10 flex min-h-[100svh] flex-col justify-end pb-8 pt-[calc(var(--header-h)+1rem)] md:pb-24 md:pt-[calc(var(--header-h)+2rem)]">
        <div className="chamber-inner px-[var(--page-gutter)]">
          <RitualLabel>{hero.ritual}</RitualLabel>

          <h1 className="headline-mythic font-display mt-4 max-w-5xl text-[var(--platinum)] md:mt-8">
            {hero.headline.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={reduced ? false : { opacity: 0, y: mobile ? 28 : 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition.cinematic(mobile ? 0.65 : 1, i * 0.1)}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="body-measured mt-6 max-w-lg md:mt-10"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition.cinematic(0.7, 0.35)}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            id="hero-primary-cta"
            className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.cinematic(0.65, 0.45)}
          >
            <MagneticButton to={routes.trial}>{hero.primaryCta}</MagneticButton>
            <MagneticButton to={routes.about} variant="ghost" className="hidden sm:inline-flex">
              {hero.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>

        {!mobile && !reduced ? (
          <motion.div
            className="chamber-inner mt-16 hidden items-center gap-3 px-[var(--page-gutter)] text-[var(--ash)] md:mt-20 md:flex"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" strokeWidth={1} />
            <span className="font-ritual">Descend into the continuum</span>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}

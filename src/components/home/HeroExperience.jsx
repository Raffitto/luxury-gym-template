import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmFrame from '../cinematic/FilmFrame'
import RitualLabel from '../ui/RitualLabel'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function HeroExperience() {
  const { hero } = aetherisConfig
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, mobile ? 1.04 : 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, mobile ? 24 : 80])

  return (
    <section
      ref={ref}
      className="hero-experience landing-scene landing-scene--hero relative min-h-[100svh] overflow-hidden"
    >
      <CinematicAtmosphere intensity="hero" />

      <motion.div
        className="hero-parallax-bg absolute inset-0"
        style={reduced || mobile ? undefined : { scale: bgScale }}
      >
        <CinematicBackdrop
          image={hero.image}
          alt={hero.image.alt}
          priority
          preset="hero"
          scrim="default"
          imageClassName="hero-backdrop-img"
        />
      </motion.div>

      <div className="hero-scrim" aria-hidden />
      <div className="hero-letterbox hero-letterbox--top" aria-hidden />
      <div className="hero-letterbox hero-letterbox--bottom" aria-hidden />

      <motion.div
        className="hero-experience-content relative z-10 flex min-h-[100svh] flex-col justify-end pb-[calc(1.25rem+var(--mobile-sticky-h))] pt-[calc(var(--header-h)+0.75rem)] md:justify-end md:pb-24 md:pt-[calc(var(--header-h)+2rem)]"
        style={reduced ? undefined : { y: contentY }}
      >
        <div className="chamber-inner px-[var(--page-gutter)]">
          <FilmFrame aspect="auto" bleed>
            <div className="hero-frame-panel">
              <RitualLabel>{hero.ritual}</RitualLabel>

              <h1 className="headline-mythic font-display mt-4 text-[var(--platinum)] md:mt-6">
                {hero.headline.map((line, i) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={reduced ? false : { opacity: 0, y: mobile ? 22 : 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition.cinematic(mobile ? 0.55 : 0.85, i * 0.08)}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="body-measured hero-subline mt-5 max-w-md md:mt-8 md:max-w-lg"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition.cinematic(0.6, 0.28)}
              >
                {hero.subline}
              </motion.p>

              <motion.div
                id="hero-primary-cta"
                className="hero-cta-row mt-7 sm:mt-10"
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition.cinematic(0.55, 0.38)}
              >
                <MagneticButton to={routes.trial} className="hero-cta-primary w-full sm:w-auto">
                  {hero.primaryCta}
                </MagneticButton>
                <MagneticButton
                  to={routes.about}
                  variant="ghost"
                  className="hero-cta-secondary hidden sm:inline-flex"
                >
                  {hero.secondaryCta}
                </MagneticButton>
              </motion.div>
            </div>
          </FilmFrame>

          {!reduced ? (
            <motion.div
              className="hero-scroll-cue mt-6 flex items-center gap-2.5 text-[var(--silver)] md:mt-10"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={1} />
              <span className="font-ritual hero-scroll-label">Scroll the continuum</span>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { spring, useLiquidScroll } from '../../motion/choreography'
import { ArrowDown } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import HeroLivingLayer, { HeroHorizontalCue } from '../cinematic/HeroLivingLayer'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmFrame from '../cinematic/FilmFrame'
import MagneticButton from '../ui/MagneticButton'
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
  const bgScale = useLiquidScroll(scrollYProgress, [0, 1], [1, mobile ? 1.03 : 1.06])
  const contentY = useLiquidScroll(scrollYProgress, [0, 1], [0, mobile ? 16 : 48])

  return (
    <section
      ref={ref}
      className="hero-experience landing-scene landing-scene--hero relative min-h-[100svh] overflow-hidden"
    >
      <CinematicAtmosphere intensity="hero" live />

      <motion.div
        className={`hero-parallax-bg absolute inset-0 ${!reduced && mobile ? 'hero-parallax-bg--alive' : ''}`}
        style={reduced || mobile ? undefined : { scale: bgScale }}
        animate={
          reduced || !mobile
            ? undefined
            : { scale: [1, 1.02, 1.01, 1] }
        }
        transition={
          reduced || !mobile
            ? undefined
            : { duration: 18, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }
        }
      >
        <CinematicBackdrop
          image={hero.image}
          alt={hero.image.alt}
          priority
          preset="hero"
          scrim="hero"
          imageClassName="hero-backdrop-img"
        />
      </motion.div>

      <HeroLivingLayer />
      <div className="hero-scrim" aria-hidden />
      <div className="hero-accent-orb" aria-hidden />
      <div className="hero-letterbox hero-letterbox--top" aria-hidden />
      <div className="hero-letterbox hero-letterbox--bottom" aria-hidden />

      <motion.div
        className="hero-experience-content relative z-10 flex min-h-[100svh] flex-col justify-between gap-6 pb-[calc(1.25rem+var(--mobile-sticky-h))] pt-[calc(var(--header-h)+0.5rem)] md:justify-end md:gap-0 md:pb-24 md:pt-[calc(var(--header-h)+2rem)]"
        style={reduced ? undefined : { y: contentY }}
      >
        <HeroHorizontalCue />

        <div className="chamber-inner px-[var(--page-gutter)]">
          <FilmFrame aspect="auto" bleed>
            <div className="hero-frame-panel">
              <motion.p
                className="font-ritual hero-ritual-label"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.liquid, delay: 0.05 }}
              >
                {hero.ritual}
              </motion.p>

              <h1 className="headline-mythic hero-headline font-display mt-4 text-[var(--platinum)] md:mt-6">
                {hero.headline.map((line, i) => (
                  <motion.span
                    key={line}
                    className="hero-headline-line block"
                    initial={reduced ? false : { opacity: 0, y: mobile ? 14 : 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring.reveal, delay: i * 0.05 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="body-measured hero-subline mt-5 max-w-md md:mt-8 md:max-w-lg"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...spring.liquid, delay: 0.15 }}
              >
                {hero.subline}
              </motion.p>

              <motion.div
                id="hero-primary-cta"
                className="hero-cta-row mt-7 sm:mt-10"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.liquid, delay: 0.25 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 4, 0] }}
              transition={{
                opacity: { ...spring.liquid, delay: 0.4 },
                y: { duration: 6, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1], delay: 0.5 },
              }}
            >
              <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={1} />
              <span className="font-ritual hero-scroll-label">Scroll · swipe scenes below</span>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  )
}

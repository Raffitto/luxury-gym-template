import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import DepthField from '../cinematic/DepthField'
import HeroLivingLayer from '../cinematic/HeroLivingLayer'
import HeroReflection from '../cinematic/HeroReflection'
import { HeroHorizontalCue } from '../cinematic/HeroLivingLayer'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmFrame from '../cinematic/FilmFrame'
import MagneticButton from '../ui/MagneticButton'
import { spring, useLiquidScroll } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { useCinematicOSOptional } from '../../context/CinematicOSContext'

export default function HeroExperience() {
  const { hero } = aetherisConfig
  const reduced = useReducedMotion()
  const phone = useIsPhone()
  const os = useCinematicOSOptional()
  const heroEnergy = os?.energy ?? 0
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const parallaxActive = !reduced && !phone
  const imageScale = useLiquidScroll(scrollYProgress, [0, 1], [1, phone ? 1.01 : 1.04])
  const imageY = useLiquidScroll(scrollYProgress, [0, 1], [0, phone ? -8 : -40])
  const contentY = useLiquidScroll(scrollYProgress, [0, 1], [0, phone ? 8 : 32])
  const panelOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.94])

  useEffect(() => {
    const el = ref.current
    if (el) el.classList.add('hero-warm-active')
  }, [])

  return (
    <section
      ref={ref}
      data-scene-emotion="mystery"
      className={`hero-experience hero-experience--os hero-warm-active landing-scene landing-scene--hero film-chapter film-chapter--mystery relative min-h-[100svh] overflow-hidden ${phone ? 'hero-experience--handheld' : ''}`.trim()}
      style={{ '--hero-energy': heroEnergy }}
    >
      <div className="hero-depth-stack">
        <CinematicAtmosphere intensity="hero" live />
        <DepthField scrollProgress={scrollYProgress} hero />

        <motion.div
          className={`hero-parallax-bg hero-layer--far ${parallaxActive ? 'gpu-layer' : ''}`}
          style={
            parallaxActive ? { scale: imageScale, y: imageY } : undefined
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
        {!phone ? <HeroReflection scrollYProgress={scrollYProgress} /> : null}
      </div>

      <div className="hero-scrim hero-layer--mid" aria-hidden />
      <div className="hero-haze-band" aria-hidden />
      {!phone ? (
        <>
          <div className="hero-letterbox hero-letterbox--top" aria-hidden />
          <div className="hero-letterbox hero-letterbox--bottom" aria-hidden />
        </>
      ) : null}

      <motion.div
        className="hero-experience-content hero-layer--near relative z-10 flex min-h-[100svh] flex-col justify-between gap-5 pb-[calc(1.25rem+var(--mobile-sticky-h))] pt-[calc(var(--header-h)+0.5rem)] md:justify-end md:gap-0 md:pb-24 md:pt-[calc(var(--header-h)+2rem)]"
        style={parallaxActive ? { y: contentY, opacity: panelOpacity } : undefined}
      >
        <HeroHorizontalCue />

        <div className="chamber-inner px-[var(--page-gutter)]">
          <FilmFrame aspect="auto" bleed>
            <div className="hero-frame-panel">
              <motion.p
                className="font-ritual hero-ritual-label"
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.glide, delay: phone ? 0.08 : 0.12 }}
              >
                {hero.ritual}
              </motion.p>

              <h1 className="headline-mythic headline-emotional hero-headline font-display mt-3 md:mt-5">
                {hero.headline.map((line, i) => (
                  <motion.span
                    key={line}
                    className="hero-headline-line block"
                    initial={reduced ? false : { opacity: 0, y: phone ? 8 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring.glide, delay: (phone ? 0.1 : 0.14) + i * 0.08 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="hero-subline copy-cinematic mt-5 max-w-md md:mt-7 md:max-w-lg"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...spring.glide, delay: phone ? 0.22 : 0.28 }}
              >
                {hero.subline}
              </motion.p>

              <motion.div
                id="hero-primary-cta"
                className="hero-cta-row mt-7 sm:mt-9"
                initial={reduced ? false : { opacity: 0, y: phone ? 6 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.glide, delay: phone ? 0.3 : 0.38 }}
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
              className="hero-scroll-cue mt-6 flex items-center gap-2.5 md:mt-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: phone ? [0, 2, 0] : [0, 4, 0] }}
              transition={{
                opacity: { ...spring.glide, delay: phone ? 0.35 : 0.4 },
                y: {
                  duration: phone ? 8 : 6,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.2, 1],
                  delay: 0.5,
                },
              }}
            >
              <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={1} />
              <span className="font-ritual hero-scroll-label">Enter the continuum</span>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  )
}

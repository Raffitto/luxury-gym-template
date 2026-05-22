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
import { useIsMobile } from '../../hooks/useIsMobile'
import { useCinematicOSOptional } from '../../context/CinematicOSContext'

export default function HeroExperience() {
  const { hero } = aetherisConfig
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const os = useCinematicOSOptional()
  const heroEnergy = os?.energy ?? 0
  const heroImmersion = os?.memory?.immersion ?? 0
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageScale = useLiquidScroll(scrollYProgress, [0, 1], [1, mobile ? 1.02 : 1.04])
  const imageY = useLiquidScroll(scrollYProgress, [0, 1], [0, mobile ? -20 : -40])
  const contentY = useLiquidScroll(scrollYProgress, [0, 1], [0, mobile ? 16 : 32])
  const panelOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.92])

  useEffect(() => {
    const el = ref.current
    if (el) el.classList.add('hero-warm-active')
  }, [])

  return (
    <section
      ref={ref}
      data-scene-emotion="mystery"
      className="hero-experience hero-experience--os hero-warm-active landing-scene landing-scene--hero film-chapter film-chapter--mystery relative min-h-[100svh] overflow-hidden"
      style={{ '--hero-energy': heroEnergy, '--hero-immersion': heroImmersion }}
    >
      <div className="hero-depth-stack">
        <CinematicAtmosphere intensity="hero" live />
        <DepthField scrollProgress={scrollYProgress} hero />

        <motion.div
          className="hero-parallax-bg hero-layer--far gpu-layer"
          style={
            reduced
              ? undefined
              : { scale: imageScale, y: imageY }
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
        <HeroReflection scrollYProgress={scrollYProgress} />
      </div>

      <div className="hero-scrim hero-layer--mid" aria-hidden />
      <div className="hero-haze-band" aria-hidden />
      <div className="hero-letterbox hero-letterbox--top" aria-hidden />
      <div className="hero-letterbox hero-letterbox--bottom" aria-hidden />

      <motion.div
        className="hero-experience-content hero-layer--near relative z-10 flex min-h-[100svh] flex-col justify-between gap-5 pb-[calc(1.25rem+var(--mobile-sticky-h))] pt-[calc(var(--header-h)+0.5rem)] md:justify-end md:gap-0 md:pb-24 md:pt-[calc(var(--header-h)+2rem)]"
        style={reduced ? undefined : { y: contentY, opacity: panelOpacity }}
      >
        <HeroHorizontalCue />

        <div className="chamber-inner px-[var(--page-gutter)]">
          <FilmFrame aspect="auto" bleed>
            <div className="hero-frame-panel">
              <motion.p
                className="font-ritual hero-ritual-label"
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.glide, delay: 0.12 }}
              >
                {hero.ritual}
              </motion.p>

              <h1 className="headline-mythic headline-emotional hero-headline font-display mt-3 md:mt-5">
                {hero.headline.map((line, i) => (
                  <motion.span
                    key={line}
                    className="hero-headline-line block"
                    initial={reduced ? false : { opacity: 0, y: mobile ? 10 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring.glide, delay: 0.14 + i * 0.08 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="hero-subline copy-cinematic mt-5 max-w-md md:mt-7 md:max-w-lg"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...spring.glide, delay: 0.28 }}
              >
                {hero.subline}
              </motion.p>

              <motion.div
                id="hero-primary-cta"
                className="hero-cta-row mt-7 sm:mt-9"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.glide, delay: 0.38 }}
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
              animate={{ opacity: 1, y: [0, 4, 0] }}
              transition={{
                opacity: { ...spring.liquid, delay: 0.4 },
                y: { duration: 6, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1], delay: 0.5 },
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

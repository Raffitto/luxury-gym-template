import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import DepthField from '../cinematic/DepthField'
import HeroLivingLayer from '../cinematic/HeroLivingLayer'
import HeroReflection from '../cinematic/HeroReflection'
import { HeroHorizontalCue } from '../cinematic/HeroLivingLayer'
import AmbientFilmLayer from '../cinematic/AmbientFilmLayer'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import FilmFrame from '../cinematic/FilmFrame'
import MagneticButton from '../ui/MagneticButton'
import { spring, transition, useLiquidScroll } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'
import { useCinematicOSOptional } from '../../context/CinematicOSContext'

export default function HeroExperience() {
  const { hero } = activeConfig
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
  const imageScaleSmooth = useLiquidScroll(scrollYProgress, [0, 1], [1, 1.04])
  const imageYSmooth = useLiquidScroll(scrollYProgress, [0, 1], [0, -40])
  const contentYSmooth = useLiquidScroll(scrollYProgress, [0, 1], [0, 32])
  const imageScale = phone ? useTransform(scrollYProgress, [0, 1], [1, 1]) : imageScaleSmooth
  const imageY = phone ? useTransform(scrollYProgress, [0, 1], [0, 0]) : imageYSmooth
  const contentY = phone ? useTransform(scrollYProgress, [0, 1], [0, 0]) : contentYSmooth
  const panelOpacity = useTransform(scrollYProgress, [0, 0.85], [1, phone ? 1 : 0.94])
  const heroEnter = phone ? transition.instant : spring.glide
  const heroDelay = (d) => (phone ? Math.min(d, 0.08) : d)

  useEffect(() => {
    const el = ref.current
    if (el) el.classList.add('hero-warm-active')
  }, [])

  const heroContentClass =
    'hero-experience-content hero-layer--near relative z-10 flex min-h-[100svh] flex-col justify-between gap-5 pb-[calc(1.25rem+var(--mobile-sticky-h))] pt-[calc(var(--header-h)+0.5rem)] md:justify-end md:gap-0 md:pb-24 md:pt-[calc(var(--header-h)+2rem)]'

  const heroInner = (
    <>
      <HeroHorizontalCue />
      <div className="chamber-inner px-[var(--page-gutter)]">
        <FilmFrame aspect="auto" bleed>
          <div className="hero-frame-panel">
            {reduced || phone ? (
              <>
                <p className="font-ritual hero-ritual-label">{hero.ritual}</p>
                <h1 className="headline-mythic headline-emotional hero-headline font-display mt-3 md:mt-5">
                  {hero.headline.map((line) => (
                    <span key={line} className="hero-headline-line block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="hero-subline copy-cinematic mt-5 max-w-md md:mt-7 md:max-w-lg">
                  {hero.subline}
                </p>
                <div id="hero-primary-cta" className="hero-cta-row mt-7 sm:mt-9">
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
                </div>
              </>
            ) : (
              <>
                <motion.p
                  className="font-ritual hero-ritual-label"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...heroEnter, delay: heroDelay(0.06) }}
                >
                  {hero.ritual}
                </motion.p>
                <h1 className="headline-mythic headline-emotional hero-headline font-display mt-3 md:mt-5">
                  {hero.headline.map((line, i) => (
                    <motion.span
                      key={line}
                      className="hero-headline-line block"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...heroEnter, delay: heroDelay(0.08 + i * 0.04) }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  className="hero-subline copy-cinematic mt-5 max-w-md md:mt-7 md:max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...heroEnter, delay: heroDelay(0.1) }}
                >
                  {hero.subline}
                </motion.p>
                <motion.div
                  id="hero-primary-cta"
                  className="hero-cta-row mt-7 sm:mt-9"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...heroEnter, delay: heroDelay(0.12) }}
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
              </>
            )}
          </div>
        </FilmFrame>
        {!reduced && !phone ? (
          <motion.div
            className="hero-scroll-cue mt-6 flex items-center gap-2.5 md:mt-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{
              opacity: { ...spring.glide, delay: 0.4 },
              y: {
                duration: 7,
                repeat: Infinity,
                ease: [0.38, 0, 0.18, 1],
                delay: 0.7,
              },
            }}
          >
            <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={1} />
            <span className="font-ritual hero-scroll-label">Descend</span>
          </motion.div>
        ) : null}
        {!reduced && phone ? (
          <p className="hero-scroll-cue hero-scroll-cue--still mt-6 flex items-center gap-2.5 font-ritual">
            <ArrowDown className="h-3.5 w-3.5 shrink-0 opacity-50" strokeWidth={1} />
            <span className="hero-scroll-label">Descend</span>
          </p>
        ) : null}
      </div>
    </>
  )

  return (
    <section
      ref={ref}
      data-scene-emotion="mystery"
      className={`hero-experience hero-experience--os hero-experience--film hero-warm-active landing-scene landing-scene--hero film-chapter film-chapter--mystery relative min-h-[100svh] overflow-hidden ${phone ? 'hero-experience--handheld' : ''}`.trim()}
      style={{ '--hero-energy': heroEnergy }}
    >
      <div className="hero-depth-stack">
        <AmbientFilmLayer slot="hero" intensity="high" />
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

      {phone ? (
        <div className={heroContentClass}>{heroInner}</div>
      ) : (
        <motion.div
          className={heroContentClass}
          style={parallaxActive ? { y: contentY, opacity: panelOpacity } : undefined}
        >
          {heroInner}
        </motion.div>
      )}
    </section>
  )
}

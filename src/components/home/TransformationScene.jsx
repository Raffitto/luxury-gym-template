import { motion } from 'framer-motion'
import { landingConfig } from '../../data/landingConfig'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import ParallaxLayer from '../cinematic/ParallaxLayer'
import CinematicImage from '../ui/CinematicImage'
import { KineticBlock, KineticCopy, KineticHeadline, KineticRitual } from '../cinematic/TypographyKinetic'
import { spring, variants, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function TransformationScene() {
  const { transformation } = landingConfig
  const reduced = useReducedMotion()

  return (
    <FilmChapter id="journey" className="landing-scene--journey" depthIndex={3}>
      <CinematicAtmosphere intensity="section" />

      <div className="landing-scene-inner chamber">
        <KineticBlock className="max-w-2xl">
          <KineticRitual className="section-ritual-gap">{transformation.ritual}</KineticRitual>
          <KineticHeadline className="headline-chapter headline-emotional font-display section-headline-gap text-[var(--platinum)]">
            {transformation.headline}
          </KineticHeadline>
          <KineticCopy className="copy-lead mt-6">{transformation.subline}</KineticCopy>
        </KineticBlock>

        <div className="journey-timeline mt-14">
          {transformation.phases.map((phase, i) => (
            <motion.article
              key={phase.phase}
              className={`journey-phase gpu-layer ${i % 2 === 1 ? 'journey-phase--reverse' : ''}`}
              variants={i % 2 ? variants.slideLeft : variants.slideRight}
              initial={reduced ? false : 'hidden'}
              whileInView={reduced ? undefined : 'visible'}
              viewport={viewportOnce()}
              transition={{ ...spring.liquid, delay: i * 0.06 }}
            >
              <div className="journey-phase-copy">
                <span className="journey-phase-num font-ritual">{phase.phase}</span>
                <h3 className="journey-phase-title font-display mt-3 text-[var(--platinum)] md:text-3xl">
                  {phase.title}
                </h3>
                <p className="copy-cinematic mt-4">{phase.body}</p>
              </div>
              <FilmFrame aspect="cinematic" delay={i * 0.05}>
                <ParallaxLayer speed={0.1 + i * 0.02}>
                  <div className="journey-phase-visual">
                    <CinematicImage
                      image={phase.image}
                      alt={phase.image.alt}
                      preset="card"
                      fill
                    />
                  </div>
                </ParallaxLayer>
              </FilmFrame>
            </motion.article>
          ))}
        </div>
      </div>
    </FilmChapter>
  )
}

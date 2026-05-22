import { motion } from 'framer-motion'
import { landingConfig } from '../../data/landingConfig'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import ParallaxLayer from '../cinematic/ParallaxLayer'
import CinematicImage from '../ui/CinematicImage'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import { spring, variants, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'

function JourneyPhase({ phase, i, reduced, phone }) {
  const body = (
    <>
      <div className="journey-phase-copy">
        <span className="journey-phase-num font-ritual">{phase.phase}</span>
        <h3 className="journey-phase-title font-display mt-3 text-[var(--platinum)] md:text-3xl">
          {phase.title}
        </h3>
        <p className="copy-cinematic mt-4">{phase.body}</p>
      </div>
      <FilmFrame aspect="cinematic" delay={reduced || phone ? 0 : i * 0.05}>
        <ParallaxLayer speed={0.1 + i * 0.02}>
                  <div className="journey-phase-visual journey-phase-visual--depth">
                    <CinematicImage
                      image={phase.image}
                      alt={phase.image.alt}
                      preset="card"
                      fill
                      priority={phone && i < 2}
                    />
          </div>
        </ParallaxLayer>
      </FilmFrame>
    </>
  )

  if (reduced || phone) {
    return (
      <article
        className={`journey-phase ${i % 2 === 1 ? 'journey-phase--reverse' : ''}`}
      >
        {body}
      </article>
    )
  }

  return (
    <motion.article
      className={`journey-phase gpu-layer ${i % 2 === 1 ? 'journey-phase--reverse' : ''}`}
      variants={i % 2 ? variants.slideLeft : variants.slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      transition={{ ...spring.glide, delay: 0.06 + i * 0.05 }}
    >
      {body}
    </motion.article>
  )
}

export default function TransformationScene() {
  const { transformation } = landingConfig
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  return (
    <FilmChapter id="journey" className="landing-scene--journey" depthIndex={3}>
      {!phone ? <CinematicAtmosphere intensity="section" /> : null}

      <div className="landing-scene-inner landing-scene-inner--editorial chamber">
        <EditorialChapterHead
          sceneId="journey"
          ritual={transformation.ritual}
          headline={transformation.headline}
          subline={transformation.subline}
        />

        <div className="journey-timeline mt-14">
          {transformation.phases.map((phase, i) => (
            <JourneyPhase key={phase.phase} phase={phase} i={i} reduced={reduced} phone={phone} />
          ))}
        </div>
      </div>
    </FilmChapter>
  )
}

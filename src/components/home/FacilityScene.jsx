import { motion } from 'framer-motion'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import MagneticButton from '../ui/MagneticButton'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import ParallaxLayer from '../cinematic/ParallaxLayer'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import CinematicImage from '../ui/CinematicImage'
import SwipeableSceneCards from '../cinematic/SwipeableSceneCards'
import { KineticBlock, KineticCopy, KineticHeadline, KineticRitual } from '../cinematic/TypographyKinetic'
import { spring, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function GallerySlide({ image, alt }) {
  return (
    <div className="facility-gallery-slide">
      <CinematicImage image={image} alt={alt} preset="section" fill />
      <div className="facility-gallery-scrim" aria-hidden />
    </div>
  )
}

export default function FacilityScene() {
  const { facility } = landingConfig
  const reduced = useReducedMotion()

  return (
    <FilmChapter id="facility" className="landing-scene--facility" depthIndex={4} atmosphere="hero">
      <CinematicAtmosphere intensity="hero" />
      <CinematicBackdrop
        image={facility.image}
        alt={facility.image.alt}
        preset="section"
        scrim="lateral"
        imageClassName="opacity-25 md:opacity-20"
      />

      <div className="relative z-10 landing-scene-inner chamber">
        <div className="facility-grid">
          <KineticBlock className="facility-copy max-w-xl">
            <KineticRitual className="section-ritual-gap">{facility.ritual}</KineticRitual>
            <KineticHeadline className="headline-chapter headline-emotional font-display section-headline-gap text-[var(--platinum)]">
              {facility.headline}
            </KineticHeadline>
            <KineticCopy className="copy-lead mt-6">{facility.subline}</KineticCopy>

            <ul className="facility-features mt-10">
              {facility.features.map((f, i) => (
                <motion.li
                  key={f.label}
                  className="facility-feature"
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce()}
                  transition={{ ...spring.liquid, delay: i * 0.05 }}
                >
                  <span className="facility-feature-label font-display">{f.label}</span>
                  <span className="facility-feature-detail font-ritual">{f.detail}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 hidden md:block">
              <MagneticButton to={routes.locations} variant="ghost">
                Tour the chambers
              </MagneticButton>
            </div>
          </KineticBlock>

          <FilmFrame aspect="cinematic" bleed className="facility-hero-frame hidden md:block">
            <ParallaxLayer speed={0.14}>
              <div className="facility-hero-visual">
                <CinematicImage
                  image={facility.image}
                  alt={facility.image.alt}
                  preset="section"
                  fill
                />
              </div>
            </ParallaxLayer>
          </FilmFrame>
        </div>

        <div className="swipeable-scenes-bleed mt-10 lg:hidden">
          <SwipeableSceneCards>
            {facility.gallery.map((img) => (
              <GallerySlide key={img.id} image={img} alt={img.alt} />
            ))}
          </SwipeableSceneCards>
        </div>

        <div className="facility-gallery-desktop mt-16 hidden gap-4 lg:grid lg:grid-cols-3">
          {facility.gallery.map((img, i) => (
            <FilmFrame key={img.id} aspect="cinematic" delay={i * 0.08}>
              <div className="facility-gallery-slide">
                <CinematicImage image={img} alt={img.alt} preset="card" fill />
              </div>
            </FilmFrame>
          ))}
        </div>
      </div>
    </FilmChapter>
  )
}

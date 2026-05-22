import { motion } from 'framer-motion'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import MagneticButton from '../ui/MagneticButton'
import AmbientFilmLayer from '../cinematic/AmbientFilmLayer'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import ParallaxLayer from '../cinematic/ParallaxLayer'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import CinematicImage from '../ui/CinematicImage'
import SwipeableSceneCards from '../cinematic/SwipeableSceneCards'
import { spring, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsPhone } from '../../hooks/useIsPhone'

function GallerySlide({ image, alt, priority = false }) {
  return (
    <div className="facility-gallery-slide facility-gallery-slide--depth">
      <CinematicImage image={image} alt={alt} preset="section" fill priority={priority} />
      <div className="facility-gallery-scrim" aria-hidden />
    </div>
  )
}

export default function FacilityScene() {
  const { facility } = landingConfig
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  return (
    <FilmChapter id="facility" className="landing-scene--facility" depthIndex={4} atmosphere="hero">
      <AmbientFilmLayer slot="facility" className="facility-scene-film" intensity="low" />
      {!phone ? <CinematicAtmosphere intensity="hero" /> : null}
      <CinematicBackdrop
        image={facility.image}
        alt={facility.image.alt}
        priority={phone}
        preset="section"
        scrim="lateral"
        imageClassName="opacity-25 md:opacity-20"
      />

      <div className="relative z-10 landing-scene-inner landing-scene-inner--editorial chamber">
        <div className="facility-grid">
          <div className="facility-copy max-w-xl">
            <EditorialChapterHead
              sceneId="facility"
              ritual={facility.ritual}
              headline={facility.headline}
              subline={facility.subline}
            />

            <ul className="facility-features mt-10">
              {facility.features.map((f, i) => (
                reduced || phone ? (
                  <li key={f.label} className="facility-feature">
                    <span className="facility-feature-label font-display">{f.label}</span>
                    <span className="facility-feature-detail font-ritual">{f.detail}</span>
                  </li>
                ) : (
                <motion.li
                  key={f.label}
                  className="facility-feature"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce()}
                  transition={{ ...spring.glide, delay: 0.12 + i * 0.06 }}
                >
                  <span className="facility-feature-label font-display">{f.label}</span>
                  <span className="facility-feature-detail font-ritual">{f.detail}</span>
                </motion.li>
                )
              ))}
            </ul>

            <div className="mt-10 hidden md:block">
              <MagneticButton to={routes.locations} variant="ghost">
                Tour the chambers
              </MagneticButton>
            </div>
          </div>

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
            {facility.gallery.map((img, i) => (
              <GallerySlide key={img.id} image={img} alt={img.alt} priority={phone && i === 0} />
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

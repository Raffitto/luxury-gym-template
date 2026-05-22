import { MapPin, Navigation } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'
import { useIsPhone } from '../../hooks/useIsPhone'
import FilmChapter from '../cinematic/FilmChapter'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import MagneticButton from '../ui/MagneticButton'

export default function LocationDirectionsScene() {
  const loc = activeConfig.location
  const phone = useIsPhone()

  if (!loc) return null

  return (
    <FilmChapter id="location" className="landing-scene--location" depthIndex={4}>
      <CinematicBackdrop
        image={loc.image ?? { id: 'facility', alt: loc.image?.alt }}
        alt={loc.image?.alt ?? 'Grind Gym Mtaileb'}
        priority={phone}
        preset="section"
        scrim="lateral"
        imageClassName="opacity-22 md:opacity-18"
      />

      <div className="relative z-10 landing-scene-inner landing-scene-inner--editorial chamber">
        <EditorialChapterHead
          sceneId="location"
          ritual={loc.ritual}
          headline={loc.headline}
          subline={loc.subline}
        />

        <div className="grind-location-card mt-10 edge-lit">
          <div className="grind-location-pin">
            <MapPin className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} aria-hidden />
            <div>
              <p className="font-display text-xl text-[var(--platinum)]">{loc.name}</p>
              <p className="mt-2 font-ritual text-[var(--silver)]">{loc.category}</p>
            </div>
          </div>

          <p className="grind-location-address mt-6 font-ritual text-[var(--platinum)]">
            {loc.plusCode}, {loc.city}, {loc.country}
          </p>
          {loc.addressAr ? (
            <p className="mt-2 font-ritual text-[var(--ash)]" dir="rtl" lang="ar">
              {loc.addressAr}
            </p>
          ) : null}

          <div className="grind-location-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={loc.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn magnetic-btn--primary grind-directions-btn inline-flex items-center justify-center gap-2"
            >
              <Navigation className="h-4 w-4" strokeWidth={2} aria-hidden />
              {loc.directionsLabel}
            </a>
            <MagneticButton to={routes.membership} variant="ghost">
              View Membership
            </MagneticButton>
          </div>
        </div>
      </div>
    </FilmChapter>
  )
}

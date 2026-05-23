import { activeConfig } from '../../data/activeConfig'
import GrindImage from '../../components/grind/GrindImage'

export default function GrindLocationsPage() {
  const { location, locations, pageCopy } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Location</p>
          <h1 className="g-title">{pageCopy.locations.headline}</h1>
          <p className="g-lead">{pageCopy.locations.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container g-location">
          <div>
            <h2 className="g-title text-4xl">{locations[0]?.city}</h2>
            <p className="g-location__address mt-4">
              {location.plusCode}, {location.city}, {location.country}
            </p>
            {location.addressAr ? (
              <p className="g-location__ar" dir="rtl" lang="ar">
                {location.addressAr}
              </p>
            ) : null}
            <p className="mt-6 text-[var(--g-muted)] leading-relaxed">{locations[0]?.descriptor}</p>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="g-btn g-btn--primary mt-8"
            >
              {location.directionsLabel}
            </a>
          </div>
          <div className="g-location__visual">
            <GrindImage image={location.image} alt={location.image.alt} preset="section" />
          </div>
        </div>
      </section>
    </>
  )
}

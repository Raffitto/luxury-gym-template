import { activeConfig } from '../../data/activeConfig'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import GrindImage from '../../components/grind/GrindImage'

export default function GrindHomePage() {
  const { hero, classes, googleReviews, location, climax } = activeConfig
  const facility = landingConfig.facility
  const mapsUrl = location.googleMapsUrl
  const bars = googleReviews.distribution ?? [0, 0, 0, 2, 18]
  const maxBar = Math.max(...bars, 1)

  return (
    <>
      <section className="g-hero">
        <div className="g-hero__media">
          <GrindImage image={hero.image} alt={hero.image.alt} preset="hero" priority />
        </div>
        <div className="g-hero__scrim" aria-hidden />
        <div className="g-hero__content">
          <p className="g-hero__location">Mtaileb, Lebanon</p>
          <h1 className="g-hero__title">
            {hero.headline.join(' ')}
          </h1>
          <p className="g-hero__sub">{hero.subline}</p>
          <div className="g-hero__actions">
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--primary"
              >
                {hero.primaryCta}
              </a>
            ) : null}
            <a href="#training" className="g-btn g-btn--ghost">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section id="training" className="g-section">
        <div className="g-container">
          <div className="g-section-head">
            <p className="g-eyebrow">Training</p>
            <h2 className="g-title">Zones on the floor</h2>
            <p className="g-lead">
              Strength machines, turf, cardio, and free weights — each zone built for serious
              training under premium light.
            </p>
          </div>
        </div>
        <div className="g-rail">
          <div className="g-rail__track">
            {classes.map((program) => (
              <article key={program.name} className="g-rail__card">
                <div className="g-rail__img">
                  <GrindImage
                    image={program.image}
                    alt={program.image.alt}
                    preset="card"
                    sizes="(max-width: 1024px) 82vw, 320px"
                  />
                </div>
                <div className="g-rail__body">
                  <p className="g-rail__meta">
                    {program.duration} · {program.intensity}
                  </p>
                  <h3 className="g-rail__name">{program.name}</h3>
                  <p className="g-rail__desc">{program.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="g-section g-section--tight">
        <div className="g-container">
          <div className="g-section-head">
            <p className="g-eyebrow">Facility</p>
            <h2 className="g-title">{facility.headline}</h2>
            <p className="g-lead">{facility.subline}</p>
          </div>
          <div className="g-gallery">
            <div className="g-gallery__item g-gallery__main">
              <GrindImage image={facility.image} alt={facility.image.alt} preset="section" />
              <span className="g-gallery__label">{facility.features[0]?.label}</span>
            </div>
            {facility.gallery.slice(0, 2).map((img, i) => (
              <div key={i} className="g-gallery__item">
                <GrindImage image={img} alt={img.alt} preset="card" />
                <span className="g-gallery__label">{facility.features[i + 1]?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="g-section g-reviews">
        <div className="g-container">
          <div className="g-section-head g-section-head--center">
            <p className="g-eyebrow">Reviews</p>
            <h2 className="g-title">{googleReviews.headline}</h2>
            <p className="g-lead">{googleReviews.trustLine}</p>
          </div>
          <div className="g-reviews__grid">
            <div>
              <p className="g-reviews__score">{googleReviews.rating}</p>
              <p className="g-reviews__stars" aria-hidden>
                ★★★★★
              </p>
              <p className="g-reviews__count">{googleReviews.countLabel}</p>
            </div>
            <div className="g-reviews__bars" aria-label="Rating distribution">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = bars[stars - 1] ?? 0
                const pct = Math.round((count / maxBar) * 100)
                return (
                  <div key={stars} className="g-reviews__row">
                    <span className="text-sm text-[var(--g-dim)]">{stars}</span>
                    <div className="g-reviews__bar">
                      <div className="g-reviews__fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="g-section">
        <div className="g-container g-location">
          <div>
            <p className="g-eyebrow">Location</p>
            <h2 className="g-title">{location.headline}</h2>
            <p className="g-lead">{location.subline}</p>
            <p className="g-location__address">
              <strong>{location.name}</strong>
              <br />
              {location.plusCode}, {location.city}, {location.country}
            </p>
            {location.addressAr ? (
              <p className="g-location__ar" dir="rtl" lang="ar">
                {location.addressAr}
              </p>
            ) : null}
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="g-btn g-btn--primary mt-8"
              >
                {location.directionsLabel}
              </a>
            ) : null}
          </div>
          <div className="g-location__visual">
            <GrindImage image={location.image} alt={location.image.alt} preset="section" />
          </div>
        </div>
      </section>

      <section className="g-section g-join">
        <div className="g-join__bg">
          <GrindImage image={climax.image} alt={climax.image.alt} preset="section" />
        </div>
        <div className="g-join__scrim" aria-hidden />
        <div className="g-container g-join__inner">
          <p className="g-eyebrow">Join</p>
          <h2 className="g-title">
            {Array.isArray(climax.headline) ? climax.headline.join(' ') : climax.headline}
          </h2>
          <p className="g-lead">{climax.subline}</p>
          <div className="g-join__actions">
            <a href={routes.membership} className="g-btn g-btn--primary">
              {climax.secondaryCta}
            </a>
            <a href={routes.classes} className="g-btn g-btn--ghost">
              View all training
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

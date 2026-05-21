import { ExternalLink, Star } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-[var(--color-yellow)] text-[var(--color-yellow)]' : 'text-white/20'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const { reviews, googleRating } = activeConfig

  return (
    <SectionReveal id="reviews" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.reviews.eyebrow}
          title={reviews.headline}
          subtitle={reviews.subheadline}
        />

        <div className="mb-6 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center sm:mb-8 sm:flex-row sm:gap-6 sm:px-6 sm:py-5">
          <p className="font-display text-4xl text-[var(--color-yellow)] sm:text-5xl">
            {googleRating.score}
          </p>
          <div>
            <Stars rating={Math.round(googleRating.score)} />
            <p className="mt-1 text-xs text-[var(--color-gray)] sm:text-sm">
              {googleRating.count} Google reviews
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 md:grid md:grid-cols-3 md:gap-5">
          {reviews.items.map((review) => (
            <article key={review.id} className="glass-card rounded-2xl p-5 sm:p-6">
              <Stars rating={review.rating} />
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-4">{review.text}</p>
              <p className="mt-3 text-xs tracking-wide text-[var(--color-gray)] uppercase sm:mt-4">
                {review.name} · {review.date}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:justify-center sm:gap-3">
          <Button
            href={googleRating.reviewUrl}
            variant="secondary"
            icon={ExternalLink}
            fullWidth
            ariaLabel="Review us on Google"
          >
            {activeConfig.copy.reviewOnGoogleCta}
          </Button>
          <Button
            href={activeConfig.location.googleMapsUrl}
            variant="ghost"
            icon={ExternalLink}
            fullWidth
            className="sm:w-auto"
            ariaLabel={activeConfig.copy.seeLocationCta}
          >
            {activeConfig.copy.seeLocationCta}
          </Button>
        </div>
      </div>
    </SectionReveal>
  )
}

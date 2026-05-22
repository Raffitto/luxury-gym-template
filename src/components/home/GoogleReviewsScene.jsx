import { activeConfig } from '../../data/activeConfig'
import { useIsPhone } from '../../hooks/useIsPhone'
import FilmChapter from '../cinematic/FilmChapter'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function StarRow({ filled = 5 }) {
  return (
    <span className="grind-stars" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < filled ? 'grind-star grind-star--on' : 'grind-star'}>
          ★
        </span>
      ))}
    </span>
  )
}

export default function GoogleReviewsScene() {
  const reviews = activeConfig.googleReviews
  const reduced = useReducedMotion()
  const phone = useIsPhone()

  if (!reviews) return null

  const bars = reviews.distribution ?? [0, 0, 0, 1, 19]
  const maxBar = Math.max(...bars, 1)

  return (
    <FilmChapter id="reviews" className="landing-scene--reviews" depthIndex={3}>
      <div className="landing-scene-inner landing-scene-inner--editorial chamber">
        <EditorialChapterHead
          sceneId="reviews"
          ritual={reviews.ritual}
          headline={reviews.headline}
          subline={reviews.subline}
        />

        <div className="grind-reviews-card mt-10 edge-lit">
          <div className="grind-reviews-score">
            <p className="grind-reviews-rating font-display">{reviews.rating}</p>
            <StarRow filled={5} />
            <p className="grind-reviews-count font-ritual">{reviews.countLabel}</p>
            <p className="grind-reviews-source font-ritual">{reviews.sourceLabel}</p>
          </div>

          <div className="grind-reviews-bars" aria-label="Review rating distribution">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = bars[stars - 1] ?? 0
              const pct = Math.round((count / maxBar) * 100)
              return (
                <div key={stars} className="grind-review-bar-row">
                  <span className="grind-review-bar-label font-ritual">{stars}</span>
                  <div className="grind-review-bar-track">
                    <div
                      className="grind-review-bar-fill"
                      style={
                        reduced || phone
                          ? { width: `${pct}%` }
                          : { width: `${pct}%` }
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <p className="grind-reviews-trust font-ritual">{reviews.trustLine}</p>
        </div>
      </div>
    </FilmChapter>
  )
}

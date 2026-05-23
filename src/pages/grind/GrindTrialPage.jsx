import { Link } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'

/** Visit / trial — routes to membership & location, no duplicate directions stack */
export default function GrindTrialPage() {
  const { trial } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Visit</p>
          <h1 className="g-title">{trial.headline}</h1>
          <p className="g-lead">{trial.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container max-w-xl">
          <ol className="space-y-4">
            {trial.steps.map((step, i) => (
              <li key={step} className="flex gap-4 text-[var(--g-muted)]">
                <span className="font-semibold text-[var(--g-accent)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3 mt-10">
            <Link to="/locations" className="g-btn g-btn--primary">
              Location & directions
            </Link>
            <Link to="/membership" className="g-btn g-btn--ghost">
              Membership options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

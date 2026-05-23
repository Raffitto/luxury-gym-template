import { activeConfig } from '../../data/activeConfig'

export default function GrindMembershipPage() {
  const { membership, pageCopy } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Membership</p>
          <h1 className="g-title">{pageCopy.membership.headline}</h1>
          <p className="g-lead">{pageCopy.membership.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container g-card-grid g-card-grid--3">
          {membership.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`g-card g-tier ${tier.featured ? 'g-tier--featured' : ''}`}
            >
              <p className="g-eyebrow">{tier.note}</p>
              <h3>{tier.name}</h3>
              <p className="text-sm text-[var(--g-muted)] mt-1">{tier.descriptor}</p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--g-muted)]">
                {tier.features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="g-container mt-10 text-center text-sm text-[var(--g-dim)]">
          Visit the gym in Mtaileb to discuss options at the front desk.
        </p>
      </section>
    </>
  )
}

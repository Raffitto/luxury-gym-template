import { activeConfig } from '../../data/activeConfig'

export default function GrindTrainersPage() {
  const { pageCopy } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Coaching</p>
          <h1 className="g-title">{pageCopy.trainers.headline}</h1>
          <p className="g-lead">{pageCopy.trainers.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container max-w-2xl">
          <p className="text-[var(--g-muted)] leading-relaxed">
            Coaching is available on the floor. Ask at the front desk during your visit for
            session availability and programming support.
          </p>
        </div>
      </section>
    </>
  )
}

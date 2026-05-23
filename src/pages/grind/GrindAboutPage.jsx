import { activeConfig } from '../../data/activeConfig'
import GrindImage from '../../components/grind/GrindImage'

export default function GrindAboutPage() {
  const { about, pageCopy, pageHero } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">About</p>
          <h1 className="g-title">{pageCopy.about.headline}</h1>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[var(--g-muted)] leading-relaxed text-lg">{about.origin}</p>
            <ul className="mt-8 space-y-3">
              {about.principles.map((p) => (
                <li key={p} className="flex gap-3 text-[var(--g-text)]">
                  <span className="text-[var(--g-accent)]">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="g-location__visual min-h-[20rem]">
            <GrindImage image={pageHero.about} alt={pageHero.about.alt} preset="section" />
          </div>
        </div>
      </section>
    </>
  )
}

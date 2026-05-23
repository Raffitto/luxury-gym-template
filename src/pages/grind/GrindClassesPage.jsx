import { Link } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'
import GrindImage from '../../components/grind/GrindImage'

export default function GrindClassesPage() {
  const { classes, pageCopy } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Training</p>
          <h1 className="g-title">{pageCopy.classes.headline}</h1>
          <p className="g-lead">{pageCopy.classes.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container g-card-grid g-card-grid--2">
          {classes.map((program) => (
            <article key={program.name} className="g-card overflow-hidden !p-0">
              <div className="aspect-[16/10]">
                <GrindImage image={program.image} alt={program.image.alt} preset="card" />
              </div>
              <div className="p-6">
                <p className="g-eyebrow !text-[0.6rem]">
                  {program.duration} · {program.intensity}
                </p>
                <h3>{program.name}</h3>
                <p>{program.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="g-container mt-12 text-center">
          <Link to="/membership" className="g-btn g-btn--primary">
            View membership
          </Link>
        </div>
      </section>
    </>
  )
}

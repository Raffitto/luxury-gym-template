import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import CinematicImage from '../components/ui/CinematicImage'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition, viewportOnce } from '../motion/choreography'

export default function TrainersPage() {
  const { pageHero, architects } = aetherisConfig

  return (
    <>
      <PageHero
        ritual={aetherisConfig.pageCopy.trainers.ritual}
        headline={aetherisConfig.pageCopy.trainers.headline}
        subline={aetherisConfig.pageCopy.trainers.subline}
        align="center"
        image={pageHero.trainers}
      />

      <section className="page-body chamber-inner">
        {architects.map((architect, i) => (
          <motion.article
            key={architect.name}
            className={`mb-24 grid items-center gap-10 lg:grid-cols-2 ${
              i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce('-8%')}
            transition={transition.cinematic(1)}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <CinematicImage
                image={architect.image}
                alt={architect.image.alt}
                preset="portrait"
                sizes="(max-width: 1024px) 100vw, 50vw"
                fill
                className="grayscale contrast-[1.06] transition duration-1000 hover:grayscale-[0.2] [&_.cinematic-img]:object-top"
              />
            </div>
            <div className={i % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'}>
              <p className="font-ritual text-[var(--accent)]">{architect.role}</p>
              <h2 className="font-display headline-section mt-4 text-[var(--platinum)]">
                {architect.name}
              </h2>
              <p className="body-measured mt-6">{architect.specialty}</p>
              <div className="ritual-divider mt-10 w-24" />
              <p className="mt-6 text-sm text-[var(--ash)]">
                Assignment by house assessment only. No walk-in sessions.
              </p>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  )
}

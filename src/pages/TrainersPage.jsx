import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition, viewportOnce } from '../motion/choreography'

export default function TrainersPage() {
  return (
    <>
      <PageHero
        ritual="Chamber · Architect Registry"
        headline="Not trainers. Architects."
        subline="Each practitioner is selected for mastery, precision, and the ability to engineer identity through load."
        align="center"
      />

      <section className="chamber-inner chamber !pt-0">
        {aetherisConfig.architects.map((architect, i) => (
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
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={architect.image}
                alt=""
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-1000"
                loading="lazy"
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
                Assignment by continuum assessment only. No walk-in sessions.
              </p>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  )
}

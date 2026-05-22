import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'
import CinematicImage from '../ui/CinematicImage'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import { transition, viewportOnce } from '../../motion/choreography'

export default function LocationsSection() {
  return (
    <section className="relative">
      <div className="chamber-inner chamber">
        <ChamberReveal>
          <RitualLabel>Sequence 08 · Chambers</RitualLabel>
          <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
            Global performance chambers.
          </h2>
        </ChamberReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {activeConfig.locations.map((loc, i) => (
            <motion.div
              key={loc.code}
              className="group relative aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.8, i * 0.1)}
            >
              <CinematicImage
                image={loc.image}
                alt={loc.image.alt}
                preset="card"
                sizes="(max-width: 768px) 100vw, 33vw"
                fill
                className="transition duration-700 group-hover:[&_.cinematic-img]:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/35 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <p className="font-ritual text-[var(--accent)]">{loc.code}</p>
                <h3 className="font-display text-3xl text-[var(--platinum)]">{loc.city}</h3>
                <p className="mt-1 text-sm text-[var(--silver)]">{loc.descriptor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to={routes.locations} className="font-ritual text-[var(--silver)] transition hover:text-[var(--platinum)]">
            Explore all chambers →
          </Link>
        </div>
      </div>
    </section>
  )
}

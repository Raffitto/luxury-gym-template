import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'
import CinematicImage from '../ui/CinematicImage'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal, { StaggerChamber } from '../ui/ChamberReveal'
import { variants, transition } from '../../motion/choreography'

export default function ArchitectsSection() {
  return (
    <section className="env-chamber relative">
      <div className="chamber-inner chamber">
        <ChamberReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <RitualLabel>Sequence 04 · Architects</RitualLabel>
            <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
              Elite performance architects.
            </h2>
          </div>
          <Link
            to={routes.trainers}
            className="group inline-flex items-center gap-2 font-ritual text-[var(--silver)] transition hover:text-[var(--platinum)]"
          >
            View all architects
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" strokeWidth={1} />
          </Link>
        </ChamberReveal>

        <StaggerChamber className="mt-16 grid gap-8 md:grid-cols-3">
          {activeConfig.architects.map((architect) => (
            <motion.article
              key={architect.name}
              variants={variants.scalePresence}
              transition={transition.cinematic(0.8)}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <CinematicImage
                  image={architect.image}
                  alt={architect.image.alt}
                  preset="portrait"
                  sizes="(max-width: 768px) 90vw, 30vw"
                  fill
                  className="grayscale transition duration-700 group-hover:grayscale-[0.15] [&_.cinematic-img]:object-top group-hover:[&_.cinematic-img]:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/20 to-transparent" />
              </div>
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <p className="font-ritual text-[var(--accent)]">{architect.role}</p>
                <h3 className="font-display mt-2 text-2xl text-[var(--platinum)]">{architect.name}</h3>
                <p className="mt-2 text-sm text-[var(--silver)]">{architect.specialty}</p>
              </div>
            </motion.article>
          ))}
        </StaggerChamber>
      </div>
    </section>
  )
}

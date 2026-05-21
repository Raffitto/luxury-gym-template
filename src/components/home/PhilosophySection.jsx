import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import CinematicImage from '../ui/CinematicImage'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal, { StaggerChamber } from '../ui/ChamberReveal'
import { variants, transition } from '../../motion/choreography'

export default function PhilosophySection() {
  const { philosophy } = aetherisConfig

  return (
    <section className="env-chamber env-depth relative">
      <div className="chamber-inner chamber-tight">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <ChamberReveal>
            <RitualLabel>{philosophy.ritual}</RitualLabel>
            <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
              {philosophy.headline}
            </h2>
            <p className="body-measured mt-8 max-w-md">
              This is not fitness culture. This is a belief system for those who understand that
              identity is not discovered — it is engineered through ritual, load, and refusal to
              remain.
            </p>
          </ChamberReveal>

          <motion.div
            className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={transition.cinematic(0.9)}
          >
            <CinematicImage
              image={philosophy.image}
              alt={philosophy.image.alt}
              preset="portrait"
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="absolute inset-0 h-full w-full object-cover grayscale-[0.35] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-transparent to-[var(--void)]/30" />
          </motion.div>
        </div>

        <StaggerChamber className="mt-14 space-y-6 lg:mt-16">
          {philosophy.pillars.map((pillar) => (
            <motion.article
              key={pillar.index}
              variants={variants.riseSubtle}
              transition={transition.cinematic(0.75)}
              className="glass-layer edge-lit p-8 md:p-10"
            >
              <span className="font-ritual text-[var(--accent)]">{pillar.index}</span>
              <h3 className="font-display headline-section mt-4 text-[var(--platinum)]">
                {pillar.title}
              </h3>
              <p className="body-measured mt-4">{pillar.body}</p>
            </motion.article>
          ))}
        </StaggerChamber>
      </div>
    </section>
  )
}

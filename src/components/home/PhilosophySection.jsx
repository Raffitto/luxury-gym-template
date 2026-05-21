import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal, { StaggerChamber } from '../ui/ChamberReveal'
import { variants, transition } from '../../motion/choreography'

export default function PhilosophySection() {
  const { philosophy } = aetherisConfig

  return (
    <section className="env-chamber env-depth relative">
      <div className="chamber-inner chamber-tight">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
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

          <StaggerChamber className="space-y-6">
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
      </div>
    </section>
  )
}

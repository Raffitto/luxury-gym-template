import { motion } from 'framer-motion'
import { activeConfig } from '../../data/activeConfig'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal, { StaggerChamber } from '../ui/ChamberReveal'
import { variants, transition } from '../../motion/choreography'

export default function ProofSection() {
  const { proof } = activeConfig

  return (
    <section className="env-depth">
      <div className="chamber-inner chamber">
        <ChamberReveal>
          <RitualLabel>{proof.ritual}</RitualLabel>
          <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
            {proof.headline}
          </h2>
        </ChamberReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <StaggerChamber className="space-y-10">
            {proof.testimonials.map((t) => (
              <motion.blockquote
                key={t.author}
                variants={variants.riseSubtle}
                transition={transition.cinematic(0.75)}
                className="border-l border-[var(--accent)]/40 pl-8"
              >
                <p className="font-display text-2xl leading-snug text-[var(--platinum)] md:text-3xl">
                  "{t.quote}"
                </p>
                <cite className="mt-6 block font-ritual not-italic text-[var(--ash)]">{t.author}</cite>
              </motion.blockquote>
            ))}
          </StaggerChamber>

          <div className="grid gap-px bg-[var(--edge)]">
            {proof.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="bg-[var(--surface)] p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={transition.cinematic(0.6, i * 0.1)}
              >
                <p className="font-display text-4xl text-[var(--accent)]">{m.value}</p>
                <p className="mt-2 font-ritual text-[var(--ash)]">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

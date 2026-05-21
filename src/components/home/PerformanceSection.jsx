import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import { variants, transition, viewportOnce } from '../../motion/choreography'

export default function PerformanceSection() {
  const { performance } = aetherisConfig

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${performance.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--void)] via-[var(--void)]/95 to-[var(--void)]/70" />

      <div className="relative z-10 chamber-inner chamber-tight">
        <ChamberReveal className="max-w-2xl">
          <RitualLabel>{performance.ritual}</RitualLabel>
          <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
            {performance.headline}
          </h2>
          <p className="body-measured mt-6">{performance.subline}</p>
        </ChamberReveal>

        <div className="mt-20 grid gap-px bg-[var(--edge)] sm:grid-cols-2 lg:grid-cols-4">
          {performance.disciplines.map((d, i) => (
            <motion.div
              key={d.name}
              className="bg-[var(--surface)] p-8 md:p-10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.7, i * 0.08)}
            >
              <p className="font-ritual text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-display mt-4 text-xl text-[var(--platinum)]">{d.name}</h3>
              <p className="font-ritual mt-3 text-[var(--ash)]">{d.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

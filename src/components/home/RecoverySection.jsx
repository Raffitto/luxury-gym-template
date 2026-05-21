import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import { transition, viewportOnce } from '../../motion/choreography'

export default function RecoverySection() {
  const { recovery } = aetherisConfig

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(196,181,154,0.08),transparent)]" />
      <div className="chamber-inner chamber relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ChamberReveal>
            <RitualLabel>{recovery.ritual}</RitualLabel>
            <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
              {recovery.headline}
            </h2>
            <p className="body-measured mt-6">{recovery.subline}</p>
          </ChamberReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {recovery.modalities.map((m, i) => (
              <motion.div
                key={m.name}
                className="glass-layer-deep p-6"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce()}
                transition={transition.cinematic(0.7, i * 0.1)}
              >
                <h3 className="font-display text-lg text-[var(--platinum)]">{m.name}</h3>
                <p className="mt-2 font-ritual text-[var(--ash)]">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

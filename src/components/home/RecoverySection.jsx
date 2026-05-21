import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import CinematicImage from '../ui/CinematicImage'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import { transition, viewportOnce } from '../../motion/choreography'

export default function RecoverySection() {
  const { recovery } = aetherisConfig

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(196,181,154,0.06),transparent)]" />
      <div className="chamber-inner chamber relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ChamberReveal>
            <RitualLabel>{recovery.ritual}</RitualLabel>
            <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
              {recovery.headline}
            </h2>
            <p className="body-measured mt-6">{recovery.subline}</p>
          </ChamberReveal>

          <motion.div
            className="relative aspect-[4/3] overflow-hidden [&_.cinematic-img]:contrast-[1.05]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce()}
            transition={transition.cinematic(0.85)}
          >
            <CinematicImage
              image={recovery.image}
              alt={recovery.image.alt}
              preset="section"
              sizes="(max-width: 1024px) 100vw, 45vw"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--void)]/40" />
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {recovery.modalities.map((m, i) => (
            <motion.div
              key={m.name}
              className="glass-layer-deep p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.7, i * 0.08)}
            >
              <h3 className="font-display text-lg text-[var(--platinum)]">{m.name}</h3>
              <p className="mt-2 font-ritual text-[var(--ash)]">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

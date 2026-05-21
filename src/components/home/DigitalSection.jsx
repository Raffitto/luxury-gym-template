import { motion } from 'framer-motion'
import { Cpu, Activity, Moon, TrendingUp } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import { transition, viewportOnce } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const icons = [Activity, Cpu, Moon, TrendingUp]

export default function DigitalSection() {
  const { digital } = aetherisConfig
  const reduced = useReducedMotion()

  return (
    <section className="env-chamber env-depth">
      <div className="chamber-inner chamber">
        <ChamberReveal className="max-w-3xl">
          <RitualLabel>{digital.ritual}</RitualLabel>
          <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
            {digital.headline}
          </h2>
        </ChamberReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            className="glass-layer edge-lit relative aspect-square overflow-hidden p-8 lg:aspect-auto lg:min-h-[420px]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce()}
            transition={transition.cinematic(1)}
          >
            <div className="absolute inset-8 rounded-full border border-[var(--edge)]" />
            <div className="absolute inset-16 rounded-full border border-[var(--accent)]/20" />
            <motion.div
              className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
              animate={
                reduced
                  ? undefined
                  : {
                      boxShadow: [
                        '0 0 24px rgba(196,181,154,0.2)',
                        '0 0 48px rgba(196,181,154,0.35)',
                        '0 0 24px rgba(196,181,154,0.2)',
                      ],
                    }
              }
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="absolute bottom-8 left-8 font-ritual">AETHERIS OS · v4.2</p>
          </motion.div>

          <div className="space-y-4">
            {digital.features.map((feature, i) => {
              const Icon = icons[i] || Activity
              return (
                <motion.div
                  key={feature}
                  className="flex items-start gap-6 border-b border-[var(--edge)] py-6"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce()}
                  transition={transition.cinematic(0.6, i * 0.06)}
                >
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" strokeWidth={1} />
                  <p className="font-display text-xl text-[var(--platinum)]">{feature}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

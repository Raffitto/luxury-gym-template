import {
  Apple,
  CupSoda,
  Dumbbell,
  Flame,
  HeartPulse,
  Target,
  Trophy,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { activeConfig } from '../data/activeConfig'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  zap: Zap,
  'heart-pulse': HeartPulse,
  apple: Apple,
  trophy: Trophy,
  target: Target,
  'cup-soda': CupSoda,
}

export default function Services() {
  const reduced = useReducedMotion()

  return (
    <SectionReveal id="services" className="section-padding bg-[var(--color-surface)]/40">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.services.eyebrow}
          title={activeConfig.sections.services.title}
          subtitle={activeConfig.sections.services.subtitle}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {activeConfig.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Dumbbell
            const Card = reduced ? 'article' : motion.article
            return (
              <Card
                key={service.id}
                className="glass-card min-w-0 rounded-2xl p-5 sm:p-6"
                {...(reduced
                  ? {}
                  : {
                      whileHover: { y: -4 },
                      transition: { type: 'tween', duration: 0.25 },
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.15 },
                    })}
              >
                <div className="mb-4 inline-flex rounded-xl border border-[var(--color-yellow)]/20 bg-[var(--color-yellow)]/10 p-2.5 text-[var(--color-yellow)] sm:mb-5 sm:p-3">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-white uppercase sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray)] sm:mt-3">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

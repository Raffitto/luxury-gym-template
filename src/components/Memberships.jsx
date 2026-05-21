import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { activeConfig } from '../data/activeConfig'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { whatsappHref } from '../utils/links'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

export default function Memberships() {
  const reduced = useReducedMotion()

  return (
    <SectionReveal id="memberships" className="section-padding">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.memberships.eyebrow}
          title={activeConfig.sections.memberships.title}
          subtitle={activeConfig.sections.memberships.subtitle}
        />

        <div className="flex flex-col gap-4 sm:gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
          {activeConfig.memberships.map((plan) => {
            const Card = reduced ? 'article' : motion.article
            return (
            <Card
              key={plan.id}
              className={`relative min-w-0 rounded-2xl border p-5 sm:rounded-[var(--radius-xl)] sm:p-6 lg:p-8 ${
                plan.popular
                  ? 'border-[var(--color-yellow)]/50 bg-gradient-to-b from-[#1f1a00] to-[#121212] yellow-glow'
                  : 'glass-card border-white/10'
              }`}
              {...(reduced ? {} : { whileHover: { y: -4 }, transition: { type: 'tween', duration: 0.25 } })}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--color-yellow)] px-3 py-1 text-[10px] font-bold tracking-wide text-black uppercase sm:text-xs">
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  Most Popular
                </span>
              ) : null}

              <p className="font-display text-xl text-white uppercase sm:text-2xl">{plan.name}</p>
              <p className="mt-3 font-display text-4xl text-[var(--color-yellow)] sm:mt-4 sm:text-5xl">
                {plan.price}
                <span className="ml-1 text-sm text-white/50 sm:text-base">{plan.period}</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-gray)] sm:mt-3">{plan.description}</p>

              <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-yellow)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={whatsappHref(
                  activeConfig.whatsapp,
                  `Hi, I want the ${plan.name} membership (${plan.price}).`,
                )}
                variant={plan.popular ? 'primary' : 'secondary'}
                fullWidth
                className="mt-6 sm:mt-8"
                ariaLabel={plan.cta}
              >
                {plan.cta}
              </Button>
            </Card>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

import { Clock, MessageCircle } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { whatsappHref } from '../utils/links'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

export default function OfferSection() {
  const { offer } = activeConfig

  return (
    <SectionReveal id="offer" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.offer.eyebrow}
          title={offer.title}
          subtitle={offer.description}
        />

        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-yellow)]/30 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-black p-5 sm:rounded-[var(--radius-xl)] sm:p-8 md:p-12 yellow-glow">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[var(--color-yellow)]/15 blur-3xl sm:h-56 sm:w-56" />
          <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
            <div className="space-y-3 sm:space-y-5">
              <p className="font-display text-xs tracking-[0.2em] text-[var(--color-yellow)] uppercase sm:text-sm sm:tracking-[0.24em]">
                {offer.subtitle}
              </p>
              <p className="font-display text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {offer.price}
              </p>
              <p className="text-base text-white/80 sm:text-lg">{offer.priceNote}</p>
              <p className="text-sm leading-relaxed text-[var(--color-gray)] sm:text-base">
                {offer.description}
              </p>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--color-yellow)] uppercase sm:text-sm">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {offer.urgency}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                href={whatsappHref(
                  activeConfig.whatsapp,
                  `Hi, I'm interested in the ${offer.title} offer (${offer.price}).`,
                )}
                icon={MessageCircle}
                fullWidth
                ariaLabel={offer.cta}
              >
                {offer.cta}
              </Button>
              <p className="text-center text-xs text-white/50 sm:text-left sm:text-sm">
                {activeConfig.copy.startToday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

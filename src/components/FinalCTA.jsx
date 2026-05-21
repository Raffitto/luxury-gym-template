import { MessageCircle } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { whatsappHref } from '../utils/links'
import Button from './ui/Button'
import SectionReveal from './ui/SectionReveal'

export default function FinalCTA() {
  const { finalCta } = activeConfig

  return (
    <SectionReveal className="section-padding !pb-10 sm:!pb-12 md:!pb-16">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-yellow)]/25 bg-gradient-to-r from-[#1a1600] via-[#111] to-black px-[var(--page-gutter)] py-10 text-center sm:rounded-[var(--radius-xl)] sm:px-10 sm:py-14 yellow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,229,0,0.12),transparent_60%)]" />
          <div className="relative space-y-4 sm:space-y-5">
            <h2 className="font-display mx-auto max-w-[14ch] text-[clamp(1.75rem,7.5vw,2rem)] leading-[0.95] text-white uppercase sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl">
              {finalCta.headline}
            </h2>
            <p className="mx-auto max-w-md text-sm text-[var(--color-gray)] sm:text-base">
              {finalCta.subheadline}
            </p>
            <Button
              href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
              icon={MessageCircle}
              fullWidth
              className="mx-auto max-w-md"
              ariaLabel={finalCta.cta}
            >
              {finalCta.cta}
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

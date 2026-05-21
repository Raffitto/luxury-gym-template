import { ArrowRight } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { whatsappHref } from '../utils/links'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

export default function Transformations() {
  const { transformations } = activeConfig

  return (
    <SectionReveal id="results" className="section-padding bg-[var(--color-surface)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.transformations.eyebrow}
          title={transformations.headline}
          subtitle={transformations.subheadline}
        />

        <div className="flex flex-col gap-3 sm:gap-4 md:grid md:grid-cols-3 md:gap-5">
          {transformations.items.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="grid min-h-[200px] grid-cols-2 sm:min-h-[240px] md:min-h-[280px]">
                <div className="flex flex-col justify-end bg-gradient-to-br from-[#2a2a2a] to-[#111] p-3 sm:p-4">
                  <p className="text-[10px] tracking-[0.18em] text-white/50 uppercase sm:text-xs">
                    Before
                  </p>
                </div>
                <div className="flex flex-col justify-end bg-gradient-to-br from-[#3a3200] to-[#1a1600] p-3 sm:p-4">
                  <p className="text-[10px] tracking-[0.18em] text-[var(--color-yellow)] uppercase sm:text-xs">
                    After
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 sm:p-5">
                <p className="font-display text-xl text-white uppercase sm:text-2xl">{item.label}</p>
                <p className="mt-1 text-xs text-[var(--color-gray)] sm:text-sm">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Button
            href={whatsappHref(
              activeConfig.whatsapp,
              'Hi, I want to book a transformation consultation.',
            )}
            icon={ArrowRight}
            fullWidth
            className="max-w-md sm:w-auto"
            ariaLabel={transformations.cta}
          >
            {transformations.cta}
          </Button>
        </div>
      </div>
    </SectionReveal>
  )
}

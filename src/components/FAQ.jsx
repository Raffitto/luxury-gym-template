import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <SectionReveal id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl px-0">
        <SectionHeader
          eyebrow={activeConfig.sections.faq.eyebrow}
          title={activeConfig.sections.faq.title}
          subtitle={activeConfig.sections.faq.subtitle}
        />

        <div className="space-y-2.5 sm:space-y-3">
          {activeConfig.faqs.map((faq, index) => {
            const id = `faq-${index}`
            const isOpen = openId === id
            return (
              <article key={id} className="glass-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-2 text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--color-yellow)] transition ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-white/10 px-4 pb-4 text-sm leading-relaxed text-[var(--color-gray)] sm:px-5">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

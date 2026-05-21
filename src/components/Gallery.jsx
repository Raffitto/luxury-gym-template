import { motion } from 'framer-motion'
import { activeConfig } from '../data/activeConfig'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

const gradients = [
  'from-[#2d2d2d] via-[#151515] to-[#050505]',
  'from-[#3a2f00] via-[#1a1500] to-[#050505]',
  'from-[#1f2a1f] via-[#101510] to-[#050505]',
  'from-[#2a1f1f] via-[#150f0f] to-[#050505]',
  'from-[#1f1f2a] via-[#101015] to-[#050505]',
  'from-[#2a2a1f] via-[#151510] to-[#050505]',
]

export default function Gallery() {
  const reduced = useReducedMotion()

  return (
    <SectionReveal id="gallery" className="section-padding bg-[var(--color-surface)]/40">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.gallery.eyebrow}
          title={activeConfig.sections.gallery.title}
          subtitle={activeConfig.sections.gallery.subtitle}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {activeConfig.gallery.map((item, index) => {
            const Figure = reduced ? 'figure' : motion.figure
            return (
            <Figure
              key={item.id}
              className={`group relative aspect-[4/5] min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br sm:aspect-[5/4] lg:aspect-[4/3] ${gradients[index % gradients.length]}`}
              {...(reduced
                ? {}
                : {
                    whileHover: { scale: 1.015 },
                    transition: { type: 'tween', duration: 0.2 },
                  })}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80 transition group-hover:opacity-100"
                />
              ) : null}
              <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/25" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="font-display text-lg text-white uppercase sm:text-xl">{item.caption}</p>
                <p className="text-[10px] tracking-[0.14em] text-white/60 uppercase sm:text-xs">
                  {activeConfig.sections.gallery.itemLabel}
                </p>
              </figcaption>
            </Figure>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

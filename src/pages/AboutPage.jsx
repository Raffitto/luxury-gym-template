import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import ChamberReveal from '../components/ui/ChamberReveal'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition, viewportOnce } from '../motion/choreography'

export default function AboutPage() {
  const { about } = aetherisConfig

  return (
    <>
      <PageHero
        ritual={aetherisConfig.pageCopy.about.ritual}
        headline={aetherisConfig.pageCopy.about.headline}
        align="left"
        image={aetherisConfig.pageHero.about}
      />

      <section className="page-body chamber-inner">
        <ChamberReveal>
          <p className="max-w-3xl font-display text-xl leading-relaxed text-[var(--platinum)] md:text-2xl">
            {about.origin}
          </p>
        </ChamberReveal>

        <div className="mt-12 grid gap-px bg-[var(--edge)] md:mt-16 md:grid-cols-2">
          {about.principles.map((p, i) => (
            <motion.div
              key={p}
              className="bg-[var(--surface)] p-10 md:p-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.7, i * 0.1)}
            >
              <span className="font-ritual text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-display mt-6 text-2xl text-[var(--platinum)]">{p}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 border-t border-[var(--edge)] pt-10 md:mt-20 md:pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce()}
          transition={transition.cinematic(1)}
        >
          <p className="headline-section font-display text-[var(--platinum)]">
            {aetherisConfig.brand.mantra}
          </p>
        </motion.div>
      </section>
    </>
  )
}

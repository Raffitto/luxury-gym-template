import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import ChamberReveal from '../components/ui/ChamberReveal'
import MagneticButton from '../components/ui/MagneticButton'
import { aetherisConfig } from '../data/aetherisConfig'
import { routes } from '../design-system/tokens'
import { transition, viewportOnce } from '../motion/choreography'

export default function ClassesPage() {
  return (
    <>
      <PageHero
        ritual="Chamber · Kinetic Catalogue"
        headline="Kinetic rituals."
        subline="Each session is choreographed for a specific physiological outcome. Selection is intentional."
        align="left"
      />

      <section className="page-body chamber-inner">
        <div className="space-y-4">
          {aetherisConfig.classes.map((cls, i) => (
            <motion.article
              key={cls.name}
              className={`grid gap-6 border border-[var(--edge)] p-8 transition md:grid-cols-[1fr_auto] md:items-center md:p-12 ${
                i % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-transparent'
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.75, i * 0.05)}
            >
              <div>
                <p className="font-ritual text-[var(--accent)]">{cls.intensity}</p>
                <h2 className="font-display mt-3 text-3xl text-[var(--platinum)]">{cls.name}</h2>
                <p className="body-measured mt-4 max-w-xl">{cls.desc}</p>
              </div>
              <div className="font-ritual text-[var(--ash)] md:text-right">
                <span className="inline-flex items-center gap-2 md:justify-end">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1} />
                  {cls.duration}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <ChamberReveal className="mt-20 text-center">
          <MagneticButton to={routes.trial}>{aetherisConfig.climax.cta}</MagneticButton>
        </ChamberReveal>
      </section>
    </>
  )
}

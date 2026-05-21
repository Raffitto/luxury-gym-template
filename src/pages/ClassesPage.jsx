import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import CinematicImage from '../components/ui/CinematicImage'
import ChamberReveal from '../components/ui/ChamberReveal'
import MagneticButton from '../components/ui/MagneticButton'
import { aetherisConfig } from '../data/aetherisConfig'
import { routes } from '../design-system/tokens'
import { transition, viewportOnce } from '../motion/choreography'

export default function ClassesPage() {
  const { pageHero, classes, climax } = aetherisConfig

  return (
    <>
      <PageHero
        ritual="Chamber · Kinetic Catalogue"
        headline="Kinetic rituals."
        subline="Each session is choreographed for a specific physiological outcome. Selection is intentional."
        align="left"
        image={pageHero.classes}
      />

      <section className="page-body chamber-inner">
        <div className="space-y-6">
          {classes.map((cls, i) => (
            <motion.article
              key={cls.name}
              className="grid overflow-hidden border border-[var(--edge)] md:grid-cols-[220px_1fr_auto]"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.75, i * 0.05)}
            >
              <div className="relative hidden aspect-[4/3] md:block">
                <CinematicImage
                  image={cls.image}
                  alt={cls.image.alt}
                  preset="card"
                  sizes="220px"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--void)]/25" />
              </div>
              <div className="p-8 md:p-10">
                <p className="font-ritual text-[var(--accent)]">{cls.intensity}</p>
                <h2 className="font-display mt-3 text-3xl text-[var(--platinum)]">{cls.name}</h2>
                <p className="body-measured mt-4 max-w-xl">{cls.desc}</p>
              </div>
              <div className="flex items-center border-t border-[var(--edge)] p-6 font-ritual text-[var(--ash)] md:border-t-0 md:border-l md:p-10">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1} />
                  {cls.duration}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <ChamberReveal className="mt-20 text-center">
          <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
        </ChamberReveal>
      </section>
    </>
  )
}

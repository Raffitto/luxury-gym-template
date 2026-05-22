import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import CinematicImage from '../components/ui/CinematicImage'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition, viewportOnce } from '../motion/choreography'

export default function LocationsPage() {
  const { pageHero, locations } = aetherisConfig

  return (
    <>
      <PageHero
        ritual={aetherisConfig.pageCopy.locations.ritual}
        headline={aetherisConfig.pageCopy.locations.headline}
        subline={aetherisConfig.pageCopy.locations.subline}
        align="left"
        image={pageHero.locations}
      />

      <section className="page-body chamber-inner">
        <div className="grid gap-8">
          {locations.map((loc, i) => (
            <motion.article
              key={loc.code}
              className="group relative min-h-[380px] overflow-hidden md:min-h-[480px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.9, i * 0.08)}
            >
              <CinematicImage
                image={loc.image}
                alt={loc.image.alt}
                preset="section"
                sizes="100vw"
                fill
                className="transition duration-1000 group-hover:[&_.cinematic-img]:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--void)]/95 via-[var(--void)]/55 to-[var(--void)]/75" />
              <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-10 md:p-16">
                <p className="font-ritual text-[var(--accent)]">{loc.code}</p>
                <h2 className="font-display mt-4 text-5xl text-[var(--platinum)] md:text-7xl">
                  {loc.city}
                </h2>
                <p className="mt-3 text-lg text-[var(--silver)]">{loc.descriptor}</p>
                <p className="mt-6 inline-flex items-center gap-2 font-ritual text-[var(--ash)]">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1} />
                  By appointment · Members only
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition, viewportOnce } from '../motion/choreography'

export default function LocationsPage() {
  return (
    <>
      <PageHero
        ritual="Chamber · Global Registry"
        headline="Architectural sanctuaries."
        subline="Each chamber is designed as an environment for transformation — not occupancy."
        align="left"
      />

      <section className="page-body chamber-inner">
        <div className="grid gap-8">
          {aetherisConfig.locations.map((loc, i) => (
            <motion.article
              key={loc.code}
              className="group relative min-h-[420px] overflow-hidden md:min-h-[520px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.9, i * 0.08)}
            >
              <img
                src={loc.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--void)]/95 via-[var(--void)]/60 to-transparent" />
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

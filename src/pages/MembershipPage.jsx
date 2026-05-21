import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import CinematicBackdrop from '../components/ui/CinematicBackdrop'
import MagneticButton from '../components/ui/MagneticButton'
import { aetherisConfig } from '../data/aetherisConfig'
import { routes } from '../design-system/tokens'
import { transition, viewportOnce } from '../motion/choreography'

export default function MembershipPage() {
  const { membership, pageHero } = aetherisConfig
  const sovereign = membership.tiers.find((t) => t.featured)
  const others = membership.tiers.filter((t) => !t.featured)

  return (
    <>
      <PageHero
        ritual="Chamber · Access Protocol"
        headline={membership.headline}
        subline="Access is not purchased. It is granted — after assessment, alignment, and proof of discipline."
        align="center"
        image={pageHero.membership}
      />

      {sovereign ? (
        <section className="page-body chamber-inner !pt-0">
          <motion.article
            className="relative overflow-hidden border border-[var(--accent)]/25 bg-[var(--depth)]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce()}
            transition={transition.cinematic(1)}
          >
            <CinematicBackdrop
              image={membership.image}
              alt={membership.image.alt}
              preset="section"
              scrim="lateral"
              imageClassName="opacity-20"
            />
            <div className="relative grid gap-10 p-10 md:grid-cols-[1fr_1.1fr] md:p-16 lg:p-20">
              <div>
                <p className="font-ritual text-[var(--accent)]">Threshold II · {sovereign.note}</p>
                <h2 className="font-display mt-4 text-5xl text-[var(--platinum)] md:text-7xl">
                  {sovereign.name}
                </h2>
                <p className="mt-4 font-ritual text-[var(--silver)]">{sovereign.descriptor}</p>
              </div>
              <ul className="space-y-4 border-t border-[var(--edge)] pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
                {sovereign.features.map((f) => (
                  <li key={f} className="font-display text-xl text-[var(--platinum)] md:text-2xl">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </section>
      ) : null}

      <section className="env-depth">
        <div className="page-body chamber-inner">
          {others.map((tier, i) => (
            <motion.article
              key={tier.name}
              className="mb-24 grid gap-8 border-b border-[var(--edge)] pb-24 last:mb-0 last:border-0 last:pb-0 lg:grid-cols-[0.35fr_1fr] lg:gap-16"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.85, i * 0.08)}
            >
              <div>
                <span className="font-ritual text-[var(--accent)]">Threshold {tier.code}</span>
                <h2 className="font-display mt-4 text-4xl text-[var(--platinum)] md:text-5xl">
                  {tier.name}
                </h2>
                <p className="mt-3 font-ritual text-[var(--ash)]">{tier.note}</p>
              </div>
              <div>
                <p className="font-ritual text-[var(--silver)]">{tier.descriptor}</p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="body-measured border-l border-[var(--edge)] pl-6">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          <div className="mt-24 flex flex-col items-center gap-4 text-center">
            <p className="font-ritual max-w-md text-[var(--ash)]">
              All thresholds require private assessment before activation.
            </p>
            <MagneticButton to={routes.trial}>Initiate Access Assessment</MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}

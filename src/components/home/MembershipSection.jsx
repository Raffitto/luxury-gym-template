import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal, { StaggerChamber } from '../ui/ChamberReveal'
import MagneticButton from '../ui/MagneticButton'
import { variants, transition } from '../../motion/choreography'

export default function MembershipSection() {
  const { membership } = aetherisConfig

  return (
    <section className="env-depth relative">
      <div className="chamber-inner chamber-tight">
        <ChamberReveal className="text-center">
          <RitualLabel>{membership.ritual}</RitualLabel>
          <h2 className="headline-chamber font-display mt-6 text-[var(--platinum)]">
            {membership.headline}
          </h2>
        </ChamberReveal>

        <StaggerChamber className="mt-20 grid gap-6 lg:grid-cols-3">
          {membership.tiers.map((tier) => (
            <motion.article
              key={tier.name}
              variants={variants.riseSubtle}
              transition={transition.cinematic(0.75)}
              className={`glass-layer edge-lit flex flex-col p-10 ${
                tier.featured
                  ? 'border-[var(--accent)]/30 bg-[var(--depth)] ring-1 ring-[var(--accent)]/25'
                  : ''
              }`}
            >
              {tier.featured ? (
                <span className="font-ritual mb-4 text-[var(--accent)]">
                  Threshold {tier.code} · Primary access
                </span>
              ) : (
                <span className="font-ritual mb-4 text-[var(--ash)]">Threshold {tier.code}</span>
              )}
              <h3 className="font-display text-3xl text-[var(--platinum)]">{tier.name}</h3>
              <p className="mt-2 font-ritual text-[var(--ash)]">{tier.descriptor}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--silver)] before:mr-2 before:content-['—']">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-ritual text-[var(--accent)]">{tier.note}</p>
            </motion.article>
          ))}
        </StaggerChamber>

        <div className="mt-16 flex justify-center">
          <MagneticButton to={routes.membership} variant="ghost">
            View Access Protocol
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

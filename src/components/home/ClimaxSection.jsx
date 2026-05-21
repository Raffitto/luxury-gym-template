import { motion } from 'framer-motion'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import AtmosphericCanvas from '../atmosphere/AtmosphericCanvas'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import RitualLabel from '../ui/RitualLabel'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'

export default function ClimaxSection() {
  const { climax } = aetherisConfig

  return (
    <section className="relative min-h-[80svh] overflow-hidden">
      <AtmosphericCanvas />
      <CinematicBackdrop
        image={climax.image}
        alt={climax.image.alt}
        preset="section"
        scrim="default"
        imageClassName="opacity-25"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(196,181,154,0.1),transparent)]" />

      <div className="relative z-10 flex min-h-[80svh] flex-col items-center justify-center chamber text-center">
        <div className="chamber-inner max-w-4xl">
          <RitualLabel>{climax.ritual}</RitualLabel>

          <h2 className="headline-mythic font-display mt-10 text-[var(--platinum)]">
            {climax.headline.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={transition.cinematic(1, i * 0.15)}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="body-measured mx-auto mt-10 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={transition.cinematic(0.8, 0.35)}
          >
            {climax.subline}
          </motion.p>

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition.cinematic(0.7, 0.5)}
          >
            <MagneticButton to={routes.trial}>{climax.cta}</MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

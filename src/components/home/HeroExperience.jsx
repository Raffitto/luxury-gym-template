import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'
import AtmosphericCanvas from '../atmosphere/AtmosphericCanvas'
import RitualLabel from '../ui/RitualLabel'
import MagneticButton from '../ui/MagneticButton'
import { transition } from '../../motion/choreography'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function HeroExperience() {
  const { hero } = aetherisConfig
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 120])
  const contentY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 60])
  const opacity = useTransform(scrollY, [0, 700], [1, reduced ? 1 : 0.55])

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <AtmosphericCanvas intensity="hero" />

      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${hero.image})`,
            maskImage: 'linear-gradient(180deg, black 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(180deg, black 0%, transparent 85%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--void)]/40 via-[var(--void)]/80 to-[var(--void)]" />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col justify-end chamber pb-24 pt-[calc(var(--header-h)+2rem)]"
        style={{ y: contentY, opacity }}
      >
        <div className="chamber-inner">
          <RitualLabel>{hero.ritual}</RitualLabel>

          <h1 className="headline-mythic font-display mt-8 max-w-5xl text-[var(--platinum)]">
            {hero.headline.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition.cinematic(1, i * 0.12)}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="body-measured mt-10 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition.cinematic(0.9, 0.45)}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.cinematic(0.8, 0.6)}
          >
            <MagneticButton to={routes.trial}>{hero.primaryCta}</MagneticButton>
            <MagneticButton to={routes.about} variant="ghost">
              {hero.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="chamber-inner mt-20 flex items-center gap-3 text-[var(--ash)]"
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1} />
          <span className="font-ritual">Descend into the continuum</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

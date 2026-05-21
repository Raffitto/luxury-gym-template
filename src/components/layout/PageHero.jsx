import { motion } from 'framer-motion'
import RitualLabel from '../ui/RitualLabel'
import AtmosphericCanvas from '../atmosphere/AtmosphericCanvas'
import { transition } from '../../motion/choreography'

export default function PageHero({ ritual, headline, subline, align = 'left', children }) {
  return (
    <section className="env-chamber relative overflow-hidden pt-[calc(var(--header-h)+3rem)] pb-16 md:pb-24">
      <AtmosphericCanvas intensity="subtle" />
      <div className={`chamber-inner chamber ${align === 'center' ? 'text-center' : ''}`}>
        <RitualLabel>{ritual}</RitualLabel>
        <motion.h1
          className="headline-chamber font-display mt-6 max-w-4xl text-[var(--platinum)]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.cinematic(0.9)}
        >
          {headline}
        </motion.h1>
        {subline ? (
          <motion.p
            className={`body-measured mt-8 max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition.cinematic(0.7, 0.2)}
          >
            {subline}
          </motion.p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

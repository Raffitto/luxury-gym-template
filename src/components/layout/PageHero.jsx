import { motion } from 'framer-motion'
import RitualLabel from '../ui/RitualLabel'
import AtmosphericCanvas from '../atmosphere/AtmosphericCanvas'
import CinematicBackdrop from '../ui/CinematicBackdrop'
import { transition } from '../../motion/choreography'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function PageHero({
  ritual,
  headline,
  subline,
  align = 'left',
  image,
  children,
}) {
  const mobile = useIsMobile()

  return (
    <section className={`page-hero env-chamber ${align === 'center' ? 'page-hero--center' : ''}`}>
      {image ? (
        <CinematicBackdrop
          image={image}
          alt={image.alt}
          preset="section"
          scrim="lateral"
          imageClassName="page-hero-media"
        />
      ) : !mobile ? (
        <AtmosphericCanvas intensity="subtle" />
      ) : null}
      <div className="page-hero-inner chamber-inner relative z-10">
        <RitualLabel>{ritual}</RitualLabel>
        <motion.h1
          className="headline-chamber font-display mt-4 max-w-4xl text-[var(--platinum)] md:mt-5"
          initial={{ opacity: 0, y: mobile ? 16 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.cinematic(mobile ? 0.5 : 0.7)}
        >
          {headline}
        </motion.h1>
        {subline ? (
          <motion.p
            className={`body-measured mt-5 max-w-xl md:mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition.cinematic(0.5, 0.1)}
          >
            {subline}
          </motion.p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

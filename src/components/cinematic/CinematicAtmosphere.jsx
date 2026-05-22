import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

const INTENSITY = {
  hero: { fog: 0.14, glow: 0.18, particles: 12, mobileParticles: 4 },
  section: { fog: 0.08, glow: 0.1, particles: 6, mobileParticles: 2 },
  climax: { fog: 0.12, glow: 0.16, particles: 8, mobileParticles: 3 },
}

export default function CinematicAtmosphere({ intensity = 'section', className = '' }) {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const level = INTENSITY[intensity] || INTENSITY.section
  const particleCount = mobile ? level.mobileParticles : level.particles
  const fogOpacity = mobile ? level.fog * 0.65 : level.fog
  const glowOpacity = mobile ? level.glow * 0.55 : level.glow

  if (reduced) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(196,181,154,0.08), transparent 70%)',
        }}
      />
    )
  }

  return (
    <div
      className={`cinematic-atmosphere pointer-events-none absolute inset-0 overflow-hidden ${mobile ? 'cinematic-atmosphere--lite' : ''} ${className}`}
      aria-hidden
    >
      <div className="cinematic-fog" style={{ opacity: fogOpacity }} />
      {mobile ? (
        <div className="cinematic-glow cinematic-glow--primary cinematic-glow--static" style={{ opacity: glowOpacity }} />
      ) : (
        <>
          <motion.div
            className="cinematic-glow cinematic-glow--primary"
            style={{ opacity: glowOpacity }}
            animate={{ x: ['-4%', '4%', '-4%'], y: ['-2%', '3%', '-2%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="cinematic-glow cinematic-glow--secondary"
            animate={{ x: ['6%', '-5%', '6%'], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      {!mobile ? (
        <>
          <div className="cinematic-light-leak cinematic-light-leak--left" />
          <div className="cinematic-light-leak cinematic-light-leak--right" />
          <div className="cinematic-gradient-drift" />
        </>
      ) : null}
      {Array.from({ length: particleCount }).map((_, i) => (
        <span
          key={i}
          className="cinematic-particle"
          style={{
            '--particle-x': `${(i * 17 + 11) % 100}%`,
            '--particle-y': `${(i * 23 + 7) % 100}%`,
            '--particle-delay': `${(i * 0.7) % 5}s`,
            '--particle-duration': `${8 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  )
}

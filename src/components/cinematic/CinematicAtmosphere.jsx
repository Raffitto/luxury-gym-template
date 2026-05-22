import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useIsPhone } from '../../hooks/useIsPhone'

const INTENSITY = {
  hero: { fog: 0.22, glow: 0.28, particles: 14, mobileParticles: 8 },
  section: { fog: 0.08, glow: 0.1, particles: 6, mobileParticles: 2 },
  climax: { fog: 0.12, glow: 0.16, particles: 8, mobileParticles: 3 },
}

const FLOW = { duration: 6, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }
const FLOW_SLOW = { duration: 9, repeat: Infinity, ease: [0.45, 0.05, 0.25, 1] }

export default function CinematicAtmosphere({
  intensity = 'section',
  className = '',
  live = false,
}) {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const phone = useIsPhone()
  const isHero = intensity === 'hero' || live
  const level = INTENSITY[intensity] || INTENSITY.section
  const particleCount = mobile && !isHero ? level.mobileParticles : isHero ? level.mobileParticles : level.particles
  const fogOpacity = isHero ? (mobile ? level.fog * 0.9 : level.fog) : mobile ? level.fog * 0.65 : level.fog
  const glowOpacity = isHero ? (mobile ? level.glow * 0.85 : level.glow) : mobile ? level.glow * 0.55 : level.glow
  const heroLive = isHero && !reduced

  if (reduced) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(196,181,154,0.12), transparent 70%)',
        }}
      />
    )
  }

  if (phone && !isHero) {
    return (
      <div
        className={`cinematic-atmosphere cinematic-atmosphere--static pointer-events-none absolute inset-0 ${className}`}
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 85% 50% at 50% 0%, rgba(196,181,154,${fogOpacity * 0.35}), transparent 72%)`,
        }}
      />
    )
  }

  return (
    <div
      className={`cinematic-atmosphere pointer-events-none absolute inset-0 overflow-hidden ${heroLive ? 'cinematic-atmosphere--hero-live' : mobile ? 'cinematic-atmosphere--lite' : ''} ${className}`}
      aria-hidden
    >
      <motion.div
        className="cinematic-fog gpu-layer"
        style={{ opacity: fogOpacity }}
        initial={false}
        animate={
          heroLive
            ? { opacity: [fogOpacity * 0.88, fogOpacity * 1.08, fogOpacity * 0.92] }
            : { opacity: [fogOpacity * 0.9, fogOpacity, fogOpacity * 0.95] }
        }
        transition={heroLive ? FLOW : FLOW_SLOW}
      />
      <motion.div
        className="cinematic-glow cinematic-glow--primary gpu-layer"
        style={{ opacity: glowOpacity }}
        animate={
          heroLive || !mobile
            ? {
                x: ['-4%', '5%', '-4%'],
                y: ['-2%', '3%', '-2%'],
                opacity: [glowOpacity * 0.82, glowOpacity, glowOpacity * 0.88],
              }
            : undefined
        }
        transition={FLOW_SLOW}
      />
      <motion.div
        className="cinematic-glow cinematic-glow--secondary gpu-layer"
        animate={
          heroLive || !mobile
            ? { x: ['7%', '-6%', '7%'], opacity: [0.07, 0.16, 0.09] }
            : undefined
        }
        transition={{ ...FLOW, delay: 0.6 }}
      />
      {(heroLive || !mobile) && (
        <>
          <motion.div
            className="cinematic-light-leak cinematic-light-leak--left gpu-layer"
            animate={heroLive ? { opacity: [0.22, 0.48, 0.28] } : undefined}
            transition={FLOW}
          />
          <motion.div
            className="cinematic-light-leak cinematic-light-leak--right gpu-layer"
            animate={heroLive ? { opacity: [0.14, 0.36, 0.2] } : undefined}
            transition={{ ...FLOW, delay: 0.5 }}
          />
          <div className="cinematic-gradient-drift gpu-layer" />
        </>
      )}
      {Array.from({ length: particleCount }).map((_, i) => (
        <span
          key={i}
          className="cinematic-particle"
          style={{
            '--particle-x': `${(i * 17 + 11) % 100}%`,
            '--particle-y': `${(i * 23 + 7) % 100}%`,
            '--particle-delay': `${(i * 0.35) % 2}s`,
            '--particle-duration': `${5 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}

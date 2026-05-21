import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function AtmosphericCanvas({ intensity = 'hero' }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,181,154,0.08), transparent 70%)',
        }}
      />
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-1/4 left-1/4 h-[80%] w-[60%] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(196,181,154,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-[50%] w-[40%] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, -20, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {intensity === 'hero' ? (
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(232,228,220,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,228,220,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      ) : null}
    </div>
  )
}

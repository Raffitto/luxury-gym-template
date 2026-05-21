import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function AtmosphericCanvas({ intensity = 'hero' }) {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  if (reduced || mobile) {
    return (
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            intensity === 'hero'
              ? 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(196,181,154,0.1), transparent 72%)'
              : 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,181,154,0.06), transparent 70%)',
        }}
      />
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-1/4 left-1/4 h-[80%] w-[60%] rounded-full opacity-25"
        style={{
          background:
            'radial-gradient(circle, rgba(196,181,154,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[50%] w-[40%] rounded-full opacity-15"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

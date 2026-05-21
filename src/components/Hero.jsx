import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeIn, fadeUp, motionTransition } from '../utils/motion'
import { scrollToId, whatsappHref } from '../utils/links'
import Button from './ui/Button'

export default function Hero() {
  const { hero, offer, copy } = activeConfig
  const reduced = useReducedMotion()

  const primaryBlock = (
    <div className="min-w-0 space-y-5 sm:space-y-7">
      {hero.badge ? (
        <p className="inline-flex max-w-full rounded-full border border-[var(--color-yellow)]/30 bg-[var(--color-yellow)]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-[var(--color-yellow)] uppercase sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
          {hero.badge}
        </p>
      ) : null}

      <div className="space-y-3 sm:space-y-4">
        <h1 className="font-display hero-title text-white uppercase">{hero.headline}</h1>
        <p className="max-w-md text-[0.9375rem] leading-snug text-[var(--color-gray)] sm:text-base md:text-lg md:max-w-xl">
          {hero.subheadline}
        </p>
      </div>

      <div className="flex w-full min-w-0 flex-col gap-2.5 sm:gap-3">
        <Button
          href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
          icon={MessageCircle}
          fullWidth
          ariaLabel={hero.primaryCta}
        >
          {hero.primaryCta}
        </Button>
        <Button
          variant="secondary"
          onClick={() => scrollToId('memberships')}
          icon={ArrowRight}
          fullWidth
          ariaLabel={hero.secondaryCta}
        >
          {hero.secondaryCta}
        </Button>
      </div>

      <p className="text-xs text-white/50 sm:text-sm">
        {offer.title} · {offer.price} {offer.priceNote}
      </p>

      <div className="grid grid-cols-2 gap-2 sm:hidden">
        <div className="min-w-0 rounded-xl border border-white/10 bg-white/5 px-2.5 py-3">
          <p className="font-display text-xl text-[var(--color-yellow)] sm:text-2xl">
            {activeConfig.opensDisplay}
          </p>
          <p className="text-[10px] tracking-wide text-white/55 uppercase">{copy.opensDailyLabel}</p>
        </div>
        <div className="min-w-0 rounded-xl border border-white/10 bg-white/5 px-2.5 py-3">
          <p className="font-display text-xl text-white sm:text-2xl">{activeConfig.googleRating.score}</p>
          <p className="text-[10px] tracking-wide text-white/55 uppercase">{copy.googleRatingLabel}</p>
        </div>
      </div>
    </div>
  )

  const sideCard = (
    <div className="glass-card relative mt-6 hidden min-w-0 overflow-hidden rounded-[var(--radius-xl)] p-6 yellow-glow sm:mt-8 sm:block sm:p-8 lg:mt-0">
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[var(--color-yellow)]/20 blur-3xl" />
      <p className="font-display text-xs tracking-[0.22em] text-[var(--color-yellow)] uppercase sm:text-sm sm:tracking-[0.24em]">
        {activeConfig.tagline}
      </p>
      <p className="mt-5 font-display text-3xl leading-none text-white uppercase md:text-4xl lg:text-5xl">
        {activeConfig.copy.builtFor}
      </p>
      <p className="mt-3 text-sm text-[var(--color-gray)] sm:text-base">
        {activeConfig.copy.trainWithPurpose}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
          <p className="font-display text-2xl text-[var(--color-yellow)] sm:text-3xl">
            {activeConfig.opensDisplay}
          </p>
          <p className="mt-1 text-[10px] tracking-wide text-white/60 uppercase sm:text-xs">
            {copy.opensDailyLabel}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
          <p className="font-display text-2xl text-white sm:text-3xl">{activeConfig.googleRating.score}</p>
          <p className="mt-1 text-[10px] tracking-wide text-white/60 uppercase sm:text-xs">
            {copy.googleRatingLabel}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[calc(var(--header-h)+0.75rem)] pb-8 sm:min-h-[100svh] sm:pb-16 sm:pt-24 md:pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,229,0,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,#0a0a0a_0%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cpath d=%22M0 40h40V0%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.03)%22/%3E%3C/svg%3E')] opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-black)] to-transparent sm:h-40" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-[var(--page-gutter)] lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        {reduced ? (
          primaryBlock
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={motionTransition(0.6)}
            variants={fadeUp}
            className="min-w-0"
          >
            {primaryBlock}
          </motion.div>
        )}

        {reduced ? (
          sideCard
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={motionTransition(0.65, 0.08)}
            variants={fadeIn}
            className="min-w-0"
          >
            {sideCard}
          </motion.div>
        )}
      </div>
    </section>
  )
}

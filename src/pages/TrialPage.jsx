import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import MagneticButton from '../components/ui/MagneticButton'
import RitualField from '../components/ui/RitualField'
import { activeConfig } from '../data/activeConfig'
import { isGrindBrand } from '../data/brand'
import { transition, viewportOnce } from '../motion/choreography'

export default function TrialPage() {
  const { trial, locations, proof, climax } = activeConfig
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        ritual={activeConfig.pageCopy.trial.ritual}
        headline={trial.headline}
        subline={trial.subline}
        align="left"
        image={activeConfig.pageHero.trial}
      />

      <section className="page-body chamber-inner">
        {submitted ? (
          <motion.div
            className="mx-auto max-w-xl glass-layer edge-lit p-12 text-center md:p-16"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition.cinematic(0.8)}
          >
            <p className="font-ritual text-[var(--accent)]">Transmission received</p>
            <h2 className="font-display mt-6 text-3xl text-[var(--platinum)] md:text-4xl">
              Your threshold is under review.
            </h2>
            <p className="body-measured mt-4">
              If aligned, chamber coordinates arrive within 72 hours. Prepare for immersion.
            </p>
          </motion.div>
        ) : isGrindBrand && trial.ctaHref ? (
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <motion.div
              className="glass-layer edge-lit p-10 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition.cinematic(0.7, 0.1)}
            >
              <p className="font-ritual text-[var(--accent)]">Visit the floor</p>
              <ol className="mt-8 space-y-5">
                {trial.steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-ritual shrink-0 text-[var(--ash)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-lg text-[var(--platinum)]">{step}</p>
                  </li>
                ))}
              </ol>
              <MagneticButton href={trial.ctaHref} className="mt-10">
                {trial.cta}
              </MagneticButton>
            </motion.div>
            <motion.aside
              className="lg:pt-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.85, 0.15)}
            >
              <p className="font-ritual text-[var(--accent)]">{proof.headline}</p>
              <p className="body-measured mt-4">{proof.subline}</p>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {proof.metrics.map((m) => (
                  <div key={m.label} className="border border-[var(--edge)] p-4">
                    <p className="font-display text-2xl text-[var(--accent)]">{m.value}</p>
                    <p className="mt-1 font-ritual text-[0.5rem] text-[var(--ash)]">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        ) : (
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition.cinematic(0.7, 0.1)}
            >
              {trial.fields.map((field) => (
                <RitualField key={field.name} label={field.label}>
                  {field.type === 'select' && field.name === 'chamber' ? (
                    <select
                      name={field.name}
                      required
                      className="ritual-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select chamber
                      </option>
                      {locations.map((l) => (
                        <option key={l.code} value={l.city}>
                          {l.city} — {l.code}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'select' ? (
                    <select
                      name={field.name}
                      required
                      className="ritual-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select level
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      autoComplete={field.name === 'email' ? 'email' : 'name'}
                      className="ritual-input"
                    />
                  )}
                </RitualField>
              ))}

              <p className="font-ritual text-[var(--ash)]">
                Submission acknowledges selective admission. Misalignment is declined without explanation.
              </p>

              <MagneticButton type="submit" fullWidth>
                {trial.cta}
              </MagneticButton>
            </motion.form>

            <motion.aside
              className="lg:pt-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce()}
              transition={transition.cinematic(0.85, 0.15)}
            >
              <p className="font-ritual text-[var(--accent)]">Assessment sequence</p>
              <ol className="mt-8 space-y-6">
                {trial.steps.map((step, i) => (
                  <li key={step} className="flex gap-5">
                    <span className="font-ritual shrink-0 text-[var(--ash)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-lg text-[var(--platinum)]">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="ritual-divider my-12" />

              <blockquote className="border-l border-[var(--accent)]/40 pl-6">
                <p className="font-display text-xl leading-snug text-[var(--platinum)]">
                  "{proof.testimonials[0].quote}"
                </p>
                <cite className="mt-4 block font-ritual not-italic text-[var(--ash)]">
                  {proof.testimonials[0].author}
                </cite>
              </blockquote>

              <div className="mt-12 grid grid-cols-3 gap-4">
                {proof.metrics.map((m) => (
                  <div key={m.label} className="border border-[var(--edge)] p-4">
                    <p className="font-display text-2xl text-[var(--accent)]">{m.value}</p>
                    <p className="mt-1 font-ritual text-[0.5rem] leading-relaxed text-[var(--ash)]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="body-measured mt-10">{climax.subline}</p>
            </motion.aside>
          </div>
        )}
      </section>
    </>
  )
}

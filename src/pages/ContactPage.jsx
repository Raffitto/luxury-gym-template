import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import MagneticButton from '../components/ui/MagneticButton'
import { aetherisConfig } from '../data/aetherisConfig'
import { transition } from '../motion/choreography'

export default function ContactPage() {
  const { contact } = aetherisConfig

  return (
    <>
      <PageHero
        ritual="Chamber · Continuum Line"
        headline="Speak to the order."
        subline="Inquiries are reviewed within 48 hours. Vague interest is filtered."
        align="center"
      />

      <section className="chamber-inner chamber !pt-0 pb-32">
        <motion.div
          className="mx-auto max-w-lg glass-layer edge-lit p-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.cinematic(0.8, 0.2)}
        >
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex flex-col items-center gap-3"
          >
            <Mail className="h-6 w-6 text-[var(--accent)]" strokeWidth={1} />
            <span className="font-display text-xl text-[var(--platinum)] transition group-hover:text-[var(--accent)]">
              {contact.email}
            </span>
          </a>

          <div className="ritual-divider my-10" />

          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="group inline-flex flex-col items-center gap-3"
          >
            <Phone className="h-6 w-6 text-[var(--accent)]" strokeWidth={1} />
            <span className="font-ritual text-[var(--silver)] transition group-hover:text-[var(--platinum)]">
              {contact.phone}
            </span>
          </a>

          <div className="mt-12">
            <MagneticButton
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
            >
              Encrypted Continuum Line
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </>
  )
}

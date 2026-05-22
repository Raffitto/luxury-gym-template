import { Link } from 'react-router-dom'
import { aetherisConfig } from '../../data/aetherisConfig'
import { routes } from '../../design-system/tokens'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="env-depth border-t border-[var(--edge)]">
      <div className="chamber-inner chamber !pt-16 !pb-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.15em] text-[var(--platinum)] uppercase">
              {aetherisConfig.brand.name}
            </p>
            <p className="mt-4 max-w-sm body-measured">{aetherisConfig.brand.mantra}</p>
            <p className="mt-6 font-ritual text-[var(--ash)]">{aetherisConfig.brand.founding}</p>
            <p className="mt-2 font-ritual text-[0.5rem] tracking-[0.28em] text-[var(--ash)]">
              {aetherisConfig.brand.descriptor}
            </p>
          </div>

          <div>
            <p className="font-ritual mb-4">House</p>
            <ul className="space-y-2">
              {aetherisConfig.nav.slice(1).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[var(--silver)] transition hover:text-[var(--platinum)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-ritual mb-4">Admission</p>
            <ul className="space-y-2 text-sm text-[var(--silver)]">
              <li>
                <Link to={routes.trial} className="transition hover:text-[var(--platinum)]">
                  {aetherisConfig.trial.cta}
                </Link>
              </li>
              <li>
                <Link to={routes.contact} className="transition hover:text-[var(--platinum)]">
                  Correspondence
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${aetherisConfig.contact.email}`}
                  className="transition hover:text-[var(--platinum)]"
                >
                  {aetherisConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ritual-divider mt-16 mb-6" />
        <p className="font-ritual text-[var(--ash)]">
          © {year} {aetherisConfig.brand.name}. All rights reserved. Selective admission.
        </p>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'
import { isGrindBrand } from '../../data/brand'
import { routes } from '../../design-system/tokens'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="env-depth border-t border-[var(--edge)]">
      <div className="chamber-inner chamber !pt-16 !pb-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.15em] text-[var(--platinum)] uppercase">
              {activeConfig.brand.name}
            </p>
            <p className="mt-4 max-w-sm body-measured">{activeConfig.brand.mantra}</p>
            <p className="mt-6 font-ritual text-[var(--ash)]">{activeConfig.brand.founding}</p>
            <p className="mt-2 font-ritual text-[0.5rem] tracking-[0.28em] text-[var(--ash)]">
              {activeConfig.brand.descriptor}
            </p>
          </div>

          <div>
            <p className="font-ritual mb-4">{isGrindBrand ? 'Navigate' : 'House'}</p>
            <ul className="space-y-2">
              {activeConfig.nav.slice(1).map((item) => (
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
            <p className="font-ritual mb-4">{isGrindBrand ? 'Join' : 'Admission'}</p>
            <ul className="space-y-2 text-sm text-[var(--silver)]">
              <li>
                <Link to={routes.trial} className="transition hover:text-[var(--platinum)]">
                  {activeConfig.trial.cta}
                </Link>
              </li>
              {activeConfig.social?.instagram ? (
                <li>
                  <a
                    href={activeConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[var(--platinum)]"
                  >
                    @{activeConfig.social.instagramHandle}
                  </a>
                </li>
              ) : null}
              <li>
                <Link to={routes.contact} className="transition hover:text-[var(--platinum)]">
                  {isGrindBrand ? 'Contact' : 'Correspondence'}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${activeConfig.contact.email}`}
                  className="transition hover:text-[var(--platinum)]"
                >
                  {activeConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ritual-divider mt-16 mb-6" />
        <p className="font-ritual text-[var(--ash)]">
          © {year} {activeConfig.brand.name}
          {isGrindBrand ? ' GYM LB' : ''}. All rights reserved.
          {isGrindBrand ? '' : ' Selective admission.'}
        </p>
      </div>
    </footer>
  )
}

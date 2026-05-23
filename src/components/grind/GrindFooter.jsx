import { Link } from 'react-router-dom'
import { activeConfig } from '../../data/activeConfig'
import { routes } from '../../design-system/tokens'

export default function GrindFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="g-footer">
      <div className="g-container">
        <div className="g-footer__grid">
          <div>
            <p className="g-footer__brand">GRIND GYM</p>
            <p className="mt-3 text-sm text-[var(--g-muted)] max-w-xs leading-relaxed">
              {activeConfig.brand.mantra} · {activeConfig.brand.founding}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--g-dim)] mb-3">
              Navigate
            </p>
            <div className="g-footer__links">
              {activeConfig.nav.slice(1).map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--g-dim)] mb-3">
              Connect
            </p>
            <div className="g-footer__links">
              {activeConfig.social?.instagram ? (
                <a
                  href={activeConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{activeConfig.social.instagramHandle}
                </a>
              ) : null}
              <Link to={routes.membership}>Membership</Link>
              <a href={`mailto:${activeConfig.contact.email}`}>{activeConfig.contact.email}</a>
            </div>
          </div>
        </div>
        <p className="g-footer__copy">© {year} Grind Gym · Mtaileb, Lebanon</p>
      </div>
    </footer>
  )
}

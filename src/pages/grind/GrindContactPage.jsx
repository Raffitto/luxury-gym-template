import { activeConfig } from '../../data/activeConfig'

export default function GrindContactPage() {
  const { contact, social, pageCopy } = activeConfig

  return (
    <>
      <section className="g-page-hero">
        <div className="g-container">
          <p className="g-eyebrow">Contact</p>
          <h1 className="g-title">{pageCopy.contact.headline}</h1>
          <p className="g-lead">{pageCopy.contact.subline}</p>
        </div>
      </section>
      <section className="g-page-body">
        <div className="g-container max-w-lg">
          <div className="g-card space-y-6">
            {social?.instagram ? (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold hover:text-[var(--g-accent)]"
              >
                Instagram @{social.instagramHandle}
              </a>
            ) : null}
            <a
              href={`mailto:${contact.email}`}
              className="block text-[var(--g-muted)] hover:text-[var(--g-text)]"
            >
              {contact.email}
            </a>
            <p className="text-sm text-[var(--g-dim)]">
              Walk-ins welcome. For membership, visit us in Mtaileb.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

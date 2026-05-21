import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { phoneHref, whatsappHref } from '../utils/links'
import Button from './ui/Button'
import SocialLinks from './ui/SocialLinks'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

export default function Location() {
  const { location, openingHours, opensAt, sections, copy } = activeConfig
  const locationSection = sections.location

  return (
    <SectionReveal id="location" className="section-padding bg-[var(--color-surface)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={locationSection.eyebrow}
          title={locationSection.title}
          subtitle={location.address}
          align="left"
        />

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="glass-card rounded-2xl p-5 sm:rounded-[var(--radius-xl)] sm:p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-yellow)]" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg text-white uppercase sm:text-xl">
                    {locationSection.locationCardTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray)] sm:text-base">
                    {location.address}
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">
                    {locationSection.opensFromLabel} {opensAt}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 sm:rounded-[var(--radius-xl)] sm:p-6">
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                <Clock className="h-5 w-5 text-[var(--color-yellow)]" aria-hidden="true" />
                <p className="font-display text-lg text-white uppercase sm:text-xl">
                  {locationSection.hoursCardTitle}
                </p>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {openingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-white/80">{row.day}</span>
                    <span className="text-[var(--color-gray)]">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2.5">
              <Button
                href={phoneHref(activeConfig.phone)}
                icon={Phone}
                fullWidth
                ariaLabel="Call gym"
              >
                {copy.callCta}
              </Button>
              <Button
                href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
                variant="secondary"
                icon={MessageCircle}
                fullWidth
                ariaLabel={copy.whatsappCta}
              >
                {copy.whatsappCta}
              </Button>
            </div>

            <div className="glass-card flex items-center justify-between gap-4 rounded-2xl p-4 sm:rounded-[var(--radius-xl)] sm:p-5">
              <div>
                <p className="font-display text-sm tracking-[0.18em] text-white uppercase sm:text-base">
                  {locationSection.followTitle}
                </p>
                <p className="mt-1 text-xs text-[var(--color-gray)] sm:text-sm">
                  @{activeConfig.social.instagramHandle} · {locationSection.followHint}
                </p>
              </div>
              <SocialLinks size="md" />
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-2xl sm:rounded-[var(--radius-xl)]">
            {location.embedUrl ? (
              <iframe
                title={`${activeConfig.brandName} map`}
                src={location.embedUrl}
                className="aspect-[4/5] min-h-[240px] w-full border-0 sm:aspect-auto sm:min-h-[320px] lg:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex aspect-[4/5] min-h-[240px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1a1a1a] to-[#050505] p-6 text-center sm:aspect-auto sm:min-h-[320px] sm:gap-4 sm:p-8">
                <MapPin className="h-9 w-9 text-[var(--color-yellow)] sm:h-10 sm:w-10" aria-hidden="true" />
                <p className="font-display text-xl text-white uppercase sm:text-2xl">
                  {location.shortAddress}
                </p>
                <Button
                  href={location.googleMapsUrl}
                  fullWidth
                  className="max-w-xs"
                  ariaLabel={copy.openMapsCta}
                >
                  {copy.openMapsCta}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

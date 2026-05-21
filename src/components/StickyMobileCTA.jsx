import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { activeConfig } from '../data/activeConfig'
import { phoneHref, whatsappHref } from '../utils/links'

const linkClass =
  'tap-target inline-flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1.5 py-2 text-[10px] font-semibold tracking-wide uppercase active:scale-[0.98]'

export default function StickyMobileCTA() {
  return (
    <div
      className="sticky-mobile-cta fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/[0.97] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div
        className="mx-auto grid w-full max-w-lg grid-cols-3 gap-1.5 px-2 sm:gap-2 sm:px-3"
        style={{ minHeight: 'var(--mobile-sticky-inner)' }}
      >
        <a
          href={phoneHref(activeConfig.phone)}
          className={`${linkClass} border border-white/10 bg-white/5 text-white`}
          aria-label="Call gym"
        >
          <Phone className="h-[1.125rem] w-[1.125rem] text-[var(--color-yellow)]" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappHref(activeConfig.whatsapp, activeConfig.whatsappMessage)}
          target="_blank"
          rel="noreferrer noopener"
          className={`${linkClass} bg-[var(--color-yellow)] font-bold text-black`}
          aria-label="WhatsApp gym"
        >
          <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={activeConfig.location.googleMapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`${linkClass} border border-white/10 bg-white/5 text-white`}
          aria-label="Open location"
        >
          <MapPin className="h-[1.125rem] w-[1.125rem] text-[var(--color-yellow)]" aria-hidden="true" />
          Location
        </a>
      </div>
    </div>
  )
}

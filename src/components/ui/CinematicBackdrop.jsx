import CinematicImage from './CinematicImage'
import { resolvePhotoId } from '../../utils/images'

/**
 * Full-bleed cinematic background with scrim — replaces CSS background-image.
 */
export default function CinematicBackdrop({
  image,
  alt = '',
  priority = false,
  preset = 'hero',
  scrim = 'default',
  className = '',
  imageClassName = 'opacity-35 md:opacity-30',
}) {
  const photoId = resolvePhotoId(image)
  if (!photoId) return null

  const scrims = {
    default:
      'absolute inset-0 bg-gradient-to-b from-[var(--void)]/50 via-[var(--void)]/75 to-[var(--void)]/95',
    performance:
      'absolute inset-0 bg-gradient-to-r from-[var(--void)] via-[var(--void)]/92 to-[var(--void)]/75',
    lateral:
      'absolute inset-0 bg-gradient-to-r from-[var(--void)]/90 via-[var(--void)]/55 to-[var(--void)]/85',
    recovery:
      'absolute inset-0 bg-gradient-to-r from-[var(--void)]/88 via-[var(--void)]/70 to-[var(--void)]/50',
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <CinematicImage
        image={photoId}
        alt={alt}
        priority={priority}
        preset={preset}
        sizes="100vw"
        className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
      />
      <div className={scrims[scrim] || scrims.default} />
    </div>
  )
}

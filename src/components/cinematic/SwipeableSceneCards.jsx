import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SwipeableSceneCards({ children, className = '' }) {
  const reduced = useReducedMotion()
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const items = Array.isArray(children) ? children : [children]
  const count = items.length

  const getCardStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('[data-scene-card]')
    if (!card) return 0
    const gap = parseFloat(getComputedStyle(track).gap) || 16
    return card.getBoundingClientRect().width + gap
  }, [])

  const scrollToIndex = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(count - 1, next))
      const track = trackRef.current
      if (!track) return

      const card = track.children[clamped]
      if (card) {
        card.scrollIntoView({
          behavior: reduced ? 'auto' : 'smooth',
          inline: 'center',
          block: 'nearest',
        })
      }
      setIndex(clamped)
    },
    [count, reduced],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track || count <= 1) return undefined

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const step = getCardStep()
        if (!step) return
        const next = Math.round(track.scrollLeft / step)
        setIndex(Math.max(0, Math.min(count - 1, next)))
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('scroll', onScroll)
    }
  }, [count, getCardStep])

  if (reduced) {
    return (
      <div className={`scene-cards-static ${className}`}>
        {items.map((child, i) => (
          <div key={i} className="scene-card-slot">
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`swipeable-scenes ${className}`.trim()}>
      <div
        ref={trackRef}
        className="swipeable-scenes-track swipeable-scenes-track--snap"
        role="region"
        aria-roledescription="carousel"
        aria-label="Swipeable scenes"
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-scene-card
            className={`scene-card-slot ${i === index ? 'scene-card-slot--active' : ''}`}
            aria-hidden={i !== index ? true : undefined}
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="swipeable-scenes-controls">
          <button
            type="button"
            className="scene-nav-btn"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft strokeWidth={1.25} className="h-4 w-4" />
          </button>
          <div className="scene-dots" role="tablist" aria-label="Slide navigation">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`scene-dot ${i === index ? 'scene-dot--active' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="scene-nav-btn"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= count - 1}
            aria-label="Next slide"
          >
            <ChevronRight strokeWidth={1.25} className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

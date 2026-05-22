import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useCinematicOSOptional } from '../../context/CinematicOSContext'
import { spring, drag } from '../../motion/choreography'

const GAP = 16

/** Native overflow scroll — finger tracks 1:1 (Signature Programs, etc.) */
function NativeTouchTrack({ items, index, setIndex, className }) {
  const os = useCinematicOSOptional()
  const trackRef = useRef(null)
  const lastScrollLeft = useRef(0)
  const lastScrollT = useRef(0)

  const getCardStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('[data-scene-card]')
    if (!card) return 0
    const gap = parseFloat(getComputedStyle(track).gap) || GAP
    return card.getBoundingClientRect().width + gap
  }, [])

  const scrollToIndex = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(items.length - 1, next))
      const track = trackRef.current
      if (!track) return
      const stride = getCardStep()
      if (stride) {
        track.scrollTo({ left: clamped * stride, behavior: 'auto' })
      } else {
        const card = track.children[clamped]
        card?.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' })
      }
      setIndex(clamped)
    },
    [items.length, getCardStep, setIndex],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track || items.length <= 1) return undefined

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const stride = getCardStep()
        if (!stride) return
        const next = Math.round(track.scrollLeft / stride)
        setIndex(Math.max(0, Math.min(items.length - 1, next)))

        const now = performance.now()
        const dt = Math.max(now - lastScrollT.current, 1)
        const vx = ((track.scrollLeft - lastScrollLeft.current) / dt) * 1000
        lastScrollLeft.current = track.scrollLeft
        lastScrollT.current = now
        if (Math.abs(vx) > 40) os?.recordSwipe?.(vx)
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('scroll', onScroll)
    }
  }, [items.length, getCardStep, setIndex, os])

  return (
    <div className={`swipeable-scenes swipeable-scenes--native-touch ${className}`.trim()}>
      <div
        ref={trackRef}
        className="swipeable-scenes-track swipeable-scenes-track--native"
        role="region"
        aria-roledescription="carousel"
        aria-label="Swipeable scenes"
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-scene-card
            className={`scene-card-slot ${i === index ? 'scene-card-slot--active' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <SwipeControls count={items.length} index={index} onSelect={scrollToIndex} />
      ) : null}
    </div>
  )
}

function SpringSwipeTrack({ items, index, setIndex, className }) {
  const os = useCinematicOSOptional()
  const trackRef = useRef(null)
  const [step, setStep] = useState(0)
  const x = useMotionValue(0)
  const springX = useSpring(x, spring.snap)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-scene-card]')
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).gap) || GAP
    setStep(card.getBoundingClientRect().width + gap)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, items.length])

  const snapTo = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(items.length - 1, next))
      setIndex(clamped)
      if (step) {
        animate(x, -clamped * step, spring.snap)
      }
    },
    [items.length, setIndex, step, x],
  )

  useEffect(() => {
    if (step) animate(x, -index * step, spring.snap)
  }, [index, step, x])

  const minX = -(items.length - 1) * step

  return (
    <div className={`swipeable-scenes ${className}`.trim()}>
      <motion.div
        ref={trackRef}
        className="swipeable-scenes-track swipeable-scenes-track--spring gpu-layer"
        style={{ x: springX }}
        drag="x"
        dragConstraints={step ? { left: minX, right: 0 } : false}
        dragElastic={drag.elastic}
        dragMomentum
        dragTransition={drag.transition}
        onDragEnd={(_, info) => {
          if (!step) return
          os?.recordSwipe?.(info.velocity.x)
          const projected = x.get() + info.velocity.x * drag.momentum
          const next = Math.round(-projected / step)
          snapTo(next)
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Swipeable scenes"
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-scene-card
            className={`scene-card-slot gpu-layer ${i === index ? 'scene-card-slot--active' : ''}`}
          >
            {child}
          </div>
        ))}
      </motion.div>

      {items.length > 1 ? (
        <SwipeControls count={items.length} index={index} onSelect={snapTo} />
      ) : null}
    </div>
  )
}

function ScrollSwipeTrack({ items, index, setIndex, className, reduced }) {
  const trackRef = useRef(null)

  const getCardStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('[data-scene-card]')
    if (!card) return 0
    const gap = parseFloat(getComputedStyle(track).gap) || GAP
    return card.getBoundingClientRect().width + gap
  }, [])

  const scrollToIndex = useCallback(
    (next) => {
      const clamped = Math.max(0, Math.min(items.length - 1, next))
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
    [items.length, reduced, setIndex],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track || items.length <= 1) return undefined

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const stride = getCardStep()
        if (!stride) return
        const next = Math.round(track.scrollLeft / stride)
        setIndex(Math.max(0, Math.min(items.length - 1, next)))
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('scroll', onScroll)
    }
  }, [items.length, getCardStep, setIndex])

  return (
    <div className={`swipeable-scenes ${className}`.trim()}>
      <div
        ref={trackRef}
        className="swipeable-scenes-track swipeable-scenes-track--snap gpu-layer"
        role="region"
        aria-roledescription="carousel"
        aria-label="Swipeable scenes"
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-scene-card
            className={`scene-card-slot gpu-layer ${i === index ? 'scene-card-slot--active' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <SwipeControls count={items.length} index={index} onSelect={scrollToIndex} />
      ) : null}
    </div>
  )
}

function SwipeControls({ count, index, onSelect }) {
  return (
    <div className="swipeable-scenes-controls">
      <button
        type="button"
        className="scene-nav-btn"
        onClick={() => onSelect(index - 1)}
        disabled={index === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft strokeWidth={1.25} className="h-4 w-4" />
      </button>
      <div className="scene-dots" role="tablist" aria-label="Slide navigation">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`scene-dot ${i === index ? 'scene-dot--active' : ''}`}
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        type="button"
        className="scene-nav-btn"
        onClick={() => onSelect(index + 1)}
        disabled={index >= count - 1}
        aria-label="Next slide"
      >
        <ChevronRight strokeWidth={1.25} className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function SwipeableSceneCards({ children, className = '', nativeTouch = false }) {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  const [index, setIndex] = useState(0)
  const items = Array.isArray(children) ? children : [children]

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

  if (nativeTouch) {
    return (
      <NativeTouchTrack
        items={items}
        index={index}
        setIndex={setIndex}
        className={className}
      />
    )
  }

  if (mobile) {
    return (
      <SpringSwipeTrack
        items={items}
        index={index}
        setIndex={setIndex}
        className={className}
      />
    )
  }

  return (
    <ScrollSwipeTrack
      items={items}
      index={index}
      setIndex={setIndex}
      className={className}
      reduced={reduced}
    />
  )
}

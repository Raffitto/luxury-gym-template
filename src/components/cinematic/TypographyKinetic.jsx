import { motion } from 'framer-motion'
import { headlineVariants, ritualVariants, copyVariants } from '../../intelligence/emotionalMotion'
import { SCENE_EMOTION } from '../../intelligence/scenePacing'
import { viewportOnce } from '../../motion/choreography'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { useIsPhone } from '../../hooks/useIsPhone'

function resolveEmotion(sceneId, emotion) {
  if (emotion) return emotion
  if (sceneId && SCENE_EMOTION[sceneId]) return SCENE_EMOTION[sceneId]
  return 'exclusivity'
}

export function KineticRitual({ children, className = '', sceneId, emotion }) {
  const { reduced } = useCinematicOS()
  const phone = useIsPhone()
  const e = resolveEmotion(sceneId, emotion)

  if (reduced || phone) {
    return <p className={`font-ritual kinetic-ritual ${className}`}>{children}</p>
  }

  return (
    <motion.p
      className={`font-ritual kinetic-ritual ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-8%')}
      variants={ritualVariants(e, sceneId, false)}
    >
      {children}
    </motion.p>
  )
}

export function KineticHeadline({ children, className = '', lines, sceneId, emotion }) {
  const { reduced, memory } = useCinematicOS()
  const phone = useIsPhone()
  const e = resolveEmotion(sceneId, emotion)

  if (reduced || phone) {
    if (lines) {
      return (
        <h2 className={className}>
          {lines.map((line) => (
            <span key={line} className="kinetic-headline-line block">
              {line}
            </span>
          ))}
        </h2>
      )
    }
    return <h2 className={`kinetic-headline ${className}`}>{children}</h2>
  }

  const bias = memory.transitionBias * 0.35
  const viewport = viewportOnce('-6%')

  if (lines) {
    const pacing = headlineVariants(e, bias, sceneId, false)
    const lineStagger = 0.07
    return (
      <h2 className={className}>
        {lines.map((line, i) => (
          <motion.span
            key={line}
            className="kinetic-headline-line block"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={pacing}
            transition={{
              ...pacing.visible.transition,
              delay: pacing.visible.transition.delay + i * lineStagger,
            }}
          >
            {line}
          </motion.span>
        ))}
      </h2>
    )
  }

  return (
    <motion.h2
      className={`kinetic-headline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={headlineVariants(e, bias, sceneId, false)}
    >
      {children}
    </motion.h2>
  )
}

export function KineticCopy({ children, className = '', delay, sceneId, emotion }) {
  const { reduced, memory } = useCinematicOS()
  const phone = useIsPhone()
  const e = resolveEmotion(sceneId, emotion)

  if (reduced || phone) {
    return <p className={`kinetic-copy ${className}`}>{children}</p>
  }

  const variants = copyVariants(e, memory.transitionBias * 0.25, sceneId, false)
  const extraDelay = delay ?? 0

  return (
    <motion.p
      className={`kinetic-copy ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-5%')}
      variants={variants}
      transition={{
        ...variants.visible.transition,
        delay: variants.visible.transition.delay + extraDelay,
      }}
    >
      {children}
    </motion.p>
  )
}

export function KineticBlock({ children, className = '', sceneId, emotion }) {
  const { reduced } = useCinematicOS()
  const phone = useIsPhone()

  if (reduced || phone) {
    return <div className={className}>{children}</div>
  }

  const e = resolveEmotion(sceneId, emotion)

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce()}
      variants={copyVariants(e, 0.08, sceneId, false)}
    >
      {children}
    </motion.div>
  )
}

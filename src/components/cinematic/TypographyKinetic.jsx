import { motion } from 'framer-motion'
import { headlineVariants, ritualVariants, copyVariants } from '../../intelligence/emotionalMotion'
import { SCENE_EMOTION } from '../../intelligence/scenePacing'
import { viewportOnce } from '../../motion/choreography'
import { useCinematicOS } from '../../context/CinematicOSContext'

function resolveEmotion(sceneId, emotion) {
  if (emotion) return emotion
  if (sceneId && SCENE_EMOTION[sceneId]) return SCENE_EMOTION[sceneId]
  return 'exclusivity'
}

export function KineticRitual({ children, className = '', sceneId, emotion }) {
  const { reduced } = useCinematicOS()
  const e = resolveEmotion(sceneId, emotion)

  if (reduced) {
    return <p className={`font-ritual ${className}`}>{children}</p>
  }

  return (
    <motion.p
      className={`font-ritual kinetic-ritual ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-8%')}
      variants={ritualVariants(e)}
    >
      {children}
    </motion.p>
  )
}

export function KineticHeadline({ children, className = '', lines, sceneId, emotion }) {
  const { reduced, memory } = useCinematicOS()
  const e = resolveEmotion(sceneId, emotion)
  const bias = memory.transitionBias * 0.5

  if (reduced) {
    return <h2 className={className}>{children}</h2>
  }

  if (lines) {
    const pacing = headlineVariants(e, bias)
    return (
      <h2 className={className}>
        {lines.map((line, i) => (
          <motion.span
            key={line}
            className="kinetic-headline-line block"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce('-6%')}
            variants={pacing}
            transition={{ ...pacing.visible.transition, delay: pacing.visible.transition.delay + i * 0.07 }}
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
      viewport={viewportOnce('-6%')}
      variants={headlineVariants(e, bias)}
    >
      {children}
    </motion.h2>
  )
}

export function KineticCopy({ children, className = '', delay, sceneId, emotion }) {
  const { reduced, memory } = useCinematicOS()
  const e = resolveEmotion(sceneId, emotion)

  if (reduced) {
    return <p className={className}>{children}</p>
  }

  const variants = copyVariants(e, memory.transitionBias * 0.35)
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
  const e = resolveEmotion(sceneId, emotion)

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce('-6%')}
      variants={copyVariants(e, 0.1)}
    >
      {children}
    </motion.div>
  )
}

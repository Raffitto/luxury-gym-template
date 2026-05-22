import { motion } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'
import { useLiquidScroll } from '../../motion/choreography'

export default function CameraRig({ children }) {
  const { reduced, gyro, scrollYProgress, tierConfig, energy, memory } = useCinematicOS()

  const driftScale = tierConfig.cameraDrift
  const driftX = useLiquidScroll(scrollYProgress, [0, 0.35, 0.7, 1], camera.drift.pageX)
  const driftY = useLiquidScroll(scrollYProgress, [0, 1], camera.drift.pageY)
  const depthScale = useLiquidScroll(
    scrollYProgress,
    [0, 0.5, 1],
    camera.drift.depthScale.map((s) => 1 + (s - 1) * driftScale * (1 + memory.transitionBias * 0.08)),
  )

  if (reduced) {
    return <div className="camera-rig">{children}</div>
  }

  const gyroEnabled = tierConfig.gyro && gyro
  const gyroSpring = energy > 0.4 ? camera.spring.drift : camera.spring.glide

  return (
    <div className="camera-rig camera-rig--intelligent">
      <motion.div
        className="camera-rig-body gpu-layer"
        style={{ x: driftX, y: driftY, scale: depthScale }}
      >
        <motion.div
          className="camera-rig-gyro gpu-layer"
          animate={{
            x: gyroEnabled ? (gyro?.x ?? 0) * driftScale : 0,
            y: gyroEnabled ? (gyro?.y ?? 0) * driftScale : 0,
          }}
          transition={gyroSpring}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'
import { useLiquidScroll } from '../../motion/choreography'

export default function CameraRig({ children }) {
  const { reduced, gyro, scrollYProgress, tierConfig } = useCinematicOS()

  const driftScale = tierConfig.cameraDrift * 0.85
  const driftX = useLiquidScroll(scrollYProgress, [0, 0.35, 0.7, 1], camera.drift.pageX)
  const driftY = useLiquidScroll(scrollYProgress, [0, 1], camera.drift.pageY)
  const depthScale = useLiquidScroll(scrollYProgress, [0, 0.5, 1], camera.drift.depthScale)

  if (reduced) {
    return <div className="camera-rig">{children}</div>
  }

  const gyroEnabled = tierConfig.gyro && gyro
  const gyroScale = 0.45 * driftScale

  return (
    <div className="camera-rig camera-rig--restrained">
      <motion.div
        className="camera-rig-body gpu-layer"
        style={{ x: driftX, y: driftY, scale: depthScale }}
      >
        <motion.div
          className="camera-rig-gyro gpu-layer"
          animate={{
            x: gyroEnabled ? (gyro?.x ?? 0) * gyroScale : 0,
            y: gyroEnabled ? (gyro?.y ?? 0) * gyroScale : 0,
          }}
          transition={camera.spring.glide}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

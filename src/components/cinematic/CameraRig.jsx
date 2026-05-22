import { motion } from 'framer-motion'
import { useCinematicOS } from '../../context/CinematicOSContext'
import { camera } from '../../motion/camera'
import { useLiquidScroll } from '../../motion/choreography'

export default function CameraRig({ children }) {
  const { reduced, gyro, scrollYProgress } = useCinematicOS()

  const driftX = useLiquidScroll(scrollYProgress, [0, 0.35, 0.7, 1], camera.drift.pageX)
  const driftY = useLiquidScroll(scrollYProgress, [0, 1], camera.drift.pageY)
  const driftScale = useLiquidScroll(scrollYProgress, [0, 0.5, 1], camera.drift.depthScale)
  if (reduced) {
    return <div className="camera-rig">{children}</div>
  }

  return (
    <div className="camera-rig">
      <motion.div
        className="camera-rig-body gpu-layer"
        style={{ x: driftX, y: driftY, scale: driftScale }}
      >
        <motion.div
          className="camera-rig-gyro gpu-layer"
          animate={{ x: gyro?.x ?? 0, y: gyro?.y ?? 0 }}
          transition={camera.spring.drift}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

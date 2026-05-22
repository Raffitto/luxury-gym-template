import { motion } from 'framer-motion'
import FilmContinuum from './FilmContinuum'
import VelocityGlow from './VelocityGlow'
import SceneBridge from './SceneBridge'
import HeroExperience from '../home/HeroExperience'
import ProgramsScene from '../home/ProgramsScene'
import TransformationScene from '../home/TransformationScene'
import FacilityScene from '../home/FacilityScene'
import MembershipFinale from '../home/MembershipFinale'
import { useScrollVelocity } from '../../hooks/useScrollVelocity'
import { useGyroDrift } from '../../hooks/useGyroDrift'
import { useScenePreload } from '../../hooks/useScenePreload'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function LandingImmersion() {
  const reduced = useReducedMotion()
  const velocity = useScrollVelocity()
  const drift = useGyroDrift()
  useScenePreload()

  return (
    <div className="landing-immersion">
      {!reduced ? <VelocityGlow intensity={velocity} /> : null}
      <FilmContinuum gyro={reduced ? null : drift}>
        <div className="cinematic-landing cinematic-landing--alive">
          <HeroExperience />
          <SceneBridge variant="hero-exit" />
          <ProgramsScene />
          <SceneBridge variant="flow" />
          <TransformationScene />
          <SceneBridge variant="flow" />
          <FacilityScene />
          <SceneBridge variant="flow" />
          <MembershipFinale />
        </div>
      </FilmContinuum>
      {!reduced ? (
        <motion.div
          className="landing-grain-lite"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.028 }}
          transition={{ duration: 1.2 }}
        />
      ) : null}
    </div>
  )
}

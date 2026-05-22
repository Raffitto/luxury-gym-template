import { useEffect } from 'react'
import { CinematicOSProvider } from '../../context/CinematicOSContext'
import { cinematicAudio } from '../../audio/CinematicAudioSystem'
import { useIsPhone } from '../../hooks/useIsPhone'
import ContinuityEngine from './ContinuityEngine'
import EnvironmentalField from './EnvironmentalField'
import CameraRig from './CameraRig'
import SceneBridge from './SceneBridge'
import HeroExperience from '../home/HeroExperience'
import ProgramsScene from '../home/ProgramsScene'
import TransformationScene from '../home/TransformationScene'
import FacilityScene from '../home/FacilityScene'
import MembershipFinale from '../home/MembershipFinale'
import { useCinematicOS } from '../../context/CinematicOSContext'

function LandingFilm() {
  const { reduced } = useCinematicOS()
  const phone = useIsPhone()

  return (
    <div className="landing-immersion">
      {!reduced && !phone ? <ContinuityEngine /> : null}
      {!reduced ? <EnvironmentalField /> : null}
      <CameraRig>
        <div
          className={`cinematic-landing cinematic-landing--alive cinematic-landing--os cinematic-landing--editorial cinematic-landing--film cinematic-landing--depth ${phone ? 'cinematic-landing--handheld cinematic-landing--fast' : ''}`.trim()}
        >
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
      </CameraRig>
    </div>
  )
}

export default function CinematicOS() {
  useEffect(() => {
    const unregister = cinematicAudio.registerAmbient({
      id: 'void-atmosphere',
      src: null,
      baseVolume: 0.08,
      reactive: true,
    })
    return () => {
      unregister()
      cinematicAudio.dispose()
    }
  }, [])

  return (
    <CinematicOSProvider>
      <LandingFilm />
    </CinematicOSProvider>
  )
}

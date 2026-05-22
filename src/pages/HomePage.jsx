import FilmContinuum from '../components/cinematic/FilmContinuum'
import SceneBridge from '../components/cinematic/SceneBridge'
import HeroExperience from '../components/home/HeroExperience'
import ProgramsScene from '../components/home/ProgramsScene'
import TransformationScene from '../components/home/TransformationScene'
import FacilityScene from '../components/home/FacilityScene'
import MembershipFinale from '../components/home/MembershipFinale'

export default function HomePage() {
  return (
    <FilmContinuum>
      <div className="cinematic-landing">
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
  )
}

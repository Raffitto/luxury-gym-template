import HeroExperience from '../components/home/HeroExperience'
import ProgramsScene from '../components/home/ProgramsScene'
import TransformationScene from '../components/home/TransformationScene'
import FacilityScene from '../components/home/FacilityScene'
import MembershipFinale from '../components/home/MembershipFinale'

export default function HomePage() {
  return (
    <div className="cinematic-landing">
      <HeroExperience />
      <ProgramsScene />
      <TransformationScene />
      <FacilityScene />
      <MembershipFinale />
    </div>
  )
}

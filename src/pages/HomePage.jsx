import HeroExperience from '../components/home/HeroExperience'
import PhilosophySection from '../components/home/PhilosophySection'
import PerformanceSection from '../components/home/PerformanceSection'
import ArchitectsSection from '../components/home/ArchitectsSection'
import MembershipSection from '../components/home/MembershipSection'
import RecoverySection from '../components/home/RecoverySection'
import DigitalSection from '../components/home/DigitalSection'
import LocationsSection from '../components/home/LocationsSection'
import ProofSection from '../components/home/ProofSection'
import ClimaxSection from '../components/home/ClimaxSection'
import RitualPause from '../components/ui/RitualPause'

export default function HomePage() {
  return (
    <>
      <HeroExperience />
      <RitualPause label="Sequence 02 · Doctrine begins" />
      <PhilosophySection />
      <PerformanceSection />
      <RitualPause label="Sequence 04 · Architects" />
      <ArchitectsSection />
      <MembershipSection />
      <RitualPause label="Sequence 06 · Regeneration" />
      <RecoverySection />
      <DigitalSection />
      <LocationsSection />
      <ProofSection />
      <RitualPause label="Sequence 10 · Threshold" />
      <ClimaxSection />
    </>
  )
}

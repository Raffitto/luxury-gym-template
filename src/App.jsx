import { useEffect } from 'react'
import { activeConfig } from './data/activeConfig'
import { applyBrandTheme } from './utils/theme'
import Header from './components/Header'
import Hero from './components/Hero'
import OfferSection from './components/OfferSection'
import Services from './components/Services'
import Memberships from './components/Memberships'
import Transformations from './components/Transformations'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    applyBrandTheme(activeConfig.colors)
    document.title = activeConfig.seo.title

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', activeConfig.seo.description)
  }, [])

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[var(--color-black)] text-[var(--color-white)]">
      <Header />
      <main className="page-main w-full min-w-0">
        <Hero />
        <OfferSection />
        <Services />
        <Memberships />
        <Transformations />
        <Trainers />
        <Gallery />
        <Reviews />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

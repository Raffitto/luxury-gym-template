import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { activeConfig } from './data/activeConfig'
import { routes } from './design-system/tokens'
import Shell from './components/layout/Shell'
import HomePage from './pages/HomePage'
import ClassesPage from './pages/ClassesPage'
import TrainersPage from './pages/TrainersPage'
import MembershipPage from './pages/MembershipPage'
import LocationsPage from './pages/LocationsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TrialPage from './pages/TrialPage'

export default function App() {
  useEffect(() => {
    document.title = activeConfig.seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', activeConfig.seo.description)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.classes} element={<ClassesPage />} />
          <Route path={routes.trainers} element={<TrainersPage />} />
          <Route path={routes.membership} element={<MembershipPage />} />
          <Route path={routes.locations} element={<LocationsPage />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.contact} element={<ContactPage />} />
          <Route path={routes.trial} element={<TrialPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

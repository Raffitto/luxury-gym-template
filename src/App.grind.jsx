import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { activeConfig } from './data/activeConfig'
import { routes } from './design-system/tokens'
import GrindShell from './components/grind/GrindShell'
import GrindHomePage from './pages/grind/GrindHomePage'
import GrindClassesPage from './pages/grind/GrindClassesPage'
import GrindMembershipPage from './pages/grind/GrindMembershipPage'
import GrindLocationsPage from './pages/grind/GrindLocationsPage'
import GrindAboutPage from './pages/grind/GrindAboutPage'
import GrindContactPage from './pages/grind/GrindContactPage'
import GrindTrialPage from './pages/grind/GrindTrialPage'
import GrindTrainersPage from './pages/grind/GrindTrainersPage'

export default function AppGrind() {
  useEffect(() => {
    document.title = activeConfig.seo.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', activeConfig.seo.description)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GrindShell />}>
          <Route path={routes.home} element={<GrindHomePage />} />
          <Route path={routes.classes} element={<GrindClassesPage />} />
          <Route path={routes.trainers} element={<GrindTrainersPage />} />
          <Route path={routes.membership} element={<GrindMembershipPage />} />
          <Route path={routes.locations} element={<GrindLocationsPage />} />
          <Route path={routes.about} element={<GrindAboutPage />} />
          <Route path={routes.contact} element={<GrindContactPage />} />
          <Route path={routes.trial} element={<GrindTrialPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

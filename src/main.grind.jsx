import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'
import AppGrind from './App.grind.jsx'
import './styles/grind-site.css'

document.documentElement.classList.add('grind-site')

const rootEl = document.getElementById('root')

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <AppErrorBoundary>
        <AppGrind />
      </AppErrorBoundary>
    </StrictMode>,
  )
}

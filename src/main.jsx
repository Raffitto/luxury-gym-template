import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { warmStart } from './utils/preload'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'
import './index.css'
import App from './App.jsx'

if (import.meta.env.VITE_BRAND === 'grind') {
  import('./styles/atmosphere-grind.css')
  import('./styles/cinematic-brand-grind.css')
  document.documentElement.classList.add('brand-grind')
}

try {
  warmStart()
} catch (err) {
  console.warn('[warmStart]', err)
}

const rootEl = document.getElementById('root')

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </StrictMode>,
  )
} else {
  document.body.innerHTML =
    '<p style="color:#f2f2f2;background:#000;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:system-ui">Grind Gym — root mount failed. Reload the page.</p>'
}

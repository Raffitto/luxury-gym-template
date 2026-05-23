import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'
import App from './App.jsx'

const isGrind = import.meta.env.VITE_BRAND === 'grind'

if (isGrind) {
  await import('./styles/grind-site.css')
  document.documentElement.classList.add('grind-site')
} else {
  await import('./index.css')
  const { warmStart } = await import('./utils/preload')
  try {
    warmStart()
  } catch (err) {
    console.warn('[warmStart]', err)
  }
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
}

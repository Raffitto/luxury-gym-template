import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { warmStart } from './utils/preload'
import './index.css'
import App from './App.jsx'

if (import.meta.env.VITE_BRAND === 'grind') {
  import('./styles/atmosphere-grind.css')
  import('./styles/cinematic-brand-grind.css')
  document.documentElement.classList.add('brand-grind')
}

warmStart()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

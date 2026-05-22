import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { warmStart } from './utils/preload'
import './index.css'
import App from './App.jsx'

warmStart()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { site } from './site.ts'

if (import.meta.env.PROD) {
  console.log(
    `%c ${site.initials} `,
    'background:#e8613a;color:#0e0e0e;font-weight:700;padding:2px 6px;border-radius:3px',
    `${site.name} · ${site.location}`,
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesHome from './Routes/RoutesHome'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import"./Services/firebase"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesHome />
  </StrictMode>,
)

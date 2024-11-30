import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes/Routers/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { RegistrationProvider } from './contextsApi/RegistrationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationProvider>
      <RouterProvider router={routes} />
    </RegistrationProvider>
  </StrictMode>
)

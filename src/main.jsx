import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RoutesComponent from './Routes.jsx'
import { AuthProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
         <RoutesComponent />
       </AuthProvider>       
  </StrictMode>
)

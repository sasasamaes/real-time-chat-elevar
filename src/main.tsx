import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

import './index.css'
import { AuthProvider } from './context/AuthContext'
import { MessageProvider } from './context/MessageContext'
import { registerSW } from 'virtual:pwa-register'

// Registra el Service Worker
registerSW({
   onNeedRefresh() {
      console.log('Nueva versión disponible. Por favor, refresca la página.');

   },
   onOfflineReady() {
      console.log('La aplicación está lista para usarse offline.');

   },
 })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <AuthProvider>
        <MessageProvider>
           <App />
         </MessageProvider>
     </AuthProvider>
  </React.StrictMode>,
)

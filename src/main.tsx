import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

import './index.css'
import { AuthProvider } from './context/AuthContext'
import { MessageProvider } from './context/MessageContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <AuthProvider>
        <MessageProvider>
           <App />
      </MessageProvider>
     </AuthProvider>
  </React.StrictMode>,
)

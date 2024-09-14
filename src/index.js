import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from './contexts/authProvider'
import { SidebarProvider } from './contexts/sidebarContexts'

import App from './App'

import './css/global.css'
import './css/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <Router>
  <AuthProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </AuthProvider>
  </Router>
  </React.StrictMode>
)
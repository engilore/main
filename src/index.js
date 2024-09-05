import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from './container/Auth/contexts'

import App from './App'

import './css/global.css'
import './css/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <Router>
  <AuthProvider>
    <App />
  </AuthProvider>
  </Router>
  </React.StrictMode>
)
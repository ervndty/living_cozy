import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './dist/index.css'
import './dist/navbar.css'
import './dist/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

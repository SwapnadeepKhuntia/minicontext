import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Usercontextprovider from './context/Usercontextprovider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Usercontextprovider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </Usercontextprovider>
  </React.StrictMode>,
)

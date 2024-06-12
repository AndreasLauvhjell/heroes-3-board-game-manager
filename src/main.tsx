import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <App />
    </div>
  </React.StrictMode>,
)

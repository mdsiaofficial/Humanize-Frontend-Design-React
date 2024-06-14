import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Debugger from './Pages/Debugger.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <div>
      <Debugger/>
    </div> */}
  </React.StrictMode>,
)

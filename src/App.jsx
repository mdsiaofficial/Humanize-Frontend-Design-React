import { useState } from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import AlertDialog from './Components/AlertDialog'
import Button from './Components/Button'
import Navbar from './Global/Navbar'
import Home from './Pages/Home'
import Footer from './Global/Footer'

function App() {

  return (
    <>
      <div className="bg-slate-900">

        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App

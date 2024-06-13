import { useState } from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import AlertDialog from './Components/AlertDialog'
import Button from './Components/Button'
import Navbar from './Global/Navbar'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Footer from './Global/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadBlog from './Components/ReadBlog'
function App() {

  return (
    <>
      <Router>
        <div className="bg-slate-900">
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/pricing' element={<Pricing/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/blog' element={<Blog />}></Route>
              <Route path='/readblog' element={<ReadBlog />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
    </>
  )
}

export default App

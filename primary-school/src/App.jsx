// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events';
import Resources from './Pages/Resources';
import Contact from './Pages/Contacts';


function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </>
  )
}

export default App

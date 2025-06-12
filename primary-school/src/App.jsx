// import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Events from './pages/Events';
// import Resources from './pages/Resources';
// import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App

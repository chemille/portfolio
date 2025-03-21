import { useState } from 'react'
import './App.css'
import Navibar from './components/Navibar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <div style={{marginTop: '60px'}}>    {/* Add margin so content isn't hidden behind the navbar */}
        </div>
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/style.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Wrapper component to use `useLocation` inside the Router
function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      <div className='hero pt-3'>
        <Navbar />
        {isHome && <Hero />}
      </div>

      {isHome && (
        <>
          <About />
          <Projects />
        </>
      )}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import NavBar from './components/navigation/NavBar';
import Footer from './components/footer/Footer';
import LoadingCircle from './components/loading/LoadingCircle'; // Import the loading screen

function App() {

  // Render the main app content after loading is complete
  return (
    <>
      <div className='portfolio'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='main-container'>
          <div className='side'>
            <Sidebar />
          </div>

          <div className='main'>
            <About />
            {/* <Skills /> */}
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './styles/main.scss'; // your SCSS entry
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
        <Navbar />
        <div className='gradient-bg'>
            <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
            </svg>
            <div class="gradients-container">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
            <div class="interactive"></div>
            </div>

        </div>

        <div className="App">
        <Hero />
        <About/>
        <Skills/>
        <Contact/>
        </div>
    </>
  );
}

export default App;

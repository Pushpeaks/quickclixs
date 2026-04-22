import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Scene3D from './components/Scene3D';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Custom Cursor follower
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <div className="custom-cursor" ref={cursorRef}></div>
      <div id="scene-container">
        <Scene3D />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer>
        <div className="container" style={{ 
          padding: 'var(--container-padding) 0', 
          textAlign: 'center', 
          opacity: 0.5, 
          fontSize: 'var(--fs-small)',
          letterSpacing: '1px'
        }}>
          &copy; {new Date().getFullYear()} QUICKCLIXS / MRIDUL SRIVASTAVA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

export default App;

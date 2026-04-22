import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
    
    tl.fromTo(title1Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 })
      .fromTo(title2Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.2")
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 0.6, y: 0 }, "-=1");

  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="reveal-text">
          <h1 ref={title1Ref} className="hero-title">CAPTURING</h1>
        </div>
        <div className="reveal-text">
          <h1 ref={title2Ref} className="hero-title-outline">ETERNITY</h1>
        </div>
        <p ref={subRef} className="hero-sub">
          A Spiritual Journey Through the Lens of Mridul Srivastava
        </p>
        <div style={{ marginTop: '3rem' }}>
          <a href="#work" className="magnetic-btn">VIEW PORTFOLIO</a>
        </div>
        
        <div className="scroll-indicator" style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          opacity: 0.4,
          fontSize: '0.7rem',
          letterSpacing: '2px'
        }}>
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
};

export default Hero;

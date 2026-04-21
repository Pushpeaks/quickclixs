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
    <section id="hero" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="container">
        <div className="reveal-text">
          <h1 ref={title1Ref} style={{ fontSize: '7rem', lineHeight: '0.9', marginBottom: '0.5rem' }}>CAPTURING</h1>
        </div>
        <div className="reveal-text">
          <h1 ref={title2Ref} style={{ fontSize: '7rem', lineHeight: '0.9', color: 'transparent', WebkitTextStroke: '1px var(--foreground)' }}>ETERNITY</h1>
        </div>
        <p ref={subRef} style={{ 
          marginTop: '2rem', 
          maxWidth: '500px', 
          margin: '2rem auto', 
          fontSize: '1.1rem', 
          letterSpacing: '1px',
          fontWeight: '300',
          textTransform: 'uppercase'
        }}>
          A Spiritual Journey Through the Lens of Mridul Srivastava
        </p>
        <div style={{ marginTop: '3rem' }}>
          <a href="#work" className="magnetic-btn">VIEW PORTFOLIO</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

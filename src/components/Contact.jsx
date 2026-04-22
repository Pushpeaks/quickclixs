import React, { useEffect, useRef } from 'react';
import { Camera, LucideMail, LucideMapPin } from 'lucide-react';
import gsap from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(formRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(infoRef.current.children, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.8");
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 10vw, 6rem)' }}>
          <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem' }}>LET'S CONNECT</h2>
          <p style={{ opacity: 0.6, letterSpacing: '2px', fontSize: 'var(--fs-small)' }}>AVAILABLE FOR SHOOTS GLOBALLY</p>
        </div>
        
        <div className="grid grid-2">
          <div ref={formRef} className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '1px' }}>YOUR NAME</label>
                <input type="text" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '1px' }}>EMAIL ADDRESS</label>
                <input type="email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '1px' }}>MESSAGE</label>
                <textarea rows="4" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none', resize: 'none', fontSize: '1rem' }}></textarea>
              </div>
              <button type="submit" className="magnetic-btn" style={{ width: 'fit-content', marginTop: '1rem' }}>SEND MESSAGE</button>
            </form>
          </div>
          
          <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '50%', color: 'var(--accent)' }}>
                <Camera size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.7rem', letterSpacing: '1px' }}>INSTAGRAM</p>
                <a href="https://instagram.com/quickclixs" style={{ color: 'white', textDecoration: 'none', fontSize: 'var(--fs-body)', fontWeight: '500' }}>@quickclixs</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '50%', color: 'var(--accent)' }}>
                <LucideMail size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.7rem', letterSpacing: '1px' }}>EMAIL</p>
                <a href="mailto:hello@quickclixs.com" style={{ color: 'white', textDecoration: 'none', fontSize: 'var(--fs-body)', fontWeight: '500' }}>contact@quickclixs.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: 'clamp(1rem, 3vw, 1.5rem)', borderRadius: '50%', color: 'var(--accent)' }}>
                <LucideMapPin size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.7rem', letterSpacing: '1px' }}>LOCATION</p>
                <p style={{ fontSize: 'var(--fs-body)', fontWeight: '500' }}>India / Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

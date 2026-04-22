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
        <div ref={headerRef} className="contact-header">
          <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem' }}>LET'S CONNECT</h2>
          <p style={{ opacity: 0.6, letterSpacing: '2px', fontSize: 'var(--fs-small)' }}>AVAILABLE FOR SHOOTS GLOBALLY</p>
        </div>
        
        <div className="grid grid-2">
          <div ref={formRef} className="glass contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">YOUR NAME</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <input type="email" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">MESSAGE</label>
                <textarea rows="4" className="form-input" style={{ resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="magnetic-btn" style={{ width: 'fit-content', marginTop: '1rem' }}>SEND MESSAGE</button>
            </form>
          </div>
          
          <div ref={infoRef} className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <Camera size={24} />
              </div>
              <div>
                <p className="form-label">INSTAGRAM</p>
                <a href="https://instagram.com/quickclixs" className="info-link">@quickclixs</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <LucideMail size={24} />
              </div>
              <div>
                <p className="form-label">EMAIL</p>
                <a href="mailto:hello@quickclixs.com" className="info-link">contact@quickclixs.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <LucideMapPin size={24} />
              </div>
              <div>
                <p className="form-label">LOCATION</p>
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

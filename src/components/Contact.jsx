import React from 'react';
import { Camera, LucideMail, LucideMapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '5rem', marginBottom: '1rem' }}>LET'S CONNECT</h2>
          <p style={{ opacity: 0.6, letterSpacing: '2px' }}>AVAILABLE FOR SHOOTS GLOBALLY</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div className="glass" style={{ padding: '4rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', opacity: 0.5 }}>YOUR NAME</label>
                <input type="text" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', opacity: 0.5 }}>EMAIL ADDRESS</label>
                <input type="email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', opacity: 0.5 }}>MESSAGE</label>
                <textarea rows="4" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--gray-300)', padding: '1rem 0', color: 'white', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="magnetic-btn" style={{ width: 'fit-content', border: '1px solid white', color: 'white' }}>SEND MESSAGE</button>
            </form>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: '1.5rem', borderRadius: '50%' }}>
                <Camera size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>INSTAGRAM</p>
                <a href="https://instagram.com/quickclixs" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>@quickclixs</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: '1.5rem', borderRadius: '50%' }}>
                <Camera size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>EMAIL</p>
                <a href="mailto:hello@quickclixs.com" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>contact@quickclixs.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--gray-100)', padding: '1.5rem', borderRadius: '50%' }}>
                <Camera size={24} />
              </div>
              <div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>LOCATION</p>
                <p style={{ fontSize: '1.2rem' }}>India / Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Camera } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/logo.png" alt="QuickClixs" style={{ height: '40px', width: 'auto' }} />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>QUICKCLIXS</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', letterSpacing: '1px' }}>
        <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>WORK</a>
        <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>STORY</a>
        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;

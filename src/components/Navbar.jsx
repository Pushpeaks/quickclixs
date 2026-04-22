import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'STORY', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1.5rem 2rem' : '2.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/logo.png" alt="QuickClixs" style={{ height: '35px', width: 'auto' }} />
        <span style={{ 
          fontWeight: 'bold', 
          fontSize: '1.1rem', 
          letterSpacing: '3px',
          display: 'block'
        }}>QUICKCLIXS</span>
      </div>

      {/* Desktop Links */}
      <div className="desktop-links" style={{ display: 'flex', gap: '3rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            style={{ 
              color: 'inherit', 
              textDecoration: 'none',
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          color: 'white', 
          cursor: 'pointer',
          display: 'none',
          zIndex: 1001
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1000
      }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '2rem',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '4px'
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;

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
    <nav className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="nav-logo">
        <img src="/logo.png" alt="QuickClixs" />
        <span>QUICKCLIXS</span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links-desktop">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="nav-link"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="nav-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className="nav-mobile-overlay"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="nav-link-mobile"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

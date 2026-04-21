import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  { id: 1, title: 'Spiritual Glow', category: 'Divine', image: '/assets/diya.png', size: 'large' },
  { id: 2, title: 'Lunar Mysteries', category: 'Astronomical', image: '/assets/moon.png', size: 'medium' },
  { id: 3, title: 'Nature\'s Lens', category: 'Macro', image: '/assets/raindrops.png', size: 'medium' },
  { id: 4, title: 'Mechanical Soul', category: 'Abstract', image: '/assets/lens.png', size: 'large' },
];

const Work = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={containerRef}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem', letterSpacing: '4px' }}>SELECTED WORKS</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '4rem',
        }}>
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              ref={el => itemsRef.current[i] = el}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div ratio="4/5" style={{ 
                width: '100%', 
                aspectRatio: project.size === 'large' ? '4/5' : '1/1',
                overflow: 'hidden',
                background: 'var(--gray-100)',
                cursor: 'pointer'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '0.5rem' }}>{project.category}</p>
                <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

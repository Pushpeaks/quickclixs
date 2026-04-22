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
        <h2 style={{ 
          fontSize: 'var(--fs-h3)', 
          marginBottom: 'clamp(2rem, 8vw, 4rem)', 
          letterSpacing: '4px',
          textAlign: 'center'
        }}>SELECTED WORKS</h2>
        <div className="grid grid-2">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              ref={el => itemsRef.current[i] = el}
              className="work-grid-item"
            >
              <div 
                className="work-image-container"
                style={{ aspectRatio: project.size === 'large' ? '4/5' : '1/1' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="work-image"
                />
              </div>
              <div className="work-info">
                <p className="work-category">{project.category}</p>
                <h3 className="work-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

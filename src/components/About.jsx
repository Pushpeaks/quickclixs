import React from 'react';

const About = () => {
  return (
    <section id="about" className="glass" style={{ 
      margin: '8rem 2rem', 
      borderRadius: '40px',
      minHeight: 'auto',
      padding: '10rem 2rem'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '4rem', lineHeight: '1', marginBottom: '2rem' }}>THE VISION BEYOND THE LENS</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: '1.6', fontWeight: '300' }}>
              Mridul Srivastava, known as QuickClixs, finds the extraordinary in the ordinary. His work isn't just about capturing light; it's about capturing the silence between the moments. 
              From the divine serenity of spiritual rituals to the cosmic vastness of the moon, every frame tells a story of connection.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
             <div style={{ 
                width: '100%', 
                height: '500px', 
                border: '1px solid var(--accent)', 
                padding: '1rem',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'var(--gray-100)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  letterSpacing: '5px',
                  opacity: 0.5
                }}>
                  [ PORTRAIT OF THE ARTIST ]
                </div>
             </div>
             <div style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                right: '-2rem', 
                background: 'var(--accent)', 
                color: 'black', 
                padding: '2rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem'
              }}>
                "Faith is the light <br/> that never fades."
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

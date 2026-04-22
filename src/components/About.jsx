import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    )
    .fromTo(imageRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, 
      "-=0.8"
    )
    .fromTo(quoteRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, 
      "-=0.5"
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="glass" style={{ 
      margin: 'clamp(2rem, 10vw, 8rem) var(--container-padding)', 
      borderRadius: '40px',
      minHeight: 'auto',
      padding: 'clamp(4rem, 15vw, 10rem) var(--container-padding)'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div ref={textRef} style={{ order: 1 }}>
            <h2 style={{ fontSize: 'var(--fs-h2)', lineHeight: '1', marginBottom: '2rem' }}>THE VISION BEYOND THE LENS</h2>
            <p style={{ fontSize: 'var(--fs-body)', opacity: 0.8, lineHeight: '1.6', fontWeight: '300' }}>
              Mridul Srivastava, known as QuickClixs, finds the extraordinary in the ordinary. His work isn't just about capturing light; it's about capturing the silence between the moments. 
              From the divine serenity of spiritual rituals to the cosmic vastness of the moon, every frame tells a story of connection.
            </p>
          </div>
          <div style={{ position: 'relative', order: 2 }}>
             <div ref={imageRef} style={{ 
                width: '100%', 
                height: 'clamp(300px, 50vw, 500px)', 
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
                  opacity: 0.5,
                  textAlign: 'center'
                }}>
                  [ PORTRAIT OF THE ARTIST ]
                </div>
             </div>
             <div ref={quoteRef} className="quote-box" style={{ 
                position: 'absolute', 
                bottom: '-1rem', 
                right: '-1rem', 
                background: 'var(--accent)', 
                color: 'black', 
                padding: 'clamp(1rem, 3vw, 2rem)',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                maxWidth: '80%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                "Faith is the light <br/> that never fades."
             </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .quote-box {
            position: relative !important;
            bottom: 0 !important;
            right: 0 !important;
            margin-top: 2rem;
            max-width: 100% !important;
          }
        }
      `}} />
    </section>
  );
};

export default About;

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
    <section id="about" ref={sectionRef} className="glass about-glass-card">
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
             <div ref={imageRef} className="about-image-wrapper">
                <div className="about-placeholder">
                  [ PORTRAIT OF THE ARTIST ]
                </div>
             </div>
             <div ref={quoteRef} className="quote-box">
                "Faith is the light <br/> that never fades."
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

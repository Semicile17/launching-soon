import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './Overlay.css'; // Import custom styles

const Overlay = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Code', 'Collaborate', 'Connect'],
      typeSpeed: 80,
      backSpeed: 100,
      loop: false,
      onComplete: () => {
        setTimeout(() => {
          setFadeOut(true);
        }, 800); // Adjust fade out timing here
      },
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <>
    <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}>
      <span className="typed-text" ref={typedElement} />
    </div>
    </>
  );
};

export default Overlay;

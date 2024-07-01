import React, { useState } from 'react';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const threshold = 300;
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isVisible)
  return (
    <div className="scroll-up">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-up-btn" style={{position: "absolute", border: "8px solid red", top: "50%", zIndex:"999"}}>
          Scroll To Top 
        </button>
      )}
    </div>
  );
};

export default ScrollUp;

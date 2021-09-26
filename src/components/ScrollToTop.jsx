import React, { useState, useEffect } from 'react';
import { IoChevronUpSharp } from 'react-icons/io5';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <>
        <button
          style={{ height: '100%', width: '100%', aspectRatio: '1/1' }}
          aria-label="Scroll to top"
          type="button"
          className="scroll-to-top"
          onClick={clickHandler}
        >
          <IoChevronUpSharp
            style={{
              marginLeft: '0',
              fontSize: '1.35rem',
              color: '#35b0cb',
              margin: '0',
            }}
            className="button-icon"
          />
        </button>
        <div className="scroll-to-top-text">Back to Top</div>
      </>
    )
  );
};

export default ScrollToTop;

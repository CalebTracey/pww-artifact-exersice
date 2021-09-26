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
          style={{ aspectRatio: '1/1' }}
          aria-label="Scroll to top"
          type="button"
          className="scroll-to-top"
          onClick={clickHandler}
        >
          <IoChevronUpSharp
            style={{
              fontSize: '1.2vw',
              color: '#35b0cb',
              margin: '0',
              padding: '.75vw',
            }}
            className="button-icon"
          />
        </button>
        <div
          className="scroll-to-top "
          style={{
            background: 'transparent',
            marginRight: '.5vw',
            fontSize: '1vw',
            fontFamily: 'OpenSans',
            color: '#c3c3c3',
          }}
        >
          Back to Top
        </div>
      </>
    )
  );
};

export default ScrollToTop;

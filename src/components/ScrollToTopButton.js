import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
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
      <Button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          background: 'linear-gradient(90deg, #3D4B64 0%, #8598ce 50%, #3D4B64 100%)',
          border: 'none',
        }}
      >
        &#x25B2;
      </Button>
    )
  );
};

export default ScrollToTopButton;

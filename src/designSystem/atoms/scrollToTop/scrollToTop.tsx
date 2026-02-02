import React, { useState, useEffect } from 'react';
import { ScrollButton } from './scrollToTop.styles';

export interface ScrollToTopProps {
  id?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ id = 'scroll-to-top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton 
      id={id} 
      onClick={scrolltotop} 
      $isVisible={isVisible} 
      aria-label="Scroll to top"
    >
      ↑
    </ScrollButton>
  );
};

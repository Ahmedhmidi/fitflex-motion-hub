
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={cn(
        'transition-opacity duration-300 min-h-screen',
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default PageTransition;

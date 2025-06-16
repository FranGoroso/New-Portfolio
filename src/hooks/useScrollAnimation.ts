import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0
  });
  
  return { ref, isInView };
};

// Simple fade in animation
export const fadeIn = {
  initial: { 
    opacity: 0
  },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

// Slide up animation
export const slideUp = {
  initial: { 
    opacity: 0,
    y: 60
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

// Scale in animation
export const scaleIn = {
  initial: { 
    opacity: 0,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

// Slide from left
export const slideLeft = {
  initial: { 
    opacity: 0,
    x: 60
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

// Slide from right
export const slideRight = {
  initial: { 
    opacity: 0,
    x: -60
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

// Legacy animations for compatibility
export const fadeInUp = fadeIn;
export const staggerContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
export const slideInFromLeft = slideLeft;
export const slideInFromRight = slideRight;

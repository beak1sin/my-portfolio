import { useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import type { RefObject } from 'react';

// Type-safe cubic-bezier easing as tuple
const appleCubicBezier = [0.25, 0.1, 0.25, 1] as const;

// Animation variants for framer-motion
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: appleCubicBezier
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: appleCubicBezier
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: appleCubicBezier
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: appleCubicBezier
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: appleCubicBezier
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: appleCubicBezier
    }
  }
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options?: { 
  once?: boolean; 
  amount?: number | 'some' | 'all';
}): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: options?.once ?? true,
    amount: options?.amount ?? 0.2
  });
  
  return [ref, isInView];
};

// Apple-style spring animation config
export const appleSpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30
};

// Hover animation for cards
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: 0.3,
    ease: appleCubicBezier
  }
};

export const cardTap = {
  scale: 0.98
};

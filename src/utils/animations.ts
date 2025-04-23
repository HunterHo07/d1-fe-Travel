// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down') => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0;
  const y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0;
  
  return {
    hidden: { 
      x: x,
      y: y,
      opacity: 0 
    },
    visible: { 
      x: 0,
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: 0.8
      }
    }
  };
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring',
      duration: 0.8
    }
  }
};

export const rotateIn = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
};

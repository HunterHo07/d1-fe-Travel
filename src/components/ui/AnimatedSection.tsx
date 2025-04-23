"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade',
}) => {
  const getAnimationVariant = () => {
    switch (animation) {
      case 'slide-up':
        return {
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay
            }
          }
        };
      case 'slide-down':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay
            }
          }
        };
      case 'slide-left':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay
            }
          }
        };
      case 'slide-right':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay
            }
          }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay
            }
          }
        };
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={getAnimationVariant()}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

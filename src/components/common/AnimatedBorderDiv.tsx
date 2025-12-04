// components/AnimatedBorderDiv.tsx
import React from 'react';
import { motion, Easing } from 'framer-motion';

// Define the shape of the props
interface AnimatedBorderDivProps {
  children: React.ReactNode;

  // Border visibility controls
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;

  // Styling controls
  color?: string; // Tailwind color class, e.g., 'bg-blue-500'
  size?: string; // Tailwind size class for thickness, e.g., 'w-1' or 'h-1'
}

// Framer Motion Transition Configuration
const transition = {
  duration: 1.5, // Total time for the border to draw
  // Use cubic-bezier array for 'easeInOut' to satisfy TypeScript's Easing type
  ease: [0.42, 0, 0.58, 1] as Easing,
};

const AnimatedBorderDiv: React.FC<AnimatedBorderDivProps> = ({
  children,
  left = false, // Default to true
  right = false,
  top = true,
  bottom = false,
  color = 'bg-[var(--secondary-grey)]', // Default color (must be defined in tailwind.config.js)
  size = 'w-[2px]', // Default size (3px)
}) => {
  // Dynamic Tailwind classes for vertical and horizontal borders
  const verticalClass = `${size} ${color}`;
  const horizontalClass = `${size.replace('w', 'h')} ${color}`;

  // Custom delay for horizontal borders to start after vertical ones
  const horizontalTransition = {
    ...transition,
    delay: 0.5,
  };

  return (
    <div className='relative overflow-hidden rounded-lg bg-[var(--primary)] shadow-xl'>
      {/* 1. Left Border (Vertical) */}
      {left && (
        <motion.div
          className={`absolute top-0 left-0 ${verticalClass}`}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={transition}
        />
      )}

      {/* 2. Right Border (Vertical) */}
      {right && (
        <motion.div
          className={`absolute top-0 right-0 ${verticalClass}`}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={transition}
        />
      )}

      {/* 3. Top Border (Horizontal) */}
      {top && (
        <motion.div
          className={`absolute top-0 left-0 ${horizontalClass}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={horizontalTransition}
        />
      )}

      {/* 4. Bottom Border (Horizontal) */}
      {bottom && (
        <motion.div
          className={`absolute right-0 bottom-0 ${horizontalClass}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={horizontalTransition}
        />
      )}

      {/* Content */}
      <div className='relative z-10 text-center'>{children}</div>
    </div>
  );
};

export default AnimatedBorderDiv;

import React, { useMemo } from 'react';
import { motion, Easing, HTMLMotionProps } from 'framer-motion';

// --- Type Definitions ---

type BorderDirection = 'top' | 'right' | 'bottom' | 'left';

// HTMLMotionProps<'div'> includes all standard HTML div props AND all Framer Motion props.
interface BorderDrawWrapperProps extends HTMLMotionProps<'div'> {
  /** The content to be wrapped inside the animated div. */
  children: React.ReactNode;
  
  /** Which border to animate: 'top', 'right', 'bottom', or 'left'. */
  direction: BorderDirection;
  
  /** Tailwind CSS class for the border color (e.g., 'bg-nature-green-dark'). */
  color?: string;
  
  /** Tailwind CSS class for the border thickness (e.g., 'w-[3px]' or 'h-[4px]'). */
  size?: string;
  
  /** Duration of the drawing animation in seconds. */
  duration?: number;
}

// --- Framer Motion Transition Configuration ---

const transition = (duration: number) => ({
  duration: duration,
  // Use cubic-bezier array for 'easeInOut' to satisfy TypeScript's Easing type
  ease: [0.42, 0, 0.58, 1] as Easing, 
});

// --- Component Logic ---

const BorderDrawWrapper: React.FC<BorderDrawWrapperProps> = ({
  children,
  direction,
  color = 'bg-nature-green-dark',
  size = 'w-[3px]',
  duration = 1.5,
  ...rest
}) => {

  // 1. Determine the border style, animation properties, and positioning based on direction
  const borderProps = useMemo(() => {
    
    // Determine the dimension class (width or height) for Tailwind
    // Ensure size is normalized to width utility for consistent parsing
    const thicknessClass = size.includes('w-') 
      ? size 
      : size.replace('h-', 'w-');

    // Determine the complementary dimension class for the line's thickness (height for horizontal)
    const lineSizeClass = direction === 'top' || direction === 'bottom' 
      ? thicknessClass.replace('w-', 'h-') // Use height for horizontal lines
      : thicknessClass;                    // Use width for vertical lines

    // Base class for the animated element
    const baseClass = `absolute ${color} ${lineSizeClass}`;

    // Properties for the <motion.div>
    let props: { 
      className: string; 
      initial: any; 
      animate: any; 
      transition: any; 
    };

    switch (direction) {
      case 'left':
        props = {
          className: `${baseClass} top-0 left-0`,
          initial: { height: 0 },
          animate: { height: '100%' },
          transition: transition(duration),
        };
        break;

      case 'right':
        props = {
          className: `${baseClass} top-0 right-0`,
          initial: { height: 0 },
          animate: { height: '100%' },
          transition: transition(duration),
        };
        break;

      case 'top':
        props = {
          // Draws Left to Right
          className: `${baseClass} top-0 left-0 w-full`, // Full width required for horizontal
          initial: { width: 0 },
          animate: { width: '100%' },
          transition: transition(duration),
        };
        break;

      case 'bottom':
        props = {
          // FIX: Changed 'right-0' to 'left-0' to ensure Left to Right draw direction
          className: `${baseClass} bottom-0 left-0 w-full`, // Full width required for horizontal
          initial: { width: 0 },
          animate: { width: '100%' },
          transition: transition(duration),
        };
        break;
        
      default:
        // Fallback for safety, though TypeScript prevents this with the type
        props = {
          className: 'hidden', 
          initial: {}, 
          animate: {}, 
          transition: {} 
        };
        break;
    }
    
    return props;
  }, [direction, color, size, duration]);
  
  const { className: borderClassName, initial, animate, transition: borderTransition } = borderProps;

  return (
    // This outer motion.div is the element whose border is being animated.
    // The {...rest} props define its dimensions and background.
    <motion.div 
      className="relative overflow-hidden" 
      {...rest}
    >
      {/* The Animated Border Element (the line itself) */}
      <motion.div
        className={borderClassName}
        initial={initial}
        animate={animate}
        transition={borderTransition}
      />
      
      {/* Content */}
      {/* <div className="relative z-10"> */}
        {children}
      {/* </div> */}
    </motion.div>
  );
};

export default BorderDrawWrapper;


// --- Example Usage ---
/*
// To use this, you'd integrate it into another file, e.g., index.tsx
// 
// IMPORTANT: The container's size (w-*, h-*) and background (bg-*) must be defined 
// in the 'className' prop passed to the wrapper, otherwise the animated line 
// will collapse to the content size or be invisible.
// 
// Example 1: Left Border Only (Top to Bottom)
// <BorderDrawWrapper 
//   direction="left" 
//   color="bg-red-500" 
//   size="w-1"
//   // === Note the explicit width, height, and background ===
//   className="p-8 w-64 h-32 bg-gray-100 rounded-md shadow-lg"
// >
//   <p>The left border draws from top to bottom on THIS container.</p>
// </BorderDrawWrapper>
//
// Example 2: Bottom Border Only (Left to Right)
// <BorderDrawWrapper 
//   direction="bottom" 
//   color="bg-blue-500" 
//   size="h-[5px]"
//   // === Note the explicit width, height, and background ===
//   className="mt-10 p-8 w-64 h-32 bg-white rounded-md shadow-lg"
// >
//   <p>The bottom border draws from left to right on THIS container.</p>
// </BorderDrawWrapper>
*/
'use client';

import React, { useRef, useState } from 'react';
import { MdKeyboardDoubleArrowRight, MdCheck } from 'react-icons/md';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';

interface SwipeProps {
  text: string;
  onComplete?: () => void;
}

const SwipeToAction: React.FC<SwipeProps> = ({ text, onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [completed, setCompleted] = useState(false);

  // Transform opacity based on drag position
  const opacity = useTransform(x, [0, 100], [1, 0]);

  const handleAction = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const handleDragEnd = async (_: unknown, info: PanInfo) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const sliderWidth = 50; // Approximated
    const threshold = containerWidth - sliderWidth - 10;

    if (x.get() > threshold / 2) {
      // Complete the swipe
      x.set(threshold);
      setCompleted(true);
      handleAction();

      // Reset after delay
      setTimeout(() => {
        setCompleted(false);
        x.set(0);
      }, 2000);
    } else {
      // Snap back
      x.set(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className='button-bg-gradient relative h-[60px] w-full max-w-[300px] overflow-hidden rounded-full p-1 shadow-xl select-none'
    >
      {/* Background Text */}
      <motion.div
        style={{ opacity }}
        className='pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-bold tracking-[0.2em] text-white uppercase'
      >
        {completed ? 'SUCCESS' : text}
      </motion.div>

      {/* Slider Button */}
      <motion.div
        drag={!completed ? 'x' : false}
        dragConstraints={containerRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className='relative z-10 flex h-[52px] w-[52px] cursor-grab items-center justify-center rounded-full bg-white shadow-md active:cursor-grabbing'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {completed ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <MdCheck size={24} className='text-green-500' />
          </motion.div>
        ) : (
          <MdKeyboardDoubleArrowRight size={24} color='var(--primary)' />
        )}
      </motion.div>
    </div>
  );
};

export default SwipeToAction;

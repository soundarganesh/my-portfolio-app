'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface SwipeProps {
  text: string;
}
const SwipeToAction: React.FC<SwipeProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const [sliderX, setSliderX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startOffset = useRef(0);
  const maxX = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      maxX.current = containerRef.current.offsetWidth - 60; // container width - slider width
    }
  }, []);

  const startDrag = (clientX: number) => {
    setIsDragging(true);
    startOffset.current = clientX - sliderX;
  };

  const duringDrag = (clientX: number) => {
    if (!isDragging) return;
    const newX = clientX - startOffset.current;
    setSliderX(Math.max(0, Math.min(maxX.current, newX)));
  };

  const endDrag = () => {
    if (!isDragging) return;
    if (sliderX >= maxX.current - 10) {
      downloadLinkRef.current?.click();
    }
    setIsDragging(false);
    setSliderX(0);
  };

  const onMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const onTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].clientX);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => duringDrag(e.clientX);
    const onMouseUp = () => endDrag();
    const onTouchMove = (e: TouchEvent) => duringDrag(e.touches[0].clientX);
    const onTouchEnd = () => endDrag();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, sliderX]);

  return (
    <>
      {/* Container */}
      <div
        ref={containerRef}
        className='relative h-[60px] w-full overflow-hidden rounded-[30px] button-bg-gradient select-none sm:h-[40px] sm:rounded-[20px]'
      >
        {/* Slider */}
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          style={{
            left: `${sliderX}px`,
            transition: sliderX === 0 ? 'left 0.3s ease' : 'none',
          }}
          className='absolute top-0 flex h-[58px] w-[58px] cursor-grab touch-none items-center justify-center rounded-full border border-white bg-white sm:h-[38px] sm:w-[38px]'
        >
          <MdKeyboardDoubleArrowRight color='var(--primary)' />
          {/* <Image alt="swipeArrow" src={'/arrow.png'} width={25} height={25} /> */}
        </div>

        {/* Text */}
        <div className='pointer-events-none text-center text-sm leading-[60px] font-semibold tracking-wider text-[var(--secondary)] uppercase sm:text-sm sm:leading-[40px]'>
          {props.text}
        </div>
      </div>

      {/* Hidden download link */}
      <a ref={downloadLinkRef} href='/cv.pdf' download='YourFile.pdf' className='hidden'>
        Download
      </a>
    </>
  );
};

export default SwipeToAction;

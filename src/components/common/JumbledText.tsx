import Image from 'next/image';
import React from 'react';

type Props = {
  text: string;
};

const JumbledText: React.FC<Props> = ({ text }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const rotations = [-10, -5, 20, 0, 20, -5, -8, 18, 0];
  const topoffsets = [-80, -10, -60, -155, -85, -40, -40, -65, 0];
  const leftOffsets = [-85, -10, 30, 105, 190, 200, 260, 300, 330];

  const topoffsets_m = [-70, -10, -35, -120, -45, -20, -25, -40, -5];
  const leftOffsets_m = [-35, 20, 45, 90, 155, 165, 200, 230, 245];

  const fontSizeVal = [9, 6, 5, 10, 6, 6, 6, 6, 5];

  const left = isMobile ? leftOffsets_m : leftOffsets;
  const top = isMobile ? topoffsets_m : topoffsets;

  return (
    <div className='relative'>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className='absolute font-black text-black'
          style={{
            fontSize: `${isMobile ? fontSizeVal[i % fontSizeVal.length] - 2.5 : fontSizeVal[i % fontSizeVal.length]}rem`,
            top: `${top[i % top.length]}px`,
            left: `${left[i % left.length]}px`,
            opacity: 0,
            animation: `fadeIn-${rotations[i % rotations.length]} 0.6s ease forwards`,
            animationDelay: `${i * 0.1}s`,
            fontFamily: 'var(--font-baseball)',
          }}
        >
          {char}
        </span>
      ))}
      <Image
        className='profile_img relative z-[100] h-[350px] w-[300px] md:h-[270px] md:w-[240px]'
        alt='myself'
        src={'/img1.png'}
        width={300}
        height={350}
      />
    </div>
  );
};

export default JumbledText;

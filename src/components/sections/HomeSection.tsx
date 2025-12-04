'use client';
import React, { useEffect, useState } from 'react';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';
import BorderDrawWrapper from '../common/AnimatedBorderDiv';

interface HomeProps {}

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ✅ Safe: runs only in browser
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const socialMedia = () => {
    return (
      <div className='flex flex-col space-y-6'>
        <a
          href='https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b'
          className='text-gray-600 hover:text-blue-500'
        >
          <FaLinkedin color='var(--secondary)' className='h-6 w-6' />
        </a>
        <a href='https://github.com/soundarganesh' className='text-gray-600 hover:text-blue-500'>
          <FaGithub color='var(--secondary)' className='h-6 w-6' />
        </a>
        <a href='mailto:soundar.ganesh@gmail.com' className='text-gray-600 hover:text-blue-500'>
          <FaMailBulk color='var(--secondary)' className='h-6 w-6' />
        </a>
      </div>
    );
  };
  return (
    <section id={'home'} className='h-screen w-full'>
      <div className='flex h-screen w-full divide-x-2 divide-[var(--primary-grey)]'>
        {isMobile ? (
          <div className='flex h-full basis-[15%] flex-col border-r-2 border-[var(--primary-grey)]'>
            <div className='relative basis-[80%]'>
              <p className='absolute text-8xl text-[var(--primary-grey)] z-50'>01.</p>
            </div>
            <div className='basis-[20%] border-t-2 border-[var(--primary-grey)]'></div>
          </div>
        ) : (
          <div className='flex basis-[55%] flex-col'>
            <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'>
              <p className='mr-[20%] ml-[15%] flex h-full items-center border-x-2 border-[var(--primary-grey)] text-sm font-bold tracking-wider text-[var(--secondary-grey)]'>
                <span className='text-var(--golden) flex items-center justify-center pl-[10%] text-center text-4xl'>
                  *
                </span>
                &nbsp;GANESH PANDIAN
              </p>
            </div>

            <div className={`bg-opacity-10 relative basis-[70%] bg-[url(/bg2.jpg)] bg-cover dark:bg-[url(/bg4.jpg)]`}>
              <div className='absolute inset-0 bg-black/70 dark:bg-white/70' />
              <div className='relative z-20 flex h-full'>
                <div className='flex basis-[15%] items-end justify-center pb-[10%]'>{socialMedia()}</div>
                <div className='flex basis-[65%] flex-col justify-between border-x-2 border-[var(--primary-grey)]'>
                  <span className='mt-[10%] border-l-6 border-[var(--golden)] px-[10%]'>
                    <p className='text-lg font-semibold text-[var(--secondary-grey)]'>EXPERIENCE</p>
                    <p className='text-6xl font-bold'>{getYearsOfExperience()}+</p>
                  </span>
                  <span className='mb-[10%] px-[10%] text-8xl font-semibold text-[var(--primary-grey)]'>01.</span>
                </div>
                <div className='basis-[20%]'></div>
              </div>
            </div>
            <div className='flex basis-[15%] border-t-2 border-[var(--primary-grey)]'>
              <div className='basis-[15%]' />
              <div className='flex h-full basis-[65%] items-center border-x-2 border-[var(--primary-grey)] text-xs text-[var(--secondary-grey)]'>
                <p className='pl-[10%] font-semibold tracking-wide'>
                  EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY.
                </p>
              </div>
              <div className='flex basis-[20%] items-center justify-center font-semibold text-[var(--secondary-grey)]'>
                |&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
              </div>
            </div>
          </div>
        )}
        <div className='flex basis-[85%] flex-col md:basis-[45%]'>
          {!isMobile && <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'></div>}
          <div
            className={`relative flex justify-center basis-[80%] md:basis-[70%] flex-col ${isMobile ? 'bg-opacity-10 bg-[url(/bg2.jpg)] bg-cover dark:bg-[url(/bg4.jpg)]' : ''}`}
          >
            <div className='absolute inset-0 bg-black/60 dark:bg-white/40' />
            <div className='relative z-20 flex h-full flex-col justify-center gap-6 p-[10%] md:basis-[70%] md:items-end md:pr-[15%] md:text-end'>
              <span className='text-4xl font-bold tracking-widest'>
                <p>WEB</p>
                <p>DEVELOPER</p>
              </span>
              <p className='text-lg text-[var(--secondary-grey)] md:text-xl'>
                From brackets to brilliance — building smarter web apps.
              </p>
              <div className='mt-8 w-max cursor-pointer rounded-2xl bg-[var(--golden)] px-6 py-1 text-sm font-semibold tracking-wider md:px-12'>
                KNOW MORE
              </div>
            </div>
          </div>
          <div className='flex basis-[20%] md:basis-[15%] border-t-2 border-[var(--primary-grey)] pt-[7%] md:basis-[15%]'>
            {isMobile && (
//               <BorderDrawWrapper 
//   direction="left" 
//   color="bg-red-500" 
//   size="w-1"
//   className="p-8 w-64 h-32 bg-gray-100 rounded-md shadow-lg"
// >
//   <p className='pl-[10%] text-sm font-semibold tracking-wide text-[var(--secondary-grey)]'>
//                 EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY.
//               </p>
// </BorderDrawWrapper>
/* <BorderDrawWrapper 
  direction="bottom" 
  color="bg-blue-500" 
  size="h-[5px]"
  className="mt-10 p-8 w-64 h-32 bg-white rounded-md shadow-lg"
>
  <p>Only the bottom border draws (right to left).</p>
</BorderDrawWrapper> */
              <p className='pl-[10%] text-sm font-semibold tracking-wide text-[var(--secondary-grey)]'>
                EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;

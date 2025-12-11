'use client';
import React, { useEffect, useState } from 'react';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';
import BorderDrawWrapper from '../common/AnimatedBorderDiv';
import { BorderWrapper } from '../common/BorderWrapper';

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

  return (
    <section id={'home'} className='h-screen w-full pt-[20%] md:pt-0'>
      <div className='relative flex h-full w-full'>
        {isMobile && <BorderWrapper class='left-[10%] h-full' />}
        {isMobile ? (
          <div className='flex h-full basis-[15%] flex-col'>
            <div className='relative basis-[90%]'>
              <p className='absolute z-50 text-8xl text-[var(--primary-grey)]'>01.</p>
            </div>
            <div className='basis-[10%]'></div>
          </div>
        ) : (
          <div className='flex basis-[55%] flex-col'>
            <div className='basis-[15%]'>
              <p className='mr-[20%] ml-[15%] flex h-full items-center text-sm font-bold tracking-wider text-[var(--secondary-grey)]'>
                <span className='flex items-center justify-center pl-[10%] text-center text-4xl text-[var(--golden)]'>
                  *
                </span>
                &nbsp;GANESH PANDIAN
              </p>
            </div>

            <div className={`bg-opacity-10 relative basis-[70%] bg-[url(/bg2.jpg)] bg-cover dark:bg-[url(/bg4.jpg)]`}>
              <div className='absolute inset-0 bg-black/70 dark:bg-white/80' />
              <div className='relative z-20 flex h-full'>
                <div className='flex basis-[15%] items-end justify-center pb-[10%]'></div>
                <div className='flex basis-[65%] flex-col justify-between'>
                  <span className='mt-[10%] border-l-6 border-[var(--golden)] px-[10%]'>
                    <p className='text-lg font-semibold text-[var(--secondary-grey)]'>EXPERIENCE</p>
                    <p className='text-6xl font-bold'>{getYearsOfExperience()}+</p>
                  </span>
                  <span className='mb-[10%] px-[10%] text-8xl font-semibold text-[var(--primary-grey)]'>01.</span>
                </div>
                <div className='basis-[20%]'></div>
              </div>
            </div>
            <div className='flex basis-[15%]'>
              <div className='basis-[15%]' />
              <div className='flex h-full basis-[65%] items-center text-xs text-[var(--secondary-grey)]'>
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
          {!isMobile && <div className='basis-[15%]'></div>}
          <div
            className={`relative flex basis-[90%] flex-col justify-center md:basis-[70%] ${isMobile ? 'bg-opacity-10 bg-[url(/bg2.jpg)] bg-cover dark:bg-[url(/bg4.jpg)]' : ''}`}
          >
            <div className='absolute inset-0 bg-black/60 dark:bg-white/90' />
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
          <div className='flex basis-[10%] items-center md:basis-[15%]'>
            {isMobile && (
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

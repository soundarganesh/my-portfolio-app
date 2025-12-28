'use client';
import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import { BorderWrapper } from '../common/BorderWrapper';

interface HomeProps { }

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ✅ Safe: runs only in browser
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15
      }
    },
  };

  return (
    <section id={'home'} className='h-screen w-full pt-[20%] md:pt-0'>
      <div className='relative flex h-full w-full'>
        {isMobile && <BorderWrapper class='left-[10%] h-full' />}
        {isMobile ? (
          <div className='flex h-full basis-[15%] flex-col'>
            <div className='relative basis-[90%]'>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] opacity-20 select-none'
              >
                01.
              </motion.p>
            </div>
            <div className='basis-[10%]'></div>
          </div>
        ) : (
          <div className='flex basis-[55%] flex-col'>
            <div className='basis-[15%]'>
              <p className='mr-[20%] ml-[15%] flex h-full items-center text-base font-bold tracking-wider text-gradient-purple'>
                Ganesh Pandian
              </p>
            </div>

            <div className={`bg-opacity-10 relative basis-[70%] bg-[url(/bg2.jpg)] bg-cover`}>
              <div className='absolute inset-0 bg-black/70' />
              <div className='relative z-20 flex h-full'>
                <div className='flex basis-[15%] items-end justify-center pb-[10%]'></div>
                <div className='flex basis-[65%] flex-col justify-between'>
                  <div className='flex items-center'>
                    <span className='h-full w-2 button-bg-gradient rounded' />
                    <span className='h-full mt-[10%] px-[10%]'>
                      <p className='text-lg font-semibold text-[var(--text-grey)] tracking-widest'>Experience</p>
                      <p className='text-6xl font-bold'>{getYearsOfExperience()}+</p>
                    </span>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='mb-[10%] px-[10%] text-8xl font-black text-[var(--primary-grey)] opacity-20 select-none'
                  >
                    01.
                  </motion.span>
                </div>
                <div className='basis-[20%]'></div>
              </div>
            </div>
            <div className='flex basis-[15%]'>
              <div className='basis-[15%]' />
              <div className='flex h-full basis-[65%] items-center text-base text-[var(--text-grey)]'>
                <p className='pl-[10%] font-semibold tracking-wide'>
                  {/* EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY. */}
                  Every great design begins with an even better story.
                </p>
              </div>
              <div className='flex basis-[20%] items-center justify-center font-semibold text-gradient-grey'>
                |&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
              </div>
            </div>
          </div>
        )}
        <motion.div
          className="flex basis-[85%] flex-col md:basis-[45%]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className='flex h-full flex-col'>
            {!isMobile && <div className='basis-[15%]'></div>}
            <div
              className={`relative flex basis-[90%] flex-col justify-center md:basis-[70%] ${isMobile ? 'bg-opacity-10 bg-[url(/bg2.jpg)] bg-cover' : ''}`}
            >
              <div className='absolute inset-0 bg-black/60' />
              <div className='relative z-20 flex h-full flex-col justify-center gap-6 p-[10%] md:basis-[70%] md:items-end md:pr-[15%] md:text-end'>
                <motion.div variants={item} className="overflow-hidden">
                  <h1 className="text-gradient-grey text-4xl md:text-8xl font-black tracking-widest leading-tight">
                    Web<br />Developer
                  </h1>
                </motion.div>

                <motion.p variants={item} className='text-base text-[var(--text-grey)] md:text-xl font-light tracking-wide max-w-lg ml-auto'>
                  From brackets to brilliance — building smarter, scalable web applications.
                </motion.p>

                <motion.div variants={item}>
                  <div className='mt-4 w-max cursor-pointer rounded-full button-bg-gradient px-8 py-3 text-sm font-bold tracking-widest uppercase shadow-lg hover:translate-y-[-2px] transition-transform md:px-10'>
                    Know More
                  </div>
                </motion.div>
              </div>
            </div>
            <div className='flex basis-[10%] items-center md:basis-[15%]'>
              {isMobile && (
                <p className='p-[10%] text-sm font-semibold tracking-wide text-[var(--secondary-grey)]'>
                  {/* EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY. */}
                  Every great design begins with an even better story.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HomeSection;

'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import { BorderWrapper } from '../common/BorderWrapper';

interface HomeProps { }

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth); // 0 to 1
    mouseY.set(clientY / innerHeight); // 0 to 1
  };

  return (
    <section
      id='home'
      className='relative min-h-screen w-full overflow-hidden flex flex-col justify-center'
      onMouseMove={handleMouseMove}
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Gradient Orb */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--purple)_0%,_transparent_70%)] blur-[100px] opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary Orb */}
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_var(--golden)_0%,_transparent_70%)] blur-[120px] opacity-10"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='relative z-10 grid w-full grid-cols-1 md:grid-cols-2'>

        {/* Mobile Border & Number */}
        {isMobile && <BorderWrapper class='left-[5%] bottom-0 top-0' />}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute top-20 right-5 text-9xl font-black text-[var(--text-grey)] -z-10 select-none"
          >
            01.
          </motion.div>
        )}

        {/* LEFT COLUMN (Desktop Only for Decorative Card) */}
        <div className="hidden md:flex flex-col justify-center items-center relative p-[5%] h-full">
          {/* Name Tag Top Left */}
          <div className='absolute top-[15%] left-[10%] flex items-center gap-4'>
            <span className='h-[1px] w-12 bg-[var(--golden)]'></span>
            <span className='text-[var(--golden)] tracking-[0.2em] text-sm uppercase font-bold'>Ganesh Pandian</span>
          </div>

          <div className="relative w-full max-w-md">
            {/* Experience Card - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl z-20"
            >
              <p className='text-xs text-[var(--text-grey)] uppercase tracking-wider mb-2'>Experience</p>
              <div className='flex items-baseline gap-2'>
                <span className='text-6xl font-bold text-white'>{getYearsOfExperience()}</span>
                <span className='text-2xl text-[var(--purple)]'>+ Years</span>
              </div>
              <p className="text-[var(--text-grey)] text-sm mt-2 font-light">Delivering robust, scalable solutions for enterprise & fintech.</p>

              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-[var(--purple)] to-[var(--golden)]"
                />
              </div>
            </motion.div>

            {/* Decorative Circle Behind */}
            <svg className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] opacity-20 animate-spin-slow pointer-events-none z-10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="5,5" className="text-white" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-[var(--purple)]" />
            </svg>
          </div>

          {/* Large Background Number Bottom Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="text-[12rem] font-black text-white leading-none select-none absolute bottom-0 left-0"
          >
            01.
          </motion.div>
        </div>


        {/* RIGHT COLUMN (Main Content) */}
        <div className="flex flex-col justify-center items-start md:items-end px-[10%] md:px-[5%] pt-[30%] md:pt-0 pb-[10%]">
          <motion.div
            initial="hidden"
            whileInView="visible" // changed to whileInView for reliable triggering
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col md:items-end text-left md:text-right"
          >
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <h2 className="text-[var(--golden)] text-sm md:text-lg tracking-[0.3em] font-bold uppercase mb-4">
                Portfolio 2024
              </h2>
            </motion.div>

            <motion.div
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="relative"
            >
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 relative z-10">
                WEB <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-grey)] to-white opacity-80 stroke-white stroke-[1px]">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.p
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="text-[var(--text-grey)] text-base md:text-xl font-light tracking-wide max-w-lg leading-relaxed mb-10"
            >
              From brackets to brilliance — crafting sophisticated, scalable, and immersive web experiences.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <a href="#about" className="group relative px-8 py-4 rounded-full overflow-hidden button-bg-gradient inline-block shadow-lg hover:shadow-[0_0_20px_rgba(189,52,254,0.4)] transition-shadow duration-300">
                <span className="relative z-10 text-white font-bold tracking-[0.2em] text-sm uppercase group-hover:tracking-[0.3em] transition-all duration-300">
                  Know More
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Footer Text (Moved relative to this column or bottom of section) */}
          <div className="mt-20 md:mt-32 opacity-50">
            <p className="text-[10px] md:text-xs text-[var(--text-grey)] tracking-[0.3em] uppercase">
              Every great design begins with an even better story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;

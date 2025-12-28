'use client';
import { DeviceType, useDeviceType } from '../../lib/useDeviceType';
import { getYearsOfExperience } from '../../lib/utils';
import React from 'react';
import SwipeToAction from '../common/SwipeToAction';
import { motion, Variants } from 'framer-motion';

interface AboutProps { }

const AboutSection: React.FC<AboutProps> = () => {
  const device: DeviceType = useDeviceType();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = device === 'mobile';

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
      },
    },
  };

  return (
    <section id='about' className='relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20 md:py-0'>

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_var(--purple)_0%,_transparent_70%)] blur-[120px] opacity-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='relative z-10 grid w-full grid-cols-1 md:grid-cols-12'>

        {/* Left Column: Number & Title */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start p-[5%] relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10rem] md:text-[12rem] font-black text-white leading-none select-none absolute top-0 -left-10 md:left-0 opacity-10"
          >
            02.
          </motion.div>

          <div className="mt-32 md:mt-40 relative z-20">
            <span className='h-[1px] w-12 bg-[var(--golden)] block mb-4'></span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-2">About <br /> Me</h2>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-8 p-[5%] md:pl-0 flex flex-col justify-center">
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col gap-10"
          >
            {/* Bio */}
            <motion.div variants={item} className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <p className='text-base md:text-lg leading-relaxed text-gray-300 font-light'>
                Senior Front-End Engineer with <b className='text-white font-bold'>{getYearsOfExperience()}+ years</b>{' '}
                of experience delivering scalable web solutions across Fintech and SaaS. Expert in modern frontend
                frameworks (<b className='text-[var(--golden)]'>React, Next.js</b>) and recently expanded into
                Full Stack development with a focus on <b className='text-[var(--purple)]'>AI/LLM integration</b>.
                Currently architecting AI-driven quality testing platforms using{' '}
                <b className='text-white'>Python/FastAPI</b>. Passionate about solving complex business challenges through user-centric design.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={item} className='flex flex-col gap-6 md:flex-row'>
              <SwipeToAction
                text='Resume'
                onComplete={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Ganesh_Pandian_Resume.pdf';
                  link.click();
                }}
              />
              <SwipeToAction
                text='Cover Letter'
                onComplete={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'Ganesh_Pandian_Cover_Letter.pdf';
                  link.click();
                }}
              />
            </motion.div>

            {/* Certifications & Publications */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Publications */}
              <motion.div variants={item} className='flex flex-col gap-4'>
                <p className='text-xs font-bold tracking-[0.2em] text-[var(--text-grey)] uppercase'>Publications</p>
                {['Federated Learning: Privacy-First AI', 'AI Evaluation using Agentic Workflow'].map((pub, i) => (
                  <div key={i} className="group p-4 rounded-xl bg-[#141414] border border-white/5 hover:border-[var(--purple)]/50 transition-all duration-300">
                    <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">{pub}</p>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">LTIMindtree · 2025</span>
                  </div>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div variants={item} className='flex flex-col gap-4'>
                <p className='text-xs font-bold tracking-[0.2em] text-[var(--text-grey)] uppercase'>Certifications</p>
                <div className="group p-4 rounded-xl bg-[#141414] border border-white/5 hover:border-[var(--golden)]/50 transition-all duration-300">
                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">Microsoft Azure Fundamentals (AZ-900)</p>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">Microsoft · 2026</span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

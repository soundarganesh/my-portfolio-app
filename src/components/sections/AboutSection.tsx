'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import SwipeToAction from '../common/SwipeToAction';
import { motion, Variants } from 'framer-motion';

interface AboutProps {}

const AboutSection: React.FC<AboutProps> = () => {
  const device: DeviceType = useDeviceType();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = device === 'mobile';

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger text and items
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
    <section id='about' className='relative h-max w-full pt-[20%] md:pt-0'>
      {/* Background Number */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] opacity-20 select-none md:pl-[11%]'
      >
        02.
      </motion.p>

      <BorderWrapper class='left-[10%] h-full' />

      <div className='flex h-full w-full flex-col'>
        {/* Title Section */}
        <div className='flex basis-[15%] items-center justify-center overflow-hidden border-b-2 border-[var(--primary-grey)] py-[10%] pr-[10%] pl-[15%] md:py-[5%]'>
          <motion.p
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
            viewport={{ once: true }}
            className='text-gradient-grey z-50 text-4xl font-black tracking-widest md:text-5xl'
          >
            ABOUT ME
          </motion.p>
        </div>

        {/* Content Section */}
        <motion.div
          className='flex flex-col gap-8 p-[10%] pl-[15%] md:gap-12 md:py-[5%] md:pl-[20%]'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Main Text */}
          <motion.div
            variants={item}
            className='text-base leading-relaxed tracking-wide text-[var(--text-grey)] md:text-center md:text-lg'
          >
            <p>
              Senior Front-End Engineer with <b className='text-[var(--secondary)]'>{getYearsOfExperience()}+ years</b>{' '}
              of experience delivering scalable web solutions across Fintech and SaaS. Expert in modern frontend
              frameworks (<b className='text-[var(--secondary)]'>React, Angular, Next.js</b>) and recently expanded into
              Full Stack development with a focus on <b className='text-[var(--secondary)]'>AI/LLM integration</b>.
              Currently architecting AI-driven quality testing platforms using{' '}
              <b className='text-[var(--secondary)]'>Python/FastAPI</b> to connect advanced LLM agents with intuitive
              user interfaces. Passionate about solving complex business challenges through user-centric design and
              cutting-edge AI technologies.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={item} className='flex flex-col justify-center gap-10 px-[7%] md:flex-row'>
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
                link.href = '/cv.pdf'; // Assuming cover letter file
                link.download = 'Ganesh_Pandian_Cover_Letter.pdf';
                link.click();
              }}
            />
          </motion.div>

          {/* Certifications & Publications Grid */}
          <div className='flex flex-col gap-8 pt-[5%] md:flex-row'>
            {/* Publications */}
            <div className='flex flex-1 flex-col gap-6'>
              <motion.p
                variants={item}
                className='mb-2 text-center text-sm font-bold tracking-widest text-[var(--text-grey)] uppercase md:text-left'
              >
                Publications
              </motion.p>
              <div className='flex flex-col gap-4'>
                {[
                  'Federated Learning: Privacy-First AI for Business Innovation',
                  'AI Evaluation and Explainability using Agentic Workflow',
                ].map((pub, i) => (
                  <motion.div
                    variants={item}
                    key={i}
                    className='group relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#141414] p-4 transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:bg-[#1a1a1a]'
                  >
                    <div className='text-sm font-medium text-[var(--text-grey)] transition-colors group-hover:text-[var(--secondary)]'>
                      {pub} <span className='mt-1 block text-xs opacity-50'>(LTIMindtree)</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className='flex flex-1 flex-col gap-6'>
              <motion.p
                variants={item}
                className='mb-2 text-center text-sm font-bold tracking-widest text-[var(--text-grey)] uppercase md:text-left'
              >
                Certifications
              </motion.p>
              <motion.div
                variants={item}
                className='group relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#141414] p-4 transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:bg-[#1a1a1a]'
              >
                <div className='text-sm font-medium text-[var(--text-grey)] transition-colors group-hover:text-[var(--secondary)]'>
                  Microsoft Azure Fundamentals (AZ-900)
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
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
        type: "spring",
        stiffness: 40,
        damping: 15
      }
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
        className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] md:pl-[11%] opacity-20 select-none'
      >
        02.
      </motion.p>

      <BorderWrapper class='left-[10%] h-full' />

      <div className='flex h-full w-full flex-col'>
        {/* Title Section */}
        <div className='basis-[15%] flex items-center justify-center py-[10%] md:py-[5%] pr-[10%] pl-[15%] border-b-2 border-[var(--primary-grey)] overflow-hidden'>
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
            className='text-gradient-grey text-4xl md:text-5xl font-black tracking-widest z-50'
          >
            ABOUT ME
          </motion.p>
        </div>

        {/* Content Section */}
        <motion.div
          className='flex flex-col gap-8 md:gap-12 p-[10%] pl-[15%] md:py-[5%] md:pl-[20%]'
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Text */}
          <motion.div variants={item} className='md:text-center text-base text-[var(--text-grey)] md:text-lg tracking-wide leading-relaxed'>
            <p>
              Senior Front-End Engineer with <b className="text-[var(--secondary)]">{getYearsOfExperience()}+ years</b> of experience delivering scalable web solutions across Fintech and SaaS.
              Expert in modern frontend frameworks (<b className="text-[var(--secondary)]">React, Angular, Next.js</b>) and recently expanded into Full Stack
              development with a focus on <b className="text-[var(--secondary)]">AI/LLM integration</b>. Currently architecting AI-driven quality testing platforms
              using <b className="text-[var(--secondary)]">Python/FastAPI</b> to connect advanced LLM agents with intuitive user interfaces. Passionate about solving
              complex business challenges through user-centric design and cutting-edge AI technologies.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={item} className='flex flex-col gap-10 md:flex-row justify-center px-[7%]'>
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
          <div className='pt-[5%] flex flex-col md:flex-row gap-8'>
            {/* Publications */}
            <div className='flex-1 flex flex-col gap-6'>
              <motion.p variants={item} className='text-sm font-bold text-[var(--text-grey)] tracking-widest uppercase mb-2 text-center md:text-left'>
                Publications
              </motion.p>
              <div className='flex flex-col gap-4'>
                {[
                  "Federated Learning: Privacy-First AI for Business Innovation",
                  "AI Evaluation and Explainability using Agentic Workflow"
                ].map((pub, i) => (
                  <motion.div
                    variants={item}
                    key={i}
                    className='group relative bg-[#141414] border border-[rgba(255,255,255,0.08)] p-4 rounded-xl hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-[#1a1a1a]'
                  >
                    <div className='text-[var(--text-grey)] text-sm font-medium group-hover:text-[var(--secondary)] transition-colors'>
                      {pub} <span className="text-xs opacity-50 block mt-1">(LTIMindtree)</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className='flex-1 flex flex-col gap-6'>
              <motion.p variants={item} className='text-sm font-bold text-[var(--text-grey)] tracking-widest uppercase mb-2 text-center md:text-left'>
                Certifications
              </motion.p>
              <motion.div
                variants={item}
                className='group relative bg-[#141414] border border-[rgba(255,255,255,0.08)] p-4 rounded-xl hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-[#1a1a1a]'
              >
                <div className='text-[var(--text-grey)] text-sm font-medium group-hover:text-[var(--secondary)] transition-colors'>
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

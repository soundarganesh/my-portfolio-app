'use client';
import { experienceList } from '@/src/lib/constants';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import SwipeToAction from '../common/SwipeToAction';

interface AboutProps {}

const AboutSection: React.FC<AboutProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';

  const downloadFile = (type?: string) => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ganesh_Pandian_Resume.pdf';
    link.click();
  };

  return (
    <section id='about' className='relative h-screen w-full pt-[20%] md:pt-0'>
      {/* <div className='h-full w-full'> */}
      <p className='absolute z-50 text-8xl text-[var(--primary-grey)] md:pl-[11%]'>02.</p>
      <BorderWrapper class='top-[22%] md:top-[15%] w-full' />
      <BorderWrapper class='left-[10%] h-full' />
      {/* </div> */}
      <div className='flex h-full w-full flex-col'>
        <div className='flex items-center justify-center py-[10%] md:py-[3%] pr-[10%] pl-[15%] text-2xl font-bold tracking-wider'>
          <p>ABOUT ME</p>
        </div>
        <div className='flex flex-col gap-8 md:gap-12 p-[10%] pl-[15%] md:py-[5%] md:pl-[20%] md:text-center text-base text-[var(--secondary-grey)] md:text-lg'>
          <p className='tracking-wide'>
            Senior Front-End Engineer with <b>{getYearsOfExperience()}+ years</b> of experience delivering scalable web solutions across Fintech and SaaS.
            Expert in modern frontend frameworks (<b>React, Angular, Next.js</b>) and recently expanded into Full Stack
            development with a focus on <b>AI/LLM integration</b>. Currently architecting AI-driven quality testing platforms
            using <b>Python/FastAPI</b> to connect advanced LLM agents with intuitive user interfaces. Passionate about solving
            complex business challenges through user-centric design and cutting-edge AI technologies.
          </p>
          <div className='flex flex-col gap-6 md:flex-row px-[7%]'>
            <SwipeToAction text='Resume' />
            <SwipeToAction text='Cover Letter' />
          </div>
          <div className='pt-[10%] md:pt-[5%] flex flex-col md:flex-row tracking-wide gap-8'>
            <div className='flex flex-col gap-6'>
              <p className='text-sm font-bold text-[var(--secondary-grey)]'>PUBLICATIONS</p>
              <div className='px-[5%] border-1 border-[var(--primary-grey)] divide-y-1 divide-[var(--primary-grey)]'>
              <p className='p-4'>Federated Learning: Privacy-First AI for Business Innovation (LTIMindtree)</p>
              <p className='p-4'>AI Evaluation and Explainability using Agentic Workflow (LTIMindtree)</p>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <p className='text-sm font-bold text-[var(--secondary-grey)]'>CERTIFICATIONS</p>
              <div className='px-[5%] border-1 border-[var(--primary-grey)] divide-y-1 divide-[var(--primary-grey)]'>
              <p className='p-4'>Microsoft Azure Fundamentals (AZ-900)</p>
              {/* <p className='p-4'>AI Evaluation and Explainability using Agentic Workflow (LTIMindtree)</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

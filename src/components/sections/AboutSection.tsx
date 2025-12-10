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
    <section id='about' className='relative h-full md:h-screen w-full flex flex-col'>
      <p className='absolute text-8xl text-[var(--primary-grey)] md:pl-[11%] z-50'>02.</p>
      <BorderWrapper class='w-full top-[15%]'/>
      <BorderWrapper class='h-full left-[10%]'/>

      <div className='basis-[55%] w-full flex items-center justify-center pl-[15%] pr-[10%] text-2xl tracking-wider font-bold text-[var(--golden)]'>ABOUT ME</div>
      <div className='basis-[45%] p-[10%] pt-[15%] pl-[15%] md:pl-[20%] md:py-[5%] md:text-center flex gap-6 flex-col'>
        <p>A self-driven Senior Front-End Engineer with {getYearsOfExperience()}+ years of experience building highly scalable, high-impact web solutions for diverse industries including Fintech and SaaS. While maintaining deep expertise in modern frontend architectures (React, Angular, Next.js), I have recently expanded my technical scope to Full Stack development with a focus on AI/LLM integration. Currently architecting AI-powered quality testing platforms and utilizing Python/FastAPI to bridge the gap between complex LLM agents and intuitive user interfaces. Passionate about solving complex business challenges by combining user-centric design with cutting-edge AI technologies.</p>
        <div className='flex flex-col md:flex-row gap-6'>
        <SwipeToAction text="Resume" />
        <SwipeToAction text="Cover Letter" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

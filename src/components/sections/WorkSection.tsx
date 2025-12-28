'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';

interface WorkProps { }

type project = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  video?: string;
}

const projects: project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    description: "A scalable dashboard for financial analytics.",
    video: "/images/fintech.png",
  },
  {
    id: 2,
    title: "AI Testing Platform",
    description: "LLM-powered automated testing solution.",
    video: "/videos/ai-demo.mp4",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "Responsive marketing site for SaaS product.",
    video: "/images/saas.png",
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description: "Responsive marketing site for SaaS product.",
    video: "/images/saas.png",
  }
];


const WorkSection: React.FC<WorkProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Fade in and slide up
  };

  return (
    <section id='works' className='relative h-max w-full pt-[20%] md:pt-0'>
      <p className='absolute z-50 text-8xl text-[var(--primary-grey)] md:pl-[11%]'>03.</p>
      <BorderWrapper class='left-[10%] h-full' />
      <div className='flex h-full w-full flex-col'>
        <div className='basis-[15%] flex items-center justify-center py-[10%] md:py-[3%] pr-[10%] pl-[15%] text-2xl font-bold tracking-wider border-b-2 border-[var(--primary-grey)]'>
          <p className='text-gradient-grey'>WORKS</p>
        </div>
        <div className='basis-[85%] flex items-center justify-center p-[10%] pl-[15%] md:py-[3%] md:pl-[20%]'>
          <Card projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

interface cardProps {
  projects: project[]
}

const Card: React.FC<cardProps> = (props) => {
  return <div className='grid row-span-1 md:grid-cols-2 gap-6'>
    {props?.projects.map(project => (
      <div className='flex flex-col h-max bg-[#141414] border border-[rgba(38,38,38,.7)] p-3 rounded' key={project?.id}>
        {/* <div className="w-full h-48 bg-gray-200 overflow-hidden">
          {project.video ? (
            <video src={project.video} controls className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
          ) : (
            <img
              src={project.image || "/placeholder.png"}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          )}
        </div> */}
        <div className='text-sm leading-[60px] font-semibold tracking-wider text-[var(--secondary)] uppercase sm:text-sm sm:leading-[40px]'>{project?.title}</div>
        <div className='text-[var(--secondary-grey)] tracking-wide'>{project?.description}</div>
      </div>
    ))}</div>
}
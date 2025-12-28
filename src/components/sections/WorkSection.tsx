'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BorderWrapper } from '../common/BorderWrapper';

interface WorkProps { }

type project = {
  id: number;
  title: string;
  context: string;
  description?: string;
  techStack?: string;
  image?: string;
  video?: string;
}

const projects: project[] = [
  {
    id: 1,
    title: "AI-Driven QA Platform",
    context: "Enterprise Innovation (LTIMindtree)",
    description: "Architected a scalable evaluation framework designed to rigorously test custom Large Language Model (LLM) agents. The platform automates the assessment of model reliability and reasoning, serving as a critical quality gate for enterprise AI solutions. It features a bespoke IDE assistant integration that securely interfaces with internal AI canvases for real-time code analysis.",
    techStack: "React, Micro-Frontends, Python, FastAPI, Custom LLM Agents, CanvasAI"
  },
  {
    id: 2,
    title: "CardHub Digital Banking Suite",
    context: "Fintech (Fiserv)",
    description: "Led the frontend engineering for a mission-critical banking solution adopted by major financial institutions across North America. Delivered high-stakes features such as real-time transaction controls and balance transfers while strictly adhering to Banking Security Standards and Web DLP protocols. The solution handles high-volume traffic with a focus on ADA compliance and zero-latency user feedback.",
    techStack: "React, Angular, Java (RESTful Services), Jenkins CI/CD, Banking Security Protocols"
  },
  {
    id: 3,
    title: "Workflow Automation Engine",
    context: "SaaS Product (Kissflow)",
    description: "Played a key role in evolving the core engine of a widely used Low-Code/No-Code workflow management platform. Focused heavily on performance engineering, achieving a 30% reduction in rendering times through architectural optimizations. The project involved end-to-end ownership of the \"Process\" module, directly impacting the daily operations of thousands of global enterprise users.",
    techStack: "React, JavaScript (ES6+), PWA, Heap Analytics, GraphQL"
  },
  {
    id: 4,
    title: "AI Content Veracity Detector",
    context: "Independent R&D / Tooling",
    description: "A specialized detection tool designed to analyze text patterns and determine the likelihood of AI generation versus human authorship. This project bridges advanced NLP heuristics with a user-friendly frontend, providing creators and editors with immediate transparency on content origin. It features a lightweight, privacy-focused architecture that processes analysis in real-time.",
    techStack: "Next.js (React), Python (FastAPI), NLP / Transformer Models, Tailwind CSS"
  }
];


const WorkSection: React.FC<WorkProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const device: DeviceType = useDeviceType();

  return (
    <section id='works' className='relative h-max w-full pt-[20%] md:pt-0'>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] md:pl-[11%] opacity-20 select-none'
      >
        03.
      </motion.p>
      <BorderWrapper class='left-[10%] h-full' />
      <div className='flex h-full w-full flex-col'>
        <div className='basis-[15%] flex items-center justify-center py-[10%] md:py-[5%] pr-[10%] pl-[15%] border-b-2 border-[var(--primary-grey)] overflow-hidden'>
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
            className='text-gradient-grey text-4xl md:text-5xl font-black tracking-widest z-50'
          >
            WORKS
          </motion.p>
        </div>
        <div className='basis-[85%] flex items-center justify-center p-[10%] pl-[15%] md:py-[5%] md:pl-[20%]'>
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
    hidden: { opacity: 0, y: 40 },
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
    <motion.div
      className='grid row-span-1 md:grid-cols-2 gap-8 w-full'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {props?.projects.map(project => (
        <motion.div
          variants={item}
          className='group relative flex flex-col justify-between min-h-[300px] bg-[#141414] border border-[rgba(255,255,255,0.08)] p-8 rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.2)] transition-all duration-500 hover:bg-[#1a1a1a]'
          key={project?.id}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_center,_var(--purple)_0%,_transparent_70%)] opacity-0 blur-[60px] group-hover:opacity-15 transition-opacity duration-700 ease-in-out pointer-events-none" />

          <div className="relative z-10">
            <div className='text-xs font-bold tracking-widest text-[var(--golden)] mb-2 uppercase opacity-80'>
              {project?.context}
            </div>
            <div className='text-2xl font-bold tracking-tight text-[var(--secondary)] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300'>
              {project?.title}
            </div>
            <div className='text-sm text-[var(--secondary-grey)] leading-relaxed font-light mb-6'>
              {project?.description}
            </div>
            {project?.techStack && (
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.techStack.split(',').map((tech, i) => (
                  <span key={i} className='text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] text-[var(--text-grey)] border border-[rgba(255,255,255,0.05)]'>
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* 
          <div className="relative z-10 pt-8 mt-auto flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[var(--secondary-grey)] opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
            <span className="w-6 h-[1px] bg-[var(--secondary-grey)]"></span>
            <span>View Case Study</span>
          </div> */}
        </motion.div>
      ))}
    </motion.div>
  )
}
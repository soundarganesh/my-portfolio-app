'use client';
import { DeviceType, useDeviceType } from '../../lib/useDeviceType';
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface WorkProps { }

type project = {
  id: number;
  title: string;
  context: string;
  description?: string;
  techStack?: string;
  image?: string;
  video?: string;
};

const projects: project[] = [
  {
    id: 1,
    title: 'AI-Driven QA Platform',
    context: 'Enterprise Innovation (LTIMindtree)',
    description:
      'Architected a scalable evaluation framework designed to rigorously test custom Large Language Model (LLM) agents. The platform automates the assessment of model reliability and reasoning, serving as a critical quality gate for enterprise AI solutions. It features a bespoke IDE assistant integration that securely interfaces with internal AI canvases for real-time code analysis.',
    techStack: 'React, Micro-Frontends, Python, FastAPI, Custom LLM Agents, CanvasAI',
  },
  {
    id: 2,
    title: 'CardHub Digital Banking Suite',
    context: 'Fintech (Fiserv)',
    description:
      'Led the frontend engineering for a mission-critical banking solution adopted by major financial institutions across North America. Delivered high-stakes features such as real-time transaction controls and balance transfers while strictly adhering to Banking Security Standards and Web DLP protocols. The solution handles high-volume traffic with a focus on ADA compliance and zero-latency user feedback.',
    techStack: 'React, Java (RESTful Services), Jenkins CI/CD, Banking Security Protocols',
  },
  {
    id: 3,
    title: 'Workflow Automation Engine',
    context: 'SaaS Product (Kissflow)',
    description:
      'Played a key role in evolving the core engine of a widely used Low-Code/No-Code workflow management platform. Focused heavily on performance engineering, achieving a 30% reduction in rendering times through architectural optimizations. The project involved end-to-end ownership of the "Process" module, directly impacting the daily operations of thousands of global enterprise users.',
    techStack: 'React, JavaScript (ES6+), PWA, Heap Analytics, GraphQL',
  },
  {
    id: 4,
    title: 'AI Content Veracity Detector',
    context: 'Independent R&D / Tooling',
    description:
      'A specialized detection tool designed to analyze text patterns and determine the likelihood of AI generation versus human authorship. This project bridges advanced NLP heuristics with a user-friendly frontend, providing creators and editors with immediate transparency on content origin. It features a lightweight, privacy-focused architecture that processes analysis in real-time.',
    techStack: 'Next.js (React), Python (FastAPI), NLP / Transformer Models, Tailwind CSS',
  },
];

const WorkSection: React.FC<WorkProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const device: DeviceType = useDeviceType();

  return (
    <section id='works' className='relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20 md:py-0'>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_var(--golden)_0%,_transparent_70%)] blur-[120px] opacity-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='relative z-10 grid w-full grid-cols-1 md:grid-cols-12 content-center'>

        {/* Title Column */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start p-[5%] relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10rem] md:text-[12rem] font-black text-white leading-none select-none absolute top-0 -left-10 md:left-0 opacity-10"
          >
            03.
          </motion.div>

          <div className="mt-32 md:mt-40 relative z-20">
            <span className='h-[1px] w-12 bg-[var(--purple)] block mb-4'></span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-2">Selected <br /> Works</h2>
          </div>
        </div>

        {/* Content Column */}
        <div className='md:col-span-8 p-[5%] md:pl-0 flex items-center mb-20 md:mb-0'>
          <Card projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

interface cardProps {
  projects: project[];
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
        type: 'spring',
        stiffness: 40,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className='grid w-full gap-8 grid-cols-1 md:grid-cols-2'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-50px' }}
    >
      {props?.projects.map((project) => (
        <motion.div
          variants={item}
          className='group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:border-[var(--purple)]/50 hover:bg-black/40 hover:shadow-2xl'
          key={project?.id}
        >
          {/* Decorative Gradient Blob */}
          <div className='pointer-events-none absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-[var(--purple)] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-20' />

          <div className='relative z-10 flex flex-col h-full'>
            <div className='mb-4'>
              <span className='inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-[var(--golden)] uppercase'>
                {project?.context}
              </span>
            </div>

            <h3 className='mb-4 text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--purple)] transition-all'>
              {project?.title}
            </h3>

            <p className='mb-6 text-sm leading-relaxed text-gray-400 font-light group-hover:text-gray-300 transition-colors'>
              {project?.description}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5">
              {project?.techStack && (
                <div className='flex flex-wrap gap-2'>
                  {project.techStack.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className='text-[10px] tracking-wider text-gray-500 uppercase font-medium'
                    >
                      {tech.trim()} {i < (project.techStack?.split(',').length || 0) - 1 && "•"}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

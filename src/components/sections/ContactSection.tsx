'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface ContactProps { }

const ContactSection: React.FC<ContactProps> = () => {
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
    <section id='contact' className='relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-20 md:py-0'>

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_var(--purple)_0%,_transparent_70%)] blur-[120px] opacity-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className='relative z-10 grid w-full grid-cols-1 md:grid-cols-12 h-full content-center'>

        {/* Title Column */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start p-[5%] relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10rem] md:text-[12rem] font-black text-white leading-none select-none absolute top-0 -left-10 md:left-0 opacity-10"
          >
            04.
          </motion.div>

          <div className="mt-32 md:mt-40 relative z-20">
            <span className='h-[1px] w-12 bg-[var(--golden)] block mb-4'></span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-2">Let's <br /> Connect</h2>
          </div>
        </div>


        {/* Content Column */}
        <motion.div
          className='md:col-span-8 flex flex-col items-center justify-center p-[5%] text-center'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.div variants={item} className='flex flex-col items-center gap-8'>
            <p className='text-lg font-light tracking-widest text-[#BEBDC2] uppercase md:text-xl'>
              Explore · Create · Inspire
            </p>

            <Link
              href='mailto:soundar.ganesh@gmail.com?subject=Hello&body=Hi%20Ganesh'
              className='group relative'
            >
              <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BEBDC2] hover:to-[var(--purple)] transition-all duration-500">
                soundar.ganesh<br />@gmail.com
              </h1>
              <div className="h-1 w-0 group-hover:w-full bg-[var(--purple)] transition-all duration-500 mx-auto mt-4"></div>
            </Link>

            <motion.div variants={item} className='mt-12 flex gap-10'>
              {[
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b' },
                { Icon: FaGithub, href: 'https://github.com/soundarganesh' },
                { Icon: FaTwitter, href: 'https://twitter.com/' }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target='_blank'
                  className='text-[#BEBDC2] hover:text-[var(--purple)] hover:scale-110 transition-all duration-300'
                >
                  <Icon size={40} />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className='mt-24 text-xs font-bold tracking-[0.3em] text-[#555] opacity-60 uppercase'
            >
              <p>© {new Date().getFullYear()} GANESH PANDIAN. ALL RIGHTS RESERVED.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

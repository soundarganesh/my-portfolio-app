'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface ContactProps {}

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
    <section id='contact' className='relative h-screen w-full pt-[20%] md:h-screen md:pt-0'>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] opacity-20 select-none md:pl-[11%]'
      >
        04.
      </motion.p>

      <BorderWrapper class='left-[10%] h-full' />

      <div className='flex h-full w-full flex-col'>
        <div className='flex basis-[20%] items-center justify-center overflow-hidden border-b-2 border-[var(--primary-grey)] py-[10%] pr-[10%] pl-[15%] md:py-[5%]'>
          <motion.p
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
            viewport={{ once: true }}
            className='text-gradient-grey z-50 text-center text-4xl font-black tracking-widest uppercase md:text-5xl'
          >
            LET'S CONNECT
          </motion.p>
        </div>

        <motion.div
          className='flex h-full items-center justify-center p-[10%] pl-[15%] text-center md:py-[5%] md:pl-[20%]'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.div variants={item} className='flex flex-col items-center gap-6'>
            <p className='text-lg font-light tracking-wide text-[var(--secondary-grey)] md:text-2xl'>
              Explore . Create . Inspire Together !
            </p>
            <Link
              href='mailto:soundar.ganesh@gmail.com?subject=Hello&body=Hi%20Ganesh'
              className='text-gradient-blue text-lg font-bold transition-colors duration-300 hover:text-white md:text-4xl'
            >
              soundar.ganesh@gmail.com
            </Link>

            <motion.div variants={item} className='mt-8 flex gap-8'>
              <a
                href='https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b'
                target='_blank'
                className='text-[var(--secondary-grey)] transition-all duration-300 hover:scale-125 hover:text-[#0077b5]'
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href='https://github.com/soundarganesh'
                target='_blank'
                className='text-[var(--secondary-grey)] transition-all duration-300 hover:scale-125 hover:text-white'
              >
                <FaGithub size={30} />
              </a>
              <a
                href='https://twitter.com/' // Placeholder or remove if not needed, but often nice to have 3. I'll stick to what I know or just 2.
                target='_blank'
                className='text-[var(--secondary-grey)] transition-all duration-300 hover:scale-125 hover:text-[#1DA1F2]'
              >
                <FaTwitter size={30} />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className='mt-12 text-sm font-light tracking-widest text-[var(--text-grey)] opacity-60'
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

'use client';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import Link from "next/link";
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
        type: "spring",
        stiffness: 40,
        damping: 15
      }
    },
  };

  return (
    <section id='contact' className='relative h-screen md:h-screen w-full pt-[20%] md:pt-0'>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='absolute z-50 text-8xl font-black text-[var(--primary-grey)] md:pl-[11%] opacity-20 select-none'
      >
        04.
      </motion.p>

      <BorderWrapper class='left-[10%] h-full' />

      <div className='flex h-full w-full flex-col'>
        <div className='basis-[20%] flex items-center justify-center py-[10%] md:py-[5%] pr-[10%] pl-[15%] border-b-2 border-[var(--primary-grey)] overflow-hidden'>
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
            className='text-gradient-grey text-4xl md:text-5xl font-black tracking-widest uppercase z-50 text-center'
          >
            LET'S CONNECT
          </motion.p>
        </div>

        <motion.div
          className='flex h-full items-center justify-center p-[10%] pl-[15%] md:py-[5%] md:pl-[20%] text-center'
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="flex flex-col items-center gap-6">
            <p className='text-lg md:text-2xl text-[var(--secondary-grey)] tracking-wide font-light'>
              Explore . Create . Inspire Together !
            </p>
            <Link
              href='mailto:soundar.ganesh@gmail.com?subject=Hello&body=Hi%20Ganesh'
              className='text-lg md:text-4xl font-bold text-gradient-blue hover:text-white transition-colors duration-300'
            >
              soundar.ganesh@gmail.com
            </Link>

            <motion.div variants={item} className='flex gap-8 mt-8'>
              <a
                href='https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b'
                target='_blank'
                className='text-[var(--secondary-grey)] hover:text-[#0077b5] transition-all duration-300 hover:scale-125'
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href='https://github.com/soundarganesh'
                target='_blank'
                className='text-[var(--secondary-grey)] hover:text-white transition-all duration-300 hover:scale-125'
              >
                <FaGithub size={30} />
              </a>
              <a
                href='https://twitter.com/' // Placeholder or remove if not needed, but often nice to have 3. I'll stick to what I know or just 2.
                target='_blank'
                className='text-[var(--secondary-grey)] hover:text-[#1DA1F2] transition-all duration-300 hover:scale-125'
              >
                <FaTwitter size={30} />
              </a>
            </motion.div>

            <motion.div variants={item} className='mt-12 text-sm text-[var(--text-grey)] opacity-60 font-light tracking-widest'>
              <p>© {new Date().getFullYear()} GANESH PANDIAN. ALL RIGHTS RESERVED.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

};

export default ContactSection;

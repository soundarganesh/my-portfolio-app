'use client';

import { menuConfig } from '@/src/lib/constants';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { menuType } from '@/src/types/type';
import React, { useState, useEffect } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { motion, Variants } from 'framer-motion';
import { TfiClose } from 'react-icons/tfi';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { BorderWrapper } from '../common/BorderWrapper';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const device: DeviceType = useDeviceType();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = device === 'mobile';
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Iterate through sections to find the one currently in view
      // We check from the bottom up or based on viewport intersection
      const sections = ['contact', 'works', 'about', 'home'];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Debugging
          console.log(`Section ${id}: top=${rect.top}, bottom=${rect.bottom}`);

          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
            setActiveMenu(id);
            console.log('Active ID:', id);
            break; // Found the topmost visible section
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onMenuItemClick = (item: menuType) => {
    setActiveMenu(item?.id);
    setOpenMenu(false);
    const element = document?.getElementById(item?.id);
    if (element) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const socialMedia = () => {
    return (
      <div className='flex flex-col space-y-6'>
        <motion.a
          whileHover={{ scale: 1.2, color: '#0077b5' }} // LinkedIn Blue
          transition={{ type: 'spring', stiffness: 300 }}
          href='https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b'
          className='text-gray-600'
          target='_blank'
        >
          <FaLinkedin className='h-5 w-5' />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: '#333' }}
          transition={{ type: 'spring', stiffness: 300 }}
          href='https://github.com/soundarganesh'
          className='text-gray-600'
          target='_blank'
        >
          <FaGithub className='h-5 w-5' />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: '#EA4335' }} // Gmail Red
          transition={{ type: 'spring', stiffness: 300 }}
          href='mailto:soundar.ganesh@gmail.com'
          className='text-gray-600'
        >
          <FaMailBulk className='h-5 w-5' />
        </motion.a>
      </div>
    );
  };

  const sideBarVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className='bg-opacity-90 fixed top-0 z-[100] flex h-[10%] w-full border-b-2 border-[var(--primary-grey)] bg-[var(--primary)] backdrop-blur-sm md:right-0 md:h-full md:w-[7%] md:flex-col md:border-l-2'>
      {isMobile ? (
        <div className='relative flex h-full w-full items-center justify-between px-[5%]'>
          <div className='text-gradient-purple flex items-center gap-2'>
            <span className='text-2xl'>G</span>
            <span className='text-sm font-bold tracking-widest'>GANESH PANDIAN</span>
          </div>

          <div className='flex items-center justify-center' onClick={() => setOpenMenu(!openMenu)}>
            <CiMenuKebab size={25} />
          </div>
        </div>
      ) : (
        <div className='relative flex h-full flex-col'>
          <div className='flex basis-[30%] items-center justify-center border-b-2 border-[var(--primary-grey)]'>
            {socialMedia()}
          </div>
          <motion.div
            className='flex basis-[70%] flex-col justify-between py-[40%]'
            variants={sideBarVariants}
            initial='hidden'
            animate='visible'
          >
            {menuConfig.map((menu: menuType) => (
              <motion.div variants={itemVariants} className='group flex w-full justify-center' key={menu?.id}>
                <div
                  className={`h-full w-1 rounded transition-all duration-300 ${activeMenu === menu?.id ? `button-bg-gradient w-1.5` : `bg-transparent group-hover:bg-[var(--secondary-grey)]`}`}
                />
                <div
                  className={`flex w-full cursor-pointer justify-center py-6 text-sm font-semibold transition-all duration-300 ${activeMenu === menu?.id ? `scale-110 text-[var(--secondary)]` : `text-[var(--text-grey)] group-hover:text-[var(--secondary)]`}`}
                  onClick={() => onMenuItemClick(menu)}
                >
                  <p className='rotate-[270deg] tracking-widest'>{menu?.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
      {openMenu && (
        <>
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: 'circInOut' }}
            className='absolute top-0 left-0 z-[200] flex h-screen w-screen flex-col bg-[var(--primary)]'
          >
            <div className='flex justify-end p-8'>
              <TfiClose size={30} onClick={() => setOpenMenu(false)} />
            </div>

            <div className='flex flex-grow flex-col items-center justify-center gap-8'>
              {menuConfig.map((menu: menuType, index: number) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  key={menu?.id}
                  className={`cursor-pointer text-4xl font-black tracking-widest uppercase ${activeMenu === menu?.id ? 'text-gradient-purple' : 'text-[var(--text-grey)]'}`}
                  onClick={() => onMenuItemClick(menu)}
                >
                  <span className='mr-4 text-sm font-light text-[var(--secondary-grey)]'>0{index + 1}.</span>
                  {menu?.title}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Header;

//https://www.freepik.com/free-psd/luxury-real-estate-landing-page-template_54090549.htm#fromView=search&page=3&position=7&uuid=f2f8b7e3-1409-4536-9592-b4ca14e1eff4&query=architecture+website

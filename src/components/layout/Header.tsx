'use client';

import { menuConfig } from '@/src/lib/constants';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { menuType } from '@/src/types/type';
import React, { useState, useEffect } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { motion, Variants } from 'framer-motion';
import { TfiClose } from 'react-icons/tfi';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const device: DeviceType = useDeviceType();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = device === 'mobile';
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'works', 'about', 'home'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
            setActiveMenu(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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

  const socialMedia = () => (
    <div className='flex flex-col space-y-8'>
      {[
        { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b', color: '#0077b5' },
        { Icon: FaGithub, href: 'https://github.com/soundarganesh', color: '#ffffff' },
        { Icon: FaMailBulk, href: 'mailto:soundar.ganesh@gmail.com', color: '#EA4335' }
      ].map(({ Icon, href, color }, i) => (
        <motion.a
          key={i}
          whileHover={{ scale: 1.2, color: color }}
          whileTap={{ scale: 0.9 }}
          href={href}
          target='_blank'
          className='text-gray-500 transition-colors'
        >
          <Icon className='h-6 w-6' />
        </motion.a>
      ))}
    </div>
  );

  const sideBarVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className='fixed top-0 z-[100] flex w-full md:right-0 md:h-full md:w-[7%] md:flex-col'>
      {/* Mobile Header */}
      {isMobile ? (
        <div className='flex h-[80px] w-full items-center justify-between border-b border-white/10 bg-black/80 px-[5%] backdrop-blur-md'>
          <div className='flex items-center gap-3'>
            <span className='text-gradient-purple text-2xl font-black'>G</span>
            <span className='text-xs font-bold tracking-[0.2em] text-white'>GANESH PANDIAN</span>
          </div>
          <div
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white/5 active:scale-95'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CiMenuKebab size={24} className='text-white' />
          </div>
        </div>
      ) : (
        /* Desktop Sidebar */
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className='relative flex h-full flex-col backdrop-blur-xl bg-black/40 border-l border-white/5 shadow-2xl'
        >
          {/* Top: Socials */}
          <div className='flex basis-[35%] items-end justify-center pb-8 border-b border-white/5'>
            {socialMedia()}
          </div>

          {/* Bottom: Menu Indices */}
          <motion.div
            className='flex basis-[65%] flex-col justify-center gap-12 py-10'
            variants={sideBarVariants}
            initial='hidden'
            animate='visible'
          >
            {menuConfig.map((menu: menuType) => (
              <motion.div variants={itemVariants} className='group relative flex w-full justify-center' key={menu?.id}>
                <div
                  className={`absolute right-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-l bg-gradient-to-b from-[var(--purple)] to-[var(--golden)] transition-all duration-300 ${activeMenu === menu?.id ? 'opacity-100' : 'opacity-0'}`}
                />
                <div
                  className={`flex w-full cursor-pointer justify-center py-4 transition-all duration-300 ${activeMenu === menu?.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}
                  onClick={() => onMenuItemClick(menu)}
                >
                  <p className='rotate-[270deg] text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap'>{menu?.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Full Screen Menu */}
      {openMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[200] flex flex-col bg-black/95 backdrop-blur-xl'
        >
          <div className='flex justify-end p-8'>
            <div
              className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 active:scale-90 transition-transform'
              onClick={() => setOpenMenu(false)}
            >
              <TfiClose size={24} className='text-white' />
            </div>
          </div>

          <div className='flex flex-grow flex-col items-center justify-center gap-10'>
            {menuConfig.map((menu: menuType, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                key={menu?.id}
                className={`relative cursor-pointer text-4xl font-black tracking-widest uppercase ${activeMenu === menu?.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple)] to-[var(--golden)]' : 'text-gray-500'}`}
                onClick={() => onMenuItemClick(menu)}
              >
                <span className='absolute -left-8 top-0 text-xs font-light text-gray-700'>0{index + 1}</span>
                {menu?.title}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Header;

//https://www.freepik.com/free-psd/luxury-real-estate-landing-page-template_54090549.htm#fromView=search&page=3&position=7&uuid=f2f8b7e3-1409-4536-9592-b4ca14e1eff4&query=architecture+website

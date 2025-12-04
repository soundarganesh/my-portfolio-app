import { menuConfig } from '@/src/lib/constants';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { menuType } from '@/src/types/type';
import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { TfiClose } from 'react-icons/tfi';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>('home');

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

  return (
    <section className='fixed top-0 z-100 flex h-[10%] w-full border-b-2 border-[var(--primary-grey)] bg-[var(--primary)] md:right-0 md:h-full md:w-[10%] md:flex-col md:border-l-2'>
      {isMobile ? (
        <>
          <div className='basis-[15%] border-r-2 border-[var(--primary-grey)]'></div>
          <div className='basis-[65%]'>
            <p className='flex h-full items-center pr-[15%] text-sm font-bold tracking-wider text-[var(--secondary-grey)]'>
              <span className='flex items-center justify-center pl-[10%] text-center text-4xl text-[var(--golden)]'>
                *
              </span>
              &nbsp;GANESH PANDIAN
            </p>
          </div>
          <div
            className='flex basis-[20%] items-center justify-center border-l-2 border-[var(--primary-grey)]'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CiMenuKebab size={25} />
          </div>
        </>
      ) : (
        <>
          <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'></div>
          <div className='flex basis-[70%] flex-col justify-between py-[40%]'>
            {menuConfig.map((menu: menuType) => (
              <div
                key={menu?.id}
                className={`flex w-full cursor-pointer justify-center border-l-6 ${activeMenu === menu?.id ? `border-[var(--golden)]` : `border-[var(--primary)] text-[var(--secondary-grey)]`} py-6 text-sm font-semibold`}
                onClick={() => onMenuItemClick(menu)}
              >
                <p className='rotate-270'>{menu?.title?.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className='basis-[15%] border-t-2 border-[var(--primary-grey)]'></div>
        </>
      )}
      {openMenu && (
        <>
          <motion.div
            initial={{ y: -750, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute h-max w-full bg-[var(--primary)]'
          >
            <div className='flex divide-x-2 divide-[var(--primary-grey)] border-b-6 border-[var(--primary-grey)]'>
              <div className='flex basis-[80%] flex-col'>
                {menuConfig.map((menu: menuType, index: number) => (
                  <div key={menu?.id} className={`flex w-full justify-center`} onClick={() => onMenuItemClick(menu)}>
                    <div className='flex basis-[18%] items-center justify-center border-r-2 border-b-2 border-[var(--primary-grey)] py-6 text-2xl font-bold text-[var(--primary-grey)]'>
                      0{index + 1}.
                    </div>
                    <p
                      className={`flex basis-[80%] items-center justify-center py-6 text-sm font-semibold ${activeMenu === menu?.id ? `border-b-6 border-[var(--golden)]` : `border-b-2 border-[var(--primary-grey)] text-[var(--secondary-grey)]`}`}
                    >
                      {menu?.title?.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className='flex basis-[20%] items-center justify-center border-b-2 border-[var(--primary-grey)]'
                onClick={() => setOpenMenu(!openMenu)}
              >
                <TfiClose size={25} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Header;

//https://www.freepik.com/free-psd/luxury-real-estate-landing-page-template_54090549.htm#fromView=search&page=3&position=7&uuid=f2f8b7e3-1409-4536-9592-b4ca14e1eff4&query=architecture+website

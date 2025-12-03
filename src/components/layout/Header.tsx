import { menuConfig } from '@/src/lib/constants'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { menuType } from '@/src/types/type'
import React, { useState } from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const device: DeviceType = useDeviceType();
    const isMobile = device === 'mobile';

  const [activeMenu, setActiveMenu] = useState<string>('home');
  const onMenuItemClick = (item: menuType) => {
    console.log(item?.id)
    setActiveMenu(item?.id)
    const element = document?.getElementById(item?.id);
    console.log(element);
    if (element) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className='fixed right-0 z-100 flex h-full w-[10%] flex-col border-l-2 border-[var(--primary-grey)]'>
      <>
      <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'></div>
      <div className='flex basis-[70%] flex-col justify-between py-[40%]'>
        {menuConfig.map((menu: menuType) => (
          <div
            key={menu?.id}
            className={`flex w-full justify-center border-l-6 ${activeMenu === menu?.id ? `border-[var(--golden)]` : `border-[var(--primary)] text-[var(--secondary-grey)]`}  py-6 text-sm font-semibold`}
            onClick={() => onMenuItemClick(menu)}
          >
            <p className='rotate-270'>{menu?.title?.toUpperCase()}</p>
          </div>
        ))}
      </div>
      <div className='basis-[15%] border-t-2 border-[var(--primary-grey)]'></div>
      </>
    </section>
  )
}

export default Header

//https://www.freepik.com/free-psd/luxury-real-estate-landing-page-template_54090549.htm#fromView=search&page=3&position=7&uuid=f2f8b7e3-1409-4536-9592-b4ca14e1eff4&query=architecture+website

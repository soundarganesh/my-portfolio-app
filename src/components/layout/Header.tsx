import React from 'react'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <section className='fixed right-0 z-100 flex h-full w-[10%] flex-col border-l-2 border-[var(--primary-grey)]'>
      <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'></div>
      <div className='basis-[70%]'></div>
      <div className='basis-[15%] border-t-2 border-[var(--primary-grey)]'></div>
    </section>
  )
}

export default Header

//https://www.freepik.com/free-psd/luxury-real-estate-landing-page-template_54090549.htm#fromView=search&page=3&position=7&uuid=f2f8b7e3-1409-4536-9592-b4ca14e1eff4&query=architecture+website

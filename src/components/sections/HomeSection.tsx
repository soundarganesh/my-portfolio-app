'use client'
import React from 'react'
import Shape from '../common/Shape'
import DotPattern from '../common/DotPattern'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType'
import { getYearsOfExperience } from '@/src/lib/utils'
import BackIcon from '../../../public/background.svg';
import Image from 'next/image';

interface HomeProps {}

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType()

  const isMobile = () => device === 'mobile'

  return (
    <section className='h-screen'>
      <div className='flex flex-col sm:flex-row w-full h-[100%] p-[10%] sm:pb-[5%]'>
        <div className='z-10 basis-1/2 flex h-[100%] flex-col justify-center sm:justify-start sm:pt-[10%]'>
          <p className='text-2xl font-bold'>PORTFOLIO</p>
          <p className='pt-2 text-base tracking-widest md:text-xl lg:text-2xl'>WEB DEVELOPMENT</p>
          <span className='mt-4 mb-6 w-[5%] rounded-2xl border-3 border-[var(--light-pink)]'></span>
          <p className='text-sm'>
            I believe great software is more than code — <b>it’s an experience shaped with care</b>.
          </p>
          <p className='text-sm'>From frontend polish to backend logic, I build with clarity and purpose.</p>
        </div>

        <div className='relative basis-1/2 flex h-[100%] justify-end items-end w-full'>
          {/* <DotPattern
            size={5}
            direction={isMobile() ? 0 : 90}
            row1Color='var(--purple)'
            row2Color='var(--dark-purple)'
            classes={`absolute ${isMobile() ? `top-[5%] right-[5%]` : `top-[15%] right-0`}`}
          /> */}
          {/* <DotPattern
            size={5}
            direction={90}
            row1Color='var(--purple)'
            row2Color='var(--dark-purple)'
            classes='bottom-[5%] right-[20%]'
          /> */}
          {/* <Shape type='triangle' size={isMobile() ? 30 : 40} direction={-45} classes='absolute left-[25%] lg:left-[10%]' />
          <Shape type='triangle' size={isMobile() ? 30 : 40} direction={45} classes='absolute bottom-[40%] left-[25%] lg:left-[10%]' />
          <Shape type='triangle' size={isMobile() ? 30 : 40} direction={-60} classes='absolute bottom-[15%] left-[10%] lg:left-[-15%]' />
          <Shape type='triangle' size={device === 'mobile' ? 120 : 150} classes='absolute z-20 right-[-7%] bottom-[65%] sm:bottom-[55%]' direction={0} />
          <Shape type='circle' size={isMobile() ? 100 : 180} classes='absolute z-20 right-[22%]' />
          <div className='linearGradient z-0 h-[75%] w-[45%] sm:h-[65%] mb-1'>
            <div className='m-7 sm:m-8 h-full bg-white' />
          </div> */}
          {/* <BackIcon /> */}
          </div>
          <Image className='absolute bottom-0' src={BackIcon} alt="Logo" width={700} height={700} />

      </div>
    </section>
  )
}

export default HomeSection

'use client'
import React from 'react'
import Shape from '../common/Shape'
import DotPattern from '../common/DotPattern'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType'
import { getYearsOfExperience } from '@/src/lib/utils'

interface HomeProps {}

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType()

  const isMobile = () => device === 'mobile'

  return (
    <section className='relative h-screen'>
      <div className='relative flex h-[100%]'>
        <div className='relative z-10 flex h-[100%] flex-col justify-end px-[10%] pb-[35%] sm:pb-[10%]'>
          <p className='text-2xl font-bold'>PORTFOLIO</p>
          <p className='pt-2 text-base tracking-widest md:text-xl lg:text-2xl'>WEB DEVELOPMENT</p>
          <span className='mt-4 mb-6 w-[5%] rounded-2xl border-3 border-[var(--light-pink)]'></span>
          <p className='w-3/4 text-sm'>
            I believe great software is more than code — <b>it’s an experience shaped with care</b>.
          </p>
          <p className='w-3/4 text-sm'>From frontend polish to backend logic, I build with clarity and purpose.</p>
        </div>
        <div>
          {/* <Shape type='circle' size={50} classes='absolute top-[30%] left-[5%]' />
          <Shape type='square' size={70} classes='absolute top-[12%] left-[40%]' direction={45} /> */}
          <Shape type='triangle' size={device === 'mobile' ? 120 : 220} classes='absolute z-20 top-[40%] sm:top-[20%] right-[-5%] sm:right-[5%]' direction={0} />

          <DotPattern
            size={5}
            direction={isMobile() ? 0 : 90}
            row1Color='var(--purple)'
            row2Color='var(--dark-purple)'
            classes={`absolute ${isMobile() ? `top-[5%] right-[5%]` : `top-[15%] right-0`}`}
          />
          <DotPattern
            size={5}
            row1Color='var(--purple)'
            row2Color='var(--dark-purple)'
            classes='absolute bottom-[5%] right-[5%]'
          />
          <Shape type='triangle' size={isMobile() ? 30 : 40} classes='absolute bottom-[3%] left-[25%] lg:left-[0%]' />

          <Shape type='circle' size={isMobile() ? 100 : 200} classes='z-20 absolute right-[25%] bottom-[5%]' />
          <div className='linearGradient absolute right-[10%] bottom-[5%] z-0 h-[50%] w-[30%] sm:h-[60%] sm:w-[20%]'>
            <div className='m-6 sm:m-10 h-full bg-white' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection

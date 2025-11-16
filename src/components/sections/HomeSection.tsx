'use client'
import React from 'react'
import Shape from '../common/Shape'
import DotPattern from '../common/DotPattern'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType'

interface HomeProps {}

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType()

  const isMobile = () => device === 'mobile'

  return (
    <section className='relative h-screen'>
      <div className='relative h-[100%]'>
        <div className='relative z-10 flex h-[100%] flex-col justify-end px-[10%] pb-[35%] sm:pb-[10%]'>
          <p className='font-secondary text-sm text-[1rem] font-bold'>Web Developer</p>
          <p className='pt-2 text-4xl font-bold md:text-6xl lg:text-8xl'>Portfolio</p>
          <span className='mt-4 mb-6 w-[5%] rounded-2xl border-3 border-[var(--light-pink)]'></span>
          <p className='w-3/4 text-sm'>
            I believe great software is more than code — <b>it’s an experience shaped with care</b>.
          </p>
          <p className='w-3/4 text-sm'>From frontend polish to backend logic, I build with clarity and purpose.</p>
        </div>
        <Shape type='circle' size={50} color='#99ca92' classes='absolute top-[30%] left-[5%]' />
        <Shape type='square' size={70} color='#ecd21d' classes='absolute top-[12%] left-[40%]' direction={45} />
        <Shape
          type='triangle'
          size={device === 'mobile' ? 30 : 70}
          color='#ecd21d'
          classes='absolute top-[70%] left-0'
          direction={90}
        />

        <DotPattern
          type='dot'
          size={5}
          direction={isMobile() ? 0 : 90}
          row1Color='#d33673'
          row2Color='#edd31e'
          classes={`absolute ${isMobile() ? `top-[5%] right-[5%]` : `top-[15%] right-0`}`}
        />
        <DotPattern
          type='dot'
          size={5}
          direction={0}
          row1Color='#d33673'
          row2Color='#99ca92'
          classes='absolute bottom-[5%] left-[3%]'
        />
        <Shape
          type='triangle'
          size={isMobile() ? 30 : 40}
          color='#d33673'
          classes='absolute bottom-[3%] left-[25%] lg:left-[10%]'
          direction={0}
        />

        <div className='absolute top-[10%] right-[5%] z-0 h-[80%] w-[50%] bg-[var(--light-blue)]'>
          {!isMobile() && <div />}
        </div>
      </div>
    </section>
  )
}

export default HomeSection
//bg-gradient-to-br from-[#e3a7bc] via-[#e3a7bc] to-[#b72260]

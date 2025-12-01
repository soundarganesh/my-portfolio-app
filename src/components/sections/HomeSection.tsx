'use client'
import React, { useEffect, useState } from 'react'
import Shape from '../common/Shape'
import DotPattern from '../common/DotPattern'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType'
import { getYearsOfExperience } from '@/src/lib/utils'
import BackIcon from '../../../public/background.svg'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import JumbledText from '../common/JumbledText'
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa'

interface HomeProps {}

// const HomeSection: React.FC<HomeProps> = () => {
//   const device: DeviceType = useDeviceType()

//   const isMobile = () => device === 'mobile'

//   return (
//     <section className='h-screen'>
//       <div className='flex flex-col sm:flex-row w-full h-[100%] p-[10%] sm:pb-[5%]'>
//         <div className='z-10 basis-1/2 flex h-[100%] flex-col justify-center sm:justify-start sm:pt-[10%]'>
//           <p className='text-2xl font-bold'>PORTFOLIO</p>
//           <p className='pt-2 text-base tracking-widest md:text-xl lg:text-2xl'>WEB DEVELOPMENT</p>
//           <span className='mt-4 mb-6 w-[5%] rounded-2xl border-3 border-[var(--light-pink)]'></span>
//           <p className='text-sm'>
//             I believe great software is more than code — <b>it’s an experience shaped with care</b>.
//           </p>
//           <p className='text-sm'>From frontend polish to backend logic, I build with clarity and purpose.</p>
//         </div>

//         <div className='relative basis-1/2 flex h-[100%] justify-end items-end w-full'>
//           {/* <DotPattern
//             size={5}
//             direction={isMobile() ? 0 : 90}
//             row1Color='var(--purple)'
//             row2Color='var(--dark-purple)'
//             classes={`absolute ${isMobile() ? `top-[5%] right-[5%]` : `top-[15%] right-0`}`}
//           /> */}
//           {/* <DotPattern
//             size={5}
//             direction={90}
//             row1Color='var(--purple)'
//             row2Color='var(--dark-purple)'
//             classes='bottom-[5%] right-[20%]'
//           /> */}
//           {/* <Shape type='triangle' size={isMobile() ? 30 : 40} direction={-45} classes='absolute left-[25%] lg:left-[10%]' />
//           <Shape type='triangle' size={isMobile() ? 30 : 40} direction={45} classes='absolute bottom-[40%] left-[25%] lg:left-[10%]' />
//           <Shape type='triangle' size={isMobile() ? 30 : 40} direction={-60} classes='absolute bottom-[15%] left-[10%] lg:left-[-15%]' />
//           <Shape type='triangle' size={device === 'mobile' ? 120 : 150} classes='absolute z-20 right-[-7%] bottom-[65%] sm:bottom-[55%]' direction={0} />
//           <Shape type='circle' size={isMobile() ? 100 : 180} classes='absolute z-20 right-[22%]' />
//           <div className='linearGradient z-0 h-[75%] w-[45%] sm:h-[65%] mb-1'>
//             <div className='m-7 sm:m-8 h-full bg-white' />
//           </div> */}
//           {/* <BackIcon /> */}
//           </div>
//           <Parallax speed={10}>
//           <Image className='absolute bottom-0' src={BackIcon} alt="Logo" width={700} height={700} />
// </Parallax>
//       </div>
//     </section>
//   )
// }

const HomeSection: React.FC<HomeProps> = () => {
  const device: DeviceType = useDeviceType()
  const isMobile = () => device === 'mobile'
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // ✅ Safe: runs only in browser
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => setIsDarkMode(event.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const socialMedia = () => {
    return (
      <div className='flex flex-col space-y-6'>
        <a
          href='https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b'
          className='text-gray-600 hover:text-blue-500'
        >
          <FaLinkedin color='var(--secondary)' className='h-6 w-6' />
        </a>
        <a href='https://github.com/soundarganesh' className='text-gray-600 hover:text-blue-500'>
          <FaGithub color='var(--secondary)' className='h-6 w-6' />
        </a>
        <a href='mailto:soundar.ganesh@gmail.com' className='text-gray-600 hover:text-blue-500'>
          <FaMailBulk color='var(--secondary)' className='h-6 w-6' />
        </a>
      </div>
    )
  }
  return (
    <section className='h-screen w-full'>
      <div className='flex h-screen w-full divide-x-2 divide-[var(--primary-grey)]'>
        <div className='flex basis-[55%] flex-col'>
          <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'>
            <p className='mr-[20%] ml-[15%] flex h-full items-center border-x-2 border-[var(--primary-grey)] text-sm font-semibold tracking-wider text-[var(--secondary-grey)]'>
              <span className='text-var(--secondary) flex items-center justify-center pl-[10%] text-center text-4xl'>
                *
              </span>
              &nbsp;GANESH PANDIAN
            </p>
          </div>

          {/* <div className={`bg-opacity-10 relative basis-[70%] ${isDarkMode ? `bg-[url(/bg4.jpg)]` : `bg-[url(/bg1.jpg)]`}  bg-cover`}> */}
          <div className={`bg-opacity-10 relative basis-[70%] bg-[url(/bg1.jpg)] bg-cover dark:bg-[url(/bg4.jpg)]`}>
            <div className='absolute inset-0 bg-black/70 dark:bg-white/70' />
            <div className='relative z-20 flex h-full'>
              <div className='flex basis-[15%] items-end justify-center pb-[10%]'>{socialMedia()}</div>
              <div className='flex basis-[65%] flex-col justify-between border-x-2 border-[var(--primary-grey)]'>
                <span className='mt-[10%] border-l-6 border-[var(--golden)] px-[10%]'>
                  <p className='text-lg font-semibold text-[var(--secondary-grey)]'>EXPERIENCE</p>
                  <p className='text-4xl font-bold'>{getYearsOfExperience()}+</p>
                </span>
                <span className='mb-[10%] px-[10%] text-8xl'>01.</span>
              </div>
              <div className='basis-[20%]'></div>
            </div>
          </div>
          <div className='flex basis-[15%] border-t-2 border-[var(--primary-grey)]'>
            <div className='basis-[15%]' />
            <div className='flex h-full basis-[65%] items-center border-x-2 border-[var(--primary-grey)] text-xs text-[var(--secondary-grey)]'>
              <p className='pl-[10%] font-semibold tracking-wide'>
                EVERY GREAT DESIGN BEGINS WITH AN EVEN BETTER STORY.
              </p>
            </div>
            <div className='flex basis-[20%] items-center justify-center font-semibold text-[var(--secondary-grey)]'>
              |&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
            </div>
          </div>
        </div>
        <div className='flex basis-[45%] flex-col'>
          <div className='basis-[15%] border-b-2 border-[var(--primary-grey)]'></div>
          <div className='flex basis-[70%] flex-col items-end justify-center gap-6 p-[10%] pr-[15%] text-end'>
            <span className='text-4xl font-bold tracking-widest'>
              <p>WEB</p>
              <p>DEVELOPER</p>
            </span>
            <p className='text-xl text-[var(--secondary-grey)]'>
              From brackets to brilliance — building smarter web apps.
            </p>
            <div className='mt-8 cursor-pointer rounded-2xl bg-[var(--golden)] px-12 py-2 font-semibold tracking-wider'>
              KNOW MORE
            </div>
          </div>
          <div className='basis-[15%] border-t-2 border-[var(--primary-grey)]'></div>
        </div>
      </div>
    </section>
  )
}
export default HomeSection

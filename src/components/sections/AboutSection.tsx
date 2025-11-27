'use client'
import { experienceList } from '@/src/lib/mock'
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType'
import { getYearsOfExperience } from '@/src/lib/utils'
import React from 'react'

interface AboutProps {}

const AboutSection: React.FC<AboutProps> = () => {
  const device: DeviceType = useDeviceType()
  const isMobile = () => device === 'mobile'

  const downloadFile = (type?: string) => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Ganesh_Pandian_Resume.pdf'
    link.click()
  }

  return (
    <section className='relative h-screen pt-[10%] sm:pt-[7%]'>
      <p className='px-[5%] text-4xl font-bold'>About Me</p>
      <div className='flex'>
        <div className='flex flex-col gap-6 py-6 sm:w-1/2'>
          <p className='cus-text-align'>
            Senior Software Engineer with {getYearsOfExperience()}+ years of experience in building scalable,
            user-centric web applications using Next.js/React.js and the MERN stack. Skilled in full-stack development,
            UI architecture, micro-frontends, and integrating GenAI, LLM APIs, and Python (FastAPI). Strong background
            in FinTech security, ADA compliance, and leading high-performance engineering teams.
          </p>
          <div className='cus-text-align mr-[10%] bg-[#dbe5da] py-4'>
            <p className='text-xl font-bold'>EXPERIENCE</p>
            <div className='flex flex-col gap-2 p-4'>
              {experienceList &&
                experienceList.map((exp, index) => (
                  <div className='flex items-center gap-4'>
                    <p className='text-xl font-semibold'>0{index + 1}</p>
                    <div>
                      <p>
                        {exp?.name}, {exp?.location}
                      </p>
                      <p>{exp?.year}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {!isMobile() && (
          <div>
            <p>Quote</p>
          </div>
        )}
      </div>
      {isMobile() && (
        <div className='font-secondary text-md flex items-center justify-center font-bold'>
          <span
            className='flex h-[7rem] w-[7rem] items-center bg-[var(--pink)] text-center'
            onClick={() => downloadFile()}
          >
            Download Resume
          </span>
          <span className='flex h-[7rem] w-[7rem] items-center bg-[var(--yellow-2)] text-center'>
            Download Cover Letter
          </span>
        </div>
      )}
    </section>
  )
}

export default AboutSection

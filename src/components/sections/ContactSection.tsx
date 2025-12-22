'use client';
import { experienceList } from '@/src/lib/constants';
import { DeviceType, useDeviceType } from '@/src/lib/useDeviceType';
import { getYearsOfExperience } from '@/src/lib/utils';
import React from 'react';
import { BorderWrapper } from '../common/BorderWrapper';
import SwipeToAction from '../common/SwipeToAction';
import Link from "next/link";

interface ContactProps {}

const ContactSection: React.FC<ContactProps> = () => {
  const device: DeviceType = useDeviceType();
  const isMobile = device === 'mobile';

  return (
    <section id='contact' className='relative h-4/5 md:h-full w-full pt-[20%] md:pt-0'>
      <p className='absolute z-50 text-8xl text-[var(--primary-grey)] md:pl-[11%]'>04.</p>
    <BorderWrapper class='left-[10%] h-full' />
    <div className='flex h-full w-full flex-col'>
        <div className='flex items-center justify-center py-[10%] md:py-[3%] pr-[10%] pl-[15%] text-2xl font-bold tracking-wider border-b-2 border-[var(--primary-grey)]'>
          <p>LET'S CONNECT</p>
        </div>
        <div className='flex h-full items-center justify-center p-[10%] pl-[15%] md:py-[5%] md:pl-[20%] text-center text-base tracking-wide text-[var(--secondary-grey)] md:text-lg'>
            <div>Explore . Create . Inspire Together !  <Link href='mailto:soundar.ganesh@gmail.com?subject=Hello&body=Hi%20Ganesh' className='text-[var(--golden)]'>soundar.ganesh@gmail.com</Link></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

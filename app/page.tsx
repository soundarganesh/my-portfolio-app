import AboutSection from '@/src/components/sections/AboutSection';
import HomeSection from '@/src/components/sections/HomeSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen w-full md:w-[93%]'>
      <HomeSection />
      <AboutSection />
    </div>
  );
}

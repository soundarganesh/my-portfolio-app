import AboutSection from '@/src/components/sections/AboutSection';
import HomeSection from '@/src/components/sections/HomeSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mt-[20%] h-9/10 w-full md:m-0 md:h-screen md:w-[93%]'>
      <HomeSection />
      <AboutSection />
    </div>
  );
}

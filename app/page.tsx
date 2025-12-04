import AboutSection from '@/src/components/sections/AboutSection';
import HomeSection from '@/src/components/sections/HomeSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <HomeSection />
      <AboutSection />
    </main>
  );
}

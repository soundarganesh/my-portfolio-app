import AboutSection from '../src/components/sections/AboutSection';
import ContactSection from '../src/components/sections/ContactSection';
import HomeSection from '../src/components/sections/HomeSection';
import WorkSection from '../src/components/sections/WorkSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen w-full md:w-[93%]'>
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

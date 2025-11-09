// app/page.tsx

import AboutSection from "@/src/components/sections/AboutSection";
import HomeSection from "@/src/components/sections/HomeSection";

// import { Chatbot } from '@/components/features/Chatbot';

// Placeholder imports for your portfolio sections
// import { WorksSection } from '@/components/sections/WorksSection';
// import { ContactSection } from '@/components/sections/ContactSection';
// import { Footer } from '@/components/layout/Footer';

// Define placeholder components for structural completeness
// These should eventually be replaced by your actual component files.
const PlaceholderSection = ({ title, children, id }: { title: string, children?: React.ReactNode, id: string }) => (
    <section id={id} className="py-24 md:py-32 min-h-screen container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 border-l-4 border-indigo-500 pl-4">{title}</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-96 flex items-center justify-center text-gray-500">
            {children ? children : <p>Content for the {title} section goes here.</p>}
        </div>
    </section>
);


export default function Home() {
  return (
    <>
      <main>
        {/* CRITICAL: Each section is wrapped with an 'id' that matches the Header's hrefs (e.g., #home) */}
        
        <PlaceholderSection id="home" title="H">
            <HomeSection />
        </PlaceholderSection>

        <PlaceholderSection id="about" title="About Me & Expertise">
            <AboutSection />
        </PlaceholderSection>

        <PlaceholderSection id="works" title="My Projects & Portfolio">
            {/* <WorksSection /> */}
        </PlaceholderSection>

        <PlaceholderSection id="contact" title="Get in Touch">
            {/* <ContactSection /> */}
        </PlaceholderSection>

      </main>
      
      {/* The Chatbot feature can be a fixed element on the page */}
      {/* <Chatbot /> */} 
      
      {/* <Footer /> */}
    </>
  );
}
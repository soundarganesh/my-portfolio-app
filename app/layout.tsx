'use client';
import type { Metadata } from 'next';
import { LXGW_WenKai_TC, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Layout/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

// Load the fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

const lubrifont = LXGW_WenKai_TC({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: '400',
  display: 'swap',
});

// export const metadata: Metadata = {
//   title: 'Ganesh Pandian',
//   description: 'Portfolio application',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${montserrat.variable} ${lubrifont.variable} scroll-smooth`}>
      <body>
        <ParallaxProvider>
          <Header />
          <main className='mt-[20%] h-[90%] w-full md:m-0 md:h-screen md:w-[90%]'>{children}</main>
        </ParallaxProvider>
      </body>
    </html>
  );
}

'use client';
import type { Metadata } from 'next';
import { LXGW_WenKai_TC, Montserrat } from 'next/font/google';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Layout/Header';
import { ParallaxProvider } from 'react-scroll-parallax';

// Load the fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

// Configure Inter font
const inter = Inter({
  subsets: ['latin'], // choose subsets you need
  variable: '--font-inter', // optional: CSS variable
});

// Configure Manrope
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
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
    <html lang='en' className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body>
        <ParallaxProvider>
          <Header />
          <main className='min-h-screen w-full'>{children}</main>
        </ParallaxProvider>
      </body>
    </html>
  );
}

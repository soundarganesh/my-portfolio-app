import type { Metadata } from 'next'
import { LXGW_WenKai_TC, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Layout/Header'

// Load the fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

const lubrifont = LXGW_WenKai_TC({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ganesh Pandian',
  description: 'Portfolio application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${montserrat.variable} ${lubrifont.variable} scroll-smooth`}>
      <body>
        <Header />
        <main className=''>{children}</main>
      </body>
    </html>
  )
}

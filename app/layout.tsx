import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import NavBar from '@/components/main/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmeds Portifolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black overflow-y-scroll overflow-x-hidden mx-auto`}
      >
      <StarsCanvas/>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}

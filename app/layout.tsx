import './globals.css'

import Navbar from '@/component/navbar'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alone Through The Flames'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

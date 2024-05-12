import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// eslint-disable-next-line no-restricted-imports
import './globals.css'
import StoreProvider from '@/utils/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'Track your job listings and applications',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// eslint-disable-next-line no-restricted-imports
import './globals.css'

import StoreProvider from '@/utils/StoreProvider'
import { Toaster } from '@/components/ui/sonner'
import { NavigationAside } from '@/components/Navigation/NavigationAside'
import { TooltipProvider } from '@/components/ui/tooltip'

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
        <body className={inter.className}>
          <TooltipProvider>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
              <NavigationAside />
              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">{children}</div>
            </div>
          </TooltipProvider>
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  )
}

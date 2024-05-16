import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// eslint-disable-next-line no-restricted-imports
import './globals.css'

import StoreProvider from '@/utils/StoreProvider'
import { Toaster } from '@/components/ui/sonner'
import { NavigationAside } from '@/components/Navigation/NavigationAside'
import { NavigationHeader } from '@/components/Navigation/NavigationHeader'
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
              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <NavigationHeader />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                  {children}
                </main>
              </div>
            </div>
          </TooltipProvider>
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  )
}

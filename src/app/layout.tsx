import './globals.css'

import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/site-header'
import { ShoppingCartProvider } from '@/components/shopping-cart'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.className,
        )}
      >
        <div className="container relative flex min-h-screen flex-col">
          <ShoppingCartProvider>
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Toaster />
          </ShoppingCartProvider>
        </div>
      </body>
    </html>
  )
}

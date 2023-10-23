import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/app/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Resume Creator',
  description: 'Looking for a job is complicated but it shouldn\'t be',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body className='h-screen bg-gray-50 dark:bg-gray-900'>{children}</body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  )
}
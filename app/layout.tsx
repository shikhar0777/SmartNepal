import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Q-SMART-E',
  description: 'Created by Tyler AKA Ashok',
  generator: 'Tyler',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

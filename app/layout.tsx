import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Solutions Pro - Scale Your Business with AI Automation',
  description: 'Transform your business with AI Voice Agents, Lead Generation AI, and Process Automation. Book your free strategy call today.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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

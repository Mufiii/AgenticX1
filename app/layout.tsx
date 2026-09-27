import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgenticX — Human-centred transformation',
  description: 'Human intelligence, augmented responsibly. AgenticX equips people and organizations to thrive in the Agentic and AGI era.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/x.png', type: 'image/png' }],
    shortcut: '/x.png',
    apple: '/x.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020205',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

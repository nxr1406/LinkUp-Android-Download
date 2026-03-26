import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Download LinkUp - Secure Chat App',
  description: 'Download LinkUp Chat App. Fast, Secure Messaging with Typing Indicator and Instagram-style UI.',
  keywords: ['LinkUp', 'Chat App', 'Messaging App', 'Android Chat', 'Download LinkUp'],
  authors: [{ name: 'LinkUp Inc.' }],
  creator: 'LinkUp Inc.',
  publisher: 'LinkUp Inc.',
  applicationName: 'LinkUp',
  generator: 'Next.js',
  openGraph: {
    title: 'Download LinkUp - Secure Chat App',
    description: 'Download LinkUp Chat App. Fast, Secure Messaging with Typing Indicator and Instagram-style UI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LinkUp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download LinkUp - Secure Chat App',
    description: 'Download LinkUp Chat App. Fast, Secure Messaging with Typing Indicator and Instagram-style UI.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0095F6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

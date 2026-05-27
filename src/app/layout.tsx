import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noctky — Universe',
  description: 'High School Student · Web Developer · AI Enthusiast · Prompt Engineer. Crafting cinematic digital experiences from another dimension.',
  keywords: ['Noctky', 'Web Developer', 'Portfolio', 'WebGL', 'Creative Developer', 'AI Enthusiast'],
  authors: [{ name: 'Noctky' }],
  creator: 'Noctky',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noctky.vercel.app',
    title: 'Noctky Universe',
    description: 'Cinematic dimensional portfolio experience. Web Developer · AI Enthusiast · Prompt Engineer.',
    siteName: 'Noctky Universe',
    images: [
      {
        url: '/images/noctky-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Noctky Universe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noctky Universe',
    description: 'Cinematic dimensional portfolio experience. Web Developer · AI Enthusiast · Prompt Engineer.',
    images: ['/images/noctky-logo.jpeg'],
  },
  icons: {
    icon: '/images/noctky-logo.jpeg',
    apple: '/images/noctky-logo.jpeg',
  },
  metadataBase: new URL('https://noctky.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

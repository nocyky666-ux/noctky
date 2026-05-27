import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Noctky — Developer Portfolio',
  description: 'High school student building modern websites and exploring AI. Web development explorer, prompt engineer, and creative developer.',
  keywords: 'Noctky, web developer, portfolio, React, Next.js, AI, frontend',
  openGraph: {
    title: 'Noctky — Developer Portfolio',
    description: 'High school student building modern websites and exploring AI.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

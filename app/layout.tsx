import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getUser } from '@/lib/supabase/server'
import './globals.css'

export const metadata: Metadata = {
  title: 'nanoart - AI Image Generator',
  description: 'Create stunning AI-powered images with nanoart, powered by Google Nano Banana technology',
  keywords: ['AI image generator', 'text to image', 'image editing', 'artificial intelligence', 'Google Nano Banana', 'nanoart'],
  authors: [{ name: 'nanoart Team' }],
  creator: 'nanoart',
  publisher: 'nanoart',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nanoart.app'),
  alternates: {
    canonical: 'https://nanoart.app',
  },
  openGraph: {
    title: 'nanoart - AI Image Generator',
    description: 'Create stunning AI-powered images with nanoart, powered by Google Nano Banana technology',
    url: 'https://nanoart.app',
    siteName: 'nanoart',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'nanoart - AI Image Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nanoart - AI Image Generator',
    description: 'Create stunning AI-powered images with nanoart, powered by Google Nano Banana technology',
    images: ['/og-image.png'],
    creator: '@nanoart',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()
  
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header user={user} />
        <main className="pt-[73px] min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { AppProviders } from '@/components/providers/app-providers';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://artificialartz.com'),
  title: {
    default: 'ArtificialArtz | AI Tools & Creative Services',
    template: '%s | ArtificialArtz',
  },
  description:
    'A creative automation studio delivering AI-native experiences, growth-ready tooling, and immersive storytelling for creators and brands.',
  keywords: [
    'AI tools',
    'creative services',
    'automation',
    'content generation',
    'hooks generator',
    'YouTube ideas',
    'blog outline',
    'social captions',
    'SEO tools',
    'color palette',
  ],
  authors: [{ name: 'ArtificialArtz' }],
  creator: 'ArtificialArtz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'ArtificialArtz | AI Tools & Creative Services',
    description:
      'A creative automation studio delivering AI-native experiences, growth-ready tooling, and immersive storytelling.',
    siteName: 'ArtificialArtz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArtificialArtz | AI Tools & Creative Services',
    description:
      'A creative automation studio delivering AI-native experiences, growth-ready tooling, and immersive storytelling.',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}

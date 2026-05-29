import type { Metadata } from 'next';

const title = 'Sean Walter | Project Showcase';
const description =
  'AI Developer and Indie Maker portfolio showcasing desktop apps, web projects, and AI tools.';

export const metadata: Metadata = {
  metadataBase: new URL('https://projects.seanwalter.top'),
  title,
  description,
  keywords: [
    'Sean Walter',
    'AI Developer',
    'Indie Maker',
    'Portfolio',
    'Projects',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Sean Walter' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://projects.seanwalter.top',
    siteName: 'Sean Walter Projects',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sean Walter Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

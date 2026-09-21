import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import BrevoScripts from '@/components/BrevoScripts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://udenusa.dk'),
  title: 'UdenUSA - Find alternativer til amerikanske produkter',
  description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden. Støtter du Trump, når du handler?',
  keywords: 'UdenUSA, amerikanske produkter, boykot, danske alternativer, produkt scanner, app',
  authors: [{ name: 'UdenUSA' }],
  // Applies to "/" only. Every other route overrides this in its own
  // layout/page metadata — a new route without an override would wrongly
  // canonicalise to the homepage.
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description: 'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
  },
  // max-snippet:-1 lets AI answer engines quote the page at any length;
  // max-image-preview:large allows full-size image previews.
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <BrevoScripts />
        <Analytics />
      </body>
    </html>
  );
}

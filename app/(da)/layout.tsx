import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import { DANISH_ORIGIN } from '@/lib/i18n';
import '../globals.css';

/**
 * Root layout for the Danish site on udenusa.dk. The international locales are
 * served from nonusa.org and have their own root layout, because <html lang>
 * has to be correct in the server HTML.
 *
 * Nothing here sets a canonical: every page declares its own, so a new route
 * added without one fails loudly rather than silently claiming to be the
 * homepage.
 */
export const metadata: Metadata = {
  metadataBase: new URL(DANISH_ORIGIN),
  title: 'UdenUSA - Find alternativer til amerikanske produkter',
  description:
    'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden. Støtter du Trump, når du handler?',
  keywords:
    'UdenUSA, amerikanske produkter, boykot, danske alternativer, produkt scanner, app',
  authors: [{ name: 'UdenUSA' }],
  openGraph: {
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description:
      'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
    type: 'website',
    locale: 'da_DK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UdenUSA - Find alternativer til amerikanske produkter',
    description:
      'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
    images: ['/images/UdenUSAtransparent.png'],
  },
  // max-snippet:-1 lets AI answer engines quote the page at any length;
  // max-image-preview:large allows full-size image previews.
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

export default function DanishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="da">{children}</SiteShell>;
}

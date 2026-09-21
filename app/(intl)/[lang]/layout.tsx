import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import { INTERNATIONAL_LOCALES, INTERNATIONAL_ORIGIN } from '@/lib/i18n';
import type { Language } from '@/lib/translations';
import '../../globals.css';

/**
 * Root layout for the international locales on nonusa.org.
 *
 * udenusa.dk is a ccTLD, which Google geotargets to Denmark with no opt-out, so
 * the non-Danish locales live on the .org domain instead. Danish is served by
 * the sibling (da) root layout and is deliberately absent from the params below.
 */

// Unknown or unexpected prefixes 404 instead of rendering a locale we do not
// have translations for.
export const dynamicParams = false;

export function generateStaticParams() {
  return INTERNATIONAL_LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(INTERNATIONAL_ORIGIN),
  authors: [{ name: 'UdenUSA' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

export default async function InternationalRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <SiteShell lang={lang as Language}>{children}</SiteShell>;
}

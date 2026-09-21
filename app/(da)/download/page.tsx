import type { Metadata } from 'next';
import DownloadPage from '@/components/DownloadPage';
import { alternatesFor, OG_LOCALES, urlFor } from '@/lib/i18n';
import { translations } from '@/lib/translations';

const t = translations.da;

export const metadata: Metadata = {
  title: t.downloadMetaTitle,
  description: t.downloadMetaDescription,
  alternates: alternatesFor('da', '/download/'),
  openGraph: {
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    images: ['/images/UdenUSAtransparent.png'],
    url: urlFor('da', '/download/'),
    type: 'website',
    locale: OG_LOCALES.da,
  },
  twitter: {
    card: 'summary_large_image',
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    images: ['/images/UdenUSAtransparent.png'],
  },
};

export default function Page() {
  return <DownloadPage />;
}

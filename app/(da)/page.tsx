import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { alternatesFor, OG_LOCALES, urlFor } from '@/lib/i18n';
import { translations } from '@/lib/translations';

const t = translations.da;

export const metadata: Metadata = {
  title: t.pageTitle,
  description: t.description,
  alternates: alternatesFor('da', '/'),
  openGraph: {
    title: t.pageTitle,
    description: t.description,
    images: ['/images/UdenUSAtransparent.png'],
    url: urlFor('da', '/'),
    type: 'website',
    locale: OG_LOCALES.da,
  },
};

export default function Page() {
  return <HomePage />;
}

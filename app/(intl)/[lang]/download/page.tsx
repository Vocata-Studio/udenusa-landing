import type { Metadata } from 'next';
import DownloadPage from '@/components/DownloadPage';
import { alternatesFor, OG_LOCALES, urlFor } from '@/lib/i18n';
import { translations, type Language } from '@/lib/translations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Language;
  const t = translations[locale];

  return {
    title: t.downloadMetaTitle,
    description: t.downloadMetaDescription,
    alternates: alternatesFor(locale, '/download/'),
    openGraph: {
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
      images: ['/images/UdenUSAtransparent.png'],
      url: urlFor(locale, '/download/'),
      type: 'website',
      locale: OG_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.downloadMetaTitle,
      description: t.downloadMetaDescription,
      images: ['/images/UdenUSAtransparent.png'],
    },
  };
}

export default function Page() {
  return <DownloadPage />;
}

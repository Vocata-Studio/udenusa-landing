import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
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
    title: t.pageTitle,
    description: t.description,
    alternates: alternatesFor(locale, '/'),
    openGraph: {
      title: t.pageTitle,
      description: t.description,
      images: ['/images/UdenUSAtransparent.png'],
      url: urlFor(locale, '/'),
      type: 'website',
      locale: OG_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.pageTitle,
      description: t.description,
      images: ['/images/UdenUSAtransparent.png'],
    },
  };
}

export default function Page() {
  return <HomePage />;
}

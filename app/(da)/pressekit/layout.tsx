import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressekit – UdenUSA',
  description: 'Logoer, skærmbilleder, nøgletal og pressekontakt for UdenUSA.',
  alternates: {
    canonical: '/pressekit/',
  },
  openGraph: {
    title: 'Pressekit – UdenUSA',
    description: 'Logoer, skærmbilleder, nøgletal og pressekontakt for UdenUSA.',
    images: ['/images/UdenUSAtransparent.png'],
    url: '/pressekit/',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

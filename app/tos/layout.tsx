import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brugsbetingelser – UdenUSA',
  description: 'Vilkår og betingelser for brug af UdenUSA-appen og hjemmesiden.',
  alternates: {
    canonical: '/tos/',
  },
  openGraph: {
    title: 'Brugsbetingelser – UdenUSA',
    description: 'Vilkår og betingelser for brug af UdenUSA-appen og hjemmesiden.',
    images: ['/images/UdenUSAtransparent.png'],
    url: '/tos/',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

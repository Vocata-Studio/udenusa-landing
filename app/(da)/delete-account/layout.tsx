import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slet konto – UdenUSA',
  description: 'Sådan sletter du din UdenUSA-konto og dine data permanent.',
  alternates: {
    canonical: '/delete-account/',
  },
  openGraph: {
    title: 'Slet konto – UdenUSA',
    description: 'Sådan sletter du din UdenUSA-konto og dine data permanent.',
    images: ['/images/UdenUSAtransparent.png'],
    url: '/delete-account/',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

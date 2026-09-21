import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privatlivspolitik – UdenUSA',
  description: 'Sådan behandler UdenUSA dine data. Læs vores privatlivspolitik.',
  alternates: {
    canonical: '/privacy/',
  },
  openGraph: {
    title: 'Privatlivspolitik – UdenUSA',
    description: 'Sådan behandler UdenUSA dine data. Læs vores privatlivspolitik.',
    images: ['/images/UdenUSAtransparent.png'],
    url: '/privacy/',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

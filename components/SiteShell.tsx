import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/lib/LanguageContext';
import BrevoScripts from '@/components/BrevoScripts';
import LanguageBanner from '@/components/LanguageBanner';
import type { Language } from '@/lib/translations';

const inter = Inter({ subsets: ['latin'] });

/**
 * The document shell, shared by both root layouts.
 *
 * Danish and the international locales are served from different domains and
 * therefore need separate root layouts (each renders its own <html lang>).
 * Everything below that difference lives here so the two trees cannot drift.
 */
export default function SiteShell({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider lang={lang}>
          <LanguageBanner />
          {children}
        </LanguageProvider>
        <BrevoScripts />
        <Analytics />
      </body>
    </html>
  );
}

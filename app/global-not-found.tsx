import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  DANISH_LOCALE,
  INTERNATIONAL_LOCALES,
  LOCALES,
  urlFor,
  X_DEFAULT_LOCALE,
} from '@/lib/i18n';
import { translations } from '@/lib/translations';
import CopyContact from '@/components/CopyContact';
import { CONTACT_EMAIL } from '@/lib/contact';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * The 404 for every URL that matches no route, on either domain.
 *
 * Danish and the international locales have separate root layouts, so there is
 * no single layout a not-found.tsx could compose a 404 from; this file renders
 * its own document instead (Next's global-not-found convention). It is also
 * prerendered once and served statically, so it cannot know at render time
 * which domain or locale the visitor came from. Every locale's copy is in the
 * HTML, and a tiny inline script picks one from the URL and the browser's own
 * language before first paint by setting <html lang>, which the stylesheet
 * keys on. Without scripting the page stays in English, the site's x-default.
 */

export const metadata: Metadata = {
  title: '404 – UdenUSA',
  description: 'The page you are looking for does not exist.',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

// Runs in <head>, before the body is parsed, so the right copy is visible on
// first paint. A locale prefix in the path wins, then the visitor's own browser
// languages, and only then the domain — Danish on udenusa.dk, the x-default
// everywhere else.
//
// Choosing on browser language is safe on this page specifically: the 404 is
// noindex, so there is no crawler to mislead. The indexable pages must not do
// this — see LanguageBanner for why they offer a language instead of switching
// to it. A link shared across a border lands on the wrong domain more often
// than not, and the 404 is exactly where that shows up.
const pickLocale = `(function(){try{var L=${JSON.stringify(LOCALES)};var m=location.pathname.match(/^\\/(${INTERNATIONAL_LOCALES.join('|')})(\\/|$)/);var l=m&&m[1];if(!l){var c=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''];for(var i=0;i<c.length&&!l;i++){var t=String(c[i]).toLowerCase().split('-')[0];if(L.indexOf(t)>-1)l=t;}}if(!l)l=/udenusa/.test(location.hostname)?'${DANISH_LOCALE}':'${X_DEFAULT_LOCALE}';document.documentElement.lang=l;}catch(e){}})();`;

export default function GlobalNotFound() {
  return (
    // The script above changes lang before React hydrates, so the attribute
    // it sees on the client legitimately differs from the server HTML.
    <html lang={X_DEFAULT_LOCALE} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: pickLocale }} />
      </head>
      <body className={inter.className}>
        <main className="not-found">
          <span className="not-found-mark">
            <Image
              src="/images/UdenUSAtransparent.png"
              alt="UdenUSA"
              width={72}
              height={72}
              className="not-found-logo"
              priority
            />
          </span>
          <p className="not-found-code" aria-hidden="true">
            404
          </p>

          {LOCALES.map((locale) => {
            const t = translations[locale];
            return (
              <div
                key={locale}
                className="not-found-copy-block"
                data-lang={locale}
              >
                <h1>{t.notFoundTitle}</h1>
                <p className="not-found-copy">{t.notFoundBody}</p>
                {/* Absolute: the picked locale's homepage is often on the
                    other domain, and a relative /en/ would bounce through a
                    cross-origin redirect to get there. */}
                <a href={urlFor(locale, '/')} className="cta">
                  {t.notFoundCta}
                </a>
                <p className="not-found-note">
                  {t.notFoundMistake} {t.notFoundNote}{' '}
                  <CopyContact
                    value={CONTACT_EMAIL}
                    copyLabel={t.copyLabel}
                    copiedLabel={t.copiedLabel}
                  />
                </p>
              </div>
            );
          })}
        </main>
      </body>
    </html>
  );
}

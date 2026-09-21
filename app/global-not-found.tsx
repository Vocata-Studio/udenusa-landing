import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  DANISH_LOCALE,
  INTERNATIONAL_LOCALES,
  LOCALES,
  pathFor,
  X_DEFAULT_LOCALE,
} from '@/lib/i18n';
import { translations, type Language } from '@/lib/translations';
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
 * HTML, and a tiny inline script picks one from the URL before first paint by
 * setting <html lang>, which the stylesheet keys on. Without scripting the
 * page stays in English, the site's x-default.
 */

export const metadata: Metadata = {
  title: '404 – UdenUSA',
  description: 'The page you are looking for does not exist.',
  icons: {
    icon: '/images/UdenUSAtransparent.png',
  },
};

const copy: Record<
  Language,
  { title: string; body: string; cta: string; note: string; mistake: string }
> = {
  da: {
    title: 'Siden findes ikke',
    body: 'Siden er flyttet, slettet eller har aldrig eksisteret. Tjek adressen, eller gå tilbage til forsiden.',
    cta: 'Tilbage til forsiden',
    mistake: 'Tror du, det er en fejl?',
    note: 'Skriv til',
  },
  en: {
    title: 'Page not found',
    body: 'This page has moved, been removed or never existed. Check the address or head back to the homepage.',
    cta: 'Back to homepage',
    mistake: 'Think this is a mistake?',
    note: 'Email',
  },
  de: {
    title: 'Seite nicht gefunden',
    body: 'Diese Seite wurde verschoben, gelöscht oder hat nie existiert. Prüfe die Adresse oder geh zurück zur Startseite.',
    cta: 'Zur Startseite',
    mistake: 'Glaubst du, das ist ein Fehler?',
    note: 'Schreib an',
  },
  fr: {
    title: 'Page introuvable',
    body: "Cette page a été déplacée, supprimée ou n'a jamais existé. Vérifiez l'adresse ou revenez à l'accueil.",
    cta: "Retour à l'accueil",
    mistake: "Vous pensez qu'il s'agit d'une erreur ?",
    note: 'Écrivez à',
  },
  es: {
    title: 'Página no encontrada',
    body: 'Esta página se ha movido, se ha eliminado o nunca existió. Comprueba la dirección o vuelve al inicio.',
    cta: 'Volver al inicio',
    mistake: '¿Crees que es un error?',
    note: 'Escríbenos a',
  },
  nl: {
    title: 'Pagina niet gevonden',
    body: 'Deze pagina is verplaatst, verwijderd of heeft nooit bestaan. Controleer het adres of ga terug naar de homepagina.',
    cta: 'Terug naar homepagina',
    mistake: 'Denk je dat dit een fout is?',
    note: 'Mail naar',
  },
};

// Runs in <head>, before the body is parsed, so the right copy is visible on
// first paint. A locale prefix in the path wins; otherwise the Danish domain
// gets Danish and everything else gets the x-default.
const pickLocale = `(function(){try{var m=location.pathname.match(/^\\/(${INTERNATIONAL_LOCALES.join('|')})(\\/|$)/);var l=m?m[1]:/udenusa/.test(location.hostname)?'${DANISH_LOCALE}':'${X_DEFAULT_LOCALE}';document.documentElement.lang=l;}catch(e){}})();`;

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
            const t = copy[locale];
            return (
              <div
                key={locale}
                className="not-found-copy-block"
                data-lang={locale}
              >
                <h1>{t.title}</h1>
                <p className="not-found-copy">{t.body}</p>
                <a href={pathFor(locale, '/')} className="cta">
                  {t.cta}
                </a>
                <p className="not-found-note">
                  {t.mistake} {t.note}{' '}
                  <CopyContact
                    value={CONTACT_EMAIL}
                    copyLabel={translations[locale].copyLabel}
                    copiedLabel={translations[locale].copiedLabel}
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

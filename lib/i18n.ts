import type { Language } from './translations';

/**
 * Single source of truth for "which locale lives at which URL".
 *
 * Canonicals, hreflang alternates and the sitemap are all derived from the
 * helpers below, so they cannot drift apart. This matters more than usual here
 * because the locales are split across two domains: if the reciprocal hreflang
 * set is inconsistent, Google discards the whole cluster silently.
 */

export const DANISH_ORIGIN = 'https://udenusa.dk';
export const INTERNATIONAL_ORIGIN = 'https://nonusa.org';

/**
 * udenusa.dk is a ccTLD, which Google hard-geotargets to Denmark with no way to
 * opt out. Danish therefore stays on the .dk domain and every other locale
 * lives on the .org, which carries no geographic signal.
 */
export const DANISH_LOCALE: Language = 'da';
export const INTERNATIONAL_LOCALES: Language[] = ['en', 'de', 'fr', 'es', 'nl'];
export const LOCALES: Language[] = [DANISH_LOCALE, ...INTERNATIONAL_LOCALES];

/** The locale an AI or search engine should be shown when none of the others match. */
export const X_DEFAULT_LOCALE: Language = 'en';

/**
 * Routes that exist in every locale. Only the homepage is fully translated
 * today — the legal pages and the press kit are Danish documents with a few
 * translated chrome strings, so publishing locale variants of them would point
 * hreflang at language-mismatched content. Add a path here once its copy is
 * genuinely translated.
 */
export const LOCALIZED_ROUTES = ['/', '/download/'] as const;

/** Routes that exist only in Danish, on the .dk domain. */
export const DANISH_ONLY_ROUTES = [
  '/pressekit/',
  '/privacy/',
  '/tos/',
  '/delete-account/',
] as const;

export function originFor(locale: Language): string {
  return locale === DANISH_LOCALE ? DANISH_ORIGIN : INTERNATIONAL_ORIGIN;
}

/**
 * Danish sits at the root of udenusa.dk so that every link, QR code and store
 * listing already in the wild keeps resolving. The international locales are
 * uniformly prefixed on nonusa.org — including English — because a uniform
 * shape removes the "is this a locale or a page?" ambiguity from routing.
 */
export function prefixFor(locale: Language): string {
  return locale === DANISH_LOCALE ? '' : `/${locale}`;
}

/** Path on that locale's own origin, e.g. ('de', '/') -> '/de/'. */
export function pathFor(locale: Language, route: string): string {
  const prefix = prefixFor(locale);
  if (!prefix) return route;
  return route === '/' ? `${prefix}/` : `${prefix}${route}`;
}

/** Absolute URL, e.g. ('de', '/') -> 'https://nonusa.org/de/'. */
export function urlFor(locale: Language, route: string): string {
  return `${originFor(locale)}${pathFor(locale, route)}`;
}

/**
 * The hreflang map for a route, in the shape Next's Metadata API expects.
 * Every locale is listed on every page including itself — hreflang sets must be
 * reciprocal and self-referencing or they are ignored.
 */
export function languageAlternates(route: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of LOCALES) {
    alternates[locale] = urlFor(locale, route);
  }
  alternates['x-default'] = urlFor(X_DEFAULT_LOCALE, route);
  return alternates;
}

/** Canonical + hreflang for a localized route, ready to spread into `metadata`. */
export function alternatesFor(locale: Language, route: string) {
  return {
    canonical: urlFor(locale, route),
    languages: languageAlternates(route),
  };
}

/** og:locale wants a full territory code, not a bare language tag. */
export const OG_LOCALES: Record<Language, string> = {
  da: 'da_DK',
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  nl: 'nl_NL',
};

/**
 * The canonical route behind a pathname, with any locale prefix stripped, or
 * null when that route exists in Danish only. Used by the switcher and the
 * suggestion banner to work out whether there is an equivalent page to offer.
 */
export function localizedRouteFromPath(pathname: string): string | null {
  let rest = pathname;

  for (const locale of INTERNATIONAL_LOCALES) {
    if (rest === `/${locale}` || rest.startsWith(`/${locale}/`)) {
      rest = rest.slice(locale.length + 1) || '/';
      break;
    }
  }

  const route = rest.endsWith('/') ? rest : `${rest}/`;
  return (LOCALIZED_ROUTES as readonly string[]).includes(route) ? route : null;
}

import type { MetadataRoute } from 'next';
import {
  DANISH_LOCALE,
  DANISH_ONLY_ROUTES,
  INTERNATIONAL_LOCALES,
  LOCALIZED_ROUTES,
  languageAlternates,
  urlFor,
} from '@/lib/i18n';

type SitemapRoute =
  | (typeof LOCALIZED_ROUTES)[number]
  | (typeof DANISH_ONLY_ROUTES)[number];

// The date each page's content actually last changed — not the build date, and
// not the date the file happened to move. A sitemap that claims every page
// changed on every deploy teaches Google to discount the signal entirely.
// Bump an entry only when that page's copy really changes. The Record type is
// exhaustive on purpose: adding a route in lib/i18n fails the build until it
// gets a date here.
const LAST_MODIFIED: Record<SitemapRoute, string> = {
  '/': '2026-09-21',
  '/download/': '2026-09-21',
  '/pressekit/': '2026-09-21',
  '/privacy/': '2026-01-23',
  '/tos/': '2026-01-23',
  '/delete-account/': '2026-01-14',
};

const DANISH_ONLY_PRIORITY: Record<string, number> = {
  '/download/': 0.8,
  '/pressekit/': 0.7,
  '/privacy/': 0.3,
  '/tos/': 0.3,
  '/delete-account/': 0.3,
};

/**
 * Covers both domains in one file. Google accepts a sitemap that spans hosts as
 * long as every host in it is verified in Search Console, and keeping one file
 * means the hreflang sets here cannot disagree with the ones in the page heads —
 * both are generated from lib/i18n.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of LOCALIZED_ROUTES) {
    const languages = languageAlternates(route);

    for (const locale of [DANISH_LOCALE, ...INTERNATIONAL_LOCALES]) {
      entries.push({
        url: urlFor(locale, route),
        lastModified: new Date(LAST_MODIFIED[route]),
        changeFrequency: 'weekly',
        priority: locale === DANISH_LOCALE ? 1.0 : 0.9,
        alternates: { languages },
      });
    }
  }

  for (const route of DANISH_ONLY_ROUTES) {
    entries.push({
      url: urlFor(DANISH_LOCALE, route),
      lastModified: new Date(LAST_MODIFIED[route]),
      changeFrequency: 'monthly',
      priority: DANISH_ONLY_PRIORITY[route] ?? 0.3,
    });
  }

  return entries;
}

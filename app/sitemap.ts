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

type RouteMeta = {
  /**
   * The date this page's content actually last changed — not the build date,
   * and not the date the file happened to move. A sitemap that reports every
   * page as fresh on every deploy teaches Google to discount lastmod entirely,
   * so bump one of these only when that page's copy really changes.
   */
  lastModified: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Exhaustive on purpose: adding a route in lib/i18n fails the build until it is
// described here, which is what keeps this file from drifting out of date.
const ROUTES: Record<SitemapRoute, RouteMeta> = {
  '/': { lastModified: '2026-09-21', priority: 1.0, changeFrequency: 'weekly' },
  '/download/': { lastModified: '2026-09-21', priority: 0.8, changeFrequency: 'monthly' },
  '/pressekit/': { lastModified: '2026-09-21', priority: 0.7, changeFrequency: 'monthly' },
  '/privacy/': { lastModified: '2026-01-23', priority: 0.3, changeFrequency: 'monthly' },
  '/tos/': { lastModified: '2026-01-23', priority: 0.3, changeFrequency: 'monthly' },
  '/delete-account/': { lastModified: '2026-01-14', priority: 0.3, changeFrequency: 'monthly' },
};

// Danish is the established domain, so its copy of a shared route outranks the
// international one by a notch. Kept off floating-point drift (0.8 - 0.1).
const demote = (priority: number) => Math.round((priority - 0.1) * 10) / 10;

/**
 * Covers both domains in one file. Google accepts a sitemap that spans hosts as
 * long as every host in it is verified in Search Console, and keeping one file
 * means the hreflang sets here cannot disagree with the ones in the page heads —
 * both are generated from lib/i18n.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of LOCALIZED_ROUTES) {
    const { lastModified, priority, changeFrequency } = ROUTES[route];
    const languages = languageAlternates(route);

    for (const locale of [DANISH_LOCALE, ...INTERNATIONAL_LOCALES]) {
      entries.push({
        url: urlFor(locale, route),
        lastModified: new Date(lastModified),
        changeFrequency,
        priority: locale === DANISH_LOCALE ? priority : demote(priority),
        alternates: { languages },
      });
    }
  }

  for (const route of DANISH_ONLY_ROUTES) {
    const { lastModified, priority, changeFrequency } = ROUTES[route];

    entries.push({
      url: urlFor(DANISH_LOCALE, route),
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    });
  }

  return entries;
}

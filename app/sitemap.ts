import type { MetadataRoute } from 'next';
import {
  DANISH_LOCALE,
  DANISH_ONLY_ROUTES,
  INTERNATIONAL_LOCALES,
  LOCALIZED_ROUTES,
  languageAlternates,
  urlFor,
} from '@/lib/i18n';

// Bumped whenever the page content meaningfully changes. Using the build date
// would make every deploy claim every page changed, which Google learns to ignore.
const LAST_MODIFIED = new Date('2026-09-21');

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
        lastModified: LAST_MODIFIED,
        changeFrequency: 'weekly',
        priority: locale === DANISH_LOCALE ? 1.0 : 0.9,
        alternates: { languages },
      });
    }
  }

  for (const route of DANISH_ONLY_ROUTES) {
    entries.push({
      url: urlFor(DANISH_LOCALE, route),
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: DANISH_ONLY_PRIORITY[route] ?? 0.3,
    });
  }

  return entries;
}

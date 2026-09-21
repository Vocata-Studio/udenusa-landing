import type { MetadataRoute } from 'next';

const BASE_URL = 'https://udenusa.dk';

// Bumped whenever the page content meaningfully changes. Using the build date
// would make every deploy claim every page changed, which Google learns to
// ignore.
const LAST_MODIFIED = new Date('2026-09-21');

const routes: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/download/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pressekit/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy/', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/tos/', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/delete-account/', changeFrequency: 'monthly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}

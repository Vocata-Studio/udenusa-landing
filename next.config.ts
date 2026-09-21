import type { NextConfig } from 'next';
import {
  DANISH_ONLY_ROUTES,
  DANISH_ORIGIN,
  INTERNATIONAL_LOCALES,
  INTERNATIONAL_ORIGIN,
  LOCALIZED_ROUTES,
  pathFor,
  X_DEFAULT_LOCALE,
} from './lib/i18n';

// Both domains are aliases on the same deployment, so which locale a request
// gets is decided here rather than by having two projects. Written as redirects
// rather than rewrites so there is exactly one indexable URL per locale.
const DANISH_HOST = '(www\\.)?udenusa\\.dk';
const INTERNATIONAL_HOST = '(www\\.)?nonusa\\.org';

const nextConfig: NextConfig = {
  trailingSlash: true,

  experimental: {
    // Danish and the international locales have separate root layouts, so
    // there is no single layout a not-found.tsx could compose a 404 from.
    // app/global-not-found.tsx renders its own document instead.
    globalNotFound: true,
  },

  async redirects() {
    return [
      // The prefixed locales exist only on the .org domain. Without this they
      // would also resolve on udenusa.dk and recreate the duplicate-content
      // problem the split is meant to solve.
      {
        source: `/:lang(${INTERNATIONAL_LOCALES.join('|')})/:path*`,
        has: [{ type: 'host', value: DANISH_HOST }],
        // The trailing slash matters: `:path*` renders without one, which would
        // bounce every cross-domain hit through a second redirect to add it.
        destination: `${INTERNATIONAL_ORIGIN}/:lang/:path*/`,
        permanent: true,
      },

      // Every localized route lives under /<lang>/ on .org. An unprefixed hit —
      // the bare root, or a Danish-shaped link copied across — has to be sent to
      // the x-default locale: route groups are URL-invisible, so the (da) tree
      // would otherwise happily serve the Danish page on either host.
      ...LOCALIZED_ROUTES.map((route) => ({
        source: route,
        has: [{ type: 'host' as const, value: INTERNATIONAL_HOST }],
        destination: `${INTERNATIONAL_ORIGIN}${pathFor(X_DEFAULT_LOCALE, route)}`,
        permanent: true,
      })),

      // These pages exist in Danish only, so they belong on the Danish domain
      // no matter which host they are requested from.
      ...DANISH_ONLY_ROUTES.map((route) => ({
        source: route,
        has: [{ type: 'host' as const, value: INTERNATIONAL_HOST }],
        destination: `${DANISH_ORIGIN}${route}`,
        permanent: true,
      })),

      // Danish is unprefixed on its own domain, but people and old links will
      // guess /da/. Answer it rather than 404.
      {
        source: '/da/:path*',
        destination: `${DANISH_ORIGIN}/:path*/`,
        permanent: true,
      },

      // The site was static HTML until March 2025. These three URLs are still
      // linked from places that cannot be edited retroactively — /privacy.html
      // is the privacy policy link in the shipped iOS app — so they have to keep
      // resolving for as long as those builds are in the wild.
      {
        source: '/index.html',
        has: [{ type: 'host', value: INTERNATIONAL_HOST }],
        destination: `${INTERNATIONAL_ORIGIN}/${X_DEFAULT_LOCALE}/`,
        permanent: true,
      },
      { source: '/index.html', destination: `${DANISH_ORIGIN}/`, permanent: true },
      { source: '/privacy.html', destination: `${DANISH_ORIGIN}/privacy/`, permanent: true },
      { source: '/pressekit.html', destination: `${DANISH_ORIGIN}/pressekit/`, permanent: true },
    ];
  },
};

export default nextConfig;

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { LOCALES, localizedRouteFromPath, urlFor } from '@/lib/i18n';
import { translations, type Language } from '@/lib/translations';

const DISMISSED_KEY = 'languageSuggestionDismissed';

/**
 * Offers the visitor their own language instead of redirecting them into it.
 *
 * Redirecting on Accept-Language is the classic way to break international SEO:
 * Googlebot crawls from US IPs, so it would be bounced to English on every
 * request and would never see — let alone index — the other locales. A link
 * leaves every version reachable while still meeting the visitor halfway.
 */
export default function LanguageBanner() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const [suggestion, setSuggestion] = useState<Language | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // Private mode or blocked storage — fall through and show the banner.
    }

    const candidates = [
      ...(Array.isArray(navigator.languages) ? navigator.languages : []),
      navigator.language,
    ].filter((value): value is string => Boolean(value));

    for (const candidate of candidates) {
      const code = candidate.trim().toLowerCase().split('-')[0];
      // Their top preference is already what they are looking at.
      if (code === language) return;
      if ((LOCALES as string[]).includes(code)) {
        setSuggestion(code as Language);
        return;
      }
    }
  }, [language]);

  function dismiss() {
    try {
      localStorage.setItem(DISMISSED_KEY, '1');
    } catch {
      // Nothing to remember it with; hiding it for this page view will do.
    }
    setSuggestion(null);
  }

  // Only offered where a translated equivalent actually exists.
  const route = localizedRouteFromPath(pathname ?? '/');
  if (!suggestion || !route) return null;

  const copy = translations[suggestion];

  return (
    <div className="language-suggestion" lang={suggestion}>
      <a href={urlFor(suggestion, route)} hrefLang={suggestion}>
        {copy.viewInLanguage}
      </a>
      <button
        type="button"
        className="language-suggestion-close"
        onClick={dismiss}
        aria-label={copy.viewInLanguageClose}
      >
        ×
      </button>
    </div>
  );
}

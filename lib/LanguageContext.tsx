'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { translations, Language } from './translations';

type TranslationType = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  t: TranslationType;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * The active locale comes from the URL and is fixed for the lifetime of the
 * page. There is deliberately no browser-language detection here any more:
 * swapping the copy client-side left the server HTML, <html lang>, the meta
 * tags and the canonical URL all disagreeing with what the visitor saw.
 *
 * Changing language is a navigation, not a state update — see LanguageSwitcher.
 * LanguageBanner offers the switch to visitors who land on the wrong locale.
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Language;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ language: lang, t: translations[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

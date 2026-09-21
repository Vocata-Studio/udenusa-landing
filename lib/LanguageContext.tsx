'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language } from './translations';

type TranslationType = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Rendered on the server and on first paint. Must match <html lang> and the
// static metadata in app/layout.tsx, otherwise crawlers see Danish metadata on
// an English page.
const SSR_LANGUAGE: Language = 'da';

// Used when the visitor's browser languages match none of our translations.
const FALLBACK_LANGUAGE: Language = 'en';

function isLanguage(value: string): value is Language {
  return Object.prototype.hasOwnProperty.call(translations, value);
}

function normalizeLanguageCode(value: string) {
  return value.trim().toLowerCase().split('-')[0];
}

function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return FALLBACK_LANGUAGE;

  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter((lang): lang is string => Boolean(lang));

  for (const candidate of candidates) {
    const normalized = normalizeLanguageCode(candidate);
    if (isLanguage(normalized)) return normalized;
  }

  return FALLBACK_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(SSR_LANGUAGE);
  const pathname = usePathname();

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    const savedRaw = localStorage.getItem('preferredLanguage');
    if (savedRaw && isLanguage(savedRaw)) {
      setLanguage(savedRaw);
      return;
    }

    setLanguage(detectBrowserLanguage());
  }, [setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    // Only the homepage title is language-switched here. Other routes get their
    // title from their own metadata export, which we must not clobber.
    if (pathname === '/') {
      document.title = translations[language].pageTitle;
    }
  }, [language, pathname]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language, setLanguage]);

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

'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { localizedRouteFromPath, urlFor } from '@/lib/i18n';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher({
  variant = 'default',
}: {
  variant?: 'default' | 'flags';
}) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const flagsOnly = variant === 'flags';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const active = languages.find((l) => l.code === language)!;
  const others = languages.filter((l) => l.code !== language);

  // Pages that exist in Danish only fall back to the translated homepage.
  const route = localizedRouteFromPath(pathname ?? '/') ?? '/';

  return (
    <div
      className={`language-switcher${flagsOnly ? ' flags-only' : ''}${open ? ' open' : ''}`}
      ref={ref}
    >
      <button
        className="lang-btn active"
        onClick={() => setOpen(!open)}
        aria-label={flagsOnly ? active.label : undefined}
        aria-expanded={open}
      >
        {flagsOnly ? active.flag : `${active.flag} ${active.label}`}
      </button>
      <div className="lang-dropdown">
        {others.map((lang, i) => (
          // A real link, not a state change: the locale is part of the URL, and
          // Danish lives on a different domain to the rest, so this is always a
          // full navigation.
          <a
            key={lang.code}
            href={urlFor(lang.code, route)}
            hrefLang={lang.code}
            className={`lang-btn${i === others.length - 1 ? ' last' : ''}`}
            onClick={() => setOpen(false)}
            aria-label={flagsOnly ? lang.label : undefined}
          >
            {flagsOnly ? lang.flag : `${lang.flag} ${lang.label}`}
          </a>
        ))}
      </div>
    </div>
  );
}

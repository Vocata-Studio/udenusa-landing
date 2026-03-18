'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className={`language-switcher${open ? ' open' : ''}`}
      ref={ref}
    >
      <button
        className="lang-btn active"
        onClick={() => setOpen(!open)}
      >
        {active.flag} {active.label}
      </button>
      <div className="lang-dropdown">
        {others.map((lang, i) => (
          <button
            key={lang.code}
            className={`lang-btn${i === others.length - 1 ? ' last' : ''}`}
            onClick={() => {
              setLanguage(lang.code);
              setOpen(false);
            }}
          >
            {lang.flag} {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}

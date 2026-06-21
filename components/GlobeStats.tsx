'use client';

import { Globe } from '@/components/ui/globe';
import { useLanguage } from '@/lib/LanguageContext';

export default function GlobeStats() {
  const { t } = useLanguage();

  return (
    <section className="globe-section">
      <h2 className="globe-title">{t.globeTitle}</h2>
      <div className="globe-stage">
        <Globe className="globe-canvas" />
      </div>
    </section>
  );
}

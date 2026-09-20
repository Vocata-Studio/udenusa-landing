'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p className="footer-line">
        <a
          href="https://vocata.studio/kontakt?utm_source=udenusa&utm_medium=referral&utm_campaign=footer_signature"
          className="vocata-signature"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('vocata_studio_click', { placement: 'footer_signature' })}
        >
          <span className="vocata-signature-logo" aria-hidden="true" />
          <span className="vocata-signature-text">{t.vocataSignature}</span>
        </a>

        <span className="footer-divider" aria-hidden="true">
          |
        </span>

        <span className="footer-links">
          <a href="mailto:info@nonusa.org">info@nonusa.org</a> |{' '}
          <Link href="/privacy" className="privacy-link">
            {t.privacyPolicy}
          </Link>{' '}
          |{' '}
          <Link href="/tos" className="tos-link">
            {t.termsOfService}
          </Link>{' '}
          |{' '}
          <Link href="/pressekit" className="pressekit-link">
            {t.pressKit}
          </Link>
        </span>
      </p>
    </footer>
  );
}

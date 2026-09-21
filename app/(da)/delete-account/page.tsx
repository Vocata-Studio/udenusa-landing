'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function DeleteAccount() {
  const { language, t } = useLanguage();

  return (
    <>
      <LanguageSwitcher />

      <div className="privacy-container">
        {language === 'da' ? (
          <DanishContent backToHome={t.backToHome} />
        ) : (
          <EnglishContent backToHome={t.backToHome} />
        )}
      </div>

      <Footer />
    </>
  );
}

function DanishContent({ backToHome }: { backToHome: string }) {
  return (
    <div className="lang-content">
      <h1 className="privacy-title">Slet konto — UdenUSA</h1>

      <div>
        <h2 className="section-title">Anmod om sletning af din konto</h2>
        <p className="privacy-text">
          For at anmode om sletning af din UdenUSA-konto, send en e-mail til:
        </p>
        <p className="privacy-text" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
          <a href="mailto:info@nonusa.org" style={{ color: '#32d74b', textDecoration: 'none' }}>
            info@nonusa.org
          </a>
        </p>
        <p className="privacy-text">
          Inkluder venligst den e-mailadresse, der er tilknyttet din UdenUSA-konto.
        </p>
      </div>

      <div>
        <h2 className="section-title">Hvad bliver slettet:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">Brugerkonto (Firebase Auth)</li>
          <li className="bullet-item">Legitimationsoplysninger (e-mail)</li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">Hvad gemmes ikke eller er ikke knyttet til din konto:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            Scanningshistorik er ikke knyttet til brugeridentiteter og kan ikke tilskrives en specifik bruger.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">Opbevaring:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            Rapporter relateret til misbrug eller sikkerhed kan opbevares i op til 90 dage til forebyggelse af svindel.
          </li>
          <li className="bullet-item">
            Diagnostiske data kan opbevares i anonymiseret form.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">Tidsramme for sletning:</h2>
        <p className="privacy-text">
          Anmodninger om sletning behandles inden for 30 dage. Efter sletning kan din konto ikke gendannes.
        </p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

function EnglishContent({ backToHome }: { backToHome: string }) {
  return (
    <div className="lang-content">
      <h1 className="privacy-title">Delete Account — UdenUSA</h1>

      <div>
        <h2 className="section-title">Request account deletion</h2>
        <p className="privacy-text">
          To request deletion of your UdenUSA account, email us at:
        </p>
        <p className="privacy-text" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
          <a href="mailto:info@nonusa.org" style={{ color: '#32d74b', textDecoration: 'none' }}>
            info@nonusa.org
          </a>
        </p>
        <p className="privacy-text">
          Please include the email address associated with your UdenUSA account.
        </p>
      </div>

      <div>
        <h2 className="section-title">What will be deleted:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">User account (Firebase Auth)</li>
          <li className="bullet-item">Authentication credentials (email)</li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">What is not stored or linked to your account:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            Scan history is not tied to user identities and cannot be attributed to a specific user.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">Retention:</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            Abuse or security-related reports may be retained for up to 90 days for fraud prevention.
          </li>
          <li className="bullet-item">
            Diagnostic data may be retained in anonymized form.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">Deletion timeframe:</h2>
        <p className="privacy-text">
          Deletion requests are processed within 30 days. After deletion, your account cannot be recovered.
        </p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function Privacy() {
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
      <h1 className="privacy-title">Privatlivspolitik for UdenUSA</h1>
      <p className="privacy-date">Ikrafttrædelsesdato: 7. marts 2025</p>

      <div>
        <h2 className="section-title">Introduktion</h2>
        <p className="privacy-text">
          Velkommen til UdenUSA. Vi respekterer dit privatliv og er forpligtet
          til at beskytte dine personlige oplysninger. Denne privatlivspolitik
          forklarer, hvordan vi indsamler, bruger, deler og beskytter dine
          oplysninger, når du bruger vores app.
        </p>
      </div>

      <div>
        <h2 className="section-title">Oplysninger vi indsamler</h2>

        <h3 className="subsection-title">Kameraadgang</h3>
        <p className="privacy-text">
          UdenUSA kræver adgang til dit kamera for at kunne scanne
          produktemballage. Billeder, der tages gennem appen, sendes til vores
          analyseservice for at identificere produktets oprindelse.
        </p>

        <h3 className="subsection-title">Brugsdata</h3>
        <p className="privacy-text">
          Vi indsamler anonyme data om, hvordan du bruger appen, herunder:
        </p>
        <ul className="bullet-list">
          <li className="bullet-item">Antal scanninger</li>
          <li className="bullet-item">Tidspunkt for scanninger</li>
          <li className="bullet-item">Fejl og app-nedbrud</li>
        </ul>

        <h3 className="subsection-title">Abonnementsoplysninger</h3>
        <p className="privacy-text">
          Hvis du vælger at købe et abonnement, indsamler vi
          betalingsoplysninger via Apples StoreKit-framework. Vi har ikke
          direkte adgang til dine betalingskortoplysninger.
        </p>
      </div>

      <div>
        <h2 className="section-title">Hvordan vi bruger dine oplysninger</h2>

        <h3 className="subsection-title">Produktanalyse</h3>
        <p className="privacy-text">
          Billeder, du tager med appen, sendes til vores analyseservice (drevet
          af OpenRouter) for at identificere produktets oprindelse og foreslå danske
          alternativer til amerikanske produkter.
        </p>

        <h3 className="subsection-title">Forbedring af tjenesten</h3>
        <p className="privacy-text">
          Vi bruger anonyme brugsdata til at forbedre appens funktionalitet,
          løse fejl og optimere brugeroplevelsen.
        </p>

        <h3 className="subsection-title">Abonnementshåndtering</h3>
        <p className="privacy-text">
          Vi bruger abonnementsoplysninger til at administrere dit abonnement,
          give adgang til premium-funktioner og behandle betalinger.
        </p>
      </div>

      <div>
        <h2 className="section-title">Deling af oplysninger</h2>

        <h3 className="subsection-title">Tredjepartstjenester</h3>
        <p className="privacy-text">
          Vi deler oplysninger med følgende tredjepartstjenester:
        </p>
        <ul className="bullet-list">
          <li className="bullet-item">
            OpenRouter: Billeder sendes til OpenRouter for produktanalyse
          </li>
          <li className="bullet-item">
            Firebase: Brugsdata og app-konfiguration
          </li>
          <li className="bullet-item">
            Superwall: Abonnementshåndtering og betalingsprocessering
          </li>
          <li className="bullet-item">
            Apple: Abonnementshåndtering via App Store
          </li>
          <li className="bullet-item">
            Device identifiers: For at begrænse gratis scanninger per enhed
          </li>
        </ul>

        <h3 className="subsection-title">Lovkrav</h3>
        <p className="privacy-text">
          Vi kan dele dine oplysninger, hvis det kræves af loven eller for at
          beskytte vores rettigheder.
        </p>
      </div>

      <div>
        <h2 className="section-title">Datasikkerhed</h2>
        <p className="privacy-text">
          Vi implementerer passende tekniske og organisatoriske foranstaltninger
          for at beskytte dine personlige oplysninger mod uautoriseret adgang,
          tab eller ændring.
        </p>

        <h2 className="section-title">Dine rettigheder</h2>
        <p className="privacy-text">Som bruger har du ret til at:</p>
        <ul className="bullet-list">
          <li className="bullet-item">
            Få adgang til dine personlige oplysninger
          </li>
          <li className="bullet-item">
            Anmode om rettelse af unøjagtige oplysninger
          </li>
          <li className="bullet-item">
            Anmode om sletning af dine oplysninger
          </li>
          <li className="bullet-item">Trække dit samtykke tilbage</li>
          <li className="bullet-item">
            Indgive en klage til en tilsynsmyndighed
          </li>
        </ul>

        <p className="privacy-text">
          For at udøve disse rettigheder, kontakt os venligst på
          info@nonusa.org.
        </p>
      </div>

      <div>
        <h2 className="section-title">Børns privatliv</h2>
        <p className="privacy-text">
          UdenUSA er ikke beregnet til børn under 13 år. Vi indsamler ikke
          bevidst personlige oplysninger fra børn under 13 år.
        </p>

        <h2 className="section-title">Ændringer i privatlivspolitikken</h2>
        <p className="privacy-text">
          Vi kan opdatere denne privatlivspolitik fra tid til anden. Vi vil
          informere dig om væsentlige ændringer ved at vise en meddelelse i
          appen eller sende en e-mail.
        </p>

        <h2 className="section-title">Kontakt os</h2>
        <p className="privacy-text">
          Hvis du har spørgsmål eller bekymringer vedrørende denne
          privatlivspolitik, kontakt os venligst på:
        </p>
        <p className="privacy-text">E-mail: info@nonusa.org</p>
        <p className="privacy-text">Adresse: Vocata Studio, Danmark</p>

        <h2 className="section-title">Dataopbevaring</h2>
        <p className="privacy-text">
          Vi opbevarer kun dine oplysninger, så længe det er nødvendigt til de
          formål, der er beskrevet i denne politik.
        </p>
      </div>

      <div className="privacy-footer">
        <p>
          Ved at bruge UdenUSA accepterer du vilkårene i denne privatlivspolitik.
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
      <h1 className="privacy-title">Privacy Policy for UdenUSA</h1>
      <p className="privacy-date">Effective Date: March 7, 2025</p>

      <div>
        <h2 className="section-title">Introduction</h2>
        <p className="privacy-text">
          Welcome to UdenUSA. We respect your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, share, and protect your information when you use our
          app.
        </p>
      </div>

      <div>
        <h2 className="section-title">Information We Collect</h2>

        <h3 className="subsection-title">Camera Access</h3>
        <p className="privacy-text">
          UdenUSA requires access to your camera to scan product packaging.
          Images taken through the app are sent to our analysis service to
          identify the product&apos;s origin.
        </p>

        <h3 className="subsection-title">Usage Data</h3>
        <p className="privacy-text">
          We collect anonymous data about how you use the app, including:
        </p>
        <ul className="bullet-list">
          <li className="bullet-item">Number of scans</li>
          <li className="bullet-item">Time of scans</li>
          <li className="bullet-item">Errors and app crashes</li>
        </ul>

        <h3 className="subsection-title">Subscription Information</h3>
        <p className="privacy-text">
          If you choose to purchase a subscription, we collect payment
          information through Apple&apos;s StoreKit framework. We do not have
          direct access to your payment card details.
        </p>
      </div>

      <div>
        <h2 className="section-title">How We Use Your Information</h2>

        <h3 className="subsection-title">Product Analysis</h3>
        <p className="privacy-text">
          Images you take with the app are sent to our analysis service (powered
          by OpenRouter) to identify the product&apos;s origin and suggest Danish
          alternatives to American products.
        </p>

        <h3 className="subsection-title">Service Improvement</h3>
        <p className="privacy-text">
          We use anonymous usage data to improve the app&apos;s functionality,
          fix bugs, and optimize the user experience.
        </p>

        <h3 className="subsection-title">Subscription Management</h3>
        <p className="privacy-text">
          We use subscription information to manage your subscription, provide
          access to premium features, and process payments.
        </p>
      </div>

      <div>
        <h2 className="section-title">Sharing of Information</h2>

        <h3 className="subsection-title">Third-Party Services</h3>
        <p className="privacy-text">
          We share information with the following third-party services:
        </p>
        <ul className="bullet-list">
          <li className="bullet-item">
            OpenRouter: Images are sent to OpenRouter for product analysis
          </li>
          <li className="bullet-item">
            Firebase: Usage data and app configuration
          </li>
          <li className="bullet-item">
            Superwall: Subscription management and payment processing
          </li>
          <li className="bullet-item">
            Apple: Subscription management via App Store
          </li>
          <li className="bullet-item">
            Device identifiers: To limit free scans per device
          </li>
        </ul>

        <h3 className="subsection-title">Legal Requirements</h3>
        <p className="privacy-text">
          We may share your information if required by law or to protect our
          rights.
        </p>
      </div>

      <div>
        <h2 className="section-title">Data Security</h2>
        <p className="privacy-text">
          We implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access, loss, or
          alteration.
        </p>

        <h2 className="section-title">Your Rights</h2>
        <p className="privacy-text">As a user, you have the right to:</p>
        <ul className="bullet-list">
          <li className="bullet-item">Access your personal information</li>
          <li className="bullet-item">
            Request correction of inaccurate information
          </li>
          <li className="bullet-item">Request deletion of your information</li>
          <li className="bullet-item">Withdraw your consent</li>
          <li className="bullet-item">
            Lodge a complaint with a supervisory authority
          </li>
        </ul>

        <p className="privacy-text">
          To exercise these rights, please contact us at info@nonusa.org.
        </p>
      </div>

      <div>
        <h2 className="section-title">Children&apos;s Privacy</h2>
        <p className="privacy-text">
          UdenUSA is not intended for children under 13 years of age. We do not
          knowingly collect personal information from children under 13.
        </p>

        <h2 className="section-title">Changes to the Privacy Policy</h2>
        <p className="privacy-text">
          We may update this privacy policy from time to time. We will inform
          you of significant changes by displaying a notice in the app or
          sending an email.
        </p>

        <h2 className="section-title">Contact Us</h2>
        <p className="privacy-text">
          If you have questions or concerns regarding this privacy policy,
          please contact us at:
        </p>
        <p className="privacy-text">Email: info@nonusa.org</p>
        <p className="privacy-text">Address: Vocata Studio, Denmark</p>

        <h2 className="section-title">Data Retention</h2>
        <p className="privacy-text">
          We only retain your information for as long as necessary for the
          purposes described in this policy.
        </p>
      </div>

      <div className="privacy-footer">
        <p>By using UdenUSA, you accept the terms of this privacy policy.</p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

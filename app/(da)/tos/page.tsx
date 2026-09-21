'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function TermsOfService() {
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
      <h1 className="privacy-title">Brugsbetingelser for UdenUSA</h1>
      <p className="privacy-date">Sidst opdateret 23. Jan 2026</p>

      <div>
        <h2 className="section-title">1. Accepter af vilkår</h2>
        <p className="privacy-text">
          Ved at downloade, installere eller bruge UdenUSA-appen, accepterer du at være bundet af disse brugsbetingelser. Hvis du ikke accepterer disse vilkår, må du ikke bruge appen.
        </p>
      </div>

      <div>
        <h2 className="section-title">2. Beskrivelse af tjenesten</h2>
        <p className="privacy-text">
          UdenUSA er en app, der hjælper brugere med at identificere produkters oprindelse og foreslår danske alternativer til amerikanske produkter. Appen bruger kameraet på din enhed til at scanne produktemballage og analysere produktinformation.
        </p>
      </div>

      <div>
        <h2 className="section-title">3. Brugerkonti og abonnementer</h2>
        <p className="privacy-text">
          3.1 Gratis brugere har adgang til 3 scanninger pr. dag.
        </p>
        <p className="privacy-text">
          3.2 Pro-abonnenter har adgang til ubegrænset antal scanninger.
        </p>
        <p className="privacy-text">
          3.3 UdenUSA tilbyder både gratis funktioner og betalte abonnementer, som giver adgang til udvidede funktioner i appen.
        </p>
        <p className="privacy-text">
          3.4 Eventuelle køb af abonnementer i UdenUSA foretages udelukkende via Apple App Store. Apple er merchant of record for alle abonnementskøb og har fuld kontrol over faktureringsprocedurer, betalingsbehandling, refusioner og tilbagebetalinger. UdenUSA fungerer alene som udbyder af app-tjenesten og har ingen direkte håndtering af økonomiske transaktioner eller adgang til brugerens betalingsoplysninger. Alle abonnementer er underlagt Apples gældende vilkår og retningslinjer.
        </p>
        <p className="privacy-text">
          3.5 Betaling, fornyelse, opsigelse og refundering af abonnementer håndteres af Apple gennem brugerens Apple-konto.
        </p>
        <p className="privacy-text">
          3.6 Abonnementer fornyes automatisk ved udløbet af den valgte abonnementsperiode, medmindre de opsiges mindst 24 timer før slutningen af den aktuelle periode. Brugeren kan til enhver tid administrere eller opsige sit abonnement via sin Apple-konto i App Store.
        </p>
        <p className="privacy-text">
          3.7 Aktuelle priser vises i Apple App Store. Priser for abonnementer kan ændres. Brugere vil blive informeret om prisændringer før de træder i kraft. Eventuelle ændringer i pris eller abonnementsvilkår varsles og håndteres af Apple i overensstemmelse med deres retningslinjer.
        </p>
        <p className="privacy-text">
          3.8 Anmodninger om refundering behandles udelukkende af Apple i henhold til Apples gældende refund-politik.
        </p>
        <p className="privacy-text">
          3.9 UdenUSA anvender automatiserede systemer og AI-baseret analyse til at vurdere produktinformation og ejerforhold. Resultaterne leveres &quot;som de er&quot; (as is) og kan i sjældne tilfælde indeholde fejl, forsinkelser eller unøjagtigheder. UdenUSA kan ikke garantere, at alle oplysninger altid er fuldstændigt korrekte eller opdaterede. Abonnementet giver adgang til udvidede funktioner i appen, men udgør ikke en garanti for bestemte resultater eller beslutninger truffet på baggrund af appens oplysninger.
        </p>
      </div>

      <div>
        <h2 className="section-title">4. Brugerindhold og tilladelser</h2>

        <h3 className="subsection-title">4.1 Definition af brugerindhold</h3>
        <p className="privacy-text">
          Brugerindhold omfatter alle billeder, fotografier og anden data, som du scanner, uploader eller på anden måde indsender gennem UdenUSA-appen (&quot;Brugerindhold&quot;). Dette inkluderer, men er ikke begrænset til, produktbilleder scannet via appens kamerafunktion samt billeder indsendt som fejlrapporter.
        </p>

        <h3 className="subsection-title">4.2 Licens til brug af brugerindhold</h3>
        <p className="privacy-text">
          Ved at indsende Brugerindhold til UdenUSA giver du os en begrænset, ikke-eksklusiv, verdensomspændende, royalty-fri licens til at bruge, behandle, analysere og lagre dit Brugerindhold med det formål at:
        </p>
        <ul className="privacy-list">
          <li>Levere og forbedre appens kernefunktionalitet (produktanalyse og anbefalinger)</li>
          <li>Forbedre tjenestens nøjagtighed og kvalitet</li>
          <li>Behandle og rette fejl rapporteret af brugere</li>
        </ul>

        <h3 className="subsection-title">4.3 Lagring og anonymisering</h3>
        <p className="privacy-text">
          Scannede billeder gemmes i anonymiseret form uden nogen tilknytning til din brugeridentitet eller -konto. Alle billeder slettes automatisk senest 12 måneder efter de er blevet indsendt. Billeder indsendt som fejlrapporter anvendes specifikt til at identificere og rette fejl i appens funktionalitet.
        </p>

        <h3 className="subsection-title">4.4 Dine garantier</h3>
        <p className="privacy-text">
          Du garanterer og erklærer, at:
        </p>
        <ul className="privacy-list">
          <li>Du har alle nødvendige rettigheder, licenser og tilladelser til at indsende Brugerindholdet</li>
          <li>Dit Brugerindhold ikke krænker tredjeparts rettigheder, herunder ophavsret, varemærkerettigheder eller privatlivets fred</li>
          <li>Du har indhentet alle nødvendige samtykker til at fotografere og indsende billeder, hvor dette er relevant</li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">5. Acceptabel brug af scanningsfunktion</h2>

        <p className="privacy-text">
          5.1 Du må ikke bruge appens scanningsfunktion til at scanne, uploade eller indsende:
        </p>
        <ul className="privacy-list">
          <li>Billeder af personer, ansigter eller kropsdele</li>
          <li>Identifikationsdokumenter (pas, kørekort, ID-kort, sundhedskort etc.)</li>
          <li>Følsomme eller fortrolige dokumenter (medicinske journaler, juridiske dokumenter, finansielle oplysninger)</li>
          <li>Ulovligt indhold eller indhold der krænker andres rettigheder</li>
          <li>Indhold af pornografisk, voldelig eller på anden måde stødende karakter</li>
        </ul>

        <p className="privacy-text">
          5.2 Du må kun scanne produktemballage og produktinformation, som du har lovlig adgang til at fotografere.
        </p>
        <p className="privacy-text">
          5.3 Hvis scanning involverer produkter eller dokumenter, der tilhører andre, er du ansvarlig for at indhente nødvendigt samtykke, før du scanner og indsender indholdet.
        </p>
        <p className="privacy-text">
          5.4 Overtrædelse af disse regler for acceptabel brug kan resultere i øjeblikkelig suspension eller opsigelse af din adgang til appen.
        </p>
      </div>

      <div>
        <h2 className="section-title">6. Brugerens øvrige forpligtelser</h2>
        <p className="privacy-text">
          6.1 Du må kun bruge appen til lovlige formål og i overensstemmelse med disse vilkår.
        </p>
        <p className="privacy-text">
          6.2 Du må ikke bruge appen på en måde, der kan skade, deaktivere, overbelaste eller forringe appen.
        </p>
        <p className="privacy-text">
          6.3 Du må ikke forsøge at få uautoriseret adgang til systemer eller netværk forbundet med appen.
        </p>
        <p className="privacy-text">
          6.4 Du er ansvarlig for at sikre, at din brug af appen overholder alle gældende love og regler.
        </p>
      </div>

      <div>
        <h2 className="section-title">7. Immaterialret</h2>
        <p className="privacy-text">
          7.1 Appen og alt indhold, funktioner og funktionalitet er ejet af UdenUSA og er beskyttet af danske og internationale love om ophavsret, varemærker og andre immaterielle rettigheder.
        </p>
        <p className="privacy-text">
          7.2 Du må ikke reproducere, distribuere, modificere, skabe afledte værker af, offentligt vise, offentligt fremføre, genudgive, downloade, lagre eller overføre noget indhold fra appen, undtagen som tilladt af disse vilkår.
        </p>
      </div>

      <div>
        <h2 className="section-title">8. Ansvarsfraskrivelse</h2>
        <p className="privacy-text">
          8.1 Appen leveres &apos;som den er&apos; og &apos;som tilgængelig&apos; uden nogen garantier, hverken udtrykkelige eller underforståede.
        </p>
        <p className="privacy-text">
          8.2 Vi garanterer ikke, at appen vil være fejlfri eller uafbrudt, eller at eventuelle fejl vil blive rettet.
        </p>
        <p className="privacy-text">
          8.3 Vi garanterer ikke nøjagtigheden af produktanalyser eller anbefalinger af danske alternativer.
        </p>
        <p className="privacy-text">
          8.4 Du accepterer, at produktanbefalinger er vejledende og at du selv er ansvarlig for at verificere produktinformation.
        </p>
        <p className="privacy-text">
          8.5 Såfremt du opdager en fejl i appen eller i de leverede oplysninger, opfordres du til at meddele os fejlen via info@nonusa.org. Vi vil bestræbe os på at foretage fejlfinding og rettelse inden 24 timer efter modtagelse af din henvendelse.
        </p>
      </div>

      <div>
        <h2 className="section-title">9. Ansvarsbegrænsning</h2>
        <p className="privacy-text">
          9.1 I det maksimale omfang tilladt ved lov, vil UdenUSA ikke være ansvarlig for nogen indirekte, tilfældige, særlige, følgeskader eller strafbare skader.
        </p>
        <p className="privacy-text">
          9.2 Vores samlede ansvar for alle krav i forbindelse med disse vilkår vil ikke overstige det beløb, du har betalt til os for brug af appen i de foregående 12 måneder.
        </p>
      </div>

      <div>
        <h2 className="section-title">10. Ændringer af vilkår</h2>
        <p className="privacy-text">
          Vi forbeholder os retten til at ændre disse vilkår til enhver tid. Ændringer vil træde i kraft, når de er blevet offentliggjort i appen. Din fortsatte brug af appen efter sådanne ændringer udgør din accept af de nye vilkår.
        </p>
      </div>

      <div>
        <h2 className="section-title">11. Opsigelse</h2>
        <p className="privacy-text">
          11.1 Vi kan opsige eller suspendere din adgang til appen øjeblikkeligt, uden forudgående varsel eller ansvar, af enhver grund, herunder uden begrænsning, hvis du overtræder disse vilkår.
        </p>
        <p className="privacy-text">
          11.2 Du kan opsige dit abonnement via App Store-indstillingerne på din enhed.
        </p>
      </div>

      <div>
        <h2 className="section-title">12. Gældende lov</h2>
        <p className="privacy-text">
          Disse vilkår er underlagt og fortolkes i overensstemmelse med dansk lovgivning, uden hensyn til dets konfliktregler.
        </p>
      </div>

      <div>
        <h2 className="section-title">13. Kontakt</h2>
        <p className="privacy-text">
          Hvis du har spørgsmål om disse brugsbetingelser, kontakt os venligst på:
        </p>
        <p className="privacy-text">E-mail: info@nonusa.org</p>
        <p className="privacy-text">Adresse: Vocata Studio, Danmark</p>

        <h2 className="section-title">Tilbagebetalingspolitik</h2>
        <p className="privacy-text">
          Tilbagebetalinger håndteres i overensstemmelse med App Stores retningslinjer. UdenUSA tilbyder ikke direkte tilbagebetalinger for abonnementer købt gennem App Store. Refusionsanmodninger skal rettes til Apple.
        </p>
      </div>

      <div className="privacy-footer">
        <p>Ved at bruge UdenUSA accepterer du disse brugsbetingelser.</p>
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
      <h1 className="privacy-title">Terms of Service for UdenUSA</h1>
      <p className="privacy-date">Last updated January 23, 2026</p>

      <div>
        <h2 className="section-title">1. Acceptance of Terms</h2>
        <p className="privacy-text">
          By downloading, installing, or using the UdenUSA app, you agree to be bound by these terms of service. If you do not accept these terms, you may not use the app.
        </p>
      </div>

      <div>
        <h2 className="section-title">2. Service Description</h2>
        <p className="privacy-text">
          UdenUSA is an app that helps users identify product origins and suggests Danish alternatives to American products. The app uses your device&apos;s camera to scan product packaging and analyze product information.
        </p>
      </div>

      <div>
        <h2 className="section-title">3. User Accounts and Subscriptions</h2>
        <p className="privacy-text">
          3.1 Free users have access to 3 scans per day.
        </p>
        <p className="privacy-text">
          3.2 Pro subscribers have access to unlimited scans.
        </p>
        <p className="privacy-text">
          3.3 UdenUSA offers both free features and paid subscriptions that provide access to extended features in the app.
        </p>
        <p className="privacy-text">
          3.4 Any subscription purchases in UdenUSA are made exclusively through Apple App Store. Apple is the merchant of record for all subscription purchases and has full control over billing procedures, payment processing, refunds, and reimbursements. UdenUSA acts solely as the provider of the app service and has no direct handling of financial transactions or access to the user&apos;s payment information. All subscriptions are subject to Apple&apos;s applicable terms and guidelines.
        </p>
        <p className="privacy-text">
          3.5 Payment, renewal, cancellation, and refunding of subscriptions are handled by Apple through the user&apos;s Apple account.
        </p>
        <p className="privacy-text">
          3.6 Subscriptions automatically renew at the end of the selected subscription period unless canceled at least 24 hours before the end of the current period. The user can manage or cancel their subscription at any time through their Apple account in the App Store.
        </p>
        <p className="privacy-text">
          3.7 Current prices are displayed in the Apple App Store. Subscription prices may change. Users will be informed of price changes before they take effect. Any changes in price or subscription terms are announced and handled by Apple in accordance with their guidelines.
        </p>
        <p className="privacy-text">
          3.8 Refund requests are processed exclusively by Apple in accordance with Apple&apos;s applicable refund policy.
        </p>
        <p className="privacy-text">
          3.9 UdenUSA uses automated systems and AI-based analysis to assess product information and ownership. Results are provided &quot;as is&quot; and may in rare cases contain errors, delays, or inaccuracies. UdenUSA cannot guarantee that all information is always completely accurate or up-to-date. The subscription provides access to extended features in the app but does not constitute a guarantee for specific results or decisions made based on the app&apos;s information.
        </p>
      </div>

      <div>
        <h2 className="section-title">4. User Content and Permissions</h2>

        <h3 className="subsection-title">4.1 Definition of User Content</h3>
        <p className="privacy-text">
          User Content includes all images, photographs, and other data that you scan, upload, or otherwise submit through the UdenUSA app (&quot;User Content&quot;). This includes, but is not limited to, product images scanned via the app&apos;s camera function as well as images submitted as error reports.
        </p>

        <h3 className="subsection-title">4.2 License to Use User Content</h3>
        <p className="privacy-text">
          By submitting User Content to UdenUSA, you grant us a limited, non-exclusive, worldwide, royalty-free license to use, process, analyze, and store your User Content for the purpose of:
        </p>
        <ul className="privacy-list">
          <li>Delivering and improving the app&apos;s core functionality (product analysis and recommendations)</li>
          <li>Improving the service&apos;s accuracy and quality</li>
          <li>Processing and correcting errors reported by users</li>
        </ul>

        <h3 className="subsection-title">4.3 Storage and Anonymization</h3>
        <p className="privacy-text">
          Scanned images are stored in anonymized form without any connection to your user identity or account. All images are automatically deleted no later than 12 months after they have been submitted. Images submitted as error reports are specifically used to identify and correct errors in the app&apos;s functionality.
        </p>

        <h3 className="subsection-title">4.4 Your Warranties</h3>
        <p className="privacy-text">
          You warrant and represent that:
        </p>
        <ul className="privacy-list">
          <li>You have all necessary rights, licenses, and permissions to submit the User Content</li>
          <li>Your User Content does not violate third-party rights, including copyright, trademark rights, or privacy</li>
          <li>You have obtained all necessary consents to photograph and submit images, where relevant</li>
        </ul>
      </div>

      <div>
        <h2 className="section-title">5. Acceptable Use of Scanning Function</h2>

        <p className="privacy-text">
          5.1 You may not use the app&apos;s scanning function to scan, upload, or submit:
        </p>
        <ul className="privacy-list">
          <li>Images of people, faces, or body parts</li>
          <li>Identification documents (passports, driver&apos;s licenses, ID cards, health cards, etc.)</li>
          <li>Sensitive or confidential documents (medical records, legal documents, financial information)</li>
          <li>Illegal content or content that violates others&apos; rights</li>
          <li>Content of a pornographic, violent, or otherwise offensive nature</li>
        </ul>

        <p className="privacy-text">
          5.2 You may only scan product packaging and product information that you have lawful access to photograph.
        </p>
        <p className="privacy-text">
          5.3 If scanning involves products or documents belonging to others, you are responsible for obtaining necessary consent before scanning and submitting the content.
        </p>
        <p className="privacy-text">
          5.4 Violation of these acceptable use rules may result in immediate suspension or termination of your access to the app.
        </p>
      </div>

      <div>
        <h2 className="section-title">6. Other User Obligations</h2>
        <p className="privacy-text">
          6.1 You may only use the app for lawful purposes and in accordance with these terms.
        </p>
        <p className="privacy-text">
          6.2 You may not use the app in any way that could damage, disable, overburden, or impair the app.
        </p>
        <p className="privacy-text">
          6.3 You may not attempt to gain unauthorized access to systems or networks connected to the app.
        </p>
        <p className="privacy-text">
          6.4 You are responsible for ensuring that your use of the app complies with all applicable laws and regulations.
        </p>
      </div>

      <div>
        <h2 className="section-title">7. Intellectual Property</h2>
        <p className="privacy-text">
          7.1 The app and all content, features, and functionality are owned by UdenUSA and are protected by Danish and international copyright, trademark, and other intellectual property laws.
        </p>
        <p className="privacy-text">
          7.2 You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the app, except as permitted by these terms.
        </p>
      </div>

      <div>
        <h2 className="section-title">8. Disclaimer of Warranties</h2>
        <p className="privacy-text">
          8.1 The app is provided &apos;as is&apos; and &apos;as available&apos; without any warranties, either express or implied.
        </p>
        <p className="privacy-text">
          8.2 We do not guarantee that the app will be error-free or uninterrupted, or that any errors will be corrected.
        </p>
        <p className="privacy-text">
          8.3 We do not guarantee the accuracy of product analyses or recommendations for Danish alternatives.
        </p>
        <p className="privacy-text">
          8.4 You acknowledge that product recommendations are advisory and that you are responsible for verifying product information.
        </p>
        <p className="privacy-text">
          8.5 If you discover an error in the app or in the provided information, you are encouraged to notify us of the error via info@nonusa.org. We will strive to perform troubleshooting and correction within 24 hours of receiving your notification.
        </p>
      </div>

      <div>
        <h2 className="section-title">9. Limitation of Liability</h2>
        <p className="privacy-text">
          9.1 To the maximum extent permitted by law, UdenUSA will not be liable for any indirect, incidental, special, consequential, or punitive damages.
        </p>
        <p className="privacy-text">
          9.2 Our total liability for all claims related to these terms will not exceed the amount you have paid us for use of the app in the preceding 12 months.
        </p>
      </div>

      <div>
        <h2 className="section-title">10. Changes to Terms</h2>
        <p className="privacy-text">
          We reserve the right to change these terms at any time. Changes will take effect when posted in the app. Your continued use of the app after such changes constitutes your acceptance of the new terms.
        </p>
      </div>

      <div>
        <h2 className="section-title">11. Termination</h2>
        <p className="privacy-text">
          11.1 We may terminate or suspend your access to the app immediately, without prior notice or liability, for any reason, including without limitation if you breach these terms.
        </p>
        <p className="privacy-text">
          11.2 You may cancel your subscription through the App Store settings on your device.
        </p>
      </div>

      <div>
        <h2 className="section-title">12. Governing Law</h2>
        <p className="privacy-text">
          These terms are governed by and construed in accordance with Danish law, without regard to its conflict of law provisions.
        </p>
      </div>

      <div>
        <h2 className="section-title">13. Contact</h2>
        <p className="privacy-text">
          If you have questions about these terms of service, please contact us at:
        </p>
        <p className="privacy-text">Email: info@nonusa.org</p>
        <p className="privacy-text">Address: Vocata Studio, Denmark</p>

        <h2 className="section-title">Refund Policy</h2>
        <p className="privacy-text">
          Refunds are handled in accordance with App Store guidelines. UdenUSA does not offer direct refunds for subscriptions purchased through the App Store. Refund requests should be directed to Apple.
        </p>
      </div>

      <div className="privacy-footer">
        <p>By using UdenUSA, you accept these terms of service.</p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

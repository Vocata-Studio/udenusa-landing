'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import CopyContact from '@/components/CopyContact';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function PressKit() {
  const { language, t } = useLanguage();

  return (
    <>
      <LanguageSwitcher />

      <div className="pressekit-container">
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
      <h1 className="pressekit-title">Pressekit: UdenUSA</h1>

      <div>
        <p className="pressekit-text">
          <strong>
            UdenUSA er en ny danskudviklet iOS-app, der giver brugerne magten til
            at fravælge amerikanske varer. Appen tilbyder scanning af produkter,
            så du nemt kan se, hvor et brand eller produkt kommer fra, og om det
            ejes af en amerikansk koncern – og dermed træffe mere bevidste
            indkøbsvalg.
          </strong>
        </p>
      </div>

      <hr />

      <blockquote>
        Vi er den første reelle premium-app i denne kategori. Vores mission er at
        give forbrugerne flere værktøjer til at træffe informerede beslutninger
        og sige &quot;nej tak&quot;, hvis de ønsker det.
      </blockquote>

      <hr />

      <div>
        <h2 className="section-title">2. Nøgleinformation</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Udgivelsesdato</strong>: 06.04.2025 (Ude på App Store)
          </li>
          <li className="bullet-item">
            <strong>Platform</strong>: iOS (Android og webapp kommer snart)
          </li>
          <li className="bullet-item">
            <strong>Pris</strong>: Freemium: 2–5 gratis scanninger pr. dag.
            Premium-abonnement for ubegrænset adgang og eksklusive features (kun
            19 kr./måned)
          </li>
          <li className="bullet-item">
            <strong>Formål</strong>: Giv forbrugerne let adgang til at{' '}
            <strong>fravælge amerikansk-ejede brands</strong> og opnå større
            gennemsigtighed i, hvem der står bag de produkter, vi køber hver dag
          </li>
          <li className="bullet-item">
            <strong>Baggrund</strong>: Skabt af et lille dansk team, der brænder
            for gennemsigtighed og forbrugermagt.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">3. Hvorfor er det relevant?</h2>
        <ol className="bullet-list">
          <li className="bullet-item">
            <strong>Aktuel Trend</strong>: Boykot og forbrugermæssige protester
            mod amerikanske varer har været i fokus i medierne.
          </li>
          <li className="bullet-item">
            <strong>Let Forbrugerindsigt</strong>: Mange danskere er overraskede
            over, hvor meget amerikansk ejerskab der er i hverdagsvarer.
          </li>
          <li className="bullet-item">
            <strong>Gratis at bruge</strong>: Alle kan bruge appen, dog med et
            begrænset antal scanninger om dagen – ingen forpligtelser, reklamer
            eller datasalg.
          </li>
        </ol>
      </div>

      <hr />

      <div>
        <h2 className="section-title">4. Screenshots & Logoer</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Link til højtopløste billeder</strong>:{' '}
            <a
              href="https://drive.proton.me/urls/8Y6ZV9YR80#YucE49znyHVy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#32d74b', textDecoration: 'none' }}
            >
              Press Assets
            </a>
            <ul className="bullet-list">
              <li className="bullet-item">App-interface (scanning-resultat)</li>
              <li className="bullet-item">App-ikon/logo</li>
              <li className="bullet-item">Evt. mockups på iPhone</li>
              <li className="bullet-item">Team-billeder (valgfrit)</li>
            </ul>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">5. Kontaktperson</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Navn</strong>: Jonas Pipper (Founder)
          </li>
          <li className="bullet-item">
            <strong>E-mail</strong>: info@nonusa.org
          </li>
        </ul>

        <blockquote>
          Vi står til rådighed for spørgsmål, interviews og demonstrationer af
          appen.
        </blockquote>
      </div>

      <hr />

      <div>
        <h2 className="section-title">5a. Kontakt os direkte</h2>
        <p className="pressekit-text">
          <strong>E-mail:</strong>{' '}
          <CopyContact
            value={CONTACT_EMAIL}
            copyLabel="kopier"
            copiedLabel="Kopieret"
          />
        </p>
        <p className="pressekit-text">
          Vi svarer gerne på spørgsmål, tilbyder interviews og kan demonstrere appen.
        </p>
      </div>

      <hr />

      <div>
        <h2 className="section-title">6. Kort Omtale & Mulige Pressevinkler</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>&quot;Boykot gjort enkelt&quot;</strong>: En app baner vej
            for politiske forbrugervalg.
          </li>
          <li className="bullet-item">
            <strong>&quot;Ny dansk tech-løsning&quot;</strong>: UdenUSA er et
            eksempel på, at små udviklerteams kan rykke på aktuelle
            forbrugertendenser.
          </li>
          <li className="bullet-item">
            <strong>&quot;Øjenåbner for ejestrukturer&quot;</strong>: Mange
            brands har amerikansk moderselskab, uden at kunderne ved det.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">7. Download & Links</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>App Store</strong>:{' '}
            <a
              href="https://apps.apple.com/app/id6742805777"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://apps.apple.com/app/id6742805777
            </a>
          </li>
          <li className="bullet-item">
            <strong>Hjemmeside</strong>:{' '}
            <a href="https://udenusa.dk/">https://udenusa.dk/</a>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <p className="pressekit-text">
          <strong>
            Har du spørgsmål eller vil du dække historien? Kontakt os gerne!
          </strong>
        </p>

        <p className="pressekit-text">
          Med venlig hilsen,
          <br />
          UdenUSA-teamet
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
      <h1 className="pressekit-title">Press Kit - UdenUSA</h1>

      <div>
        <h2 className="section-title">1. Brief Introduction & Purpose</h2>
        <p className="pressekit-text">
          <strong>UdenUSA</strong> is a new Danish iOS app that gives power back
          to consumers by making it easy to opt out of (or simply map) American
          products. With just a few clicks, users can scan or search for brands
          and immediately get answers on whether they are American-owned –
          without having to dive into complicated corporate structures.
        </p>

        <blockquote>
          &quot;We are the only real premium app in this category. Our mission
          is to give consumers more tools to make informed decisions and say
          &apos;no thanks&apos; if they wish.&quot;
        </blockquote>
      </div>

      <hr />

      <div>
        <h2 className="section-title">2. Value Proposition: Give Power Back</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Immediate transparency</strong>: Quickly see which products
            are American, so you can choose them or not.
          </li>
          <li className="bullet-item">
            <strong>Unique premium features</strong>: Unlimited scans, the
            ability to support our mission, and future features such as a
            dedicated chatbot or community.
          </li>
          <li className="bullet-item">
            <strong>Rebellious yet inclusive tone</strong>: We are neutral in
            our appearance, but the appeal to more self-determination and
            consumer power is in focus.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">3. Target Audience</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>All of Denmark</strong> – anyone curious about avoiding (or
            understanding) American products.
          </li>
          <li className="bullet-item">
            Primarily consumers interested in political or ethical boycotts, but
            also those who simply want to shop consciously.
          </li>
          <li className="bullet-item">
            Later, the app can be expanded or further specialized.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">
          4. Pricing Structure (Freemium + Premium)
        </h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Free scans</strong>: All users can perform a limited number
            of free scans daily/weekly (e.g., 1-5) to get a taste of the
            functionality.
          </li>
          <li className="bullet-item">
            <strong>Premium</strong>:
            <ul className="bullet-list">
              <li className="bullet-item">
                <strong>29 DKK per month</strong> or{' '}
                <strong>245 DKK per year</strong> (intro price, may change
                through our ongoing tests).
              </li>
              <li className="bullet-item">
                Unlimited scans + any exclusive features and access to new
                features in the future.
              </li>
              <li className="bullet-item">
                You also support our continued work to update the app and
                develop new ways to give consumer power back.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">5. Unique Features</h2>
        <ol className="bullet-list">
          <li className="bullet-item">
            <strong>Real mobile app</strong>: Unlike some competitors&apos; web
            solutions, UdenUSA is a complete app focused on iOS
            user-friendliness.
          </li>
          <li className="bullet-item">
            <strong>Unlimited scanning (Premium)</strong>: No limits on how many
            products you want to check – perfect for big shopping trips or when
            you&apos;re just extremely curious.
          </li>
          <li className="bullet-item">
            <strong>&quot;Support our mission&quot;</strong>: Your payment helps
            us keep the app updated and develop new features.
          </li>
          <li className="bullet-item">
            <strong>Future features</strong>: Dedicated chatbot for quick
            answers, crowd-sourced community to add products, and more.
          </li>
        </ol>
      </div>

      <hr />

      <div>
        <h2 className="section-title">6. Visual Identity</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Colors</strong>: Black (#000000) as the main color and a
            modern &quot;Apple green&quot; as the accent color.
          </li>
          <li className="bullet-item">
            <strong>Typography</strong>: Inter (clean and minimalist).
          </li>
          <li className="bullet-item">
            <strong>Interface</strong>: Focus on user-friendliness, intuitive
            navigation, and a rebelliously inspired &quot;power-to-the-people&quot;
            vibe.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">7. User Context</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            Users can freely try the app and scan their first items.
          </li>
          <li className="bullet-item">
            When they hit their free limit (daily/weekly), they are offered the
            option to upgrade to Premium and continue with unlimited scanning.
          </li>
          <li className="bullet-item">
            For many, this is the moment when they decide whether they want to
            be part of the mission and be the &quot;rebel&quot; in the supermarket.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">8. USP (Unique Selling Proposition)</h2>
        <blockquote>
          &quot;The only fully developed, premium-focused app in Denmark that
          lets you scan and identify American products – and at the same time
          makes you want to shop consciously.&quot;
        </blockquote>
        <ul className="bullet-list">
          <li className="bullet-item">
            No ads and no limitations in premium.
          </li>
          <li className="bullet-item">
            Strong focus on user experience, design, and development of new
            features (chatbot, community).
          </li>
          <li className="bullet-item">
            &quot;Rebel factor&quot;: A slight political edge for those who want
            more control and want to show it in everyday life.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">9. App Mission</h2>
        <blockquote>
          &quot;We want to give power back to consumers. Do you want to opt out
          of products from the USA? Or just know who owns your favorite brand?
          UdenUSA makes it easy, fun, and manageable.&quot;
        </blockquote>
        <ul className="bullet-list">
          <li className="bullet-item">
            Underlying vision: Transparency in everyday life, so you don&apos;t
            unknowingly support companies or countries you want to distance
            yourself from.
          </li>
          <li className="bullet-item">
            At the same time, we <em>testify</em> that it&apos;s the consumer
            who decides. Our job is simply to provide the facts.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="section-title">10. Press Contact and Downloads</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Press Kit / Images / Logo</strong>:{' '}
            <a
              href="https://drive.proton.me/urls/8Y6ZV9YR80#YucE49znyHVy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#32d74b', textDecoration: 'none' }}
            >
              Press Assets
            </a>
          </li>
          <li className="bullet-item">
            <strong>Contact Person</strong>: Jonas Pipper (Founder)
            <br />
            <strong>Email</strong>: info@nonusa.org
          </li>
          <li className="bullet-item">
            <strong>Website</strong>:{' '}
            <a href="https://nonusa.org/">nonusa.org/</a>
          </li>
          <li className="bullet-item">
            <strong>Download iOS</strong>:{' '}
            <a
              href="https://apps.apple.com/app/id6742805777"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>{' '}
            +{' '}
            <Image
              src="/images/qr-code-udenusa.png"
              alt="UdenUSA App Store QR Code"
              width={150}
              height={150}
              style={{ verticalAlign: 'middle' }}
              unoptimized
            />
          </li>
        </ul>

        <blockquote>
          Do you have questions or want to know more?
          <br />
          <br />
          We are happy to do interviews and can show how the app helps Danes
          shop more consciously – in under 5 seconds per scan.
        </blockquote>
      </div>

      <hr />

      <div>
        <h2 className="section-title">10a. Contact Us Directly</h2>
        <p className="pressekit-text">
          <strong>Email:</strong>{' '}
          <CopyContact
            value={CONTACT_EMAIL}
            copyLabel="copy"
            copiedLabel="Copied"
          />
        </p>
        <p className="pressekit-text">
          We are happy to answer questions, provide interviews, and demonstrate the app.
        </p>
      </div>

      <hr />

      <div>
        <h2 className="section-title">11. Additional Facts & Possible Angles</h2>
        <ul className="bullet-list">
          <li className="bullet-item">
            <strong>Political interest</strong>: Despite a neutral tone in the
            app itself, there is still a broad discussion in society about
            boycotts, making UdenUSA particularly relevant.
          </li>
          <li className="bullet-item">
            <strong>Market need</strong>: No similar Danish apps with the same
            focus on Premium experience and real-time scanning.
          </li>
          <li className="bullet-item">
            <strong>Social theme</strong>: Why is opting out of US products
            becoming a theme right now? Global trade conflict, cultural
            differences, political tensions, etc.
          </li>
          <li className="bullet-item">
            <strong>User feedback</strong>: Many are surprised by how extensive
            American ownership is of everyday brands.
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h3 className="section-title">Final Note</h3>
        <p className="pressekit-text">
          UdenUSA is for everyone who wants to take back control. Whether
          it&apos;s politically motivated, simple curiosity, or pure principle,
          we give the individual <strong>consumer the power</strong> – without
          painting everyone with the same brush.
        </p>

        <p className="pressekit-text">
          <strong>Thank you for your interest!</strong>
        </p>

        <p className="pressekit-text">
          — <em>Team UdenUSA</em>
        </p>
      </div>

      <Link href="/" className="back-link">
        {backToHome}
      </Link>
    </div>
  );
}

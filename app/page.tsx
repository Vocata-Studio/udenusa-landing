'use client';

import { useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import AppETA from '@/components/AppETA';
import QRModal from '@/components/QRModal';
import LogoLoop from '@/components/LogoLoop';
import GlobeStats from '@/components/GlobeStats';
import { useLanguage } from '@/lib/LanguageContext';
import Script from 'next/script';

const AndroidIcon = () => (
  <svg
    className="button-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6,18c0,0.55 0.45,1 1,1h1v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5V19h2v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5V19h1c0.55,0 1,-0.45 1,-1V8H6v10zM3.5,8C2.67,8 2,8.67 2,9.5v7c0,0.83 0.67,1.5 1.5,1.5S5,17.33 5,16.5v-7C5,8.67 4.33,8 3.5,8zM20.5,8c-0.83,0 -1.5,0.67 -1.5,1.5v7c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5v-7c0,-0.83 -0.67,-1.5 -1.5,-1.5zM15.53,2.16l1.3,-1.3c0.2,-0.2 0.2,-0.51 0,-0.71 -0.2,-0.2 -0.51,-0.2 -0.71,0l-1.48,1.48C13.85,1.23 12.95,1 12,1c-0.96,0 -1.86,0.23 -2.66,0.63L7.85,0.15c-0.2,-0.2 -0.51,-0.2 -0.71,0 -0.2,0.2 -0.2,0.51 0,0.71l1.31,1.31C6.97,3.26 6,5.01 6,7h12c0,-1.99 -0.97,-3.75 -2.47,-4.84zM10,5H9V4h1v1zM15,5h-1V4h1v1z"/>
  </svg>
);

export default function Home() {
  const { t, language } = useLanguage();
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const pressMentions = [
    {
      src: '/images/press-logos/press-logos-batch2/wsj-logo.png',
      alt: 'The Wall Street Journal',
      href: 'https://www.wsj.com/livecoverage/greenland-trump-tariffs-trade-eu/card/danes-use-apps-to-help-them-avoid-u-s-goods-QDHlt3nRTDgGcUwUNBgj?gaa_at=eafs&gaa_n=AWEtsqfrPabZS03bohCyZ6rJ45f0bffU1Z_hfJSKISEnBKz6KZ5vs49mWELOFS6-BH0%3D&gaa_ts=69736561&gaa_sig=h_LnerrT0n0GItJOqtaSQSwu8dVxhernlGeI5LvzDJMMgE08o0Do6sHmteJ-XbzSh26xxxU7DEDbXQ3RJhf3XQ%3D%3D',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/Tv-Midtvest-logo.png',
      alt: 'TV Midtvest',
      href: 'https://www.tvmidtvest.dk/morsoe/21-arigs-app-topper-hitliste-det-er-surrealistisk-e62fd',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/DER-SPIEGEL-logo.jpeg',
      alt: 'Der Spiegel',
      href: 'https://www.spiegel.de/wirtschaft/service/groenland-streit-im-supermarkt-viele-daenen-wollen-offenbar-us-waren-boykottieren-a-b1ab84a9-7879-4ad4-a1e2-c971cbb8edfa',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/Ekstra-Bladet-logo.png',
      alt: 'Ekstra Bladet',
      href: 'https://ekstrabladet.dk/forbrug/Teknologi/21-aarig-udnytter-trump-kaos-app-stikker-helt-af/11065512',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/TechCrunch-logo.jpeg',
      alt: 'TechCrunch',
      href: 'https://techcrunch.com/2026/01/21/apps-for-boycotting-american-products-surge-to-the-top-of-the-danish-app-store/',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/new-york-times-logo-png_seeklogo-390509.png',
      alt: 'The New York Times',
      href: 'https://www.nytimes.com/2026/02/03/world/europe/denmark-trump-boycott.html?unlocked_article_code=1.JVA.USJC.JRbBVBHrHUNs&smid=url-share',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/Associated_Press_logo_2012.png',
      alt: 'Associated Press',
      href: 'https://apnews.com/article/denmark-greenland-trump-boycott-apps-93071df9a5b8aec8116c37730d175a46',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/dr-logo.png',
      alt: 'DR',
      href: 'https://www.dr.dk/nyheder/indland/apps-der-kan-frasortere-amerikanske-varer-stryger-til-tops',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/Computer-World-logov2.png',
      alt: 'Computerworld',
      href: 'https://www.computerworld.dk/art/294241/morgen-briefing-dansk-app-rider-paa-trump-boelge-politiet-dropper-x-iran-slukker-for-droemmen-om-skotlands-uafhaengighed',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/Euronews-logo-v2.png',
      alt: 'Euronews',
      href: 'https://www.euronews.com/next/2026/01/22/shoppers-in-denmark-turn-to-apps-to-boycott-us-products-amid-greenland-tensions',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/Her-paa-oen-logo.png',
      alt: 'Her på øen',
      href: 'https://herpaaoeen.dk/lokal-app-stormer-frem/',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/irish-time-logo.png',
      alt: 'The Irish Times',
      href: 'https://www.irishtimes.com/world/europe/2026/01/21/danish-app-urging-shoppers-to-boycott-us-goods-surges-in-popularity/',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/tv-nord-logo.png',
      alt: 'TV Nord',
      href: 'https://www.tv2nord.dk/morsoe/usa-app-hitter-ovenpa-gronlandskrise-05607',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/corriere-logo.jpeg',
      alt: 'Corriere della Sera',
      href: 'https://www.corriere.it/tecnologia/26_gennaio_23/in-danimarca-boom-delle-app-per-boicottare-i-prodotti-che-arrivano-dagli-usa-ffd57493-c28f-4a2b-aba1-ebe4855eexlk.shtml',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/limfjord-update-logo.png',
      alt: 'Limfjord Update',
      href: 'https://www.limfjordupdate.dk/unge-fra-mors-har-udviklet-ny-af-der-advarer-imod-amerikanske-varer/',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/cybernews-logo.png',
      alt: 'CyberNews',
      href: 'https://cybernews.com/tech/danish-app-boycott-usa/',
      width: 240,
      height: 80,
    },
    {
      src: '/images/press-logos/press-logos-batch2/tv2-no-logo.png',
      alt: 'TV 2 Norge',
      href: 'https://www.tv2.no/nyheter/usa-uroen-rammer-butikkhyllene/18486343/',
      width: 240,
      height: 80,
    },
  ];

  return (
    <>
      <div className="announcement-banner">
        <div className="banner-content">
          <span className="banner-text">{t.bannerText}</span>
          <a href="https://app.udenusa.dk" className="banner-button" target="_blank" rel="noreferrer">
            {t.bannerButton}
          </a>
        </div>
      </div>

      <header>
        <LanguageSwitcher />
        <div className="app-screenshots">
          <Image
            src="/images/screenshot-american-phonmockup.png"
            alt="Screenshot af amerikansk produkt"
            width={250}
            height={500}
            className="screenshot left"
          />
          <Image
            src="/images/screenshot-nonamerican-phonemockup.png"
            alt="Screenshot af dansk produkt"
            width={250}
            height={500}
            className="screenshot right"
          />
        </div>
        <h1>
          <span>{language === 'da' ? 'UdenUSA' : 'NonUSA'}</span>{' '}
          <Image
            src="/images/UdenUSAtransparent.png"
            alt="UdenUSA Logo"
            width={70}
            height={70}
            className="logo-image"
          />
        </h1>
        <p className="tagline">{t.tagline}</p>
        <p className="description">{t.description}</p>
        <div className="cta-buttons">
          <a href="/download" className="cta" id="downloadButton">
            {t.ctaButton}
          </a>
          <a
            href="https://app.udenusa.dk"
            className="cta cta-web"
            target="_blank"
            rel="noreferrer"
          >
            {t.ctaWebButton}
          </a>
        </div>
        <div className="store-badges">
          <a
            href="https://play.google.com/store/apps/details?id=dk.vocatastudio.UdenUSA"
            className="store-badge"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/download-on-images/get-it-on-google-play-badge-seeklogo.png"
              alt="Get it on Google Play"
              width={180}
              height={54}
              className="store-badge-img"
            />
          </a>
          <a
            href="https://apps.apple.com/dk/app/nonusa/id6742805777"
            className="store-badge"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/download-on-images/download-on-the-app-store-flat-badge-seeklogo.png"
              alt="Download on the App Store"
              width={180}
              height={54}
              className="store-badge-img"
            />
          </a>
        </div>
        <p className="app-availability">{t.appAvailability}</p>
        <div className="qr-code">
          <Image
            src="/images/universal-download-qr-code-v2.png"
            alt="UdenUSA App Store QR Code"
            width={180}
            height={180}
            className="qr-code-img"
            onClick={() => setQrModalOpen(true)}
          />
          <div className="qr-code-text">{t.qrCode}</div>
        </div>

        <div className="status-arrow">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#32d74b" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M20 5 L20 30 M20 30 L12 22 M20 30 L28 22"
              stroke="url(#arrowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <AppETA />

        <a
          href="https://vocata.studio"
          className="vocata-badge"
          target="_blank"
          rel="noreferrer"
        >
          <svg className="vocata-badge-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="vocata-badge-label">Vocata Studio</span>
          <span className="vocata-badge-heading">{t.vocataHeading}</span>
          <span className="vocata-badge-sub">{t.vocataSubheading}</span>
        </a>
      </header>

      <Newsletter />

      <section className="press-section">
        <h2 className="press-title">{t.pressTitle}</h2>
        <LogoLoop
          logos={pressMentions}
          speed={100}
          direction="left"
          logoHeight={80}
          gap={60}
          pauseOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          scaleOnHover
          ariaLabel={t.pressTitle}
        />
      </section>

      <GlobeStats />

      <SocialIcons />

      <section className="problem">
        <h2>{t.problemTitle}</h2>
        <p>{t.problemText}</p>
      </section>

      <section className="solution">
        <h2>{t.solutionTitle}</h2>
        <ul>
          {t.solutionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="quote">
        <p>{t.quote}</p>
      </section>

      <FAQ />

      <Footer />

      <QRModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'UdenUSA',
            description:
              'UdenUSA hjælper dig med at identificere amerikanske produkter og finder alternativer fra resten af verden.',
            operatingSystem: ['iOS', 'Android', 'Web'],
            applicationCategory: 'ShoppingApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'DKK',
            },
            author: {
              '@type': 'Organization',
              name: 'UdenUSA',
              url: 'https://udenusa.dk',
            },
            screenshot:
              'https://udenusa.dk/images/screenshot-nonamerican-phonemockup.png',
            softwareVersion: '1.0',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '25',
            },
          }),
        }}
      />

    </>
  );
}

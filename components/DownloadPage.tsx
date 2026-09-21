"use client";

import DownloadRedirect from "@/components/DownloadRedirect";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ANDROID_STORE_URL,
  IOS_STORE_URL,
  WEB_APP_URL,
} from "@/lib/store-links";

/**
 * Shared by both route trees: /download/ on udenusa.dk and /<lang>/download/ on
 * nonusa.org. The store URLs are the same everywhere — Google Play and the App
 * Store localize their own listing from the visitor's account region, not from
 * the link that sent them.
 */
export default function DownloadPage() {
  const { t } = useLanguage();

  return (
    <main className="download-page">
      <div className="download-card">
        <p className="download-eyebrow">{t.downloadEyebrow}</p>
        <h1>{t.downloadTitle}</h1>
        <p className="download-copy">{t.downloadCopy}</p>
        <div className="download-actions">
          <a className="cta" href={ANDROID_STORE_URL} rel="noreferrer">
            Google Play
          </a>
          <a className="cta" href={IOS_STORE_URL} rel="noreferrer">
            App Store
          </a>
          <a className="cta cta-web" href={WEB_APP_URL} rel="noreferrer">
            {t.downloadWebButton}
          </a>
        </div>
        <p className="download-fallback">{t.downloadNote}</p>
      </div>
      <DownloadRedirect androidUrl={ANDROID_STORE_URL} iosUrl={IOS_STORE_URL} />
    </main>
  );
}

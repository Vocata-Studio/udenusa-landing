import type { Metadata } from "next";
import DownloadRedirect from "./DownloadRedirect";

const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=dk.vocatastudio.UdenUSA";
const IOS_STORE_URL = "https://apps.apple.com/us/app/nonusa/id6742805777";
const WEB_APP_URL = "https://app.udenusa.dk/";

export const metadata: Metadata = {
  title: "Download UdenUSA",
  description:
    "Download UdenUSA til iOS eller Android, eller brug webappen direkte.",
  alternates: {
    canonical: "/download/",
  },
  openGraph: {
    title: "Download UdenUSA",
    description:
      "Download UdenUSA til iOS eller Android, eller brug webappen direkte.",
    images: ["/images/UdenUSAtransparent.png"],
    url: "/download/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download UdenUSA",
    description:
      "Download UdenUSA til iOS eller Android, eller brug webappen direkte.",
    images: ["/images/UdenUSAtransparent.png"],
  },
};

export default function DownloadPage() {
  return (
    <main className="download-page">
      <div className="download-card">
        <p className="download-eyebrow">UdenUSA App</p>
        <h1>Download UdenUSA</h1>
        <p className="download-copy">
          Vælg din platform. Du bliver automatisk sendt videre til den rigtige
          butik.
        </p>
        <div className="download-actions">
          <a className="cta" href={ANDROID_STORE_URL} rel="noreferrer">
            Google Play
          </a>
          <a className="cta" href={IOS_STORE_URL} rel="noreferrer">
            App Store
          </a>
          <a className="cta cta-web" href={WEB_APP_URL} rel="noreferrer">
            Brug webappen
          </a>
        </div>
        <p className="download-fallback">
          Hvis du ikke bliver sendt videre, vælg en knap ovenfor.
        </p>
      </div>
      <DownloadRedirect
        androidUrl={ANDROID_STORE_URL}
        iosUrl={IOS_STORE_URL}
        webUrl={WEB_APP_URL}
      />
    </main>
  );
}

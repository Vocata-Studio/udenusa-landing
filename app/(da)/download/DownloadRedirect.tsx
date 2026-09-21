"use client";

import { useEffect } from "react";

const isAndroidUserAgent = (userAgent: string) => /Android/i.test(userAgent);
const isIosUserAgent = (userAgent: string) => /iPhone|iPad|iPod/i.test(userAgent);

type DownloadRedirectProps = {
  androidUrl: string;
  iosUrl: string;
  webUrl: string;
};

export default function DownloadRedirect({
  androidUrl,
  iosUrl,
  webUrl,
}: DownloadRedirectProps) {
  useEffect(() => {
    const userAgent = navigator.userAgent ?? "";
    let targetUrl = webUrl;

    if (isAndroidUserAgent(userAgent)) {
      targetUrl = androidUrl;
    } else if (isIosUserAgent(userAgent)) {
      targetUrl = iosUrl;
    }

    window.location.replace(targetUrl);
  }, [androidUrl, iosUrl, webUrl]);

  return null;
}

"use client";

import { useEffect } from "react";

const isAndroidUserAgent = (userAgent: string) => /Android/i.test(userAgent);
const isIosUserAgent = (userAgent: string) => /iPhone|iPad|iPod/i.test(userAgent);

type DownloadRedirectProps = {
  androidUrl: string;
  iosUrl: string;
};

/**
 * Sends phones straight to their own store — that is the whole point of handing
 * someone a single /download/ link. Desktop deliberately stays put: bouncing it
 * to the web app meant nobody ever saw the page, and a route that redirects
 * every visitor cannot be indexed no matter what its canonical claims.
 */
export default function DownloadRedirect({
  androidUrl,
  iosUrl,
}: DownloadRedirectProps) {
  useEffect(() => {
    const userAgent = navigator.userAgent ?? "";

    if (isAndroidUserAgent(userAgent)) {
      window.location.replace(androidUrl);
    } else if (isIosUserAgent(userAgent)) {
      window.location.replace(iosUrl);
    }
  }, [androidUrl, iosUrl]);

  return null;
}

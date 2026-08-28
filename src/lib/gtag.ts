export const GTAG_ID = "AW-18340428842";
export const GTAG_CONVERSION_SEND_TO = "AW-18340428842/65aUCNGgit8cEKr4sqlE";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackAdsConversion() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("event", "conversion", {
    send_to: GTAG_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "MXN",
  });
}

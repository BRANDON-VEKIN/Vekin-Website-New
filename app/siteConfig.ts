/**
 * Absolute origin used for canonical URLs, Open Graph tags and the sitemap.
 * Override per-environment with NEXT_PUBLIC_SITE_URL (no trailing slash needed).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vekin.tech").replace(
  /\/+$/,
  ""
);

export const SITE_NAME = "VEKIN";

export const CONTACT_EMAIL = "contact@vekin.co.th";

/**
 * Where the newsletter form POSTs {"email": "..."}. Set
 * NEXT_PUBLIC_NEWSLETTER_ENDPOINT to your list provider's URL; while it is
 * empty the form falls back to opening a pre-filled email to CONTACT_EMAIL,
 * so a subscription is never silently dropped.
 */
export const NEWSLETTER_ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ?? "";

export const ORGANIZATION = {
  name: "VEKIN (Thailand) Co., Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/VEKIN Resource all Product/Vekin_logo.png`
};

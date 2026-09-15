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

/**
 * Where the contact form POSTs the enquiry as JSON: topic, subTopic, role,
 * email, phone and message. Set NEXT_PUBLIC_CONTACT_ENDPOINT to your form
 * handler's URL; while it is empty the form hands the enquiry to the visitor's
 * mail client pre-filled, so an enquiry is never silently dropped.
 */
export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

/**
 * Share card used by any route that does not name its own. It is the
 * homepage's own hero image, so a link to vekin.tech previews as the site
 * rather than as an empty card.
 */
export const DEFAULT_SHARE_IMAGE = "/VEKIN Resource all Product/VEKIN 1/IS_BG9.webp";

export const ORGANIZATION = {
  name: "VEKIN (Thailand) Co., Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/VEKIN Resource all Product/Vekin_logo.png`
};

/**
 * Absolute origin used for canonical URLs, Open Graph tags and the sitemap.
 * Override per-environment with NEXT_PUBLIC_SITE_URL (no trailing slash needed).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vekin.tech").replace(
  /\/+$/,
  ""
);

export const SITE_NAME = "VEKIN";

export const ORGANIZATION = {
  name: "VEKIN (Thailand) Co., Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/VEKIN Resource all Product/Vekin_logo.png`
};

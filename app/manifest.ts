import type { MetadataRoute } from "next";

import { SITE_NAME } from "./siteConfig";

/**
 * Names the site when someone adds it to a phone home screen, and supplies the
 * colours the browser paints around it. Icons come from app/icon.png and
 * app/apple-icon.png, which Next serves at these paths.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Carbon Management from Day One`,
    short_name: SITE_NAME,
    description:
      "Deep-tech carbon management: AI and blockchain solutions that help organisations measure, verify and improve sustainability performance.",
    start_url: "/",
    display: "standalone",
    background_color: "#04120f",
    theme_color: "#04120f",
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}

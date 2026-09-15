import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import HashScroll from "./components/HashScroll";
import { SiteLanguageProvider } from "./components/siteLanguage";
import { DEFAULT_SHARE_IMAGE, SITE_NAME, SITE_URL } from "./siteConfig";

const description =
  "Immersive sustainability experiences, organizer tools, and carbon-aware event storytelling.";

/**
 * Site-wide defaults. Routes that call pageMetadata() override the title,
 * description and share image; everything else inherits these, so no page
 * shares as a blank card.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VEKIN | Immersive Sustainability",
  description,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "VEKIN | Immersive Sustainability",
    description,
    images: [{ url: DEFAULT_SHARE_IMAGE, alt: SITE_NAME }]
  },
  twitter: {
    card: "summary_large_image",
    title: "VEKIN | Immersive Sustainability",
    description,
    images: [DEFAULT_SHARE_IMAGE]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <SiteLanguageProvider>
          <HashScroll />
          {children}
          <Footer />
        </SiteLanguageProvider>
      </body>
    </html>
  );
}

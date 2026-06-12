import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { SiteLanguageProvider } from "./components/siteLanguage";

export const metadata: Metadata = {
  title: "VEKIN | Immersive Sustainability",
  description: "Immersive sustainability experiences, organizer tools, and carbon-aware event storytelling."
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
          {children}
          <Footer />
        </SiteLanguageProvider>
      </body>
    </html>
  );
}

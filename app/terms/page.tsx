import LegalPage from "../components/LegalPage";
import { termsOfService } from "../components/legalData";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms covering your use of the VEKIN website — acceptable use, intellectual property, third-party links, and limits of liability.",
  path: "/terms"
});

export default function TermsPage() {
  return <LegalPage doc={termsOfService} />;
}

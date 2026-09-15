import LegalPage from "../components/LegalPage";
import { privacyPolicy } from "../components/legalData";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What personal data this website collects, why it is collected, and how to access, correct or delete it under Thailand's PDPA and the UK GDPR.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}

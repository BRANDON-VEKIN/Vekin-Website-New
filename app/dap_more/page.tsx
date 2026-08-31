import Header from "../components/Header";
import DAP_SM_Segment1 from "../components/DAPSegments/DAP_SM_Segment1";


import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Product Suite Overview",
  description:
    "Access and fully orchestrate specialised environmental data suites and smart energy automation utilities inside a unique ecosystem.",
  path: "/dap_more"
});

export default function DapPage() {
  return (
    <>
      <Header />
      <DAP_SM_Segment1 />
    </>
  );
}
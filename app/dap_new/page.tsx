import Header from "../components/Header";
import DAP_Segment1 from "../components/DAPSegments/DAP_Segment1";
import DAP_Segment2 from "../components/DAPSegments/DAP_Segment2";
import DAP_Segment4 from "../components/DAPSegments/DAP_Segment4";
import DAP_Segment5 from "../components/DAPSegments/DAP_Segment5";
import DAP_Segment6 from "../components/DAPSegments/DAP_Segment6";

import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "DAP — Decarbonization and Accreditation Platform",
  description:
    "DAP helps organisations navigate sustainability standards and achieve net-zero targets, integrating data analytics, rigorous verification protocols and recognised accreditation frameworks.",
  path: "/dap_new"
});

export default function DapPage() {
  return (
    <>
      <Header />
      <DAP_Segment1 />
      <DAP_Segment2 />

      <DAP_Segment4 />
      <DAP_Segment5 />
      <DAP_Segment6 />
    </>
  );
}
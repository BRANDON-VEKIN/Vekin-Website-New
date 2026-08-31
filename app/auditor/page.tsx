import Header from "../components/Header";
import AuditorSegment1 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment1";
import AuditorSegment2 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment2";
import AuditorSegment3 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment3";
import AuditorSegment4 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment4";
import AuditorSegment5 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment5";
import AuditorSegment6 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment6";
import AuditorSegment7 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment7";
import AuditorSegment8 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment8";
import AuditorSegment12 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment12";
import AuditorSegment13 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment13";
import AuditorSegment14 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment14";
import AuditorSegment15 from "../components/AIEnergyAuditorPageSegments/Auditor_Segment15";
import A_Segment from "../components/AIEnergyAuditorPageSegments/A_Segment";
import A_Segment2 from "../components/AIEnergyAuditorPageSegments/A_Segment2";
import A_Segment3 from "../components/AIEnergyAuditorPageSegments/A_Segment3";
import A_Segment4 from "../components/AIEnergyAuditorPageSegments/A_Segment4";

import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "AI Energy Auditor",
  description:
    "An intelligent platform that optimises energy efficiency through real-time monitoring and predictive analytics, turning energy data into trusted proof for savings, green finance and carbon opportunities.",
  path: "/auditor"
});

export default function AuditorPage() {
  return (
    <>
      <Header />
      <main className="bg-[#000000]">
        <A_Segment/>
        <A_Segment2 />
        <A_Segment4 />
        <A_Segment3 />
        <AuditorSegment12 />
        <AuditorSegment13 />
        <AuditorSegment8 />
        <AuditorSegment14 />
        <AuditorSegment15 />
      </main>
    </>
  );
}

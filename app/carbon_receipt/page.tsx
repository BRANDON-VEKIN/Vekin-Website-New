import Header from "../components/Header";
import CarbonSegment1 from "../components/CarbonReceiptSegments/Carbon_Segment1";
import CarbonSegment2 from "../components/CarbonReceiptSegments/Carbon_Segment2";
import CarbonSegment3 from "../components/CarbonReceiptSegments/Carbon_Segment3";
import CarbonSegment4 from "../components/CarbonReceiptSegments/Carbon_Segment4";
import CarbonSegment5 from "../components/CarbonReceiptSegments/Carbon_Segment5";
import CarbonSegment6 from "../components/CarbonReceiptSegments/Carbon_Segment6";
import CarbonSegment8 from "../components/CarbonReceiptSegments/Carbon_Segment8";
import CarbonSegment9 from "../components/CarbonReceiptSegments/Carbon_Segment9";
import CarbonSegment10 from "../components/CarbonReceiptSegments/Carbon_Segment10";



import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Carbon Receipt",
  description:
    "Carbon Receipt captures and verifies carbon footprints for individual transactions, giving organisations transparent, ISO 14064-1-compliant emission tracking and real-time, verifiable data.",
  path: "/carbon_receipt"
});

export default function CarbonReceiptPage() {
  return (
    <>
      <Header />
      <CarbonSegment1 />
      <CarbonSegment2 />
      <CarbonSegment3 />
      <CarbonSegment4 />
      <CarbonSegment5 />
      <CarbonSegment6 />
      
      <CarbonSegment8 />
      <CarbonSegment9 />
      <CarbonSegment10 />
    </>
  );
}

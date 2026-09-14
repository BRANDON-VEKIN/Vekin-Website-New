import Header from "../components/Header";
import ECSegment1 from "../components/NewECRSegments/EC_Segment1";




import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "E-Carbon Receipts",
  description:
    "Digital receipts that pair every transaction with verified carbon data, so emissions are recorded and auditable alongside the sale itself.",
  path: "/new_ec",
  image: "/VEKIN Resource all Product/VEKIN 6/EC_BG.png"
});

export default function ECPage() {
  return (
    <>
      <Header />
      <ECSegment1 />
    </>
  );
}
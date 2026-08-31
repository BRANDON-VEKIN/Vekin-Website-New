import Header from "../components/Header";
import Methodology_Segment1 from "../components/NewECRSegments/Methodology_Segment1";


import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Our Methodology",
  description:
    "How VEKIN measures emissions across transport, production and distribution — optimising each stage to cut fuel use and carbon while keeping the supply chain efficient.",
  path: "/methodology"
});

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <Methodology_Segment1 />
    </>
  );
}
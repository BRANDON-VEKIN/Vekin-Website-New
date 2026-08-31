import Header from "./components/Header";
import Segment1 from "./components/ImmersiveSustainabilitySegments/Segment1";
import Segment2 from "./components/ImmersiveSustainabilitySegments/Segment2";
import Segment3 from "./components/ImmersiveSustainabilitySegments/Segment3";
import Segment4 from "./components/ImmersiveSustainabilitySegments/Segment4";
import Segment5 from "./components/ImmersiveSustainabilitySegments/Segment5";
import Segment6 from "./components/ImmersiveSustainabilitySegments/Segment6";
import Segment7 from "./components/ImmersiveSustainabilitySegments/Segment7";
import Segment8 from "./components/ImmersiveSustainabilitySegments/Segment8";
import Segment9 from "./components/ImmersiveSustainabilitySegments/Segment9";
import Segment10 from "./components/ImmersiveSustainabilitySegments/Segment10";
import Segment11 from "./components/ImmersiveSustainabilitySegments/Segment11";

import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Immersive Sustainability",
  description:
    "Technology that blends sustainability data with on-site experiences, helping attendees understand the value of reducing carbon in a clear way.",
  path: "/"
});

export default function Home() {
  return (
    <>
      <Header />
      <Segment1 />
      <Segment2 />
      <Segment3 />
      <Segment4 />
      <Segment5 />
      <Segment6 />
      <Segment7 />
      <Segment8 />
      <Segment9 />
      <Segment10 />
      <Segment11 />
    </>
  );
}

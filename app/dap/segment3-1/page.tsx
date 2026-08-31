import Header from "../../components/Header";
import DAPSegment3_1 from "../../components/DAPSegments/DAP_Segment3-1";

export const metadata = {
  title: "DAP Detail 3",
  // Thin internal sub-page: reachable by link, kept out of search results.
  robots: { index: false, follow: true }
};

export default function Page() {
    return (
        <>
            <Header />
            <DAPSegment3_1 />
        </>
    );
}

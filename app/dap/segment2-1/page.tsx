import Header from "../../components/Header";
import DAPSegment2_1 from "../../components/DAPSegments/DAP_Segment2-1";

export const metadata = {
  title: "DAP Detail 2",
  // Thin internal sub-page: reachable by link, kept out of search results.
  robots: { index: false, follow: true }
};

export default function Page() {
    return (
        <>
            <Header />
            <DAPSegment2_1 />
        </>
    );
}

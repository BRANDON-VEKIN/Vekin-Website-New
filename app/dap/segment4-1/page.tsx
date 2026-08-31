import Header from "../../components/Header";
import DAPSegment4_1 from "../../components/DAPSegments/DAP_Segment4-1";

export const metadata = {
  title: "DAP Detail 4",
  // Thin internal sub-page: reachable by link, kept out of search results.
  robots: { index: false, follow: true }
};

export default function Page() {
    return (
        <>
            <Header />
            <DAPSegment4_1 />
        </>
    );
}

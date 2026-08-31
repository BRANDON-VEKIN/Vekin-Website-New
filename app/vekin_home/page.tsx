import Header from "../components/Header";
import Vekin_Home_Full1 from "../components/VekinHomeSegments/Vekin_Home_Full1";




import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Carbon Management from Day One",
  description:
    "Deep-tech solutions integrating AI and blockchain, helping organisations measure, verify and improve their sustainability performance from day one.",
  path: "/vekin_home"
});

export default function DapPage() {
  return (
    <>
      <Header />
      <Vekin_Home_Full1/>
    </>
  );
}
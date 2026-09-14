import type { Metadata } from "next";

import StatusScreen from "./components/StatusScreen";

export const metadata: Metadata = {
  title: "Page not found — VEKIN",
  // A 404 carries no content worth indexing, and indexing it would compete
  // with the real pages.
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <StatusScreen
      code="404"
      title={{ th: "ไม่พบหน้าที่คุณค้นหา", en: "We couldn't find that page" }}
      body={{
        th: "หน้านี้อาจถูกย้าย เปลี่ยนชื่อ หรือลิงก์ที่คุณตามมาอาจพิมพ์ผิด ลองเริ่มจากหน้าแรกหรือดูโซลูชันของเรา",
        en: "The page may have moved or been renamed, or the link you followed may have a typo. Try starting from the homepage, or take a look at our solutions."
      }}
      actions={[
        { href: "/", label: { th: "กลับหน้าแรก", en: "Back to home" } },
        { href: "/solutions", label: { th: "ดูโซลูชัน", en: "Browse solutions" } },
        { href: "/contact", label: { th: "ติดต่อเรา", en: "Contact us" } }
      ]}
    />
  );
}

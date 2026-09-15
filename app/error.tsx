"use client";

import { useEffect } from "react";

import StatusScreen from "./components/StatusScreen";

/**
 * Catches a render or data error anywhere below the root layout. `reset` re-runs
 * the failed segment, which is often enough for a transient failure.
 */
export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the browser console and in the server log for the digest.
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      code="500"
      title={{ th: "เกิดข้อผิดพลาดบางอย่าง", en: "Something went wrong" }}
      body={{
        th: "ขออภัย หน้านี้โหลดไม่สำเร็จ ลองใหม่อีกครั้งได้เลย หากยังเกิดปัญหาอยู่ โปรดแจ้งให้เราทราบ",
        en: "Sorry — this page failed to load. Trying again often clears it. If it keeps happening, please let us know."
      }}
      // The digest is the only handle support has on a production stack trace,
      // so it is worth showing; the message itself is not shown in production.
      detail={error.digest ? `Reference: ${error.digest}` : undefined}
      actions={[
        { label: { th: "ลองใหม่อีกครั้ง", en: "Try again" }, onClick: reset },
        { href: "/", label: { th: "กลับหน้าแรก", en: "Back to home" } },
        { href: "/contact", label: { th: "แจ้งปัญหา", en: "Report it" } }
      ]}
    />
  );
}

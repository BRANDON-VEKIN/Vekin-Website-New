import React from "react";

type LocalizedTextProps = {
	as?: React.ElementType;
	th: string;
	en: string;
	className?: string;
};

function LocalizedText({ as: Component = "div", th, en, className }: LocalizedTextProps) {
	const isThai =
		typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("th");

	return <Component className={className}>{isThai ? th : en}</Component>;
}

export default function AuditorSegment1() {
	return (
<section
  aria-label="AI Auditor Hero"
  className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
>
  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/VEKIN Resource all Product/VEKIN 3/Auditor_Video1.mp4" type="video/mp4" />
    {/* คุณสามารถเพิ่ม source สำรองกรณีเบราว์เซอร์ไม่รองรับ mp4 หรือใส่รูปภาพสำรองได้ที่นี่ */}
  </video>
</section>
	);
}

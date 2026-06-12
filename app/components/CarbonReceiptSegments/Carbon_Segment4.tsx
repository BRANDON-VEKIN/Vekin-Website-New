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

export default function CarbonSegment4() {
    return (
        <section
            aria-label="Carbon Receipt"
            className="relative flex items-center justify-center h-screen w-full overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG2.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <LocalizedText
                    as="h1"
                    th="เพื่อช่วยให้คุณเข้าใจถึงปริมาณการปล่อยก๊าซคาร์บอนจากสิ่งที่คุณสร้างขึ้น"
                    en="TO HELP YOU UNDERSTAND THE CARBON FOOTPRINT OF WHAT YOU CREATE"
                    className=" text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
                />

                <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-20"
                >
                    <button className="rounded-full border border-white px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105">
                        GET SERVICE
                    </button>
                </a>

                <LocalizedText
                    as="h1"
                    th="ด้วยการมอบข้อมูลที่ชัดเจนและตรวจสอบได้ เราจึงเสริมศักยภาพให้คุณส่งมอบผลิตภัณฑ์ที่ยั่งยืนแก่ลูกค้าได้อย่างมั่นใจและแท้จริง."
                    en="BY GIVING YOU CLEAR, VERIFIABLE DATA, WE EMPOWER YOU TO CONFIDENTLY AND TRULY DELIEVER A SUSTAINABLE PRODUCT TO YOUR CUSTOMERS."
                    className="mt-6 max-w-2xl text-white text-sm sm:text-base"
                />
            </div>
        </section>
    );
}


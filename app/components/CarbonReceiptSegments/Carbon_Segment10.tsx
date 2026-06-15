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

export default function CarbonSegment10() {
    return (
        <section
            aria-label="Carbon Receipt"
            className="relative flex items-center justify-center h-screen w-full overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG6.png')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="flex w-full">
                <div className="w-full md:w-1/2 px-6">
                    <LocalizedText
                        as="h1"
                        th="ผู้ช่วยที่เชื่อถือได้ในการตัดสินใจเพื่ออนาคตที่ยั่งยืน"
                        en="A RELIABLE HELPER IN DECESION MAKING FOR A SUSTAINABLE FUTURE"
                        className=" text-[#258974] text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
                    />

                    <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8"
                    >
                        <button
                        className="rounded-full bg-gradient-to-r from-[#00464F] to-[#53BC81] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                        TRY IT NOW
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}


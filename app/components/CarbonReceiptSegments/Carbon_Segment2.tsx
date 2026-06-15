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

export default function CarbonSegment1() {
    return (
    <section
        aria-label="Carbon Receipt"
        className="relative flex items-center h-screen w-full bg-white"
    >
        <div className="relative z-10 flex flex-col items-center text-center px-6">
            <LocalizedText
                as="h1"
                th="สำหรับทุกธุรกรรมที่ขับเคลื่อนด้วยเทคโนโลยีบล็อก"
                en="FOR EVERY TRANSACTION POWERED BY BLOCKCHAIN TECHNOLOGY"
                className="bg-gradient-to-r from-[#00464F] to-[#53BC81] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
            />

            <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
            >
                <button className="rounded-full border border-black px-8 py-3 text-black font-semibold shadow-lg transition hover:scale-105">
                    GET E-CARBON RECEIPT
                </button>
            </a>
        </div>
    </section>
    );
}

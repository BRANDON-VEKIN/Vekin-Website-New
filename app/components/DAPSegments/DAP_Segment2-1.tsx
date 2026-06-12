"use client";

import React, { useState } from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th: string;
    en: string;
    className?: string;
};

function LocalizedText({
    as: Component = "div",
    th,
    en,
    className,
}: LocalizedTextProps) {
    const isThai =
        typeof navigator !== "undefined" &&
        navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th : en}</Component>;
}

const sections = [
    {
        title: "Stage 1",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage1_BG.png",
        text: "DATA HUB FOR SEMALESS AI AUTOMATION",
    },
    {
        title: "Stage 2",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage2_BG.png",
        text: "COMPLIANT REPORTING AND DYNAMICC VISUALIZATION",
    },
    {
        title: "Stage 3",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage3_BG.png",
        text: "ESG VALUE TRANSFER",
    },
];

export default function DAPSegment2_1() {
    const [active, setActive] = useState(0);
    const backgroundImage = sections[active]?.bg ?? sections[0].bg;

    return (
<section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">

    {/* BACKGROUND */}
    <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url("${encodeURI(backgroundImage)}")` }}
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40" />

    {/* MAIN CONTENT WRAPPER */}
    <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-10 gap-12">

        

        {/* LEFT BUTTONS */}
        <div className="flex w-1/4 flex-col gap-4">

            {/* HEADER */}
            <div className="mb-4">
                <h1 className="text-4xl uppercase tracking-widest text-white/70 whitespace-nowrap">
                    Our Process
                </h1>
                <div className="mt-2 h-px w-20 bg-white/50"></div>
            </div>

            {/* BUTTONS */}
            {sections.map((s, index) => (
                <button
                    key={s.title}
                    onClick={() => setActive(index)}
                    className={`rounded-full border px-6 py-3 font-semibold transition-all text-left ${
                        active === index
                            ? "bg-white text-black"
                            : "border-white text-white hover:bg-white/10"
                    }`}
                >
                    {s.title}
                </button>
            ))}
        </div>

        {/* CENTER TEXT CONTAINER */}
        <div className="w-1/2 rounded-2xl bg-white/10 p-8 text-white border border-white/20">
            {/* MAIN TITLE */}
            <LocalizedText
                as="h1"
                th={sections[active].title}
                en={sections[active].title}
                className="text-4xl font-bold mb-6"
            />

            {/* MAIN TEXT */}
            <p className="text-lg text-white/90 leading-relaxed mb-6">
                {sections[active].text}
            </p>

            {/* EXTRA TEXT FIELD (NEW) */}
            <p className="text-sm text-white/70 leading-relaxed">
                Additional insight: This section provides deeper context about {sections[active].title.toLowerCase()}, focusing on operational efficiency, sustainability metrics, and system integration across the supply chain.
            </p>

        </div>

    </div>
</section>
    );
}
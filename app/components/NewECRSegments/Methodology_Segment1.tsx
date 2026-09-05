"use client";

import React, { useState } from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th?: string;
    en?: string;
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
        Boolean(navigator.language) &&
        navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th ?? en : en ?? th}</Component>;
}

const sections = [
    {
        title: "Material Sourcing",
        description:
            "Raw materials are responsibly sourced from verified suppliers, ensuring transparency, sustainability, and compliance with environmental standards throughout the procurement process.",
    },
    {
        title: "Logistic",
        description:
            "Transportation activities are optimized to reduce fuel consumption and emissions while maintaining efficient movement of goods across the supply chain.",
    },
    {
        title: "Processing & Manufacturing",
        description:
            "Production operations utilize energy-efficient processes and resource management practices to minimize environmental impact and improve operational performance.",
    },
    {
        title: "Distribution",
        description:
            "Products are distributed through strategically planned networks that reduce delivery distances, lower carbon emissions, and improve supply chain efficiency.",
    },
    {
        title: "Usage",
        description:
            "During the product lifecycle, energy consumption and operational impacts are monitored to support sustainable use and informed decision-making.",
    },
    {
        title: "Waste Treatment",
        description:
            "End-of-life materials are recovered, recycled, or disposed of through environmentally responsible treatment processes.",
    },
];

export default function Methodology_Segment1() {
    const [selected, setSelected] = useState(0);

    return (
        <section
            aria-label="Carbon Lifecycle"
            className="relative min-h-screen w-full overflow-hidden flex items-center bg-neutral-900"
            style={{
                backgroundImage: `url("/VEKIN Resource all Product/VEKIN 6/EC_BG.png")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
  

            {/* pt clears the fixed header; "safe" centring falls back to the top
                edge when the content is taller than the viewport, so the title
                never ends up underneath the nav on short windows. */}
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 md:px-16 pb-10 pt-28 md:pt-32 [justify-content:safe_center]">
                
                {/* Fixed Header Title */}
                <h1 className="text-3xl md:text-5xl font-semibold text-[#00A79B] mb-8 md:mb-12">
                    Our Methodology
                </h1>

                {/* Master Content Partition Split */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                    
                    {/* LEFT CONTAINER: Row Menu Selectors Placed Above Text Descriptions */}
                    <div className="flex-1 w-full space-y-8 order-2 lg:order-1">
                        
                        {/* Lifecycle Step Menu Selector Row (Positioned Above the Details) */}
                        <div className="flex flex-row flex-nowrap gap-6 overflow-x-auto w-full pb-4 border-b border-white/10 scrollbar-none">
                            {sections.map((section, index) => (
                                <button
                                    key={section.title}
                                    onClick={() => setSelected(index)}
                                    className={`whitespace-nowrap transition-all duration-300 pb-2 text-sm md:text-base ${
                                        selected === index
                                            ? "font-bold text-[#00A79B] border-b-2 border-[#00A79B]"
                                            : "text-black/60 hover:text-[#00A79B]"
                                    }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>

                        {/* Dynamic Context Card Details Layout */}
                        <div className="max-w-2xl space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#00A79B]">
                                {sections[selected].title}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-[#00A79B] backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/5">
                                {sections[selected].description}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CONTAINER: Fixed Phone Illustration Showcase */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full order-1 lg:order-2">
                        <div className="relative w-[280px] sm:w-[340px] md:w-[400px] xl:w-[440px] aspect-[9/19.5] max-h-[75vh] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
                            <img
                                src="/VEKIN Resource all Product/VEKIN 6/E_Carbon_Phone2.png"
                                alt="E-Carbon Phone Interface Framework"
                                className="w-full h-full object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
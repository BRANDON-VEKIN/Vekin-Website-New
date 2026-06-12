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
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide1.png",
        description:
            "Raw materials are responsibly sourced from verified suppliers, ensuring transparency, sustainability, and compliance with environmental standards throughout the procurement process.",
    },
    {
        title: "Logistic",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide2.png",
        description:
            "Transportation activities are optimized to reduce fuel consumption and emissions while maintaining efficient movement of goods across the supply chain.",
    },
    {
        title: "Processing & Manufacturing",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide3.png",
        description:
            "Production operations utilize energy-efficient processes and resource management practices to minimize environmental impact and improve operational performance.",
    },
    {
        title: "Distribution",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide4.png",
        description:
            "Products are distributed through strategically planned networks that reduce delivery distances, lower carbon emissions, and improve supply chain efficiency.",
    },
    {
        title: "Usage",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide5.png",
        description:
            "During the product lifecycle, energy consumption and operational impacts are monitored to support sustainable use and informed decision-making.",
    },
    {
        title: "Waste Treatment",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide6.png",
        description:
            "End-of-life materials are recovered, recycled, or disposed of through environmentally responsible treatment processes.",
    },
];

export default function CarbonSegment3() {
    const [selected, setSelected] = useState(0);

    return (
<section
  aria-label="Carbon Lifecycle"
  className="relative min-h-screen w-full overflow-hidden"
  style={{
    backgroundImage: `url("${sections[selected].image}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 md:px-16 py-10">

    {/* Sticky title */}
    <h1 className="sticky top-0 z-20  py-4 text-3xl md:text-5xl font-semibold text-white">
      Our Methodology
    </h1>

    {/* Content area */}
    <div className="flex flex-1 flex-col md:flex-row items-start md:items-center justify-between gap-10 mt-10">

      {/* Content */}
      <div className="max-w-2xl space-y-6">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          {sections[selected].title}
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-white/90">
          {sections[selected].description}
        </p>
      </div>

      {/* Menu */}
      <div className="flex flex-row md:flex-col gap-4 md:text-right overflow-x-auto md:overflow-visible w-full md:w-auto">
        {sections.map((section, index) => (
          <button
            key={section.title}
            onClick={() => setSelected(index)}
            className={`whitespace-nowrap transition-all duration-300 ${
              selected === index
                ? "text-xl md:text-2xl font-bold text-white"
                : "text-sm md:text-lg text-white/60 hover:text-white"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

    </div>
  </div>
</section>
    );
}
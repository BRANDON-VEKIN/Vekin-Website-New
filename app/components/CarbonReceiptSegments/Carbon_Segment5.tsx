"use client";

import React, { useState, useEffect } from "react";

const items = [
    {
        title: "DECENTRALIZED DATA STORAGE",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button1.png",
        description:
            "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.",
    },
    {
        title: "SMART CONTRACT",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button2.png",
        description:
            "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.",
    },
    {
        title: "PUBLIC KEY ENCRYPTION",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button3.png",
        description:
            "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.",
    },
];

export default function CarbonSegment5() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    // Escape Key Listener to close Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIdx(null);
        };
        if (selectedIdx !== null) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Block page background scrolling
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedIdx]);

    const activeItem = selectedIdx !== null ? items[selectedIdx] : null;

    return (
        <section className="min-h-screen bg-white px-6 py-20 sm:px-10 flex items-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-12 sm:gap-16">
                
                {/* Header Context */}
                <div className="max-w-2xl space-y-3 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-700">
                        Carbon Receipt
                    </p>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        Choose a carbon feature
                    </h2>
                    <p className="text-base text-slate-500 sm:text-lg">
                        Tap one of the feature buttons below to explore the available carbon tools.
                    </p>
                </div>

                {/* Grid Deck */}
                <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((item, index) => (
                        <button
                            key={item.title}
                            type="button"
                            onClick={() => setSelectedIdx(index)}
                            className="group flex flex-col items-center rounded-[24px] bg-transparent p-4 transition-all duration-300 ease-out hover:-translate-y-1.5 text-center"
                        >
                            {/* Transparent Image Wrapper */}
                            <div className="flex h-[400px] w-full items-center justify-center overflow-hidden bg-transparent">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX MODAL DIALOG */}
            {activeItem && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Dark frosted background mask */}
                    <div 
                        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedIdx(null)}
                    />

                    {/* Modal Window Container */}
                    <div className="relative z-10 w-full max-w-2xl transform overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.25)] transition-all sm:p-10 border border-slate-100 flex flex-col md:flex-row items-center gap-8 animate-scale-up">
                        
                        {/* Close Button top-right corner */}
                        <button
                            type="button"
                            onClick={() => setSelectedIdx(null)}
                            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition duration-200"
                            aria-label="Close dialog"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L12 12M12 12l6-6M12 12l-6-6m6 6l6 6" />
                            </svg>
                        </button>

                        {/* Modal Image Wrapper (Transparent) */}
                        <div className="flex h-[200px] w-full max-w-[220px] shrink-0 items-center justify-center bg-transparent sm:h-[240px] sm:max-w-[240px]">
                            <img
                                src={activeItem.image}
                                alt={activeItem.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Info Content Block */}
                        <div className="text-center md:text-left flex-1">
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                                Feature Profile
                            </span>
                            <h3 className="mt-2 text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl leading-tight">
                                {activeItem.title}
                            </h3>
                            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 font-medium">
                                {activeItem.description}
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
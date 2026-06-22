import React from "react";
import Link from "next/link";

import LocalizedText from "../LocalizedText";


export default function DAPSegment6() {
    return (
<section className="relative flex h-screen w-full items-center bg-white overflow-hidden">
    <div className="mx-auto w-full max-w-7xl px-6">
        <div className="w-full md:w-4/5 text-left">
            <LocalizedText
                as="h1"
                th="กระบวนการของเรา"
                en="GET IN TOUCH WITH OUR TEAM TO DISCUSS YOUR ORGANIZATION'S UNIQUE NEEDS."
                className="text-[#01BCA9] text-4xl sm:text-3xl md:text-6xl font-extrabold tracking-tight leading-tight"
            />

            <div className="mt-12">
                <Link href="/dap/segment2-1">
                    <button className="bg-[#01BCA9] rounded-full px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105">
                        Try it now
                    </button>
                </Link>
            </div>
        </div>
    </div>
</section>
        
    );
}


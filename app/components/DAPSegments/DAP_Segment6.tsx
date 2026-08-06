import React from "react";
import Link from "next/link";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";


export default function DAPSegment6() {
    return (
<section className="relative flex h-screen w-full items-center bg-white overflow-hidden">
    <BidirectionalScrollReveal
        as="div"
        className="mx-auto w-full max-w-7xl px-6"
        amount={0.32}
        duration={0.9}
        exitDuration={0.2}
        offset={36}
    >
        <div className="w-full md:w-4/5 text-left">
            <LocalizedText
                as="h1"
                th="กระบวนการของเรา"
                en="GET IN TOUCH WITH OUR TEAM TO DISCUSS YOUR ORGANIZATION'S UNIQUE NEEDS."
                className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent drop-shadow-[0_12px_36px_rgba(59,185,123,0.24)] sm:text-3xl md:text-6xl"
            />

            <div className="mt-12">
                <Link href="/dap/segment2-1">
                    <button className="rounded-full bg-gradient-to-r from-[#00464E] to-[#3BB97B] px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                        Try it now
                    </button>
                </Link>
            </div>
        </div>
    </BidirectionalScrollReveal>
</section>
        
    );
}


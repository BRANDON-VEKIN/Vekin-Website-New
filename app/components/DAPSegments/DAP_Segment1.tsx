import React from "react";

import LocalizedText from "../LocalizedText";


export default function DAPSegment1() {
    return (
        <section
            aria-label="DAP Segment 1"
            className="relative flex items-center justify-center h-screen w-full overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 4/DAP_BG1.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="flex w-full">
                <div className="w-full md:w-1/2 px-6">
                    <LocalizedText
                        as="h1"
                        th="ความแม่นยำในการวัดปริมาณคาร์บอนด้วยระบบ AI ที่คุณวางใจได้"
                        en="AI-POWERED CARBON ACCURACY YOU CAN TRUST"
                        className="text-white bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
                    />
                </div>
            </div>
        </section>
    );
}


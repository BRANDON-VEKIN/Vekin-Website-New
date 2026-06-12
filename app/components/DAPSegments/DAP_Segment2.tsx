import React from "react";
import Link from "next/link";

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

export default function DAPSegment2() {
    return (
    <section
        className="relative  h-[180vh] flex min-h-screen w-full items-center overflow-hidden py-24"
        style={{
            backgroundImage: "url('/VEKIN Resource all Product/VEKIN 4/DAP_BG2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >            
            {/* LEFT-ALIGNED VERTICAL STACK CONTAINER */}
            <div className="relative z-10 flex flex-col w-full max-w-4xl ml-0 mr-auto px-6 sm:px-12 lg:pl-24 gap-64">
                
                {/* TOP PART: OUR PROCESS */}
                <div className="w-full">
                    <LocalizedText
                        as="h1"
                        th="กระบวนการของเรา"
                        en="OUR PROCESS"
                        className="text-[#808080] text-4xl sm:text-3xl md:text-8xl font-extrabold tracking-tight leading-tight"
                    />
                    <LocalizedText
                        as="p"
                        th="ESG ย่อมาจาก Environmental, Social, and Governance ซึ่งเป็นกรอบการทำงานที่ใช้ในการประเมินความยั่งยืนและผลกระทบทางสังคมขององค์กร"
                        en="ESG stands for Environmental, Social, and Governance, which is a framework used to access an organization's sustainability and social impact."
                        className="text-[#808080] text-lg sm:text-sm md:text-xl font-light mt-4 max-w-2xl"
                    />
                    <div className="mt-12">
                        <Link href="/dap/segment2-1">
                            <button className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105">
                                SHOW PROCESS
                            </button>
                        </Link>
                    </div>
                </div>

                {/* BOTTOM PART: CONCEPT & TIMELINE */}
                <div className="w-full">
                    <LocalizedText
                        as="h1"
                        th="แนวคิด"
                        en="CONCEPT"
                        className="text-[#808080] text-4xl sm:text-3xl md:text-8xl font-extrabold tracking-tight leading-tight"
                    />

                    {/* TIMELINE */}
                    <div className="mt-10 w-full max-w-xl relative">
                        {/* LABELS ROW */}
                        <div className="flex w-full justify-between px-2">
                            <span className="text-sm text-gray-500">AI allocates data</span>
                            <span className="text-sm text-gray-500">ESG Data Hub System</span>
                        </div>

                        {/* LINE & DOTS CONTAINER */}
                        <div className="relative mt-3 flex w-full items-center justify-between overflow-visible">
                            {/* FULL-WIDTH RIGHT EXTENDING LINE */}
                            <div className="absolute left-0 w-screen top-1/2 h-px -translate-y-1/2 bg-gray-300 z-0"></div>

                            {/* POINT 1 */}
                            <div className="relative z-10 h-4 w-4 rounded-full bg-[#258974] border-2 border-white shadow"></div>

                            {/* POINT 2 */}
                            <div className="relative z-10 h-4 w-4 rounded-full bg-[#258974] border-2 border-white shadow"></div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="/dap/segment3-1">
                            <button className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full px-8 py-3 text-white font-semibold shadow-lg transition hover:scale-105">
                                SHOW PROCESS
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
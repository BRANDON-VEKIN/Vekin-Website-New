"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSiteLanguage } from "../siteLanguage";
import LifecycleCards from "./LifecycleCards";
import DataBlocks from "./DataBlocks";
import AnnotationCluster from "./AnnotationCluster";
import Constellation from "./Constellation";

/**
 * Five headings, one per beat of the storyboard, each held for the whole time
 * its visual is on screen: the bare tilted phone, the lifecycle cards floating
 * over it, the data blocks blending in, the upright phone with its annotation
 * clusters, and the blocks merging back into the screen.
 */
const HEADINGS: Record<"en" | "th", string[]> = {
    en: [
        "Driving the future of logistics and energy with sustainable solutions.",
        "A strong arrangement of AI.",
        "Recognizes your contribution.",
        "The publish-subscribe (pub/sub) model.",
        "Our methodology."
    ],
    th: [
        "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน",
        "การจัดเตรียมระบบ AI ที่แข็งแกร่ง",
        // "การมีส่วนร่วม" is the wording the blog already uses for
        // contribution; worth a second pair of eyes before launch.
        "เรารับรู้การมีส่วนร่วมของคุณ",
        "โมเดล PUBLISH-SUBSCRIBE (PUB/SUB)",
        // Matches the Thai used for Our Methodology elsewhere on the site.
        "ระเบียบวิธีของเรา"
    ]
};

/**
 * Descriptions, on the same beats. Only two are written per language: the
 * opening line, and one that covers the four AI beats that follow, so the
 * paragraph holds while the headings change above it.
 */
const EN_BENCHMARKS =
    "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.";
const TH_BENCHMARKS =
    "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้";

const DESCRIPTIONS: Record<"en" | "th", string[]> = {
    en: [
        "Document every carbon credit transaction through a blockchain-verified record — ensuring traceability and simplifying your environmental reporting.",
        EN_BENCHMARKS,
        EN_BENCHMARKS,
        EN_BENCHMARKS,
        EN_BENCHMARKS
    ],
    th: [
        "บันทึกทุกธุรกรรมคาร์บอนเครดิตผ่านบันทึกที่ตรวจสอบด้วยบล็อกเชน เพื่อความโปร่งใสที่ตรวจสอบได้ และช่วยลดความยุ่งยากในรายงานด้านสิ่งแวดล้อมของคุณ",
        TH_BENCHMARKS,
        TH_BENCHMARKS,
        TH_BENCHMARKS,
        TH_BENCHMARKS
    ]
};

/** Progress at which each beat hands its copy over to the next. */
const BEAT_SWITCHES = [0.245, 0.425, 0.575, 0.805];

/**
 * How far either side of a handover a line fades, and the blind window in the
 * middle of it where the line is fully out and the words are swapped. Both in
 * scroll-progress units: across a 500vh section, 0.038 is a little over a
 * tenth of a screen of scrolling, which is comfortably more than a single
 * wheel tick — any shorter and a notch of the wheel jumps the whole fade and
 * the handover is back to being a cut.
 */
const FADE = 0.038;
const BLIND = 0.003;

/**
 * Collapses a line's five beats to the runs that actually differ, along with
 * the progress at which each run hands over. The description is written once
 * for the opening beat and once for the four that follow, so without this it
 * would blink out and back in on identical words three times over.
 */
const runs = (copy: string[]) => {
    const words = [copy[0]];
    const switches: number[] = [];
    copy.forEach((line, i) => {
        if (i > 0 && line !== copy[i - 1]) {
            words.push(line);
            switches.push(BEAT_SWITCHES[i - 1]);
        }
    });
    return { words, switches };
};

/** Stops that hold each run and flip to the next inside the blind window. */
const wordStops = (switches: number[]) => [
    0,
    ...switches.flatMap((at) => [at - BLIND, at + BLIND]),
    1
];

/** Values paired against those stops, so each switch is a cut, not a blend. */
const pairUp = (values: string[]) => values.flatMap((v) => [v, v]);

/**
 * The fade and lift that carry a line across its handover, driven straight off
 * the scroll the way everything else in this sequence is. The line drops out
 * just before the beat changes, swaps words while it is invisible, and lifts
 * back in on the other side. Nothing unmounts and nothing leaves the flow, so
 * the text block keeps its height and never shoves the frame around mid-swap.
 */
const fadeStops = (switches: number[]) => ({
    stops: [0, ...switches.flatMap((at) => [at - FADE, at - BLIND, at + BLIND, at + FADE]), 1],
    opacity: [1, ...switches.flatMap(() => [1, 0, 0, 1]), 1],
    y: [0, ...switches.flatMap(() => [0, -10, 14, 0]), 0]
});

export default function ECSegment1() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { language } = useSiteLanguage();
    const router = useRouter();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const isThai = language === "th";

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // ==========================================
    // 1. SEQUENCE ONE OPACITY & VISIBILITY TIMELINES
    // ==========================================
    // The storyboard turns the phone upright rather than cutting to a second
    // still. The two renders overlap through the turn: the tilted one rotates
    // toward vertical as it leaves, the upright one arrives already part-turned
    // and settles, so the eye reads a single continuous rotation.
    const phone1Opacity = useTransform(scrollYProgress, [0, 0.44, 0.56], [1, 1, 0]);
    const phone1Rotate = useTransform(scrollYProgress, [0.44, 0.56], [0, -26]);
    const phone1Visibility = useTransform(scrollYProgress, (v) => v >= 0.56 ? "hidden" : "visible");

    const imgLayers1Opacity = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [0, 1, 1, 0]);
    const imgLayers1Y = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [40, 0, 0, -20]);
    const imgLayers1Scale = useTransform(scrollYProgress, [0.05, 0.18], [0.92, 1]);
    const imgLayers1Visibility = useTransform(scrollYProgress, (v) => v >= 0.42 ? "hidden" : "visible");

    const imgLayer2Opacity = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [0, 1, 1, 0]);

    // The overlay layers live inside wrappers whose opacity this scroll drives,
    // so an in-view observer never fires for them. Latch a flag as each layer
    // starts to appear and let the cards stagger in off that instead.
    const [cardsIn, setCardsIn] = useState(false);
    const [blocksIn, setBlocksIn] = useState(false);
    useMotionValueEvent(imgLayers1Opacity, "change", (v) => {
        if (v > 0.12) setCardsIn(true);
    });
    useMotionValueEvent(imgLayer2Opacity, "change", (v) => {
        if (v > 0.12) setBlocksIn(true);
    });
    const imgLayer2Y = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [50, 0, 0, -30]);
    const imgLayer2Scale = useTransform(scrollYProgress, [0.26, 0.36], [0.90, 1]);
    const imgLayer2Visibility = useTransform(scrollYProgress, (v) => v >= 0.52 ? "hidden" : "visible");


    // ==========================================
    // 2. SEQUENCE TWO MAIN CONTAINER
    // ==========================================
    const phone2Opacity = useTransform(scrollYProgress, [0.0, 0.48, 0.60, 0.93, 0.96], [0, 0, 1, 1, 0]);
    const phone2Rotate = useTransform(scrollYProgress, [0.48, 0.62], [14, 0]);
    const phone2Scale = useTransform(scrollYProgress, [0.48, 0.62], [0.95, 1]);
    const phone2Visibility = useTransform(scrollYProgress, (v) => v < 0.48 || v >= 0.96 ? "hidden" : "visible");


    // ==========================================
    // 3. WIDER FLIGHT TIMELINES (LAYERS 3, 4, 5, 6)
    // ==========================================
    // Held open to 0.95 so the clusters can be seen merging inward.
    const seq2AnimationsVisibility = useTransform(scrollYProgress, (v) => v < 0.58 || v >= 0.95 ? "hidden" : "visible");

    // --- LAYER 3 (Top Left - Pushed further left) ---
    const layer3Opacity = useTransform(scrollYProgress, [0.0, 0.58, 0.66, 0.84, 0.93], [0, 0, 1, 1, 0]);
    const layer3X = useTransform(scrollYProgress, [0.58, 0.66, 0.84, 0.93], [-80, -20, -20, 0]);
    const layer3Y = useTransform(scrollYProgress, [0.58, 0.66, 0.84, 0.93], [-40, 0, 0, 0]);
    const layer3Scale = useTransform(scrollYProgress, [0.58, 0.66, 0.84, 0.93], [0.85, 1, 1, 0.45]);

    // One latch for the whole second sequence: the four annotation clusters
    // stagger in as the first of them starts to fly.
    const [seq2In, setSeq2In] = useState(false);
    useMotionValueEvent(layer3Opacity, "change", (v) => {
        if (v > 0.1) setSeq2In(true);
    });

    // --- LAYER 4 (Top Right - Pushed further right) ---
    const layer4Opacity = useTransform(scrollYProgress, [0.0, 0.62, 0.70, 0.84, 0.93], [0, 0, 1, 1, 0]);
    const layer4X = useTransform(scrollYProgress, [0.62, 0.70, 0.84, 0.93], [80, 20, 20, 0]);
    const layer4Y = useTransform(scrollYProgress, [0.62, 0.70, 0.84, 0.93], [-40, 0, 0, 0]);
    const layer4Scale = useTransform(scrollYProgress, [0.62, 0.70, 0.84, 0.93], [0.85, 1, 1, 0.45]);

    // --- LAYER 5 (Bottom Left - Pushed further left) ---
    const layer5Opacity = useTransform(scrollYProgress, [0.0, 0.66, 0.74, 0.84, 0.93], [0, 0, 1, 1, 0]);
    const layer5X = useTransform(scrollYProgress, [0.66, 0.74, 0.84, 0.93], [-80, -20, -20, 0]);
    const layer5Y = useTransform(scrollYProgress, [0.66, 0.74, 0.84, 0.93], [40, 0, 0, 0]);
    const layer5Scale = useTransform(scrollYProgress, [0.66, 0.74, 0.84, 0.93], [0.85, 1, 1, 0.45]);

    // --- LAYER 6 (Bottom Right - Pushed further right) ---
    const layer6Opacity = useTransform(scrollYProgress, [0.0, 0.70, 0.78, 0.84, 0.93], [0, 0, 1, 1, 0]);
    const layer6X = useTransform(scrollYProgress, [0.70, 0.78, 0.84, 0.93], [80, 20, 20, 0]);
    const layer6Y = useTransform(scrollYProgress, [0.70, 0.78, 0.84, 0.93], [40, 0, 0, 0]);
    const layer6Scale = useTransform(scrollYProgress, [0.70, 0.78, 0.84, 0.93], [0.85, 1, 1, 0.45]);


    // ==========================================
    // 4. TEXT OVERLAYS & SIDEBARS
    // ==========================================
    // The storyboard has this phrase drift across the screen from left to
    // right once the windows have settled, rather than simply popping in.
    const finalTextOverlayOpacity = useTransform(scrollYProgress, [0.0, 0.86, 0.90, 0.94, 0.96], [0, 0, 1, 1, 0]);
    const finalTextOverlayX = useTransform(scrollYProgress, [0.86, 0.96], [-70, 70]);
    const finalTextOverlayScale = useTransform(scrollYProgress, [0.86, 0.90], [0.88, 1]);
    const finalTextOverlayVisibility = useTransform(scrollYProgress, (v) => v < 0.86 || v >= 0.96 ? "hidden" : "visible");

    // Frame five: the data blocks return over the upright phone and draw
    // inward, merging into the screen.
    const seq2BlocksOpacity = useTransform(scrollYProgress, [0.76, 0.83, 0.89, 0.95], [0, 1, 1, 0]);
    const seq2BlocksScale = useTransform(scrollYProgress, [0.76, 0.83, 0.89, 0.95], [1.3, 1, 1, 0.45]);
    const seq2BlocksVisibility = useTransform(scrollYProgress, (v) => v < 0.76 || v >= 0.95 ? "hidden" : "visible");
    const [seq2BlocksIn, setSeq2BlocksIn] = useState(false);
    useMotionValueEvent(seq2BlocksOpacity, "change", (v) => {
        if (v > 0.12) setSeq2BlocksIn(true);
    });

    // The device and the phrase are both gone by 0.96, so the closing line
    // lands on a clear frame the way the storyboard shows it.
    const tryNowOpacity = useTransform(scrollYProgress, [0.0, 0.962, 0.985, 1.0], [0, 0, 1, 1]);
    const tryNowScale = useTransform(scrollYProgress, [0.962, 1.0], [0.86, 1]);
    const tryNowVisibility = useTransform(scrollYProgress, (v) => v < 0.962 ? "hidden" : "visible");

    const leftTextOpacity = useTransform(scrollYProgress, [0, 0.82, 0.88, 1.0], [1, 1, 0, 0]);
    const leftTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.88 ? "hidden" : "visible");

    const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const scrollCueVisibility = useTransform(scrollYProgress, (v) => v >= 0.05 ? "hidden" : "visible");

    // The copy is scroll-driven like everything else here: each line holds its
    // words through a beat, fades out as the beat hands over, and lifts back in
    // with the next one. The heading turns over on all four handovers; the
    // description only on the one where its words actually change.
    const heading = runs(HEADINGS[isThai ? "th" : "en"]);
    const desc = runs(DESCRIPTIONS[isThai ? "th" : "en"]);
    const headingFade = fadeStops(heading.switches);
    const descFade = fadeStops(desc.switches);

    const headingText = useTransform(scrollYProgress, wordStops(heading.switches), pairUp(heading.words));
    const headingOpacity = useTransform(scrollYProgress, headingFade.stops, headingFade.opacity);
    const headingY = useTransform(scrollYProgress, headingFade.stops, headingFade.y);

    const descText = useTransform(scrollYProgress, wordStops(desc.switches), pairUp(desc.words));
    const descOpacity = useTransform(scrollYProgress, descFade.stops, descFade.opacity);
    const descY = useTransform(scrollYProgress, descFade.stops, descFade.y);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-neutral-50">
            <section
                aria-label="Carbon Receipt"
                className="sticky top-[80px] flex h-screen w-full flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-12 lg:justify-center lg:p-16"
                style={{
                    backgroundImage: "url('/VEKIN Resource all Product/VEKIN 6/EC_BG.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Top Left Corner Text Layout */}
                <motion.div 
                    style={{ opacity: leftTextOpacity, visibility: leftTextVisibility }}
                    className="z-20 w-full max-w-sm space-y-2 sm:space-y-3 md:max-w-md lg:max-w-lg lg:absolute lg:top-12 lg:left-12 xl:top-16 xl:left-16"
                >
                    <motion.h1
                        style={{ opacity: headingOpacity, y: headingY }}
                        className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-xl font-semibold tracking-[-0.015em] leading-[1.12] text-transparent sm:text-2xl md:text-3xl lg:text-4xl"
                    >
                        {headingText}
                    </motion.h1>
                    <motion.p
                        style={{ opacity: descOpacity, y: descY }}
                        className="text-xs font-medium leading-relaxed text-[#1d1d1f]/70 sm:text-sm md:text-base"
                    >
                        {descText}
                    </motion.p>
                </motion.div>

                {/* Shared Showcase Canvas Wrapper */}
                <div className="relative flex w-full h-full flex-1 items-center justify-center mt-4 lg:mt-0">
                    
                    {/* Main Sizing Context Container */}
                    <div className="relative w-[240px] xs:w-[280px] sm:w-[340px] md:w-[420px] lg:w-[540px] xl:w-[620px] max-h-[55vh] xs:max-h-[62vh] sm:max-h-[70vh] lg:max-h-[86vh] aspect-[9/19.5] transition-all duration-300">
                        
                        {/* SEQUENCE ONE CONTAINER */}
                        <motion.div 
                            style={{ opacity: phone1Opacity, rotate: phone1Rotate, visibility: phone1Visibility }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src="/VEKIN Resource all Product/VEKIN 6/E_Carbon_Phone.webp"
                                alt="Carbon Credit Phone Frame 1"
                                className="h-full w-full object-contain"
                                draggable={false}
                              width={537}
                              height={597}
                              fetchPriority="high"
                              decoding="async"
                            />
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none">
                                {/* Was the EC_Animation_1.1 bitmap. As real
                                    geometry the network draws itself, joining
                                    the cards dot by dot as they arrive. */}
                                <Constellation active={cardsIn} />
                            </motion.div>
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none">
                                <LifecycleCards active={cardsIn} />
                            </motion.div>
                            <motion.div style={{ opacity: imgLayer2Opacity, y: imgLayer2Y, scale: imgLayer2Scale, visibility: imgLayer2Visibility }} className="absolute inset-0 pointer-events-none">
                                {/* Laid on the tilted phone's plane, so the
                                    readings sit on the receipt alongside the
                                    lifecycle cards instead of floating square
                                    to the page in front of it. */}
                                <DataBlocks active={blocksIn} plane />
                            </motion.div>
                        </motion.div>


                        {/* SEQUENCE TWO CONTAINER */}
                        <motion.div 
                            style={{ opacity: phone2Opacity, rotate: phone2Rotate, scale: phone2Scale, visibility: phone2Visibility }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src="/VEKIN Resource all Product/VEKIN 6/E_Carbon_Phone2.webp"
                                alt="Carbon Credit Phone Frame 2"
                                className="h-full w-full object-contain"
                                draggable={false}
                              width={270}
                              height={532}
                              fetchPriority="high"
                              decoding="async"
                            />

                            {/* Frame five: the reading blocks spread around the
                                upright phone and then draw inward, merging into
                                the screen before the closing line appears. */}
                            <motion.div
                                style={{ opacity: seq2BlocksOpacity, scale: seq2BlocksScale, visibility: seq2BlocksVisibility }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <DataBlocks active={seq2BlocksIn} />
                            </motion.div>

                            {/* Card Layer 3 (Top Left - Spans further outside phone boundaries via negative coordinates) */}
                            <motion.div 
                                style={{ opacity: layer3Opacity, x: layer3X, y: layer3Y, scale: layer3Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute top-2 left-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <AnnotationCluster id="three" active={seq2In} />
                            </motion.div>

                            {/* Interactive Hotspot Layer 4 (Top Right) */}
                            <motion.div 
                                style={{ opacity: layer4Opacity, x: layer4X, y: layer4Y, scale: layer4Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute top-2 right-[-15%] w-[50%] h-[45%] z-20"
                            >
                                <motion.a
                                    href="/methodology"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full cursor-pointer focus:outline-none"
                                    whileHover={!isMobile ? { 
                                        scale: 1.05,
                                        filter: "drop-shadow(0 0 15px rgba(52, 211, 153, 0.5))"
                                    } : {}}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <AnnotationCluster id="four" active={seq2In} />
                                </motion.a>
                            </motion.div>

                            {/* Card Layer 5 (Bottom Left) */}
                            <motion.div 
                                style={{ opacity: layer5Opacity, x: layer5X, y: layer5Y, scale: layer5Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute bottom-6 left-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <AnnotationCluster id="five" active={seq2In} />
                            </motion.div>

                            {/* Card Layer 6 (Bottom Right) */}
                            <motion.div 
                                style={{ opacity: layer6Opacity, x: layer6X, y: layer6Y, scale: layer6Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute bottom-6 right-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <AnnotationCluster id="six" active={seq2In} />
                            </motion.div>

                        </motion.div>

                    </div>

                    {/* ENDING: the phrase crosses the device, wider than it,
                        so it reads as sweeping over the screen rather than
                        being boxed inside it. */}
                    <motion.div
                        style={{
                            opacity: finalTextOverlayOpacity,
                            x: finalTextOverlayX,
                            scale: finalTextOverlayScale,
                            visibility: finalTextOverlayVisibility
                        }}
                        className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-4 select-none"
                    >
                        <h2 className="whitespace-nowrap text-center text-[clamp(1.75rem,6vw,5.5rem)] font-extrabold uppercase leading-none tracking-[-0.015em] text-[#0f1c1a]">
                            Start for Future
                        </h2>
                    </motion.div>

                    {/* ABSOLUTE END SCREEN: "TRY NOW" BUTTON LAYER */}
                    <motion.div
                        style={{
                            opacity: tryNowOpacity,
                            scale: tryNowScale,
                            visibility: tryNowVisibility
                        }}
                        className="absolute inset-0 z-40 flex items-center justify-center pointer-events-auto"
                    >
                        <motion.button
                            onClick={() => router.push("/contact")}
                            className="cursor-pointer select-none bg-transparent text-[clamp(2rem,7vw,6rem)] font-extrabold uppercase leading-none tracking-[0.015em] text-[#00b59f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#00b59f]"
                            whileHover={!isMobile ? { scale: 1.04 } : {}}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            Try it now
                        </motion.button>
                    </motion.div>

                </div>

                {/* SCROLL CUE: fades out as the story begins */}
                <motion.div
                    style={{ opacity: scrollCueOpacity, visibility: scrollCueVisibility }}
                    className="pointer-events-none absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-[#00464E]"
                >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                        {isThai ? "เลื่อนเพื่อดูเรื่องราว" : "Scroll to explore"}
                    </span>
                    <motion.span
                        animate={{ y: [0, 7, 0] }}
                        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00464E]/40 bg-white/60 backdrop-blur-sm"
                    >
                        <span className="relative -mt-1 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#00464E]" />
                    </motion.span>
                </motion.div>
            </section>
        </div>
    );
}

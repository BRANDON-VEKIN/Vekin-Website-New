"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollRevealPhones() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.1);
      },
      {
        threshold: [0, 0.1, 0.5, 0.75, 1],
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    /* CRITICAL FIX: overflow-hidden completely removes the extra horizontal scroll */
    <div className="w-full overflow-hidden py-4">
      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-[1120px] ${
          isVisible ? "phones-in-view" : ""
        }
          /* MOBILE: Flowing naturally without forced heights */
          flex flex-col items-center gap-6 px-6 h-auto
          /* DESKTOP: Only uses absolute layout heights on wide viewports */
          sm:block sm:h-[600px] md:h-[640px] lg:h-[680px] sm:px-0`}
      >
        {/* TOP PHONE (Left phone on desktop) */}
        <img
          src="/VEKIN Resource all Product/VEKIN 1/Phone_Left.png"
          alt="Carbon receipt phone mockup"
          className="phone-slide-left origin-bottom-left transition-all duration-700 ease-out
            /* Mobile: Relative flow, safe bounded sizing */
            relative w-full max-w-[280px] h-auto z-10 top-0 left-0
            /* Desktop/Tablet: Bleeds out into absolute space safely */
            sm:absolute sm:max-w-none sm:left-[-120px] sm:w-[600px]
            /* Desktop (lg:) */
            lg:left-[-100px] lg:w-[720px]"
        />

        {/* BOTTOM PHONE (Right phone on desktop) */}
        <img
          src="/VEKIN Resource all Product/VEKIN 1/Phone_Right.png"
          alt="Organizer app phone mockup"
          className="phone-slide-right origin-bottom-right transition-all duration-700 ease-out
            /* Mobile: Relative flow beneath the first phone */
            relative w-full max-w-[280px] h-auto z-10 bottom-0 right-0
            /* Desktop/Tablet: Bleeds out into absolute space safely */
            sm:absolute sm:max-w-none sm:right-[-120px] sm:w-[600px]
            /* Desktop (lg:) */
            lg:right-[-100px] lg:w-[720px]"
        />
      </div>
    </div>
  );
}
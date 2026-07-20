"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const assetBase = "/VEKIN Resource all Product/VEKIN 5";

type ProductLinkItem = {
  label: string;
  href: string;
  src: string;
  className: string;
  external?: boolean;
};

const productLinks: ProductLinkItem[] = [
  {
    label: "One Click",
    href: "https://oneclick-dev.vekin.co.th/",
    src: `${assetBase}/OC2.png`,
    className:
      "left-[51%] top-[19.5%] w-[40%] max-w-[520px] -translate-x-1/2 sm:left-[52%] sm:top-[19.6%] sm:w-[36%]",
    external: true,
  },
  {
    label: "Immersive Sustainability",
    href: "/",
    src: `${assetBase}/IS2.png`,
    className:
      "left-[24%] top-[25%] w-[39%] max-w-[460px] -translate-x-1/2 sm:left-[25%] sm:top-[26%] sm:w-[34%]",
  },
  {
    label: "AI Energy Auditor",
    href: "/auditor",
    src: `${assetBase}/EA2.png`,
    className:
      "left-[77%] top-[38.5%] w-[40%] max-w-[500px] -translate-x-1/2 sm:left-[80%] sm:top-[38%] sm:w-[35%]",
  },
  {
    label: "E-Carbon Receipt",
    href: "/new_ec",
    src: `${assetBase}/E_CARBON_RECEIPT.png`,
    className:
      "left-[42%] top-[65.8%] w-[30%] max-w-[500px] -translate-x-1/2 sm:left-[49%] sm:top-[65.5%] sm:w-[25%]",
  },
  {
    label: "DAP Main",
    href: "/dap_new",
    src: `${assetBase}/DM2.png`,
    className:
      "left-[19%] top-[80.7%] w-[28%] max-w-[310px] -translate-x-1/2 sm:left-[18%] sm:top-[80.4%] sm:w-[24%]",
  },
] as const;

const storyBlocks = [
  {
    title: "WHEN YOUR BUSINESS BEGINS",
    subtitle: "WHEN YOUR BUSINESS BEGINS",
    body: "You don't have to wait until you're big to take carbon seriously. With one click, even the smallest business can generate verified carbon reports, laying a foundation for future funding, credibility, and long-term growth.",
    className:
      "left-[70%] top-[13.1%] w-[60%] text-center sm:left-[69%] sm:top-[13.3%] sm:w-[52%] sm:text-left",
  },
  {
    title: "WHEN YOUR BRAND STEPS INTO THE SPOTLIGHT",
    subtitle: "START TO SHOW. MAKE YOUR IMPACT VISIBLE.",
    body: "From pop-up booths to national events, carbon matters. Immersive Sustainability lets you track emissions before, during, and after every event, making your brand's actions measurable, visible, and unforgettable.",
    className:
      "left-[45%] top-[31.5%] w-[82%] text-left sm:left-[32%] sm:top-[31%] sm:w-[52%]",
  },
  {
    title: "WHEN YOUR FACTORY RAMPS UP",
    subtitle: "START TO OPTIMIZE. TURN ENERGY INTO ADVANTAGE.",
    body: "As operations grow, costs follow. Our AI Energy Auditor reads electricity flows, detects energy leaks, and reveals carbon hotspots, so you can cut emissions and bills without cutting growth.",
    className:
      "left-[57%] top-[53.5%] w-[82%] text-right sm:left-[58%] sm:top-[53.5%] sm:w-[50%]",
  },
  {
    title: "WHEN YOUR LOGISTICS NETWORK SCALES",
    subtitle: "START BUILDING TRUST. EVERY RECEIPT TELLS A STORY.",
    body: "Each shipment carries more than goods, it carries emissions. E-Carbon Receipt tracks every fuel transaction and stores it on blockchain, giving you tamper-proof proof that builds trust across supply chains, regulators, and partners.",
    className:
      "left-[48%] top-[71.7%] w-[84%] text-left sm:left-[45%] sm:top-[72%] sm:w-[60%]",
  },
  {
    title: "WHEN CARBON BECOMES CORE TO STRATEGY",
    subtitle: "START TO LEAD. LET DATA DRIVE YOUR DECISIONS.",
    body: "Growth brings complexity. DAP Main brings clarity. Unify all your carbon data into one dashboard, track progress, stay compliant, and turn every emission insight into competitive edge.",
    className:
      "left-[50%] top-[90%] w-[82%] text-center sm:left-[46%] sm:top-[90%] sm:w-[62%] sm:text-left",
  },
] as const;

type StoryBlock = (typeof storyBlocks)[number];

const journeyPaths = [
  "M 2667 3514 L 3375 4000 L 430 5605 L 3410 7343 L 1730 8420 L 3890 9554 L 2200 10770",
  "M 1649 11195 L 510 12020 L 3590 13445 L 1968 14495",
  "M 1368 14935 L 620 15350 L 3316 16875 L 1612 18086",
] as const;

type JourneyMarker = {
  x: number;
  y: number;
  facing: "left" | "right";
};

function ProductLink({
  label,
  href,
  src,
  className,
  external,
}: (typeof productLinks)[number]) {
  const image = (
    <img
      src={src}
      alt={label}
      className="h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(11,112,99,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:drop-shadow-[0_0_28px_rgba(0,181,159,0.55)]"
    />
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group absolute z-30 block p-2 ${className}`}
      >
        {image}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={`group absolute z-30 block p-2 ${className}`}
    >
      {image}
    </Link>
  );
}

function StoryCopy({ block, index }: { block: StoryBlock; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const slideFrom = index % 2 === 0 ? "translate-x-8" : "-translate-x-8";

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute z-20 -translate-x-1/2 text-[#6d6e71] ${block.className}`}
    >
      <div
        className={`transition duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : `${slideFrom} opacity-0`
        }`}
      >
        <h2 className="text-[0.55rem] font-black leading-[0.92] sm:text-[clamp(0.8rem,2.7vw,3rem)]">
          {block.title}
        </h2>
        <p className="mt-[0.5%] text-[0.42rem] font-black uppercase leading-tight sm:text-[clamp(0.58rem,1.25vw,1.25rem)]">
          {block.subtitle}
        </p>
        <p className="mt-[1.1%] text-[0.32rem] font-bold uppercase leading-snug tracking-[0.02em] text-[#55575a] sm:text-[clamp(0.45rem,0.72vw,0.8rem)]">
          {block.body}
        </p>
      </div>
    </div>
  );
}

export default function Vekin_Home_Full1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const journeyPathRefs = useRef<Array<SVGPathElement | null>>([]);
  const [journeyMarker, setJourneyMarker] = useState<JourneyMarker>({
    x: 2667,
    y: 3514,
    facing: "right",
  });

  useEffect(() => {
    const updateJourneyMarker = () => {
      const section = sectionRef.current;
      const paths = journeyPathRefs.current.filter(
        (path): path is SVGPathElement => path !== null,
      );

      if (!section || paths.length !== journeyPaths.length) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.58;
      const routeY = ((viewportAnchor - rect.top) / rect.height) * 20208;
      const pathLengths = paths.map((path) => path.getTotalLength());
      let activePathIndex = paths.length - 1;
      let markerLength = pathLengths[activePathIndex];

      for (let index = 0; index < paths.length; index += 1) {
        const path = paths[index];
        const pathLength = pathLengths[index];
        const startY = path.getPointAtLength(0).y;
        const endY = path.getPointAtLength(pathLength).y;

        if (routeY < startY) {
          activePathIndex = Math.max(0, index - 1);
          markerLength = index === 0 ? 0 : pathLengths[index - 1];
          break;
        }

        if (routeY <= endY) {
          activePathIndex = index;

          let low = 0;
          let high = pathLength;

          for (let iteration = 0; iteration < 14; iteration += 1) {
            const midpoint = (low + high) / 2;

            if (path.getPointAtLength(midpoint).y < routeY) {
              low = midpoint;
            } else {
              high = midpoint;
            }
          }

          markerLength = (low + high) / 2;
          break;
        }
      }

      const activePath = paths[activePathIndex];
      const activePathLength = pathLengths[activePathIndex];
      const markerPoint = activePath.getPointAtLength(markerLength);
      const tangentSample = Math.min(28, activePathLength * 0.01);
      const pointBefore = activePath.getPointAtLength(
        Math.max(0, markerLength - tangentSample),
      );
      const pointAfter = activePath.getPointAtLength(
        Math.min(activePathLength, markerLength + tangentSample),
      );

      setJourneyMarker({
        x: markerPoint.x,
        y: markerPoint.y,
        facing: pointAfter.x >= pointBefore.x ? "right" : "left",
      });
    };

    updateJourneyMarker();

    let animationFrame = 0;
    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateJourneyMarker);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="w-full bg-[#f4f7f5]">
      <div
        ref={sectionRef}
        className="relative w-full overflow-visible bg-[#f4f7f5] text-[#6d6e71]"
      >
        <style>
          {`
            @keyframes vekinShipBob {
              0%, 100% {
                transform: translate(-50%, 0);
              }
              50% {
                transform: translate(-50%, -10px);
              }
            }

            @keyframes vekinDroneBob {
              0%, 100% {
                transform: translate(-50%, 40px);
              }
              50% {
                transform: translate(-50%, -60px);
              }
            }

            @keyframes vekinDroneTwoBob {
              0%, 100% {
                transform: translate(-50%, 0);
              }
              50% {
                transform: translate(calc(-50% + 60px), -60px);
              }
            }

            @keyframes vekinCalloutFloat {
              0%, 100% {
                transform: translate(-50%, 0) scale(1);
              }
              50% {
                transform: translate(-50%, -10px) scale(1.04);
              }
            }

            @keyframes vekinCalloutFloatAlt {
              0%, 100% {
                transform: translate(-50%, 0) scale(1);
              }
              50% {
                transform: translate(-50%, 10px) scale(1.04);
              }
            }
          `}
        </style>

        <img
          src={`${assetBase}/HBG.png`}
          alt="Vekin carbon verifier journey background"
          className="block h-auto w-full object-contain"
        />

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 4041 20208"
        >
          {journeyPaths.map((path, index) => (
            <path
              key={path}
              ref={(element) => {
                journeyPathRefs.current[index] = element;
              }}
              d={path}
              fill="none"
              stroke="none"
            />
          ))}
        </svg>

        <div
          aria-hidden="true"
          hidden
          className="pointer-events-none absolute z-[15] w-[8%] min-w-[42px] max-w-[104px] -translate-x-1/2 -translate-y-1/2 select-none transition-[left,top] duration-75 linear motion-reduce:transition-none"
          style={{
            left: `${(journeyMarker.x / 4041) * 100}%`,
            top: `${(journeyMarker.y / 20208) * 100}%`,
          }}
        >
          <img
            src={`${assetBase}/Right_Point.png`}
            alt=""
            className={`block h-auto w-full transition-opacity duration-100 ${
              journeyMarker.facing === "right" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={`${assetBase}/Left_Point.png`}
            alt=""
            className={`absolute inset-0 h-auto w-full transition-opacity duration-100 ${
              journeyMarker.facing === "left" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="absolute left-1/2 top-[3.9%] z-20 w-[82%] -translate-x-1/2 text-center sm:top-[4.2%] sm:w-[68%]">
          <img
            src={`${assetBase}/Logo.png`}
            alt="VEKIN"
            className="mx-auto h-auto w-[22%] max-w-[150px] min-w-[80px] object-contain"
          />
          <p className="mt-[3%] text-[clamp(0.8rem,2vw,2.6rem)] font-black leading-none">
            My expertise as a
          </p>
          <h1 className="mt-[1%] text-[clamp(2.5rem,9.6vw,8.6rem)] font-black leading-[0.8]">
            CARBON
          </h1>
          <h1 className="text-[clamp(2.5rem,9.6vw,8.6rem)] font-black leading-[0.8]">
            VERIFIER
          </h1>
          <p className="mx-auto mt-[2%] max-w-[780px] text-[clamp(0.72rem,1.7vw,2.05rem)] font-black leading-tight">
            allows me to navigate complexities
            <br />
            and deliver reliable results
          </p>
        </div>

        {storyBlocks.map((block, index) => (
          <StoryCopy key={block.title} block={block} index={index} />
        ))}

        <img
          src={`${assetBase}/CB1.png`}
          alt=""
          className="absolute left-[51%] top-[16.2%] z-30 w-[18%] max-w-[230px] -translate-x-1/2 object-contain sm:left-[30%] sm:top-[17%] sm:w-[10%]"
          style={{ animation: "vekinCalloutFloat 2.6s ease-in-out infinite" }}
        />

        <img
          src={`${assetBase}/CB2.png`}
          alt=""
          className="absolute left-[19%] top-[85.2%] z-30 w-[16%] max-w-[230px] -translate-x-1/2 object-contain sm:left-[18%] sm:top-[84.8%] sm:w-[8%]"
          style={{
            animation: "vekinCalloutFloatAlt 2.8s ease-in-out infinite",
          }}
        />

        <img
          src={`${assetBase}/Ship2.png`}
          alt="Cargo ship"
          className="absolute left-[75%] top-[55.5%] z-20 w-[30%] max-w-[550px] object-contain sm:left-[76%] sm:top-[53.5%] sm:w-[70%]"
          style={{ animation: "vekinShipBob 3.2s ease-in-out infinite" }}
        />

        <img
          src={`${assetBase}/Drone.png`}
          alt="Drone"
          className="absolute left-[15%] top-[48%] z-20 w-[30%] max-w-[550px] object-contain sm:left-[18%] sm:top-[50%] sm:w-[70%]"
          style={{ animation: "vekinDroneBob 2.8s ease-in-out infinite" }}
        />

        <img
          src={`${assetBase}/Drone2.png`}
          alt="Drone"
          className="absolute left-[74%] top-[45.6%] z-20 w-[28%] max-w-[500px] object-contain sm:left-[72%] sm:top-[44.5%] sm:w-[44%]"
          style={{ animation: "vekinDroneTwoBob 3s ease-in-out infinite" }}
        />

        {productLinks.map((product) => (
          <ProductLink key={product.label} {...product} />
        ))}
      </div>
    </section>
  );
}

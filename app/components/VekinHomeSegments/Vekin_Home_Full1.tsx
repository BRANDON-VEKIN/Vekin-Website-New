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
    src: `${assetBase}/OC.png`,
    className:
      "left-[51%] top-[19.5%] w-[40%] max-w-[520px] -translate-x-1/2 sm:left-[52%] sm:top-[19.6%] sm:w-[36%]",
    external: true,
  },
  {
    label: "Immersive Sustainability",
    href: "/",
    src: `${assetBase}/IS.png`,
    className:
      "left-[24%] top-[25%] w-[39%] max-w-[460px] -translate-x-1/2 sm:left-[25%] sm:top-[26%] sm:w-[34%]",
  },
  {
    label: "AI Energy Auditor",
    href: "/auditor",
    src: `${assetBase}/EA.png`,
    className:
      "left-[77%] top-[38.5%] w-[40%] max-w-[500px] -translate-x-1/2 sm:left-[73%] sm:top-[40%] sm:w-[35%]",
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
    src: `${assetBase}/DM.png`,
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
  return (
    <section className="w-full bg-[#f4f7f5]">
      <div className="relative w-full overflow-visible bg-[#f4f7f5] text-[#6d6e71]">
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
          `}
        </style>

        <img
          src={`${assetBase}/HBG.png`}
          alt="Vekin carbon verifier journey background"
          className="block h-auto w-full object-contain"
        />

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

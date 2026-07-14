import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";

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

export default function AuditorSegment1() {
	return (
<BidirectionalScrollReveal
  aria-label="AI Auditor Hero"
  className="relative w-full overflow-hidden bg-black"
  amount={0.18}
  duration={1.05}
  offset={56}
>
  <iframe
    src="https://www.youtube.com/embed/p8qgCuxA-Tc?autoplay=1&mute=1&loop=1&playlist=p8qgCuxA-Tc&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0"
    title="Auditor Video"
    allowFullScreen
    allow="autoplay; encrypted-media; picture-in-picture"
    className="pointer-events-none block w-full min-h-[260px] border-0 object-cover sm:min-h-[360px] md:aspect-video md:min-h-0"
  />
</BidirectionalScrollReveal>
	);
}

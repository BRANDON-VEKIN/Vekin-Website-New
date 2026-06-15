import React from "react";

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
<section
  aria-label="AI Auditor Hero"
  className="relative w-full overflow-hidden bg-black"
>
  <iframe
    src="https://vekinth-my.sharepoint.com/personal/wanut_vekin_tech/_layouts/15/embed.aspx?UniqueId=315b4039-c3b5-4b01-86c6-5c2efa32a1df&embed=%7B%22af%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
    title="Auditor Video"
    allowFullScreen
    className="w-full aspect-video border-0"
  />
</section>
	);
}

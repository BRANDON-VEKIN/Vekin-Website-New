import React from "react";

type LocalizedTextProps = {
  as?: React.ElementType;
  th: string;
  en: string;
  className?: string;
};

function LocalizedText({
  as: Component = "div",
  th,
  en,
  className,
}: LocalizedTextProps) {
  const isThai =
	typeof navigator !== "undefined" &&
	navigator.language.toLowerCase().startsWith("th");

  return (
	<Component className={className}>
	  {isThai ? th : en}
	</Component>
  );
}


function srcOf(img: any) {
	return typeof img === "string" ? img : img?.src || img?.default || "";
}

function ScopeCircle({
	labelTh,
	labelEn,
}: {
	labelTh: string;
	labelEn: string;
}) {
	return (
		<div className="flex flex-col items-center text-white">
			<div
				className="
					flex items-center justify-center
					h-20 w-20
					sm:h-28 sm:w-28
					md:h-32 md:w-32
					rounded-full
					border-2 border-white/80
					bg-black/35
					shadow-lg
					backdrop-blur-[1px]
				"
			>
				<div
					className="
						h-8 w-8
						sm:h-10 sm:w-10
						md:h-12 md:w-12
						rounded-full
						bg-white/90
					"
					aria-hidden="true"
				/>
			</div>

			<LocalizedText
				as="p"
				th={labelTh}
				en={labelEn}
				className="
					mt-3
					text-sm
					font-semibold
					tracking-wide
					sm:mt-4
					sm:text-base
					md:text-lg
				"
			/>
		</div>
	);
}

export default function AuditorSegment5() {
	return (
		<section
			aria-labelledby="auditor-scope"
			className="relative w-full overflow-hidden"
		>
			{/* Background */}
			<img
				src="/VEKIN Resource all Product/VEKIN 3/Scope_BG.jpg"
				alt="Scope background"
				className="block w-full min-h-[500px] object-cover md:min-h-0"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/25" />

			{/* Content */}
			<div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-8 sm:py-16 lg:px-16">
				<div
					className="
						grid w-full max-w-5xl
						grid-cols-1
						gap-8

						sm:grid-cols-3
						sm:gap-6

						lg:gap-12
					"
				>
					<ScopeCircle
						labelTh="ขอบเขต 1"
						labelEn="Scope 1"
					/>

					<ScopeCircle
						labelTh="ขอบเขต 2"
						labelEn="Scope 2"
					/>

					<ScopeCircle
						labelTh="ขอบเขต 3"
						labelEn="Scope 3"
					/>
				</div>
			</div>
		</section>
	);
}

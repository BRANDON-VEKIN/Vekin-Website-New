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

export default function AuditorSegment6() {

	return (
		<section
			aria-labelledby="auditor-analytics"
			className="relative w-full overflow-hidden"
		>
			{/* Background */}
			<img
				src="/VEKIN Resource all Product/VEKIN 3/CentralWorld_BG.jpg"
				alt="CentralWorld background"
				className="block w-full min-h-[700px] object-cover md:min-h-0"
			/>

			<div className="absolute inset-0 bg-black/30" />

			{/* Content */}
			<div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-16">

				<div
					className="
						w-full
						max-w-md

						sm:max-w-lg

						lg:max-w-xl

						rounded-2xl
						bg-black/70
						p-5
						sm:p-8
						lg:p-10

						text-white
						shadow-2xl
						backdrop-blur-[2px]
					"
				>
					<LocalizedText
						as="h2"
						th="การวิเคราะห์ AI ENERGY AUDITOR"
						en="AI ENERGY AUDITOR ANALYTICS"
						className="
							text-2xl
							font-extrabold
							uppercase
							leading-tight

							sm:text-3xl

							lg:text-4xl
						"
					/>

					<LocalizedText
							as="p"
							th={`AI Energy Auditor ของ VEKIN ใช้ Hybrid Neuro-Symbolic Framework วิเคราะห์ข้อมูล IoT และดาวเทียมแบบ 100% ด้วยความแม่นยำสูงถึง 95% ระบบนี้ช่วยทวนสอบโครงการพลังงานหมุนเวียนแบบเรียลไทม์ พร้อมลดเวลาการตรวจสอบและตัดต้นทุนการดำเนินงานลงกว่า 80% ข้อมูลทั้งหมดจะถูกจัดเก็บอย่างปลอดภัยบน Blockchain ผ่าน "Carbon Receipt" เพื่อขจัดความเสี่ยงในการฟอกเขียวและเปลี่ยนข้อมูลให้เป็นสินทรัพย์ดิจิทัลที่ธนาคารยอมรับ ช่วยให้องค์กรเพิ่มประสิทธิภาพพลังงานพร้อมปลดล็อกโอกาสในการเข้าถึงเงินทุนเพื่อสิ่งแวดล้อมและตลาดซื้อขายคาร์บอนระดับสากลได้ทันที`}
							en={`VEKIN’s AI Energy Auditor utilizes a patented Hybrid Neuro-Symbolic Framework to analyze 100% of IoT and satellite data with 95% probabilistic accuracy. This disruptive engine automates renewable energy project validation in real-time, reducing traditional audit cycles and cutting operational costs by 80%. By securing all data points on a blockchain ledger via a "Carbon Receipt," the platform eliminates greenwashing risks and transforms complex data into bankable digital assets. Ultimately, this "Trust Infrastructure" optimizes efficiency while unlocking immediate access to climate finance, green loans, and premium international carbon markets.`}
							className="
							mt-4
							text-xs
							leading-relaxed
							text-white/90

							sm:text-sm

							lg:text-base
						"
					/>

					<div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-3 sm:p-4">

						<div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-xs">
							<LocalizedText
								as="span"
								th="ตัวอย่างแดชบอร์ด"
								en="Dashboard Preview"
							/>

							<LocalizedText
								as="span"
								th="ข้อมูลสด"
								en="Live Metrics"
							/>
						</div>

						<div className="h-28 sm:h-36 lg:h-44 rounded-lg bg-gradient-to-br from-emerald-400/80 via-cyan-400/60 to-blue-500/80 p-3 sm:p-4 shadow-inner">
							<div className="flex h-full items-end gap-2 sm:gap-3">
								<div className="h-1/3 w-full rounded-t-md bg-black/25" />
								<div className="h-1/2 w-full rounded-t-md bg-black/35" />
								<div className="h-2/3 w-full rounded-t-md bg-black/20" />
								<div className="h-5/6 w-full rounded-t-md bg-black/30" />
								<div className="h-3/5 w-full rounded-t-md bg-black/25" />
							</div>
						</div>

					</div>
				</div>

			</div>
		</section>
	);
}

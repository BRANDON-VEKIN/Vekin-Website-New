import LocalizedText from "../LocalizedText";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";

const frictionPoints = [
  { value: "MONTHS", label: "Audit Cycle" },
  { value: "MANUAL", label: "Data Handling" },
  { value: "HIGH", label: "Error Risk" },
];

export default function AuditorSegment10() {
  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Human.png"
        alt="Human background"
        className="block w-full min-h-[720px] object-cover sm:min-h-[700px] md:min-h-[680px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2),rgba(0,0,0,0.54)_46%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_38%_72%,rgba(68,229,208,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-6 lg:justify-end lg:px-10">
        <div className="w-full max-w-2xl rounded-[8px] border border-white/15 bg-black/68 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-red-300/30 bg-red-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-red-100">
            Legacy Workflow
          </div>

          <LocalizedText
            as="h3"
            th="à¹à¸šà¸šà¸”à¸±à¹‰à¸‡à¹€à¸”à¸´à¸¡"
            en="Traditional"
            className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl"
          />

          <LocalizedText
            as="p"
            th="à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹à¸šà¸šà¹€à¸”à¸´à¸¡à¸žà¸¶à¹ˆà¸‡à¸žà¸²à¸à¸²à¸£à¹€à¸à¹‡à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹à¸¥à¸°à¸à¸²à¸£à¸›à¸£à¸°à¸¡à¸²à¸“à¸”à¹‰à¸§à¸¢à¸¡à¸·à¸­ à¸—à¸³à¹ƒà¸«à¹‰à¸Šà¹‰à¸² à¸•à¹‰à¸™à¸—à¸¸à¸™à¸ªà¸¹à¸‡ à¹à¸¥à¸°à¹€à¸ªà¸µà¹ˆà¸¢à¸‡à¸•à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸«à¸£à¸·à¸­ Greenwashing"
            en="Traditional auditing depends on manual collection, estimates, and disconnected review cycles. It is slow, expensive, difficult to scale, and exposed to human error or greenwashing risk."
            className="mt-5 text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
          />

          <div className="mt-7 grid grid-cols-3 gap-3">
            {frictionPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] border border-white/12 bg-white/[0.07] px-3 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
              >
                <p className="text-base font-black uppercase leading-none text-red-100 sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/55 sm:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[8px] border border-red-200/15 bg-red-950/20 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-300 shadow-[0_0_16px_rgba(252,165,165,0.55)]" />
              <LocalizedText
                as="p"
                th="à¸œà¸¥à¸¥à¸±à¸žà¸˜à¹Œà¸„à¸·à¸­à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸—à¸±à¸™à¸ªà¸¡à¸±à¸¢ à¸•à¹‰à¸™à¸—à¸¸à¸™à¸—à¸µà¹ˆà¸šà¸²à¸™à¸›à¸¥à¸²à¸¢ à¹à¸¥à¸°à¸„à¸§à¸²à¸¡à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸±à¹ˆà¸™à¸—à¸µà¹ˆà¸ªà¸£à¹‰à¸²à¸‡à¹„à¸”à¹‰à¸¢à¸²à¸"
                en="The result is delayed evidence, rising operating cost, and trust that is hard to prove."
                className="text-xs font-semibold leading-relaxed text-white/72 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}

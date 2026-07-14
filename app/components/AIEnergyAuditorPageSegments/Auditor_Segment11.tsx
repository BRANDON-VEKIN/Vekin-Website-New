import LocalizedText from "../LocalizedText";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";

const aiAdvantages = [
  { value: "REAL-TIME", label: "Verification" },
  { value: "95%", label: "AI Accuracy" },
  { value: "80%", label: "Lower Cost" },
];

export default function AuditorSegment11() {
  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Robot.png"
        alt="Robot background"
        className="block w-full min-h-[720px] object-cover sm:min-h-[700px] md:min-h-[680px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.56)_48%,rgba(0,0,0,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(68,229,208,0.28),transparent_32%),radial-gradient(circle_at_70%_68%,rgba(14,165,233,0.2),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-6 lg:justify-start lg:px-10">
        <div className="w-full max-w-2xl rounded-[8px] border border-white/15 bg-black/68 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            Intelligent Verification
          </div>

          <LocalizedText
            as="h3"
            th="à¹€à¸­à¹„à¸­"
            en="AI"
            className="text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl"
          />

          <LocalizedText
            as="p"
            th="AI Carbon Auditor à¸‚à¸­à¸‡ VEKIN à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ à¸¥à¸”à¸•à¹‰à¸™à¸—à¸¸à¸™à¸à¸²à¸£à¸”à¸³à¹€à¸™à¸´à¸™à¸‡à¸²à¸™ à¸¥à¸” Greenwashing à¹à¸¥à¸°à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ªà¸´à¹ˆà¸‡à¹à¸§à¸”à¸¥à¹‰à¸­à¸¡à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¸ªà¸´à¸™à¸—à¸£à¸±à¸žà¸¢à¹Œà¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¸—à¸µà¹ˆà¸™à¹ˆà¸²à¹€à¸Šà¸·à¹ˆà¸­à¸–à¸·à¸­"
            en="VEKIN turns verification into a real-time AI workflow. It reduces operating cost, lowers greenwashing risk, and converts environmental performance into trusted digital assets for finance and carbon markets."
            className="mt-5 text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
          />

          <div className="mt-7 grid grid-cols-3 gap-3">
            {aiAdvantages.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] border border-white/12 bg-white/[0.07] px-3 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
              >
                <p className="text-base font-black uppercase leading-none text-[#44e5d0] sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/55 sm:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[8px] border border-[#44e5d0]/20 bg-[#44e5d0]/10 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#44e5d0] shadow-[0_0_16px_rgba(68,229,208,0.7)]" />
              <LocalizedText
                as="p"
                th="à¸ˆà¸²à¸à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸—à¸µà¹ˆà¸¢à¸²à¸à¸•à¸£à¸§à¸ˆ à¸ªà¸¹à¹ˆà¸«à¸¥à¸±à¸à¸à¸²à¸™à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¸—à¸µà¹ˆà¸™à¸³à¹„à¸›à¹ƒà¸Šà¹‰à¹„à¸”à¹‰à¸ˆà¸£à¸´à¸‡"
                en="From hard-to-verify data to finance-ready digital proof."
                className="text-xs font-semibold leading-relaxed text-white/72 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}

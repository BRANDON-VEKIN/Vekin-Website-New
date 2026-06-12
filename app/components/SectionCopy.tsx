"use client";

export default function SectionCopy({
  eyebrow,
  title,
  children,
  titleClass = "text-white"
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  titleClass?: string;
}) {
  return (
    <div className="relative z-10 mx-auto max-w-[620px] px-6 text-center md:max-w-[760px]">
      {eyebrow ? <p className="mb-3 text-[18px] font-black leading-none text-white/90 sm:text-[22px]">{eyebrow}</p> : null}
      <h2 className={`text-[34px] font-black leading-[1.05] tracking-normal sm:text-[42px] md:text-[56px] ${titleClass}`}>{title}</h2>
      {children ? <div className="mx-auto mt-6 max-w-[520px] text-[15px] leading-7 text-white/72 sm:text-[18px] sm:leading-8 md:max-w-[640px] md:text-[20px] md:leading-9">{children}</div> : null}
    </div>
  );
}

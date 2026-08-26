"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";
import { useSiteLanguage } from "../siteLanguage";

const certBase = "/ISO Cert";

type Certification = {
  id: string;
  standard: string;
  name: { en: string; th: string };
  issuer: string;
  certificateNo: string;
  validity: { en: string; th: string };
  thumb: string;
  pdf: string;
};

const certifications: readonly Certification[] = [
  {
    id: "iso42001",
    standard: "ISO/IEC 42001:2023",
    name: { en: "AI Management System", th: "ระบบการจัดการปัญญาประดิษฐ์" },
    issuer: "SGS North America Inc.",
    certificateNo: "TH26/00000053",
    validity: {
      en: "Valid 16 Jan 2026 – 15 Jan 2029",
      th: "มีผล 16 ม.ค. 2569 – 15 ม.ค. 2572"
    },
    thumb: `${certBase}/thumb-iso42001.jpg`,
    pdf: `${certBase}/SGS_ISO_IEC 42001.pdf`
  },
  {
    id: "iso14065",
    standard: "ISO 14065:2020 / ISO/IEC 17029:2019",
    name: {
      en: "Greenhouse Gas Validation & Verification Body",
      th: "หน่วยตรวจสอบความใช้ได้และทวนสอบก๊าซเรือนกระจก"
    },
    issuer: "Thai Industrial Standards Institute (TISI)",
    certificateNo: "24-CB0023 · Accreditation GHG 017",
    validity: { en: "Issued 26 Sep 2024", th: "ออกให้ 26 ก.ย. 2567" },
    thumb: `${certBase}/thumb-iso14065.jpg`,
    pdf: `${certBase}/ISO14065.pdf`
  },
  {
    id: "iso27001",
    standard: "ISO/IEC 27001:2022",
    name: { en: "Information Security Management", th: "ระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ" },
    issuer: "SGS United Kingdom Ltd",
    certificateNo: "TH24/00000030",
    validity: {
      en: "Valid 12 Jan 2024 – 12 Jan 2027",
      th: "มีผล 12 ม.ค. 2567 – 12 ม.ค. 2570"
    },
    thumb: `${certBase}/thumb-iso27001.jpg`,
    pdf: `${certBase}/ISO27001-ISO29110.pdf`
  },
  {
    id: "iso29110",
    standard: "ISO/IEC 29110-4-1:2018",
    name: { en: "Software Engineering Lifecycle", th: "วงจรชีวิตวิศวกรรมซอฟต์แวร์" },
    issuer: "SGS (Thailand) Limited",
    certificateNo: "TH24/00000015",
    validity: {
      en: "Valid 10 Jan 2024 – 10 Jan 2027",
      th: "มีผล 10 ม.ค. 2567 – 10 ม.ค. 2570"
    },
    thumb: `${certBase}/thumb-iso29110.jpg`,
    pdf: `${certBase}/ISO29110.pdf`
  },
  {
    id: "iso9001",
    standard: "ISO 9001:2015",
    name: { en: "Quality Management System", th: "ระบบบริหารงานคุณภาพ" },
    issuer: "SGS United Kingdom Ltd",
    certificateNo: "TH19/12240",
    validity: {
      en: "Valid 17 Jun 2019 – 17 Jun 2022",
      th: "มีผล 17 มิ.ย. 2562 – 17 มิ.ย. 2565"
    },
    thumb: `${certBase}/thumb-iso9001.jpg`,
    pdf: `${certBase}/ISO9001.pdf`
  }
];

export default function AuditorSegment13() {
  const { language } = useSiteLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const selected = certifications.find((cert) => cert.id === selectedId) ?? null;

  const closeRef = useRef(() => setSelectedId(null));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close on Escape + lock background scroll while a certificate is open
  useEffect(() => {
    if (!selectedId) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  // Portalled to body: this section is transformed by BidirectionalScrollReveal
  // and clips overflow, so a nested fixed overlay would be clipped and
  // positioned against the section rather than the viewport.
  const preview =
    isMounted && selected
      ? createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selected.standard}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[8px] border border-white/15 bg-[#061311]/95 p-4 text-white shadow-[0_34px_100px_rgba(0,0,0,0.62),0_0_60px_rgba(68,229,208,0.12)] ring-1 ring-[#44e5d0]/10 sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(68,229,208,0.2),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />

              <div className="relative mb-4 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-wide text-[#73f3df]">
                    {selected.standard}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/70">
                    {selected.name[language]}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">
                    {selected.issuer} · {selected.certificateNo}
                    <br />
                    {selected.validity[language]}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-bold text-white transition hover:border-[#44e5d0]/60 hover:bg-[#44e5d0]/15 hover:text-[#73f3df]"
                  aria-label="Close certification preview"
                >
                  ×
                </button>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04]">
                <iframe
                  src={selected.pdf}
                  title={`${selected.standard} certificate`}
                  className="h-[58vh] w-full bg-white"
                />
              </div>

              <div className="relative mt-4 flex justify-center">
                <a
                  href={selected.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#44e5d0]/40 bg-[#44e5d0]/12 px-6 py-2.5 text-sm font-semibold text-[#73f3df] transition hover:border-[#44e5d0]/70 hover:bg-[#44e5d0]/20"
                >
                  <LocalizedText th="เปิดไฟล์ PDF" en="Open full PDF" />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_1.jpg"
        alt="Bangkok Park background"
        className="block w-full min-h-[780px] object-cover sm:min-h-[740px] md:min-h-[720px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.52)_44%,rgba(0,0,0,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(68,229,208,0.28),transparent_32%),radial-gradient(circle_at_72%_70%,rgba(22,163,74,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-start px-4 py-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-4xl rounded-[8px] border border-white/15 bg-black/68 p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <LocalizedText
            as="p"
            th="ความน่าเชื่อถือที่ผ่านการรับรอง"
            en="Verified trust"
            className="mb-4 text-sm font-semibold tracking-wide text-[#73f3df]"
          />

          <div className="space-y-7">
            <div>
              <LocalizedText
                as="h3"
                th="AI Energy Auditor ได้รับการรับรองโดย"
                en="AI Energy Auditor. Verified by the standards that matter."
                className="max-w-3xl text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold tracking-[-0.015em] leading-[1.05] text-white"
              />

              <LocalizedText
                as="p"
                th="มาตรฐานการตรวจสอบที่อุตสาหกรรมยอมรับและเกณฑ์อ้างอิงจากสมรรถนะอาคารจริง ช่วยให้ทุกข้อมูลเชิงลึกมีความแม่นยำ น่าเชื่อถือ และพร้อมใช้สำหรับการตัดสินใจระดับงานตรวจประเมิน"
                en="Industry-recognized validation protocols and real building-performance benchmarks help keep every insight accurate, reliable, and ready for audit-grade decisions."
                className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/75 lg:text-lg"
              />
            </div>

            <div className="flex snap-x gap-3 overflow-x-auto px-1 pb-4 pt-3 [scrollbar-width:thin] [scrollbar-color:rgba(68,229,208,0.55)_rgba(255,255,255,0.08)] sm:gap-4">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setSelectedId(cert.id)}
                  className="group relative flex w-[170px] shrink-0 snap-start flex-col overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.08] p-3 text-left shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/60 hover:bg-white/[0.12] sm:w-[200px]"
                  aria-label={`View ${cert.standard} certificate`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(68,229,208,0.18),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-white">
                    <img
                      src={cert.thumb}
                      alt={`${cert.standard} certificate`}
                      loading="lazy"
                      className="block aspect-[3/4] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  <p className="relative mt-3 text-[12px] font-bold leading-tight text-[#73f3df]">
                    {cert.standard}
                  </p>
                  <p className="relative mt-1 text-[11px] leading-snug text-white/65">
                    {cert.name[language]}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {preview}
    </BidirectionalScrollReveal>
  );
}

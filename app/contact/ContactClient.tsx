"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";

type Localized = { th: string; en: string };

const contactAssetBase = "/VEKIN Resource all Product/Vekin Contact Us";

/* ------------------------------------------------------------------ */
/*  Content                                                           */
/* ------------------------------------------------------------------ */

const hero = {
  eyebrow: { th: "ติดต่อเรา", en: "Contact Us" } as Localized,
  titleTop: { th: "มาเริ่มต้น", en: "Let's start a" } as Localized,
  titleBottom: { th: "บทสนทนากัน", en: "conversation" } as Localized,
  lead: {
    th: "ไม่ว่าคุณจะเป็นลูกค้า พันธมิตร หรือกำลังมองหาทีมที่ใช่ เราพร้อมรับฟังและตอบทุกคำถามเกี่ยวกับเส้นทางความยั่งยืนของคุณ",
    en: "Whether you're a customer, a partner, or looking for the right team, we're here to listen and answer every question about your sustainability journey.",
  } as Localized,
};

const channels: {
  label: Localized;
  value: string;
  href?: string;
  icon: string;
}[] = [
  {
    label: { th: "โทรศัพท์", en: "Phone" },
    value: "+66 2 714 2490",
    href: "tel:+6627142490",
    icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8z",
  },
  {
    label: { th: "อีเมล", en: "Email" },
    value: "contact@vekin.co.th",
    href: "mailto:contact@vekin.co.th",
    icon: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 3.2V18h16V7.2l-8 5-8-5z",
  },
  {
    label: { th: "เวลาทำการ", en: "Office Hours" },
    value: "Mon–Fri · 09:00–18:00 (GMT+7)",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z",
  },
];

const topicOptions: Localized[] = [
  { th: "ทั่วไป", en: "General" },
  { th: "อุทธรณ์ - ผลการทวนสอบ/ตรวจสอบก๊าซเรือนกระจก", en: "Appeal - GHG Validation/Verification Statement" },
  { th: "อุทธรณ์ - ผลการตรวจพบ", en: "Appeal - Finding Statement" },
  { th: "ร้องเรียน - การปฏิบัติงานของผู้ตรวจ", en: "Complain - Auditor Performance" },
  { th: "ร้องเรียน - กระบวนการทำงาน", en: "Complain - Working Process" },
  { th: "อื่น ๆ", en: "Others" },
];

const roleOptions: Localized[] = [
  { th: "ลูกค้าปัจจุบัน", en: "Current Customer" },
  { th: "ผู้ที่สนใจเป็นลูกค้า", en: "To Be Customer" },
  { th: "ผู้ที่สนใจเป็นพันธมิตร", en: "To Be Partner" },
  { th: "ผู้ที่สนใจร่วมงาน", en: "To Be Team Member" },
  { th: "อื่น ๆ", en: "Other" },
];

const offices: {
  city: Localized;
  address: Localized;
  image: string;
  maps: string;
}[] = [
  {
    city: { th: "กรุงเทพฯ", en: "Bangkok" },
    address: {
      th: "89 อาคารเอไอเอ แคปปิตอล เซ็นเตอร์ ถนนรัชดาภิเษก ดินแดง กรุงเทพฯ 10400",
      en: "89, AIA Capital Center, Ratchadapisek Road, Din Daeng, Bangkok 10400",
    },
    image: `${contactAssetBase}/Bangkok.jpg`,
    maps: "https://www.google.com/maps/search/?api=1&query=AIA+Capital+Center+Ratchadapisek+Road+Din+Daeng+Bangkok+10400",
  },
  {
    city: { th: "ลอนดอน", en: "London" },
    address: {
      th: "อาคาร 3 นอร์ธลอนดอน บิสิเนส พาร์ค ถนนโอ๊คลีย์เซาท์ ลอนดอน N11 1NP สหราชอาณาจักร",
      en: "Building 3, North London Business Park, Oakleigh Road South, London, N11 1NP, United Kingdom",
    },
    image: `${contactAssetBase}/London.jpg`,
    maps: "https://www.google.com/maps/search/?api=1&query=North+London+Business+Park+Oakleigh+Road+South+London+N11+1NP",
  },
];

const process = {
  kicker: { th: "ความโปร่งใส", en: "Transparency" } as Localized,
  title: { th: "ขั้นตอนการร้องเรียนและอุทธรณ์", en: "Complaint & Appeal Process" } as Localized,
  body: {
    th: "เรารับข้อร้องเรียนและคำอุทธรณ์ผ่านทุกช่องทาง และดำเนินการอย่างเป็นธรรม โปร่งใส และปราศจากอคติ โดยหัวหน้าส่วน Admin จะพิจารณาภายใน 5 วันทำการ หากต้องการยื่นเรื่อง โปรดเลือกหัวข้อที่เกี่ยวข้องในแบบฟอร์มด้านบน",
    en: "We accept complaints and appeals through every channel and handle them fairly, transparently, and without bias — reviewed by the Admin lead within 5 working days. To file one, select the relevant topic in the form above.",
  } as Localized,
  caption: {
    th: "แผนผังขั้นตอนการร้องทุกข์ของ VEKIN",
    en: "VEKIN's complaint-handling process flow",
  } as Localized,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#3BB97B]/30 bg-[#3BB97B]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BE4B4]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3BB97B]" />
      {children}
    </span>
  );
}

const fieldClass =
  "w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition focus:border-[#3BB97B]/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#3BB97B]/20";
const labelClass = "mb-2 block text-xs font-medium uppercase tracking-wide text-white/55";

function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  language,
}: {
  options: Localized[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  language: "th" | "en";
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.en === value);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-left text-sm outline-none transition ${
          open
            ? "border-[#3BB97B]/60 bg-white/[0.06] ring-2 ring-[#3BB97B]/20"
            : "border-white/12 bg-white/[0.04] hover:border-white/25"
        } ${selected ? "text-white" : "text-white/40"}`}
      >
        <span className="truncate">{selected ? selected[language] : placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 shrink-0 fill-[#7BE4B4] transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M12 15l-5-5h10z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-white/12 bg-[#0a1f1a] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {options.map((option) => {
            const isActive = option.en === value;
            return (
              <button
                key={option.en}
                type="button"
                onClick={() => {
                  onChange(option.en);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  isActive
                    ? "bg-[#3BB97B]/20 text-white"
                    : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span>{option[language]}</span>
                {isActive && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-[#7BE4B4]" aria-hidden="true">
                    <path d="M9.5 16.2L5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ContactClient() {
  const { language } = useSiteLanguage();
  const t = (value: Localized) => value[language];

  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("");
  const [role, setRole] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPointer({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    };

    element.addEventListener("mousemove", handleMove);
    return () => element.removeEventListener("mousemove", handleMove);
  }, []);

  const [showErrors, setShowErrors] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!topic || !role) {
      setShowErrors(true);
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.22), transparent 60%), radial-gradient(900px 620px at 92% 4%, rgba(0,181,159,0.16), transparent 62%), radial-gradient(1200px 900px at 50% 108%, rgba(0,70,78,0.55), transparent 66%)",
          }}
        />

        {/* ============================ HERO ============================ */}
        <section
          ref={heroRef}
          className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center justify-center px-6 pb-16 pt-40 text-center sm:pt-44"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl transition-transform duration-300 ease-out"
            style={{
              background:
                "radial-gradient(circle, rgba(59,185,123,0.45), rgba(0,181,159,0.12) 55%, transparent 72%)",
              transform: `translate(calc(-50% + ${(pointer.x - 0.5) * 60}px), calc(-50% + ${(pointer.y - 0.5) * 60}px))`,
            }}
          />

          <Reveal>
            <SectionKicker>{t(hero.eyebrow)}</SectionKicker>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-[clamp(2.5rem,7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
          >
            <span className="block">{t(hero.titleTop)}</span>
            <span className="block bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
              {t(hero.titleBottom)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {t(hero.lead)}
          </motion.p>
        </section>

        {/* ===================== FORM + CHANNELS ===================== */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-12">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr]">
            {/* form */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-md sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#3BB97B]/15 blur-3xl"
                />
                {submitted ? (
                  <div className="relative flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#3BB97B] to-[#00b59f] shadow-[0_12px_36px_rgba(59,185,123,0.4)]">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white" aria-hidden="true">
                        <path d="M9.5 16.2L5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">
                      {language === "th" ? "ขอบคุณค่ะ!" : "Thank you!"}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                      {language === "th"
                        ? "เราได้รับข้อความของคุณเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด"
                        : "Your submission has been received. Our team will get back to you shortly."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      {language === "th" ? "ส่งอีกข้อความ" : "Send another message"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-5">
                    <h2 className="text-2xl font-semibold tracking-[-0.01em]">
                      {language === "th" ? "ส่งข้อความถึงเรา" : "Send us a message"}
                    </h2>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          {language === "th" ? "อีเมล" : "Email"}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          {language === "th" ? "เบอร์โทรศัพท์" : "Phone number"}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+66 ..."
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        {language === "th" ? "หัวข้อ" : "Topic"}
                      </label>
                      <CustomSelect
                        options={topicOptions}
                        value={topic}
                        onChange={(value) => {
                          setTopic(value);
                          setShowErrors(false);
                        }}
                        placeholder={language === "th" ? "เลือกหัวข้อ" : "Select a topic"}
                        language={language}
                      />
                      {showErrors && !topic && (
                        <p className="mt-1.5 text-xs text-[#ff8f7a]">
                          {language === "th" ? "กรุณาเลือกหัวข้อ" : "Please select a topic."}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={labelClass}>
                        {language === "th" ? "คุณคือ?" : "Which best describes you?"}
                      </label>
                      <CustomSelect
                        options={roleOptions}
                        value={role}
                        onChange={(value) => {
                          setRole(value);
                          setShowErrors(false);
                        }}
                        placeholder={language === "th" ? "เลือกตัวเลือก" : "Select one"}
                        language={language}
                      />
                      {showErrors && !role && (
                        <p className="mt-1.5 text-xs text-[#ff8f7a]">
                          {language === "th" ? "กรุณาเลือกตัวเลือก" : "Please select an option."}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        {language === "th" ? "ข้อความ" : "Message"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder={
                          language === "th"
                            ? "บอกเราว่าเราจะช่วยคุณได้อย่างไร..."
                            : "Tell us how we can help..."
                        }
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-white/60">
                      <input
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/10 accent-[#3BB97B]"
                      />
                      <span>
                        {language === "th"
                          ? "ฉันยอมรับข้อกำหนดและเงื่อนไข"
                          : "I accept the Terms."}
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="group mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3BB97B] to-[#00b59f] px-8 py-[18px] text-base font-semibold text-[#04120f] shadow-[0_14px_34px_rgba(59,185,123,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(59,185,123,0.5)]"
                    >
                      {language === "th" ? "ส่งข้อความ" : "Send message"}
                      <span className="transition group-hover:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* channels */}
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#00464E]/40 to-white/[0.02] backdrop-blur-md">
                <div className="p-7 sm:p-8">
                  <h2 className="text-lg font-semibold tracking-[-0.01em] text-white">
                    {language === "th" ? "ติดต่อโดยตรง" : "Reach us directly"}
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                    {language === "th"
                      ? "เลือกช่องทางที่สะดวกสำหรับคุณ"
                      : "Pick whichever channel works best for you."}
                  </p>

                  <div className="mt-6 divide-y divide-white/10">
                    {channels.map((channel) => {
                      const inner = (
                        <div className="group flex items-center gap-4 py-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3BB97B] to-[#00b59f] shadow-[0_8px_24px_rgba(59,185,123,0.3)]">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                              <path d={channel.icon} />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-white/45">
                              {t(channel.label)}
                            </div>
                            <div className="mt-0.5 truncate text-sm font-semibold text-white transition group-hover:text-[#7BE4B4]">
                              {channel.value}
                            </div>
                          </div>
                        </div>
                      );

                      return channel.href ? (
                        <a key={channel.label.en} href={channel.href} className="block">
                          {inner}
                        </a>
                      ) : (
                        <div key={channel.label.en}>{inner}</div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto border-t border-white/10 bg-[#04120f]/40 p-7 sm:p-8">
                  <h3 className="text-sm font-semibold text-white">
                    {language === "th" ? "ต้องการยื่นเรื่องร้องเรียนหรืออุทธรณ์?" : "Filing a complaint or appeal?"}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {language === "th"
                      ? "เลือกหัวข้อที่เกี่ยวข้องในแบบฟอร์ม แล้วดูขั้นตอนการดำเนินการด้านล่าง"
                      : "Choose the relevant topic in the form, then see how we handle it below."}
                  </p>
                  <a
                    href="#process"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#7BE4B4] transition hover:text-white"
                  >
                    {language === "th" ? "ดูขั้นตอน" : "View the process"}
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================== OFFICES ========================== */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal className="max-w-2xl">
            <SectionKicker>{language === "th" ? "สำนักงาน" : "Our Offices"}</SectionKicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "มาเยี่ยมเราได้" : "Come say hello"}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {offices.map((office, index) => (
              <Reveal key={office.city.en} delay={index * 0.1}>
                <div className="group h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40">
                  <div className="relative h-52 overflow-hidden sm:h-60">
                    <img
                      src={office.image}
                      alt={t(office.city)}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#04120f] via-[#04120f]/20 to-transparent"
                    />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-semibold text-white drop-shadow">
                      {t(office.city)}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-white/65">
                      {t(office.address)}
                    </p>
                    <a
                      href={office.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#3BB97B]/40 bg-[#3BB97B]/10 px-5 py-2.5 text-sm font-medium text-[#7BE4B4] transition hover:bg-[#3BB97B]/20 hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                      </svg>
                      {language === "th" ? "นำทาง" : "Get Directions"}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =================== COMPLAINT & APPEAL =================== */}
        <section id="process" className="relative z-10 mx-auto max-w-[1180px] scroll-mt-28 px-6 py-16">
          <Reveal className="max-w-2xl">
            <SectionKicker>{t(process.kicker)}</SectionKicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {t(process.title)}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
              {t(process.body)}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <figure className="overflow-hidden rounded-[28px] border border-white/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-5">
              <img
                src={`${contactAssetBase}/VEKIN_Complaint_Process.png`}
                alt={t(process.caption)}
                className="mx-auto block h-auto w-full max-w-3xl rounded-2xl"
              />
              <figcaption className="mt-3 pb-1 text-center text-xs text-[#04120f]/50">
                {t(process.caption)}
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <div className="pb-12" />
      </main>
    </>
  );
}

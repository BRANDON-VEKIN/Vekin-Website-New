"use client";

import React, { useState } from "react";

import { NEWSLETTER_ENDPOINT, CONTACT_EMAIL } from "../siteConfig";

type Status = "idle" | "submitting" | "success" | "error";

const copy = {
  th: {
    placeholder: "อีเมลของคุณ",
    button: "สมัครรับข่าวสาร",
    sending: "กำลังส่ง…",
    success: "ขอบคุณ! เราได้รับข้อมูลของคุณแล้ว",
    error: "ขออภัย เกิดข้อผิดพลาดในการส่งแบบฟอร์ม กรุณาลองใหม่อีกครั้ง"
  },
  en: {
    placeholder: "Your email address",
    button: "Subscribe",
    sending: "Sending…",
    success: "Thank you! Your submission has been received.",
    error: "Oops! Something went wrong while submitting the form. Please try again."
  }
};

export default function NewsletterForm({ language }: { language: "th" | "en" }) {
  const t = copy[language];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    // Without a configured list provider there is nowhere to POST, so hand the
    // subscription to email rather than silently dropping it.
    if (!NEWSLETTER_ENDPOINT) {
      const subject = encodeURIComponent("Newsletter subscription");
      const body = encodeURIComponent(`Please subscribe this address: ${email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-md">
      <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          {t.placeholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error" || status === "success") setStatus("idle");
          }}
          placeholder={t.placeholder}
          className="w-full rounded-full border border-white/15 bg-[#04120f]/70 px-5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#3BB97B]/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="shrink-0 rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f] transition-colors duration-300 hover:bg-[#43dcae] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t.sending : t.button}
        </button>
      </form>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-[1.25rem] text-[12px] ${
          status === "error" ? "text-red-300" : "text-[#7BE4B4]"
        }`}
      >
        {status === "success" ? t.success : status === "error" ? t.error : ""}
      </p>
    </div>
  );
}

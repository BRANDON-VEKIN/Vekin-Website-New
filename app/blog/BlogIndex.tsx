"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";
import PostImage from "./PostImage";
import { blogCategories, blogPosts, readingMinutes } from "./blogData";

const copy = {
  th: {
    eyebrow: "VEKIN NEXUS",
    titleLead: "เรื่องราวจาก",
    titleAccent: "ลูกค้าของเรา",
    intro:
      "ตั้งแต่สตาร์ทอัพไปจนถึงองค์กรระดับประเทศ ค้นพบวิธีที่องค์กรต่าง ๆ ใช้เทคโนโลยี AI และบล็อกเชนของ VEKIN เปลี่ยนข้อมูลสิ่งแวดล้อมให้เป็นผลลัพธ์ที่ตรวจสอบได้",
    featured: "เรื่องเด่น",
    latest: "เรื่องราวล่าสุด",
    readStory: "อ่านเรื่องราว",
    readMore: "อ่านต่อ",
    minRead: "นาที",
    imageSoon: "ภาพเร็ว ๆ นี้",
    empty: "ยังไม่มีเรื่องราวในหมวดนี้",
    ctaTitle: "เร่งอนาคตที่ยั่งยืนของคุณ",
    ctaBody:
      "พร้อมสัมผัสพลังของเทคโนโลยี AI และบล็อกเชนจาก VEKIN แล้วหรือยัง ค้นพบว่าโซลูชันที่ได้รับการรับรอง ISO 27001 ของเราเปลี่ยนข้อมูลดิบให้เป็นผลลัพธ์ที่ผ่านการทวนสอบได้อย่างไร",
    ctaButton: "ติดต่อเรา",
    newsletterTitle: "รับข่าวสารจากเรา",
    newsletterBody:
      "ติดตามนวัตกรรมด้านความยั่งยืน แนวปฏิบัติที่ดีในการตรวจสอบคาร์บอน และข้อมูลเชิงลึกของอุตสาหกรรม",
    newsletterPlaceholder: "อีเมลของคุณ",
    newsletterButton: "สมัครรับข่าวสาร",
    newsletterNote: "การสมัครถือว่าคุณยอมรับนโยบายความเป็นส่วนตัวของเรา"
  },
  en: {
    eyebrow: "VEKIN NEXUS",
    titleLead: "Meet the teams",
    titleAccent: "we empower",
    intro:
      "From innovative startups to national enterprises, see how organisations put VEKIN's AI and blockchain technology to work — turning environmental data into verified results.",
    featured: "Featured",
    latest: "Latest stories",
    readStory: "Read the story",
    readMore: "Read more",
    minRead: "min read",
    imageSoon: "Image coming soon",
    empty: "No stories in this category yet.",
    ctaTitle: "Supercharge your sustainable future",
    ctaBody:
      "Ready to experience the power of VEKIN's AI and blockchain-driven technology for yourself? Discover how our ISO 27001-certified solution transforms raw data into verified results, and start making measurable progress toward your environmental objectives today.",
    ctaButton: "Contact us",
    newsletterTitle: "Join our newsletter",
    newsletterBody:
      "Stay connected with the latest in sustainable innovation, carbon auditing best practices, and industry insights.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe",
    newsletterNote: "By subscribing you agree to our Privacy Policy."
  }
};

export default function BlogIndex() {
  const { language } = useSiteLanguage();
  const t = copy[language];
  const [activeCategory, setActiveCategory] = useState("all");

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const rest = useMemo(
    () =>
      blogPosts
        .filter((post) => post.slug !== featured.slug)
        .filter((post) => activeCategory === "all" || post.categoryKey === activeCategory),
    [featured.slug, activeCategory]
  );

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.22), transparent 60%), radial-gradient(900px 620px at 92% 4%, rgba(0,181,159,0.16), transparent 62%), radial-gradient(1200px 900px at 50% 112%, rgba(0,70,78,0.55), transparent 66%)"
          }}
        />

        {/* ---------------------------------------------------------- hero */}
        <section className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-6 pt-32 text-center sm:pt-40">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BE4B4]"
          >
            {t.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-3xl text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]"
          >
            {t.titleLead}{" "}
            <span className="bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {t.intro}
          </motion.p>
        </section>

        {/* ------------------------------------------------------ featured */}
        <section className="relative z-10 mx-auto mt-16 max-w-[1240px] px-6 sm:mt-20">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-[#3BB97B]/40"
          >
            <Link href={`/blog/${featured.slug}`} className="grid gap-0 lg:grid-cols-2">
              <div className="relative h-60 w-full overflow-hidden sm:h-72 lg:h-full lg:min-h-[420px]">
                <PostImage
                  src={featured.image}
                  alt={featured.title.en}
                  label={t.imageSoon}
                  priority
                  className="transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-5 top-5 rounded-full border border-[#3BB97B]/40 bg-[#04120f]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7BE4B4] backdrop-blur-sm">
                  {t.featured}
                </span>
              </div>

              <div className="flex flex-col justify-center gap-5 p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span className="rounded-full bg-[#3BB97B]/15 px-3 py-1 text-[#7BE4B4]">
                    {featured.category[language]}
                  </span>
                  <span className="text-white/40">
                    {readingMinutes(featured)} {t.minRead}
                  </span>
                </div>

                <h2 className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#7BE4B4]">
                  {featured.title[language]}
                </h2>

                <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                  {featured.excerpt[language]}
                </p>

                <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#7BE4B4]">
                  {t.readStory}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </motion.article>
        </section>

        {/* ------------------------------------------- filters + post grid */}
        <section className="relative z-10 mx-auto mt-20 max-w-[1240px] px-6">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{t.latest}</h2>

            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => {
                const isActive = category.key === activeCategory;
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setActiveCategory(category.key)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "border-[#3BB97B]/60 bg-[#3BB97B]/20 text-[#7BE4B4]"
                        : "border-white/12 bg-white/[0.03] text-white/55 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    {category.label[language]}
                  </button>
                );
              })}
            </div>
          </div>

          {rest.length === 0 ? (
            <p className="py-16 text-center text-sm text-white/45">{t.empty}</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]"
                >
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    <div className="relative h-44 w-full overflow-hidden sm:h-48">
                      <PostImage
                        src={post.image}
                        alt={post.title.en}
                        label={t.imageSoon}
                        className="transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em]">
                        <span className="rounded-full bg-[#3BB97B]/15 px-2.5 py-1 text-[#7BE4B4]">
                          {post.category[language]}
                        </span>
                        <span className="text-white/35">
                          {readingMinutes(post)} {t.minRead}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#7BE4B4]">
                        {post.title[language]}
                      </h3>

                      <p className="text-[13px] leading-relaxed text-white/55">
                        {post.excerpt[language]}
                      </p>

                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-[13px] font-semibold text-[#7BE4B4]">
                        {t.readMore}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* ------------------------------------------------------- CTA band */}
        <section className="relative z-10 mx-auto mt-24 max-w-[1240px] px-6">
          <div className="overflow-hidden rounded-3xl border border-[#3BB97B]/25 bg-gradient-to-br from-[#0a2a21] via-[#072019] to-[#04120f] p-8 text-center sm:p-14">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              {t.ctaBody}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#3BB97B] px-8 py-3 text-[15px] font-semibold text-[#04120f] transition-colors duration-300 hover:bg-[#43dcae]"
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>

        {/* ----------------------------------------------------- newsletter */}
        <section className="relative z-10 mx-auto mt-14 max-w-[1240px] px-6 pb-28">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
                {t.newsletterTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{t.newsletterBody}</p>
            </div>

            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t.newsletterPlaceholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                className="w-full rounded-full border border-white/15 bg-[#04120f]/70 px-5 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#3BB97B]/60 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f] transition-colors duration-300 hover:bg-[#43dcae]"
              >
                {t.newsletterButton}
              </button>
            </form>
          </div>
          <p className="mt-3 text-center text-[11px] text-white/30 lg:text-right">
            {t.newsletterNote}
          </p>
        </section>
      </main>
    </>
  );
}

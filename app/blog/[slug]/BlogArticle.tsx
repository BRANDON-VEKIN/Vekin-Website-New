"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

import Header from "../../components/Header";
import { useSiteLanguage } from "../../components/siteLanguage";
import PostImage from "../PostImage";
import { blogPosts, formatPostDate, getPost, readingMinutes } from "../blogData";

const copy = {
  th: {
    back: "กลับไปหน้าเรื่องราวทั้งหมด",
    minRead: "นาที",
    imageSoon: "ภาพเร็ว ๆ นี้",
    more: "อ่านเรื่องราวอื่น",
    ctaTitle: "สนใจโซลูชันของเรา",
    ctaButton: "ติดต่อเรา"
  },
  en: {
    back: "Back to all stories",
    minRead: "min read",
    imageSoon: "Image coming soon",
    more: "More stories",
    ctaTitle: "Interested in what we build?",
    ctaButton: "Contact us"
  }
};

export default function BlogArticle({ slug }: { slug: string }) {
  const { language } = useSiteLanguage();
  const t = copy[language];

  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1000px 560px at 14% -6%, rgba(59,185,123,0.20), transparent 60%), radial-gradient(900px 620px at 90% 6%, rgba(0,181,159,0.14), transparent 62%)"
          }}
        />

        <article className="relative z-10 mx-auto max-w-[820px] px-6 pt-32 sm:pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/50 transition-colors hover:text-[#7BE4B4]"
          >
            <span aria-hidden="true">&larr;</span>
            {t.back}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
              <span className="rounded-full bg-[#3BB97B]/15 px-3 py-1 text-[#7BE4B4]">
                {post.category[language]}
              </span>
              {post.datePublished && (
                <time dateTime={post.datePublished} className="text-white/40">
                  {formatPostDate(post, language)}
                </time>
              )}
              <span className="text-white/40">
                {readingMinutes(post)} {t.minRead}
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              {post.title[language]}
            </h1>

            {post.subtitle && (
              <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
                {post.subtitle[language]}
              </p>
            )}
          </motion.header>

          <div className="mt-10 h-56 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-80">
            <PostImage
              src={post.image}
              alt={post.title.en}
              label={t.imageSoon}
              naturalWidth={post.imageWidth ?? undefined}
              renderedWidth={770}
              priority
            />
          </div>

          <div className="mt-12 flex flex-col gap-10 pb-4">
            {post.body.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="mb-4 text-xl font-semibold tracking-[-0.01em] text-[#7BE4B4] sm:text-2xl">
                    {section.heading[language]}
                  </h2>
                )}

                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mb-5 text-[15px] leading-[1.85] text-white/70 last:mb-0 sm:text-base"
                  >
                    {paragraph[language]}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-2 flex flex-col gap-4">
                    {section.list.map((item, lIndex) => (
                      <li
                        key={lIndex}
                        className="flex gap-3 text-[15px] leading-[1.8] text-white/70 sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3BB97B]"
                        />
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.notice && (
            <p className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-[12px] leading-relaxed text-white/40">
              {post.notice[language]}
            </p>
          )}

          <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-[#3BB97B]/25 bg-gradient-to-br from-[#0a2a21] to-[#04120f] p-8 text-center">
            <h2 className="text-xl font-semibold tracking-[-0.01em] sm:text-2xl">{t.ctaTitle}</h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#3BB97B] px-7 py-2.5 text-sm font-semibold text-[#04120f] transition-colors duration-300 hover:bg-[#43dcae]"
            >
              {t.ctaButton}
            </Link>
          </div>
        </article>

        {/* ------------------------------------------------- related posts */}
        <section className="relative z-10 mx-auto mt-20 max-w-[1240px] px-6 pb-28">
          <h2 className="border-b border-white/10 pb-5 text-2xl font-semibold tracking-[-0.02em]">
            {t.more}
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <PostImage
                    src={item.image}
                    alt={item.title.en}
                    label={t.imageSoon}
                    naturalWidth={item.imageWidth ?? undefined}
                    renderedWidth={380}
                    className="transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7BE4B4]">
                    {item.category[language]}
                  </span>
                  <h3 className="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-[#7BE4B4]">
                    {item.title[language]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

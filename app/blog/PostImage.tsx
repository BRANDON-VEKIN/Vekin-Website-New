"use client";

import React from "react";

type PostImageProps = {
  /** Null until real artwork is supplied; renders the placeholder instead. */
  src: string | null;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders the post artwork, falling back to a branded placeholder so a post
 * without an image never shows a broken frame. Set `image` on the post to a
 * path under /public and the real picture takes over with no other changes.
 */
export default function PostImage({ src, alt, label, className = "", priority }: PostImageProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      aria-label={`${label} — image coming soon`}
      role="img"
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#072019] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(520px 320px at 22% 12%, rgba(59,185,123,0.30), transparent 62%), radial-gradient(460px 320px at 84% 88%, rgba(0,181,159,0.24), transparent 60%)"
        }}
      />
      {/* faint grid so the empty frame reads as intentional */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(123,228,180,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,228,180,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-7 w-7 text-[#7BE4B4]/70"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <circle cx="8.75" cy="9.5" r="1.6" />
          <path d="M21 16.5 15.6 11.2 6.4 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7BE4B4]/60">
          {label}
        </span>
      </div>
    </div>
  );
}

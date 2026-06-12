"use client";

export default function Bubble({ className }: { className: string }) {
  return <span className={`bubble ${className}`} aria-hidden="true" />;
}

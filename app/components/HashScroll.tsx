"use client";

import { useEffect } from "react";

/**
 * Re-applies a #fragment jump once the page has finished loading.
 *
 * The homepage runs to ~14,000px and its images carry no intrinsic size, so
 * the browser's own jump fires while the content above the target is still
 * laying out and settles at the top of the page instead. Repeating the jump
 * after load — and once more a beat later — absorbs that late shift.
 */
export default function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    function jump() {
      if (cancelled) return;
      // "instant" rather than "auto": auto defers to the smooth scrolling
      // globals.css sets on <html>, and each animation would cancel the last.
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }

    function settle() {
      jump();
      timer = setTimeout(jump, 400);
    }

    if (document.readyState === "complete") settle();
    else window.addEventListener("load", settle);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("load", settle);
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

type RevealElement = "section" | "div";

type BidirectionalScrollRevealProps = Omit<
  HTMLMotionProps<"section">,
  "animate" | "initial" | "transition" | "variants" | "viewport" | "whileInView"
> & {
  as?: RevealElement;
  amount?: number;
  delay?: number;
  duration?: number;
  exitDuration?: number;
  offset?: number;
};

function useScrollDirection() {
  const directionRef = useRef<"up" | "down">("down");
  const lastYRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastYRef.current) < 4) return;

      directionRef.current = currentY > lastYRef.current ? "down" : "up";
      lastYRef.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return directionRef;
}

export function BidirectionalScrollReveal({
  as = "section",
  amount = 0.16,
  children,
  delay = 0,
  duration = 1.15,
  exitDuration = 0.55,
  offset = 72,
  ...props
}: BidirectionalScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimationControls();
  const directionRef = useScrollDirection();
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { amount });

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    const direction = directionRef.current;

    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay, duration, ease: [0.16, 1, 0.3, 1] },
      });
      return;
    }

    controls.start({
      opacity: 0,
      y: direction === "down" ? -offset : offset,
      transition: { duration: exitDuration, ease: [0.4, 0, 0.2, 1] },
    });
  }, [
    controls,
    delay,
    directionRef,
    duration,
    exitDuration,
    isInView,
    offset,
    prefersReducedMotion,
  ]);

  const initialY = prefersReducedMotion ? 0 : offset;
  if (as === "div") {
    return (
      <motion.div
        {...(props as HTMLMotionProps<"div">)}
        ref={(node) => {
          ref.current = node;
        }}
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: initialY }}
        animate={controls}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.section
      {...props}
      ref={(node) => {
        ref.current = node;
      }}
      initial={{ opacity: prefersReducedMotion ? 1 : 0, y: initialY }}
      animate={controls}
    >
      {children}
    </motion.section>
  );
}

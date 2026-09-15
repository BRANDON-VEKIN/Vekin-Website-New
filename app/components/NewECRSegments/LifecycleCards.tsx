"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { PHONE_PLANE } from "./phonePlane";

/**
 * The lifecycle cards that float above the receipt phone.
 *
 * These used to be a single flat bitmap (EC_Animation_1.2), which meant the
 * stage names were pixels: soft on a hi-dpi screen, invisible to a screen
 * reader, unreachable by the language toggle, and only able to animate as one
 * block. They are real elements now.
 *
 * Coordinates are the card corners measured off that original artwork, in its
 * own 715x742 space, so the composition is unchanged. They are drawn on the
 * phone's own isometric plane: with transform-origin at the top-left corner, a
 * card of width w lands exactly on the parallelogram that was measured for it.
 */

const BOX_W = 715;
const BOX_H = 742;

type Tone = "primary" | "muted" | "pale";

type Card = {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: Tone;
  label?: string;
  /**
   * Label size in cqw, so it tracks the container at every breakpoint. Tuned
   * per card rather than bucketed: in the original artwork each heading sits
   * on a single line across its own card, and a longer name on a narrower card
   * has to be set smaller to do that.
   */
  font?: number;
};

/**
 * Fill and lift, in three steps of emphasis. The artwork gave every card the
 * same weight, which left two dozen panels competing with the receipt behind
 * them and with the stage names that are the actual point of the layer. The
 * labelled cards now sit forward and the unlabelled filler behind them is
 * thinner, so the overlaps read as depth rather than as one muddy stack.
 *
 * The greys are tinted toward the receipt's teal: a neutral grey laid over
 * that screen reads as a smudge on it rather than as a card above it.
 */
const TONE: Record<Tone, { fill: string; lift: string }> = {
  primary: { fill: "rgba(109, 176, 150, 0.94)", lift: "0 0.7cqw 1.6cqw rgba(10, 56, 50, 0.18)" },
  muted: { fill: "rgba(196, 211, 208, 0.66)", lift: "0 0.4cqw 1.1cqw rgba(10, 56, 50, 0.10)" },
  pale: { fill: "rgba(246, 252, 251, 0.62)", lift: "0 0.4cqw 1.1cqw rgba(10, 56, 50, 0.08)" }
};

/**
 * A hairline inside each card, so two translucent panels that overlap still
 * have an edge between them. It shears with the card, so it stays true to the
 * plane the same way the fill does.
 */
const EDGE = "inset 0 0 0 1px rgba(255, 255, 255, 0.42)";

/**
 * Ordered roughly the way the lifecycle reads, so the stagger below traces the
 * journey from methodology down to objective rather than flashing at random.
 */
const CARDS: Card[] = [
  // Blank cards behind the labelled ones, carrying the sense of depth.
  { x: 504, y: 0, w: 106, h: 36, tone: "pale" },
  { x: 297, y: 70, w: 51, h: 33, tone: "pale" },
  { x: 417, y: 98, w: 106, h: 41, tone: "pale" },
  { x: 575, y: 92, w: 81, h: 41, tone: "muted" },
  { x: 209, y: 149, w: 85, h: 54, tone: "muted" },
  { x: 210, y: 224, w: 103, h: 47, tone: "pale" },
  { x: 539, y: 284, w: 87, h: 48, tone: "muted" },
  { x: 504, y: 348, w: 40, h: 23, tone: "pale" },
  { x: 435, y: 362, w: 94, h: 57, tone: "pale" },
  { x: 122, y: 289, w: 71, h: 42, tone: "muted" },
  { x: 318, y: 497, w: 151, h: 53, tone: "muted" },
  { x: 39, y: 475, w: 150, h: 54, tone: "muted" },
  { x: 96, y: 545, w: 145, h: 52, tone: "pale" },
  { x: 245, y: 612, w: 140, h: 60, tone: "pale" },

  // The labelled stages.
  { x: 371, y: 29, w: 140, h: 74, tone: "primary", label: "OUR METHODOLOGY", font: 1.38 },
  { x: 600, y: 139, w: 116, h: 52, tone: "primary", label: "Material Sourcing" },
  { x: 308, y: 127, w: 142, h: 59, tone: "primary", label: "Processing &\nManufacturing" },
  { x: 479, y: 185, w: 128, h: 68, tone: "primary", label: "Logistic" },
  { x: 177, y: 279, w: 103, h: 32, tone: "primary", label: "Distribution" },
  { x: 362, y: 279, w: 138, h: 72, tone: "primary", label: "Distribution" },
  { x: 94, y: 351, w: 120, h: 81, tone: "primary", label: "Usage", font: 2.8 },
  { x: 335, y: 428, w: 131, h: 51, tone: "primary", label: "Waste Treatment" },
  { x: 85, y: 622, w: 152, h: 56, tone: "muted", label: "OUR OBJECTIVE", font: 1.8 }
];

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * Corner radius, measured in the artwork's own units and converted to cqw so
 * it tracks the container at every breakpoint. Held to a third of the card's
 * height so the shallowest cards round off rather than turning into lozenges,
 * and capped so the largest ones stay cards with soft corners.
 */
const radius = (h: number) => `${(Math.min(12, h / 3) / BOX_W) * 100}cqw`;

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } }
};

/** Each card lifts into the plane rather than simply fading. */
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function LifecycleCards({ active }: { active: boolean }) {
  return (
    // The bitmap this replaces was object-contain inside a much taller box, so
    // it sat full-width and vertically centred. This matches that placement.
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        variants={groupVariants}
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        className="relative w-full"
        style={{ aspectRatio: `${BOX_W} / ${BOX_H}`, containerType: "inline-size" }}
      >
        {CARDS.map((card) => (
          // The projection lives on this wrapper, not on the animated child:
          // Motion writes the transform property itself, so a matrix set
          // alongside an animated scale would simply be overwritten.
          <div
            key={`${card.x}-${card.y}-${card.label ?? "blank"}`}
            aria-hidden={card.label ? undefined : true}
            className="absolute"
            style={{
              left: pct(card.x, BOX_W),
              top: pct(card.y, BOX_H),
              width: pct(card.w, BOX_W),
              height: pct(card.h, BOX_H),
              transform: PHONE_PLANE,
              transformOrigin: "0 0"
            }}
          >
            <motion.div
              variants={cardVariants}
              className="flex h-full w-full items-center justify-center text-center"
              style={{
                background: TONE[card.tone].fill,
                borderRadius: radius(card.h),
                boxShadow: `${EDGE}, ${TONE[card.tone].lift}`
              }}
            >
              {card.label && (
                <span
                  className="whitespace-pre-line px-[4%] font-semibold leading-tight text-white"
                  style={{
                    fontSize: `${card.font ?? 1.2}cqw`,
                    letterSpacing: (card.font ?? 1.2) < 2 ? "0.04em" : "0.01em"
                  }}
                >
                  {card.label}
                </span>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

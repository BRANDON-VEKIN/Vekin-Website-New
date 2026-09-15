"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { PHONE_PLANE } from "./phonePlane";

/**
 * The pale reading blocks that sit over the receipt, replacing the flat
 * EC_Animation_2 bitmap. Rectangles measured off that artwork in its own
 * 715x741 space; the two clusters that touched were separated by reading where
 * the artwork's alpha doubles, which is where one block overlaps another.
 *
 * They are translucent and stacked, so the overlaps still darken exactly as
 * they did when this was one image.
 *
 * The artwork drew them square to the page, which read as a sheet of
 * rectangles hanging in front of the tilted phone rather than as readings on
 * its screen. Pass `plane` to lay the whole sheet down on the phone's own
 * isometric plane instead; the upright phone in sequence two wants them square,
 * so it takes the default.
 */
const BOX_W = 715;
const BOX_H = 741;

/**
 * Sampled from the original artwork, then thinned. At the artwork's weight two
 * dozen of these stacked over the lifecycle cards and the receipt turned the
 * middle of the frame opaque; pulled back, the same overlaps read as panes of
 * glass laid on top of each other.
 */
const FILL = "rgba(172, 230, 224, 0.6)";

/** The hairline and lift the lifecycle cards carry, so the two layers match. */
const EDGE = "inset 0 0 0 1px rgba(255, 255, 255, 0.4)";
const LIFT = "0 0.4cqw 1.1cqw rgba(10, 56, 50, 0.08)";

type Block = { x: number; y: number; w: number; h: number };

const BLOCKS: Block[] = [
  { x: 557, y: 98, w: 86, h: 36 },
  { x: 258, y: 127, w: 191, h: 79 },
  { x: 167, y: 156, w: 85, h: 36 },
  { x: 557, y: 150, w: 132, h: 51 },
  { x: 210, y: 194, w: 84, h: 35 },
  { x: 608, y: 236, w: 67, h: 20 },
  { x: 514, y: 260, w: 160, h: 48 },
  { x: 598, y: 311, w: 59, h: 24 },
  { x: 432, y: 319, w: 164, h: 91 },
  { x: 171, y: 368, w: 85, h: 36 },
  { x: 45, y: 402, w: 51, h: 22 },
  { x: 100, y: 402, w: 47, h: 20 },
  { x: 84, y: 432, w: 47, h: 20 },
  { x: 148, y: 443, w: 84, h: 36 },
  { x: 22, y: 455, w: 105, h: 61 },
  { x: 471, y: 508, w: 115, h: 48 },
  { x: 99, y: 517, w: 49, h: 20 },
  { x: 91, y: 539, w: 93, h: 39 },
  { x: 331, y: 552, w: 179, h: 96 },
  { x: 60, y: 598, w: 159, h: 44 },
  { x: 305, y: 601, w: 97, h: 41 },
  { x: 476, y: 608, w: 97, h: 41 },
  { x: 476, y: 658, w: 97, h: 41 }
];

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/**
 * Corner radius, measured in the artwork's own units and converted to cqw so
 * it tracks the container at every breakpoint. Held to a third of the block's
 * height so the shortest readings round off rather than turning into lozenges,
 * and capped so the tallest ones stay rectangles with soft corners.
 */
const radius = (h: number) => `${(Math.min(12, h / 3) / BOX_W) * 100}cqw`;

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } }
};

const blockVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};

export default function DataBlocks({
  active,
  plane = false
}: {
  active: boolean;
  plane?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* The projection sits on this wrapper rather than on the animated group
          below, so Motion's own transform has somewhere of its own to live.
          Tilting about the middle keeps the sheet centred over the receipt: the
          corner origin the lifecycle cards use would swing it off the phone. */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: `${BOX_W} / ${BOX_H}`,
          containerType: "inline-size",
          transform: plane ? PHONE_PLANE : undefined,
          transformOrigin: "50% 50%"
        }}
      >
        <motion.div
          variants={groupVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          aria-hidden="true"
          className="absolute inset-0"
        >
          {BLOCKS.map((block) => (
            <motion.div
              key={`${block.x}-${block.y}`}
              variants={blockVariants}
              className="absolute"
              style={{
                left: pct(block.x, BOX_W),
                top: pct(block.y, BOX_H),
                width: pct(block.w, BOX_W),
                height: pct(block.h, BOX_H),
                background: FILL,
                borderRadius: radius(block.h),
                boxShadow: `${EDGE}, ${LIFT}`
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

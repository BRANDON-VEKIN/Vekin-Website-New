"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * The constellation that ties the lifecycle cards together, replacing the flat
 * EC_Animation_1.1 bitmap.
 *
 * Nodes and edges were read back off that artwork: the dots by clustering its
 * solid pixels, the edges by testing every pair of dots for ink along the line
 * between them, then discarding the pairs that only scored because a third dot
 * happened to sit between them. Coordinates are in the artwork's own 715x741
 * space, which is already the projected space the cards land in, so this layer
 * takes no plane transform of its own.
 *
 * As real geometry it can draw itself, which a bitmap never could: each chain
 * joins its dots in order, every edge arriving just before the dot it leads to.
 */

const BOX_W = 715;
const BOX_H = 741;

/** Ink sampled from the artwork, at the two weights it draws with. */
const INK = "119, 147, 128";
const STRONG = 0.91;
const FAINT = 0.51;

/** Stroke and dash period, both measured off the artwork's own lines. */
const WEIGHT = 1.3;
const DASH = "4.4 4.4";

type Node = { x: number; y: number; r: number };

const NODES: Node[] = [
  { x: 533.0, y: 20.5, r: 2.8 },
  { x: 519.5, y: 53.7, r: 2.5 },
  { x: 465.6, y: 66.6, r: 3.7 },
  { x: 445.5, y: 122.7, r: 2.9 },
  { x: 598.5, y: 158.5, r: 3.6 },
  { x: 397.5, y: 175.5, r: 3.7 },
  { x: 229.7, y: 187.0, r: 3.7 },
  { x: 483.1, y: 205.2, r: 3.6 },
  { x: 573.6, y: 311.6, r: 2.8 },
  { x: 229.0, y: 316.7, r: 3.9 },
  { x: 375.8, y: 318.1, r: 3.7 },
  { x: 139.9, y: 320.8, r: 3.9 },
  { x: 165.5, y: 394.7, r: 4.0 },
  { x: 451.6, y: 399.1, r: 3.1 },
  { x: 141.4, y: 425.9, r: 3.8 },
  { x: 348.1, y: 455.4, r: 3.6 },
  { x: 64.6, y: 515.8, r: 4.0 },
  { x: 329.0, y: 534.7, r: 3.7 },
  { x: 351.5, y: 545.0, r: 3.2 },
  { x: 381.9, y: 593.3, r: 3.5 }
];

type Chain = {
  /** Node indices, joined in the order they are drawn. */
  nodes: number[];
  /** A point the last edge runs out to that carries no dot of its own. */
  tail?: [number, number];
  strong?: boolean;
};

const CHAINS: Chain[] = [
  { nodes: [0, 3, 6, 11, 14, 16] },
  { nodes: [2, 4, 7, 5, 10, 9, 12, 15, 17], strong: true },
  { nodes: [8, 13, 18, 19], tail: [217, 670] }
];

/** A dot in the artwork that joins nothing, and a short rule that joins nothing. */
const LONE = [1];
const RULE: [number, number, number, number] = [114, 523, 194, 506];

type Edge = { x1: number; y1: number; x2: number; y2: number; step: number; strong: boolean; dashed: boolean };
type Dot = Node & { step: number };

/**
 * Both lists carry the step they belong to rather than relying on child order,
 * because the reveal lines and the lines they reveal are in different parts of
 * the tree and have to keep time with each other.
 */
const EDGES: Edge[] = [];
const DOTS: Dot[] = [];

CHAINS.forEach((chain) => {
  const points: [number, number][] = chain.nodes.map((n) => [NODES[n].x, NODES[n].y]);
  if (chain.tail) points.push(chain.tail);
  chain.nodes.forEach((n, k) => DOTS.push({ ...NODES[n], step: k }));
  points.slice(1).forEach(([x2, y2], k) => {
    const [x1, y1] = points[k];
    EDGES.push({ x1, y1, x2, y2, step: k, strong: !!chain.strong, dashed: true });
  });
});

LONE.forEach((n) => DOTS.push({ ...NODES[n], step: 2 }));
EDGES.push({ x1: RULE[0], y1: RULE[1], x2: RULE[2], y2: RULE[3], step: 3, strong: false, dashed: false });

/**
 * One step per link in a chain. The chains run at the same time rather than
 * one after another, so the whole network is joined up in about the time the
 * cards take to stagger in above it.
 */
const BASE = 0.08;
const STEP = 0.2;
const DRAW = 0.3;
/** When a dot lights up: as its edge lands, a little before the edge finishes. */
const LAND = 0.26;

const edgeVariants: Variants = {
  off: { pathLength: 0 },
  on: (step: number) => ({
    pathLength: 1,
    transition: { duration: DRAW, delay: BASE + step * STEP, ease: [0.33, 1, 0.68, 1] }
  })
};

const dotVariants: Variants = {
  off: { scale: 0, opacity: 0 },
  on: (step: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      // The head of a chain has no edge to wait for, so it is simply there.
      delay: step === 0 ? BASE : BASE + (step - 1) * STEP + LAND,
      ease: [0.34, 1.56, 0.64, 1]
    }
  })
};

export default function Constellation({ active }: { active: boolean }) {
  // Scoped so a second instance cannot end up masked by the first one's lines.
  const maskId = `constellation-${useId().replace(/:/g, "")}`;

  return (
    // No preserveAspectRatio of its own: the default is the same letterboxing
    // the bitmap got from object-contain, which is what puts the dots on the
    // cards.
    <motion.svg
      viewBox={`0 0 ${BOX_W} ${BOX_H}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      initial="off"
      animate={active ? "on" : "off"}
    >
      <defs>
        {/* The dashes are the artwork's own, so the reveal cannot ride on
            stroke-dasharray the way Motion's pathLength does — it would
            overwrite the pattern. Solid lines drawing along the same geometry
            inside a mask uncover each edge instead, leaving the dashes alone. */}
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={BOX_W} height={BOX_H}>
          {EDGES.map((edge, i) => (
            <motion.line
              key={`m${i}`}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#fff"
              strokeWidth={5}
              strokeLinecap="round"
              custom={edge.step}
              variants={edgeVariants}
            />
          ))}
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        {EDGES.map((edge, i) => (
          <line
            key={`e${i}`}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke={`rgba(${INK}, ${edge.strong ? STRONG : FAINT})`}
            strokeWidth={WEIGHT}
            strokeDasharray={edge.dashed ? DASH : undefined}
          />
        ))}
      </g>

      {DOTS.map((dot, i) => (
        <motion.circle
          key={`d${i}`}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill={`rgba(${INK}, ${STRONG})`}
          custom={dot.step}
          variants={dotVariants}
          // Without a fill-box origin the pop would scale about the viewBox
          // corner and fly the dot across the frame.
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
}

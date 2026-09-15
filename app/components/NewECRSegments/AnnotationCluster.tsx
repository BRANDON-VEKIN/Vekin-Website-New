"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { CLUSTERS, type Cluster } from "./annotationData";

/** Colours sampled from the original artwork. */
const PANEL_FILL = "rgba(158, 226, 220, 0.72)";
const TEAL = "#00a79b";
const DARK = "#43716b";
const BODY = "#5a8e88";

/**
 * The hairline and lift the lifecycle cards and data blocks carry, so every
 * panel in the segment reads as the same kind of object. These clusters live
 * in a half-width layer, so a cqw here is about half the length it is over
 * there; the numbers are doubled to land on the same size on screen.
 *
 * The fill stays at the artwork's weight rather than being thinned like the
 * blank blocks were: these panels carry body copy, and it has to stay legible
 * against whatever of the phone shows through.
 */
const EDGE = "inset 0 0 0 1px rgba(255, 255, 255, 0.4)";
const LIFT = "0 0.8cqw 2.2cqw rgba(10, 56, 50, 0.08)";

const ANCHOR: Record<Cluster["anchor"], string> = {
  "left-top": "top-0 left-0",
  "right-top": "top-0 right-0",
  "left-bottom": "bottom-0 left-0",
  "right-bottom": "bottom-0 right-0"
};

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};

export default function AnnotationCluster({
  id,
  active
}: {
  id: keyof typeof CLUSTERS;
  active: boolean;
}) {
  const cluster = CLUSTERS[id];
  const { boxW, boxH } = cluster;
  const pctX = (v: number) => `${(v / boxW) * 100}%`;
  const pctY = (v: number) => `${(v / boxH) * 100}%`;
  // Worked out in this cluster's own units, which is what a cqw resolves to
  // inside its box, so every panel rounds by the same amount on screen.
  const radius = (v: number) => `${(Math.min(10, v / 3) / boxW) * 100}cqw`;

  return (
    // container-type: size lets the inner box size itself the way the bitmap's
    // object-contain did: as wide as it can be without exceeding the height.
    <div className="absolute inset-0" style={{ containerType: "size" }}>
      <motion.div
        variants={groupVariants}
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        className={`absolute ${ANCHOR[cluster.anchor]}`}
        style={{
          width: `min(100%, calc(100cqh * ${boxW} / ${boxH}))`,
          aspectRatio: `${boxW} / ${boxH}`,
          containerType: "inline-size"
        }}
      >
        {/* Rules and nodes that tie the panels together. */}
        {cluster.connectors.map((c, i) => (
          <div
            key={`c${i}`}
            aria-hidden="true"
            className="absolute"
            style={{
              left: pctX(c.x),
              top: pctY(c.y),
              width: c.vertical ? "1px" : pctX(c.w),
              height: c.vertical ? pctY(c.h) : "1px",
              // Leaders reach out to the phone, so they read a shade stronger
              // than the hairlines that just tie panels to each other.
              background: c.leader ? "rgba(0, 167, 155, 0.7)" : "rgba(0, 167, 155, 0.45)"
            }}
          >
            {c.dot && (
              <span
                className="absolute rounded-full"
                style={{
                  width: c.leader ? "1.3cqw" : "0.9cqw",
                  height: c.leader ? "1.3cqw" : "0.9cqw",
                  background: TEAL,
                  left: c.vertical ? "50%" : c.dot === "start" ? "0" : "100%",
                  top: c.vertical ? (c.dot === "start" ? "0" : "100%") : "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: c.leader ? "0 0 0 0.35cqw rgba(0, 167, 155, 0.18)" : undefined
                }}
              />
            )}
          </div>
        ))}

        {cluster.panels.map((panel, i) => {
          const tone = panel.headingTone === "teal" ? TEAL : DARK;
          const headingSize = panel.headingSize ?? 2.4;
          return (
            // inset-0 matters: Motion writes a transform here for the lift, and
            // a transformed element becomes the containing block for absolutely
            // positioned children. Without it the panels' percentages would
            // resolve against a zero-height wrapper instead of the cluster box.
            <motion.div key={`p${i}`} variants={panelVariants} className="absolute inset-0">
              {/* A heading that sits above its panel rather than inside it. */}
              {panel.heading && !panel.headingInside && (
                <div
                  className="absolute whitespace-pre-line font-bold leading-tight"
                  style={{
                    left: pctX(panel.x),
                    top: pctY(panel.headingY ?? panel.y),
                    width: pctX(Math.max(panel.w, boxW - panel.x)),
                    color: tone,
                    fontSize: `${headingSize}cqw`,
                    letterSpacing: headingSize > 4 ? "-0.01em" : "0.01em"
                  }}
                >
                  {panel.heading}
                </div>
              )}

              <div
                className="absolute overflow-hidden"
                style={{
                  left: pctX(panel.x),
                  top: pctY(panel.y),
                  width: pctX(panel.w),
                  height: pctY(panel.h),
                  background: PANEL_FILL,
                  borderRadius: radius(panel.h),
                  boxShadow: `${EDGE}, ${LIFT}`,
                  padding: "1.6cqw"
                }}
              >
                {panel.heading && panel.headingInside && (
                  <div
                    className="font-bold leading-tight"
                    style={{ color: tone, fontSize: `${headingSize}cqw`, marginBottom: "0.8cqw" }}
                  >
                    {panel.heading}
                  </div>
                )}
                {panel.lead && (
                  <p
                    className="font-bold"
                    style={{ color: TEAL, fontSize: "1.35cqw", lineHeight: 1.35, marginBottom: "0.7cqw" }}
                  >
                    {panel.lead}
                  </p>
                )}
                {panel.body.map((paragraph, p) => (
                  <p
                    key={p}
                    style={{
                      color: BODY,
                      fontSize: "1.35cqw",
                      lineHeight: 1.35,
                      marginTop: p === 0 ? 0 : "0.7cqw"
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

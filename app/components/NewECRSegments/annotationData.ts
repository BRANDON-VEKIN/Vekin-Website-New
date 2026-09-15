/**
 * The four annotation clusters that fly in around the upright receipt phone,
 * replacing the EC_Animation_3/4/5/6 bitmaps.
 *
 * Panel rectangles were measured off those images by flood-filling the panel
 * fill (rgb(158,226,220)) and taking each region's bounding box, so the layout
 * is the artwork's own. Coordinates are in each cluster's original pixel space
 * and rendered as percentages, which keeps the composition at any size.
 *
 * NOTE ON COPY: every body paragraph below is the lorem ipsum that was baked
 * into the original artwork. It is placeholder, and now that it is real text it
 * is visible to search engines and screen readers. Replace `body` with the real
 * copy when it exists — the paragraph counts here are sized to fill each panel,
 * so real copy of roughly the same length will drop straight in.
 */

const LOREM_1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const LOREM_M =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

const LOREM_3 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LOREM_4 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

export type HeadingTone = "teal" | "dark";

export type Panel = {
  /** Panel rectangle, in the cluster's own pixel space. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Heading drawn above the panel, at this y. Omit for a body-only panel. */
  heading?: string;
  headingY?: number;
  headingTone?: HeadingTone;
  /** Heading size in cqw; omitted means the small stage-name size. */
  headingSize?: number;
  /** Set when the heading sits inside the panel rather than above it. */
  headingInside?: boolean;
  /** Emphasised opening line, as on the AI panel. */
  lead?: string;
  body: string[];
};

export type Connector = {
  /** A rule drawn between panels, with a node at one end. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Which end carries the dot. */
  dot?: "start" | "end";
  vertical?: boolean;
  /**
   * A leader runs from a panel toward the phone rather than between panels, so
   * it is drawn a little heavier and always carries its dot at the phone end.
   */
  leader?: boolean;
};

export type Cluster = {
  /** The artwork's pixel box, which sets the aspect ratio and the coordinates. */
  boxW: number;
  boxH: number;
  /** Which corner the artwork was anchored to inside its flight wrapper. */
  anchor: "left-top" | "right-top" | "left-bottom" | "right-bottom";
  panels: Panel[];
  connectors: Connector[];
};

export const CLUSTERS: Record<"three" | "four" | "five" | "six", Cluster> = {
  // ---- top left: blockchain -------------------------------------------
  three: {
    boxW: 330,
    boxH: 346,
    anchor: "left-top",
    panels: [
      { x: 221, y: 0, w: 108, h: 45, body: [LOREM_M] },
      {
        x: 0,
        y: 48,
        w: 222,
        h: 64,
        heading: "BLOCKCHAIN TECHNOLOGY",
        headingInside: true,
        headingTone: "dark",
        headingSize: 3.6,
        body: [LOREM_2, LOREM_3]
      },
      {
        x: 94,
        y: 137,
        w: 127,
        h: 37,
        heading: "DECENTRALIZED DATA STORAGE",
        headingY: 126,
        headingTone: "dark",
        body: [LOREM_M]
      },
      {
        x: 94,
        y: 188,
        w: 127,
        h: 38,
        heading: "SMART CONTRACT",
        headingY: 177,
        headingTone: "dark",
        body: [LOREM_M]
      },
      {
        x: 94,
        y: 241,
        w: 127,
        h: 38,
        heading: "PUBLIC KEY ENCRYPTION",
        headingY: 230,
        headingTone: "dark",
        body: [LOREM_M]
      },
      { x: 73, y: 299, w: 112, h: 46, body: [LOREM_M] }
    ],
    connectors: [
      { x: 274, y: 45, w: 1, h: 28, vertical: true, dot: "end" },
      { x: 78, y: 130, w: 1, h: 155, vertical: true },
      { x: 78, y: 144, w: 16, h: 1, dot: "start" },
      { x: 78, y: 196, w: 16, h: 1, dot: "start" },
      { x: 78, y: 249, w: 16, h: 1, dot: "start" },
      { x: 78, y: 285, w: 110, h: 1 },
      // Leaders out to the phone, which sits to the right of this cluster.
      { x: 222, y: 80, w: 108, h: 1, dot: "end", leader: true },
      { x: 221, y: 207, w: 109, h: 1, dot: "end", leader: true }
    ]
  },

  // ---- top right: methodology -----------------------------------------
  four: {
    boxW: 325,
    boxH: 272,
    anchor: "right-top",
    panels: [
      {
        x: 0,
        y: 23,
        w: 217,
        h: 90,
        heading: "OUR METHODOLOGY",
        headingY: 0,
        headingTone: "dark",
        headingSize: 5.6,
        body: [LOREM_2, LOREM_3, LOREM_4]
      },
      { x: 228, y: 89, w: 96, h: 39, heading: "Material Sourcing", headingY: 78, body: [LOREM_M] },
      { x: 122, y: 123, w: 96, h: 40, heading: "Logistic", headingY: 112, body: [LOREM_M] },
      {
        x: 228,
        y: 143,
        w: 96,
        h: 39,
        heading: "Processing & Manufacturing",
        headingY: 132,
        body: [LOREM_M]
      },
      { x: 122, y: 178, w: 96, h: 40, heading: "Distribution", headingY: 167, body: [LOREM_M] },
      { x: 228, y: 194, w: 96, h: 40, heading: "Usage", headingY: 183, body: [LOREM_M] },
      { x: 122, y: 232, w: 96, h: 39, heading: "Waste Treatment", headingY: 221, body: [LOREM_M] }
    ],
    connectors: [
      { x: 106, y: 113, w: 1, h: 30, vertical: true },
      { x: 106, y: 143, w: 16, h: 1, dot: "start" },
      { x: 218, y: 108, w: 10, h: 1, dot: "end" },
      { x: 218, y: 162, w: 10, h: 1, dot: "end" },
      { x: 218, y: 214, w: 10, h: 1, dot: "end" },
      // The phone is to the left of this cluster, so leaders run off x = 0.
      { x: -78, y: 68, w: 78, h: 1, dot: "start", leader: true },
      { x: -60, y: 197, w: 60, h: 1, dot: "start", leader: true }
    ]
  },

  // ---- bottom left: contribution --------------------------------------
  five: {
    boxW: 279,
    boxH: 266,
    anchor: "left-bottom",
    panels: [
      {
        x: 29,
        y: 35,
        w: 184,
        h: 76,
        heading: "RECOGNIZE YOUR\nCONTRIBUTION",
        headingY: 0,
        headingTone: "teal",
        headingSize: 5.4,
        body: [LOREM_2, LOREM_3]
      },
      {
        x: 0,
        y: 122,
        w: 107,
        h: 44,
        heading: "Green Activity Green Product & Service",
        headingY: 112,
        headingTone: "dark",
        headingSize: 1.9,
        body: [LOREM_M]
      },
      {
        x: 127,
        y: 131,
        w: 107,
        h: 45,
        heading: "CERO",
        headingY: 110,
        headingTone: "dark",
        headingSize: 6.4,
        body: [LOREM_M]
      },
      {
        x: 127,
        y: 203,
        w: 152,
        h: 63,
        heading: "Verified Carbon Footprint\nFragment Carbon",
        headingY: 182,
        headingTone: "dark",
        headingSize: 3.1,
        body: [LOREM_2, LOREM_3]
      }
    ],
    connectors: [
      { x: 113, y: 120, w: 1, h: 60, vertical: true },
      { x: 107, y: 144, w: 6, h: 1, dot: "start" },
      { x: 113, y: 180, w: 14, h: 1, dot: "end" },
      // Leaders out to the phone, which sits to the right of this cluster.
      { x: 213, y: 73, w: 104, h: 1, dot: "end", leader: true },
      { x: 234, y: 153, w: 98, h: 1, dot: "end", leader: true }
    ]
  },

  // ---- bottom right: AI -----------------------------------------------
  six: {
    boxW: 265,
    boxH: 302,
    anchor: "right-bottom",
    panels: [
      {
        x: 62,
        y: 17,
        w: 203,
        h: 84,
        heading: "STRONG ARRANGEMENT OF AI",
        headingY: 0,
        headingTone: "teal",
        headingSize: 4.6,
        lead: "WHEN DATA IS COLLECTED, AI PROCESSES IT USING BENCHMARKS THAT CAN BE ADJUSTED BY REGION AND INDUSTRY.",
        body: [LOREM_2, LOREM_3]
      },
      {
        x: 44,
        y: 130,
        w: 110,
        h: 46,
        heading: "THE PUBLISH-SUBSCRIBE\nPUB/SUB MODEL",
        headingY: 106,
        headingTone: "teal",
        headingSize: 3.9,
        body: [LOREM_M]
      },
      {
        x: 0,
        y: 228,
        w: 182,
        h: 73,
        heading: "USECASE",
        headingY: 206,
        headingTone: "teal",
        headingSize: 5.2,
        body: [LOREM_2, LOREM_3]
      }
    ],
    connectors: [
      { x: 30, y: 152, w: 14, h: 1, dot: "start" },
      { x: 30, y: 152, w: 1, h: 60, vertical: true },
      // The phone is to the left of this cluster.
      { x: -72, y: 59, w: 134, h: 1, dot: "start", leader: true },
      { x: -72, y: 152, w: 102, h: 1, dot: "start", leader: true },
      { x: -72, y: 264, w: 72, h: 1, dot: "start", leader: true }
    ]
  }
};

/** Everything that is still placeholder copy, for a quick pre-launch check. */
export const PLACEHOLDER_PARAGRAPHS = [LOREM_1, LOREM_2, LOREM_3, LOREM_4];

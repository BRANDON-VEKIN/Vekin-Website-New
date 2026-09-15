/**
 * The isometric plane the tilted phone is drawn on: a unit x-axis at 20.4
 * degrees and a unit y-axis at 131 degrees, averaged across the cards in the
 * original artwork. Both axes are unit length, so this tilts a shape into the
 * phone's plane without resizing it.
 *
 * Shared by every layer that lies on the tilted phone, so they read as one
 * surface rather than as flat rectangles floating in front of it. The upright
 * phone in sequence two is drawn square to the page and takes no projection.
 */
export const PHONE_PLANE = "matrix(0.9372, 0.3486, -0.6561, 0.7547, 0, 0)";

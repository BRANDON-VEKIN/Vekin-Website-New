/**
 * Shown while a route segment streams in. Deliberately minimal — it appears
 * for a moment during navigation, so it echoes the site's ground and accent
 * rather than rebuilding the page chrome underneath the real content.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-[#04120f]"
    >
      <span className="sr-only">Loading</span>
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-[#3BB97B]" />
    </div>
  );
}

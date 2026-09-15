/** @type {import('next').NextConfig} */
const nextConfig = {
  // Drops the "X-Powered-By: Next.js" header, which only advertises the stack.
  poweredByHeader: false,

  images: {
    // next/image negotiates the best format the browser accepts. AVIF is
    // typically 20-30% smaller than WebP; WebP stays as the fallback.
    formats: ["image/avif", "image/webp"]
  },

  /**
   * Response headers that are safe for a public marketing site. Deliberately
   * no Content-Security-Policy: this site loads a YouTube embed and uses
   * inline styles throughout, so a policy would need to be written and tested
   * against those rather than guessed at here.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stops a browser second-guessing a declared content type.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send the origin, not the full path, to other sites.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // SAMEORIGIN rather than DENY, so VEKIN can still frame its own pages.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-DNS-Prefetch-Control", value: "on" }
        ]
      }
    ];
  }
};

export default nextConfig;

import type { MetadataRoute } from "next";

import { blogPosts } from "./blog/blogData";
import { solutions } from "./solutions/solutionsData";
import { SITE_URL } from "./siteConfig";

/** Top-level routes that exist as real pages. */
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/solutions", priority: 0.9 },
  { path: "/blog", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/auditor", priority: 0.8 },
  { path: "/carbon_receipt", priority: 0.7 },
  { path: "/new_ec", priority: 0.7 },
  { path: "/dap_new", priority: 0.7 },
  { path: "/dap_more", priority: 0.6 },
  { path: "/vekin_home", priority: 0.6 },
  { path: "/methodology", priority: 0.5 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: "monthly" as const,
      priority: route.priority
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7
    })),
    ...solutions.map((solution) => ({
      url: `${SITE_URL}/solutions/${solution.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}

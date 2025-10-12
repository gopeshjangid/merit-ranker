import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://meritranker.com"
      : "http://localhost:3000";

  // ✅ Static routes for your main pages
  const staticRoutes = [
    "", // Homepage
    "/about",
    "/compatibility",
    "/how-it-works",
    "/partners",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/buy-esim", // eSIM purchase page
  ];

  // ✅ Generate sitemap entries for static routes
  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === "" ? "/" : route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1.0
        : route === "/about" || route === "/how-it-works"
        ? 0.9
        : 0.7,
  }));

  // ✅ Optional: homepage anchor sections (for SEO deep links)
  const homepageSections = ["/#features", "/#providers", "/#pricing"];
  homepageSections.forEach((section) => {
    sitemapEntries.push({
      url: `${baseUrl}${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  // ✅ Optional: future dynamic routes (blogs, posts, etc.)
  // Example:
  // const blogs = await getAllBlogs(); 
  // blogs.forEach((blog) => {
  //   sitemapEntries.push({
  //     url: `${baseUrl}/blog/${blog.slug}`,
  //     lastModified: blog.updatedAt,
  //     changeFrequency: "weekly",
  //     priority: 0.8,
  //   });
  // });

  return sitemapEntries;
}

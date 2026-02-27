import type { MetadataRoute } from "next";
import { SITE_URL } from "~/app/sitemap";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
};

export default robots;

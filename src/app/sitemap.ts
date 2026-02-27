import { promises } from "fs";
import type { MetadataRoute } from "next";
import path from "path";

export const SITE_URL = "https://zaymoriel.com";

const getWritingSlugs = async (directory: string) => {
  const entries = await promises.readdir(directory, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        directory,
        path.join(entry.parentPath, entry.name),
      );

      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"))
    .filter((slug) => slug !== ".");
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const writingDirectory = path.join(process.cwd(), "src", "app", "writing");
  const slugs = await getWritingSlugs(writingDirectory);

  const routes = ["", "/writing"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const writings = slugs.map((slug) => ({
    url: `${SITE_URL}/writing/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...writings];
};

export default sitemap;

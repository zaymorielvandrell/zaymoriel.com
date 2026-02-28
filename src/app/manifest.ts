import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Zaymoriel Vandrell",
    short_name: "ZV",
    description:
      "Essays on software architecture, performance, and production systems.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    id: "/",
    start_url: "/",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    orientation: "portrait",
    display: "standalone",
  };
};

export default manifest;

import type { Config } from "prettier";

const config: Config = {
  bracketSameLine: true,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["cn", "cva"]
};

export default config;

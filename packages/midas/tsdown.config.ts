import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/index.ts"],
  format: "esm",
  platform: "neutral",
  target: "es2022",
  dts: true,
  unbundle: true,
  sourcemap: true,
  clean: true,
  external: [/^react($|\/)/, /^react-dom($|\/)/, /^radix-ui/, /^@phosphor-icons\/react/],
});

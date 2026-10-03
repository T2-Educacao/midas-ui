import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/index.ts", "src/icons/tabler.ts"],
  format: "esm",
  platform: "neutral",
  target: "es2022",
  dts: true,
  unbundle: true,
  sourcemap: true,
  clean: true,
  deps: {
    neverBundle: [
      /^react($|\/)/,
      /^react-dom($|\/)/,
      /^radix-ui/,
      /^@phosphor-icons\/react/,
      /^@tabler\/icons-react/,
      /^cmdk/,
      /^sonner/,
      /^embla-carousel/,
      /^react-day-picker/,
    ],
  },
});

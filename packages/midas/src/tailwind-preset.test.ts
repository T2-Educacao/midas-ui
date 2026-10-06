import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

const preset = createRequire(import.meta.url)("../tailwind-preset.cjs");

describe("tailwind-preset", () => {
  it("mapeia cores para os tokens do Midas", () => {
    const primary = preset.theme.extend.colors.primary;
    expect(primary({ opacityValue: undefined })).toBe("var(--midas-primary)");
    expect(primary({ opacityValue: "0.1" })).toBe(
      "color-mix(in srgb, var(--midas-primary) 10%, transparent)",
    );
  });

  it("mapeia raios e fontes", () => {
    expect(preset.theme.extend.borderRadius.lg).toBe("var(--midas-radius-lg)");
    expect(preset.theme.extend.fontFamily.sans).toEqual(["var(--midas-font-sans)"]);
  });
});

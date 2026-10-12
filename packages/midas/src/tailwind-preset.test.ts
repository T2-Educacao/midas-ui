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

  it("expõe os tokens semânticos do Figma", () => {
    const { colors } = preset.theme.extend;
    expect(colors["surface-canvas"]({ opacityValue: undefined })).toBe(
      "var(--midas-surface-canvas)",
    );
    expect(colors["action-accent-bg-hover"]({ opacityValue: undefined })).toBe(
      "var(--midas-action-accent-bg-hover)",
    );
    expect(colors["status-danger-subtle"]).toBeTypeOf("function");
    expect(colors["chart-5"]).toBeTypeOf("function");
    expect(colors["chart-8"]).toBeTypeOf("function");
  });

  it("mapeia raios, fontes e sombras", () => {
    const { borderRadius, fontFamily, boxShadow, spacing, fontSize } = preset.theme.extend;
    expect(borderRadius.lg).toBe("var(--midas-radius-lg)");
    expect(borderRadius.control).toBe("var(--midas-radius-control)");
    expect(borderRadius.pill).toBe("var(--midas-radius-pill)");
    expect(fontFamily.sans).toEqual(["var(--midas-font-sans)"]);
    expect(boxShadow["elevation-modal"]).toBe("var(--midas-elevation-modal)");
    expect(boxShadow["focus-ring"]).toBe("var(--midas-focus-ring-shadow)");
    expect(spacing["control-md"]).toBe("var(--midas-size-control-md)");
    expect(fontSize["heading-xl"][0]).toBe("var(--midas-font-size-3xl)");
  });
});

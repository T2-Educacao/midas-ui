import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("mescla classes e a do usuário vence", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("não confunde text styles do Midas com cor de texto", () => {
    expect(cn("text-heading-xl", "text-content-secondary")).toBe(
      "text-heading-xl text-content-secondary",
    );
  });

  it("text style novo substitui o anterior e tamanho do Tailwind", () => {
    expect(cn("text-sm", "text-heading-md")).toBe("text-heading-md");
    expect(cn("text-body-md", "text-heading-md")).toBe("text-heading-md");
  });

  it("sombras de elevação conflitam entre si e não com a de foco de cor", () => {
    expect(cn("shadow-elevation-card", "shadow-elevation-modal")).toBe("shadow-elevation-modal");
    expect(cn("shadow-elevation-card", "shadow-sm")).toBe("shadow-sm");
  });

  it("raios por papel conflitam com a escala", () => {
    expect(cn("rounded-md", "rounded-control")).toBe("rounded-control");
  });
});

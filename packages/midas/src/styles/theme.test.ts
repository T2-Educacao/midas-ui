import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

type Mode = "Light" | "Dark" | "Dark Blue";

const modes: Mode[] = ["Light", "Dark", "Dark Blue"];

const tokens = JSON.parse(
  readFileSync(join(__dirname, "../../../../docs/figma/tokens-theme.json"), "utf8"),
) as { token: string; modes: Record<Mode, { hex: string }> }[];

const css = readFileSync(join(__dirname, "theme.css"), "utf8");

function blockOf(selector: string) {
  const start = css.indexOf(`${selector} {`);
  expect(start, `bloco ${selector}`).toBeGreaterThanOrEqual(0);
  return css.slice(start, css.indexOf("\n}", start));
}

const blocks: Record<Mode, string> = {
  Light: blockOf(':root,\n[data-theme="light"]'),
  Dark: blockOf('.dark,\n[data-theme="dark"]'),
  "Dark Blue": blockOf('[data-theme="dark-blue"]'),
};

const variable = (token: string) => `--midas-${token.replaceAll("/", "-")}`;

function valueIn(block: string, name: string) {
  const match = block.match(new RegExp(`^\\s*${name}:\\s*([^;]+);`, "m"));
  return match?.[1]?.trim().toLowerCase();
}

describe("theme.css", () => {
  it("cobre os 86 tokens semânticos do Figma", () => {
    expect(tokens).toHaveLength(86);
  });

  for (const mode of modes) {
    it(`define todos os tokens com o valor exato no tema ${mode}`, () => {
      for (const { token, modes: values } of tokens) {
        expect(valueIn(blocks[mode], variable(token)), `${token} (${mode})`).toBe(
          values[mode].hex.toLowerCase(),
        );
      }
    });
  }

  it("registra cada token como cor utilitária do Tailwind", () => {
    for (const { token } of tokens) {
      const name = variable(token).replace("--midas-", "");
      expect(css).toContain(`--color-${name}: var(--midas-${name});`);
    }
  });

  it("mantém os nomes antigos como alias dos novos", () => {
    const aliases: Record<string, string> = {
      background: "surface-canvas",
      foreground: "content-primary",
      card: "surface-default",
      popover: "overlay-surface",
      primary: "action-accent-bg",
      "primary-foreground": "action-accent-content",
      muted: "surface-muted",
      "muted-foreground": "content-secondary",
      destructive: "action-destructive-bg",
      border: "border-default",
      ring: "focus-ring",
    };
    for (const [old, novo] of Object.entries(aliases)) {
      expect(css).toContain(`--midas-${old}: var(--midas-${novo});`);
    }
  });

  it("liga a variante dark: aos dois temas escuros", () => {
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toContain('[data-theme="dark-blue"] *');
  });

  it("define as escalas de raio do Figma", () => {
    expect(css).toContain("--midas-radius-xl: 12px;");
    expect(css).toContain("--midas-radius-2xl: 14px;");
    expect(css).toContain("--midas-radius-3xl: 18px;");
    expect(css).toContain("--midas-radius-control: var(--midas-radius-sm);");
  });
});

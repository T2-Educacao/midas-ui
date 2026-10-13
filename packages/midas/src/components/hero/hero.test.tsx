import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Hero,
  HeroActions,
  HeroChip,
  HeroChips,
  HeroContent,
  HeroCountdown,
  HeroDescription,
  HeroEyebrow,
  HeroHotspot,
  HeroLesson,
  HeroPanel,
  HeroPanels,
  HeroProgress,
  HeroStat,
  HeroStats,
  HeroTitle,
  HeroTrailer,
  WalletCard,
} from "./hero";

describe("Hero", () => {
  it("compõe conteúdo com ref, className e data-slot", async () => {
    const ref = React.createRef<HTMLElement>();
    const { container } = render(
      <Hero ref={ref} className="extra" aria-label="Destaque">
        <HeroContent>
          <HeroEyebrow>CONTINUE ESTUDANDO</HeroEyebrow>
          <HeroTitle>Preparatório CPA-20</HeroTitle>
          <HeroDescription>Revise fundos de investimento.</HeroDescription>
          <HeroChips>
            <HeroChip>7 dias seguidos</HeroChip>
          </HeroChips>
          <HeroProgress label="71 de 178 aulas" value={40} />
          <HeroStats>
            <HeroStat value="178" label="aulas em vídeo" />
          </HeroStats>
          <HeroActions>
            <button type="button">Continuar estudando</button>
          </HeroActions>
        </HeroContent>
      </Hero>,
    );
    const hero = container.querySelector("[data-slot=hero]");
    expect(hero?.className).toContain("extra");
    expect(hero?.className).toContain("bg-surface-default");
    expect(ref.current).toBe(hero);
    expect(screen.getByRole("heading", { name: "Preparatório CPA-20" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "40");
    await expectNoA11yViolations(container);
  });

  it("com mídia usa texto on-media e scrim", () => {
    const { container } = render(
      <Hero media={<img src="/capa.jpg" alt="" />} ratio="16:9">
        <HeroContent>
          <HeroTitle>Título</HeroTitle>
        </HeroContent>
      </Hero>,
    );
    const hero = container.querySelector("[data-slot=hero]");
    expect(hero?.className).toContain("text-material-on-media-content");
    expect(hero?.className).toContain("aspect-video");
    expect(container.querySelector("[data-slot=hero-media]")).toBeInTheDocument();
  });

  it("HeroCountdown expõe um timer acessível", async () => {
    const { container } = render(<HeroCountdown days={2} hours={14} minutes={32} seconds={8} />);
    expect(screen.getByRole("timer")).toHaveAccessibleName(
      "Faltam 2 dias, 14 horas, 32 minutos e 8 segundos",
    );
    await expectNoA11yViolations(container);
  });
});

describe("HeroPanels", () => {
  it("expande um painel por vez", async () => {
    const onValueChange = vi.fn();
    const { container } = render(
      <HeroPanels defaultValue="a" onValueChange={onValueChange} aria-label="Módulos">
        <HeroPanel value="a" title="Fundamentos">
          <p>Conteúdo A</p>
        </HeroPanel>
        <HeroPanel value="b" title="Ética">
          <p>Conteúdo B</p>
        </HeroPanel>
      </HeroPanels>,
    );
    expect(screen.getByRole("button", { name: "Fundamentos" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText("Conteúdo A")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Ética" }));
    expect(onValueChange).toHaveBeenCalledWith("b");
    expect(screen.getByText("Conteúdo B")).toBeInTheDocument();
    expect(screen.queryByText("Conteúdo A")).toBeNull();
    await expectNoA11yViolations(container);
  });

  it("HeroPanel fora de HeroPanels lança erro", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() => render(<HeroPanel value="a" title="x" />)).toThrow();
    spy.mockRestore();
  });
});

describe("HeroLesson", () => {
  it("marca a aula em reprodução e a concluída", async () => {
    const { container } = render(
      <div>
        <HeroLesson index="AULA 03" title="Classes ANBIMA" meta="14 min" state="done" />
        <HeroLesson index="AULA 05" title="Come-cotas" meta="12 min" state="playing" />
        <HeroLesson index="AULA 06" title="Tributação" meta="18 min" />
      </div>,
    );
    const lessons = screen.getAllByRole("button");
    expect(lessons[0]).toHaveAttribute("data-state", "done");
    expect(lessons[1]).toHaveAttribute("aria-current", "true");
    expect(lessons[2]).toHaveAttribute("data-state", "default");
    await expectNoA11yViolations(container);
  });
});

describe("HeroHotspot", () => {
  it("alterna entre recolhido e expandido", async () => {
    const { container } = render(
      <HeroHotspot x={40} y={30} label="Módulo 4" detail="Renda variável" />,
    );
    const button = screen.getByRole("button", { name: "Módulo 4" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Renda variável")).toBeInTheDocument();
    await expectNoA11yViolations(container);
  });
});

describe("HeroTrailer", () => {
  it("mostra a capa e troca pelo vídeo no mesmo lugar", () => {
    render(
      <HeroTrailer
        title="Trailer CPA-20"
        durationHint={102}
        cover={(openTrailer) => (
          <button type="button" onClick={openTrailer}>
            Ver trailer
          </button>
        )}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Ver trailer" }));
    expect(screen.getByRole("group", { name: "Trailer CPA-20" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Voltar" }));
    expect(screen.getByRole("button", { name: "Ver trailer" })).toBeInTheDocument();
  });
});

describe("WalletCard", () => {
  it("empilhado mostra página e métrica; aberto mostra detalhes", async () => {
    const { container, rerender } = render(<WalletCard page="Simulados" metric="84%" />);
    expect(container.firstElementChild).toHaveAttribute("data-state", "stacked");
    rerender(
      <WalletCard open page="Simulados" metric="84%" label="ÚLTIMO SIMULADO" detail="101 de 120" />,
    );
    expect(container.firstElementChild).toHaveAttribute("data-state", "open");
    expect(screen.getByText("101 de 120")).toBeInTheDocument();
    await expectNoA11yViolations(container);
  });
});

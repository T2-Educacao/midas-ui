import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Progress, ProgressField, ProgressLine } from "./progress";

describe("Progress", () => {
  it("expõe role progressbar com valor", () => {
    render(<Progress value={40} aria-label="Upload" />);
    const bar = screen.getByRole("progressbar", { name: "Upload" });
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar).toHaveAttribute("data-slot", "progress");
  });

  it("o preenchimento acompanha o valor em largura", () => {
    render(<Progress value={75} aria-label="x" />);
    const indicator = screen.getByRole("progressbar").firstElementChild as HTMLElement;
    expect(indicator.style.width).toBe("75%");
  });

  it("limita o preenchimento entre 0 e 100", () => {
    render(<Progress value={150} aria-label="x" />);
    expect((screen.getByRole("progressbar").firstElementChild as HTMLElement).style.width).toBe(
      "100%",
    );
  });

  it("usa os tamanhos SM, MD e LG do Figma (4, 8 e 12px)", () => {
    render(
      <>
        <Progress value={10} size="sm" aria-label="a" />
        <Progress value={10} aria-label="b" />
        <Progress value={10} size="lg" aria-label="c" />
      </>,
    );
    expect(screen.getByLabelText("a")).toHaveClass("h-1");
    expect(screen.getByLabelText("b")).toHaveClass("h-2");
    expect(screen.getByLabelText("c")).toHaveClass("h-3");
  });

  it("aplica os estilos neutral, gradient, glow e shimmer", () => {
    render(
      <>
        <Progress value={50} appearance="neutral" aria-label="n" />
        <Progress value={50} appearance="gradient" aria-label="g" />
        <Progress value={50} appearance="glow" aria-label="l" />
        <Progress value={50} appearance="shimmer" aria-label="s" />
      </>,
    );
    const indicatorOf = (label: string) => screen.getByLabelText(label).firstElementChild;
    expect(indicatorOf("n")).toHaveClass("bg-content-primary");
    expect(indicatorOf("g")).toHaveClass("bg-linear-to-r", "from-action-accent-gradient-top");
    expect(indicatorOf("l")).toHaveClass("after:rounded-full");
    expect(indicatorOf("s")).toHaveClass("animate-pulse", "motion-reduce:animate-none");
  });

  it("variantes de estado usam tokens de status", () => {
    render(<Progress value={50} variant="destructive" aria-label="e" />);
    expect(screen.getByLabelText("e").firstElementChild).toHaveClass("bg-status-danger-fill");
  });

  it("vertical cresce de baixo para cima em altura", () => {
    render(<Progress value={30} orientation="vertical" aria-label="v" />);
    const bar = screen.getByLabelText("v");
    expect(bar).toHaveClass("h-40");
    const indicator = bar.firstElementChild as HTMLElement;
    expect(indicator.style.height).toBe("30%");
    expect(indicator).toHaveClass("bottom-0");
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Progress ref={ref} value={10} className="h-5" aria-label="r" />);
    expect(ref.current).toHaveClass("h-5");
    expect(ref.current).not.toHaveClass("h-2");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Progress value={40} aria-label="Upload" />);
    await expectNoA11yViolations(container);
  });
});

describe("ProgressField", () => {
  it("mostra rótulo, valor e ajuda ligados à barra", () => {
    render(<ProgressField label="Seu progresso" value={50} helper="30 seg restantes" />);
    expect(screen.getByRole("progressbar", { name: "Seu progresso" })).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("30 seg restantes")).toBeInTheDocument();
  });

  it("showValue false esconde o valor", () => {
    render(<ProgressField label="Seu progresso" value={50} showValue={false} />);
    expect(screen.queryByText("50%")).toBeNull();
  });

  it("aceita valueLabel customizado", () => {
    render(<ProgressField label="Módulos" value={75} valueLabel="3 de 4" />);
    expect(screen.getByText("3 de 4")).toBeInTheDocument();
  });

  it("vertical coloca valor e rótulo abaixo da barra", () => {
    const { container } = render(<ProgressField label="Nível" value={75} orientation="vertical" />);
    expect(container.querySelector("[data-slot=progress-field]")).toHaveClass("flex-col");
    expect(screen.getByRole("progressbar")).toHaveAttribute("data-orientation", "vertical");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ProgressField label="Seu progresso" value={50} helper="30 seg restantes" />,
    );
    await expectNoA11yViolations(container);
  });
});

describe("ProgressLine", () => {
  it("é uma linha fina de 3px sem trilho por padrão", () => {
    render(<ProgressLine value={50} />);
    const line = screen.getByRole("progressbar", { name: "Progresso" });
    expect(line).toHaveClass("h-0.75");
    expect(line).not.toHaveClass("bg-border-default");
    expect((line.firstElementChild as HTMLElement).style.width).toBe("50%");
  });

  it("showTrack liga o trilho", () => {
    render(<ProgressLine value={20} showTrack aria-label="Perguntas" />);
    expect(screen.getByRole("progressbar", { name: "Perguntas" })).toHaveClass("bg-border-default");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<ProgressLine value={50} />);
    await expectNoA11yViolations(container);
  });
});

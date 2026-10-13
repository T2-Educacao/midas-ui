import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { LoadingState } from "./loading-state";

describe("LoadingState", () => {
  it("inline mostra spinner e mensagem em role status", () => {
    render(<LoadingState title="Carregando aulas…" />);
    const root = screen.getByRole("status");
    expect(root).toHaveAttribute("data-type", "inline");
    expect(root).toHaveTextContent("Carregando aulas…");
    expect(root.querySelector("[data-slot=spinner]")).toBeInTheDocument();
  });

  it("stacked mostra título e descrição empilhados", () => {
    render(
      <LoadingState type="stacked" title="Gerando plano" description="Leva poucos segundos." />,
    );
    expect(screen.getByText("Gerando plano")).toBeInTheDocument();
    expect(screen.getByText("Leva poucos segundos.")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveClass("flex-col");
  });

  it("overlay cobre o container e põe o conteúdo num cartão", () => {
    render(<LoadingState type="overlay" title="Gerando plano" />);
    const root = screen.getByRole("status");
    expect(root).toHaveClass("absolute", "inset-0");
    expect(screen.getByText("Gerando plano").parentElement).toHaveClass("shadow-elevation-overlay");
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<LoadingState ref={ref} title="Oi" className="gap-4" />);
    expect(ref.current).toHaveClass("gap-4");
    expect(ref.current).not.toHaveClass("gap-2");
  });

  it("repassa o tom ao spinner", () => {
    render(<LoadingState tone="neutral" title="Oi" />);
    expect(screen.getByRole("status").querySelector("[data-slot=spinner]")).toHaveClass(
      "border-t-content-primary",
    );
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<LoadingState type="stacked" title="Carregando" />);
    await expectNoA11yViolations(container);
  });
});

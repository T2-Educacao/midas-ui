import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Tag, TagDetail } from "./tag";

describe("Tag", () => {
  it("renderiza neutro, subtle e SM por padrão", () => {
    render(<Tag>Novo</Tag>);
    const tag = screen.getByText("Novo");
    expect(tag).toHaveAttribute("data-slot", "tag");
    expect(tag).toHaveClass("rounded-pill", "h-5", "bg-surface-muted", "border-border-subtle");
  });

  it("aplica os tamanhos MD, LG e XL com os tokens de controle", () => {
    render(
      <>
        <Tag size="md">a</Tag>
        <Tag size="lg">b</Tag>
        <Tag size="xl">c</Tag>
      </>,
    );
    expect(screen.getByText("a")).toHaveClass("h-control-xs");
    expect(screen.getByText("b")).toHaveClass("h-control-sm");
    expect(screen.getByText("c")).toHaveClass("h-control-md");
  });

  it("aplica os tons de status", () => {
    render(
      <>
        <Tag tone="success">ok</Tag>
        <Tag tone="danger">erro</Tag>
        <Tag tone="warning">atenção</Tag>
        <Tag tone="info">info</Tag>
        <Tag tone="brand">marca</Tag>
      </>,
    );
    expect(screen.getByText("ok")).toHaveClass(
      "bg-status-success-subtle",
      "text-status-success-content",
    );
    expect(screen.getByText("erro")).toHaveClass("bg-status-danger-subtle");
    expect(screen.getByText("atenção")).toHaveClass("border-status-warning-border");
    expect(screen.getByText("info")).toHaveClass("text-status-info-content");
    expect(screen.getByText("marca")).toHaveClass("bg-selection-bg");
  });

  it("tons inverse e media", () => {
    render(
      <>
        <Tag tone="inverse">escuro</Tag>
        <Tag tone="media">mídia</Tag>
      </>,
    );
    expect(screen.getByText("escuro")).toHaveClass("bg-action-primary-bg");
    expect(screen.getByText("mídia")).toHaveClass("bg-material-scrim-bg");
  });

  it("outline usa superfície e sombra de controle; glass usa material", () => {
    render(
      <>
        <Tag variant="outline">a</Tag>
        <Tag variant="glass">b</Tag>
      </>,
    );
    expect(screen.getByText("a")).toHaveClass("bg-surface-default", "shadow-elevation-control");
    expect(screen.getByText("b")).toHaveClass("material-glass");
  });

  it("renderiza emoji, ícone e ponto à esquerda", () => {
    render(
      <Tag emoji="🔥" icon={<svg data-testid="icone" />} dot>
        Em alta
      </Tag>,
    );
    expect(screen.getByText("🔥")).toBeInTheDocument();
    expect(screen.getByTestId("icone")).toBeInTheDocument();
    expect(document.querySelectorAll("[data-slot=tag-leading]")).toHaveLength(3);
  });

  it("removível chama onRemove e tem nome acessível", async () => {
    const onRemove = vi.fn();
    render(
      <Tag onRemove={onRemove} tone="brand">
        CPA-20
      </Tag>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Remover CPA-20" }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("desabilitado bloqueia a remoção", () => {
    render(
      <Tag onRemove={() => {}} disabled>
        CEA
      </Tag>,
    );
    expect(screen.getByRole("button", { name: "Remover CEA" })).toBeDisabled();
  });

  it("com asChild vira link", () => {
    render(
      <Tag asChild>
        <a href="/cursos">Cursos</a>
      </Tag>,
    );
    expect(screen.getByRole("link", { name: "Cursos" })).toHaveAttribute("data-slot", "tag");
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <Tag ref={ref} className="h-9">
        x
      </Tag>,
    );
    expect(ref.current).toHaveClass("h-9");
    expect(ref.current).not.toHaveClass("h-5");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Tag onRemove={() => {}} emoji="🔥">
        Nova
      </Tag>,
    );
    await expectNoA11yViolations(container);
  });
});

describe("TagDetail", () => {
  it("mostra título mono, descrição e ícone em caixa (rounded)", () => {
    render(
      <TagDetail
        icon={<svg data-testid="i" />}
        title="NOVIDADE"
        description="Trilha de renda fixa atualizada"
      />,
    );
    expect(screen.getByText("NOVIDADE")).toHaveClass("text-mono-overline");
    expect(screen.getByText("Trilha de renda fixa atualizada")).toBeInTheDocument();
    expect(document.querySelector("[data-slot=tag-detail-icon]")).toHaveClass("rounded-md");
  });

  it("shape pill arredonda tudo e solta o ícone", () => {
    const { container } = render(
      <TagDetail shape="pill" icon={<svg />} title="OK" description="x" />,
    );
    expect(container.firstChild).toHaveClass("rounded-pill");
    expect(container.querySelector("[data-slot=tag-detail-icon]")).not.toHaveClass("border");
  });

  it("tamanho lg aumenta o texto e tom colore o título", () => {
    render(<TagDetail size="lg" tone="success" title="META" description="Concluída" />);
    expect(screen.getByText("Concluída")).toHaveClass("text-label-md");
    expect(screen.getByText("META")).toHaveClass("text-status-success-content");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<TagDetail title="NOVIDADE" description="Texto" />);
    await expectNoA11yViolations(container);
  });
});

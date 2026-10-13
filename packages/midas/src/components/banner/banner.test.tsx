import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Banner, BannerAction } from "./banner";

describe("Banner", () => {
  it("renderiza título e mensagem em role status por padrão", () => {
    render(<Banner title="Nova trilha CEA disponível.">Comece pelo módulo 1.</Banner>);
    const banner = screen.getByRole("status");
    expect(banner).toHaveAttribute("data-slot", "banner");
    expect(screen.getByText("Nova trilha CEA disponível.")).toHaveAttribute(
      "data-slot",
      "banner-title",
    );
    expect(screen.getByText("Comece pelo módulo 1.")).toBeInTheDocument();
    expect(banner).toHaveClass("bg-status-info-subtle", "border-status-info-border");
  });

  it("error e warning usam role alert", () => {
    render(
      <>
        <Banner status="error" title="Offline" />
        <Banner status="warning" title="Renova em 3 dias" />
      </>,
    );
    expect(screen.getAllByRole("alert")).toHaveLength(2);
  });

  it("aplica as cores de cada status", () => {
    render(
      <>
        <Banner status="success" title="a" data-testid="s" />
        <Banner status="neutral" title="b" data-testid="n" />
      </>,
    );
    expect(screen.getByTestId("s")).toHaveClass("bg-status-success-subtle");
    expect(screen.getByTestId("n")).toHaveClass("bg-surface-muted");
  });

  it("inverse usa as cores de ação primária", () => {
    render(<Banner appearance="inverse" title="Escuro" data-testid="b" />);
    expect(screen.getByTestId("b")).toHaveClass(
      "bg-action-primary-bg",
      "text-action-primary-content",
    );
  });

  it("layout full ocupa a largura toda; inline é arredondado", () => {
    render(
      <>
        <Banner title="a" data-testid="full" />
        <Banner title="b" layout="inline" data-testid="inline" />
      </>,
    );
    expect(screen.getByTestId("full")).toHaveClass("border-x-0", "ps-6");
    expect(screen.getByTestId("inline")).toHaveClass("rounded-xl");
  });

  it("botão de fechar só existe com onClose", async () => {
    const onClose = vi.fn();
    const { rerender } = render(<Banner title="x" />);
    expect(screen.queryByRole("button")).toBeNull();
    rerender(<Banner title="x" onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: "Fechar aviso" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renderiza a ação", async () => {
    const onClick = vi.fn();
    render(
      <Banner
        title="Offline"
        action={<BannerAction onClick={onClick}>Tentar agora</BannerAction>}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Tentar agora" }));
    expect(onClick).toHaveBeenCalled();
  });

  it("ação com asChild vira link", () => {
    render(
      <Banner
        title="x"
        action={
          <BannerAction asChild>
            <a href="/trilhas">Ver trilha</a>
          </BannerAction>
        }
      />,
    );
    expect(screen.getByRole("link", { name: "Ver trilha" })).toHaveAttribute(
      "data-slot",
      "banner-action",
    );
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Banner ref={ref} title="x" className="py-4" />);
    expect(ref.current).toHaveClass("py-4");
    expect(ref.current).not.toHaveClass("py-2");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Banner
        status="warning"
        title="Renova em 3 dias."
        onClose={() => {}}
        action={<BannerAction>Revisar</BannerAction>}
      >
        Confira a forma de pagamento.
      </Banner>,
    );
    await expectNoA11yViolations(container);
  });
});

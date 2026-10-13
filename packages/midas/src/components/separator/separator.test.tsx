import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Separator } from "./separator";

describe("Separator", () => {
  it("é horizontal, sutil e decorativo por padrão", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector("[data-slot=separator]");
    expect(sep).toHaveClass("h-px", "w-full", "bg-border-subtle");
    expect(sep).toHaveAttribute("role", "none");
  });

  it("aceita orientação vertical e semântica", () => {
    render(<Separator orientation="vertical" decorative={false} />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });

  it("aplica o tom default e media", () => {
    const { container } = render(
      <>
        <Separator tone="default" data-testid="a" />
        <Separator tone="media" data-testid="b" />
      </>,
    );
    expect(container.querySelector("[data-testid=a]")).toHaveClass("bg-border-default");
    expect(container.querySelector("[data-testid=b]")).toHaveClass("bg-material-scrim-border");
  });

  it("tracejado usa borda em vez de fundo", () => {
    const { container } = render(<Separator type="dashed" />);
    expect(container.querySelector("[data-slot=separator]")).toHaveClass(
      "border-dashed",
      "border-t",
    );
  });

  it("com rótulo no centro renderiza o texto entre duas linhas", () => {
    const { container } = render(<Separator type="label-center">ou continue com</Separator>);
    const root = container.querySelector("[data-slot=separator]");
    expect(root).toHaveAttribute("data-type", "label-center");
    expect(screen.getByText("ou continue com")).toHaveAttribute("data-slot", "separator-label");
    expect(root?.querySelectorAll("span[aria-hidden]")).toHaveLength(2);
  });

  it("com rótulo à esquerda tem só uma linha", () => {
    const { container } = render(<Separator type="label-left">MÓDULO 3</Separator>);
    expect(container.querySelectorAll("span[aria-hidden]")).toHaveLength(1);
  });

  it("rotulado e não decorativo expõe role separator", () => {
    render(
      <Separator type="label-center" decorative={false}>
        ou
      </Separator>,
    );
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Separator type="label-center">ou</Separator>);
    await expectNoA11yViolations(container);
  });
});

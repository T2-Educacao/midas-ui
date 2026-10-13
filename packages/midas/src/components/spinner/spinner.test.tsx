import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("anuncia o carregamento com role status", () => {
    render(<Spinner />);
    expect(screen.getByRole("status", { name: "Carregando" })).toHaveClass("animate-spin");
  });

  it("aceita um rótulo próprio", () => {
    render(<Spinner label="Enviando arquivo" />);
    expect(screen.getByRole("status", { name: "Enviando arquivo" })).toBeInTheDocument();
  });

  it("sem rótulo não vira status (uso decorativo)", () => {
    render(<Spinner label="" aria-hidden />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("aplica tamanho e tom", () => {
    render(<Spinner size="xl" tone="brand" />);
    expect(screen.getByRole("status")).toHaveClass("size-12", "border-t-action-accent-bg");
  });

  it("tom media usa tokens de material sobre mídia", () => {
    render(<Spinner tone="media" />);
    expect(screen.getByRole("status")).toHaveClass("border-t-material-on-media-content");
  });

  it("dots renderiza três pontos animados", () => {
    render(<Spinner variant="dots" size="md" />);
    const root = screen.getByRole("status");
    expect(root.querySelectorAll("span")).toHaveLength(3);
    expect(root).not.toHaveClass("animate-spin");
  });

  it("encaminha a ref e mescla className", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Spinner ref={ref} className="size-10" />);
    expect(ref.current).toHaveClass("size-10");
    expect(ref.current).not.toHaveClass("size-4");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Spinner />);
    await expectNoA11yViolations(container);
  });
});

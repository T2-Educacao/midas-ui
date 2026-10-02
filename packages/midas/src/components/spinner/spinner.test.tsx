import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("anuncia o carregamento com role='status'", () => {
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

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Spinner />);
    await expectNoA11yViolations(container);
  });
});

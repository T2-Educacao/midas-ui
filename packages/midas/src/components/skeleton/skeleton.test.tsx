import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renderiza escondido de leitores de tela com animação e token muted", () => {
    render(<Skeleton data-testid="sk" />);
    const el = screen.getByTestId("sk");
    expect(el).toHaveAttribute("aria-hidden", "true");
    expect(el).toHaveAttribute("data-slot", "skeleton");
    expect(el).toHaveClass("animate-pulse", "bg-muted", "rounded-md", "motion-reduce:animate-none");
  });

  it("mescla className com a do usuário vencendo", () => {
    render(<Skeleton data-testid="sk" className="rounded-full h-4" />);
    expect(screen.getByTestId("sk")).toHaveClass("rounded-full", "h-4");
    expect(screen.getByTestId("sk")).not.toHaveClass("rounded-md");
  });

  it("encaminha a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    await expectNoA11yViolations(container);
  });
});

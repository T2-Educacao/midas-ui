import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Progress } from "./progress";

describe("Progress", () => {
  it("expõe o valor para leitores de tela", () => {
    render(<Progress value={40} aria-label="Progresso do curso" />);
    const bar = screen.getByRole("progressbar", { name: "Progresso do curso" });
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar.querySelector("[data-slot=progress-indicator]")).toHaveStyle({
      transform: "translateX(-60%)",
    });
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Progress value={70} aria-label="Progresso" />);
    await expectNoA11yViolations(container);
  });

  it("aplica a cor da variante e aceita classe própria no indicador", () => {
    const { rerender, container } = render(
      <Progress value={50} variant="warning" aria-label="Série" />,
    );
    const indicator = () => container.querySelector("[data-slot=progress-indicator]");
    expect(indicator()).toHaveClass("bg-warning");
    rerender(<Progress value={50} indicatorClassName="bg-info" aria-label="Série" />);
    expect(indicator()).toHaveClass("bg-info");
    expect(indicator()).not.toHaveClass("bg-primary");
  });
});

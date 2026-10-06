import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Stepper, StepperDescription, StepperItem, StepperTitle } from "./stepper";

function Exemplo({
  value = 1,
  onValueChange,
}: {
  value?: number;
  onValueChange?: (value: number) => void;
}) {
  return (
    <Stepper value={value} onValueChange={onValueChange} aria-label="Progresso">
      <StepperItem>
        <StepperTitle>Conta</StepperTitle>
        <StepperDescription>Dados básicos</StepperDescription>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Pagamento</StepperTitle>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Confirmação</StepperTitle>
      </StepperItem>
    </Stepper>
  );
}

describe("Stepper", () => {
  it("renderiza lista ordenada com um item por passo", () => {
    render(<Exemplo />);
    expect(screen.getByRole("list").tagName).toBe("OL");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("marca concluído, atual e pendente pela ordem", () => {
    render(<Exemplo value={1} />);
    const [a, b, c] = screen.getAllByRole("listitem");
    expect(a).toHaveAttribute("data-state", "completed");
    expect(b).toHaveAttribute("data-state", "current");
    expect(c).toHaveAttribute("data-state", "pending");
  });

  it("só o passo atual tem aria-current=step", () => {
    render(<Exemplo value={1} />);
    const [a, b, c] = screen.getAllByRole("listitem");
    expect(a).not.toHaveAttribute("aria-current");
    expect(b).toHaveAttribute("aria-current", "step");
    expect(c).not.toHaveAttribute("aria-current");
  });

  it("concluído mostra ícone de check e os demais mostram o número", () => {
    const { container } = render(<Exemplo value={1} />);
    const indicadores = container.querySelectorAll("[data-slot=stepper-indicator]");
    expect(indicadores[0]?.querySelector("svg")).toBeInTheDocument();
    expect(indicadores[1]).toHaveTextContent("2");
    expect(indicadores[2]).toHaveTextContent("3");
  });

  it("aceita a prop step explícita", () => {
    render(
      <Stepper value={0}>
        <StepperItem step={2}>
          <StepperTitle>Último</StepperTitle>
        </StepperItem>
      </Stepper>,
    );
    expect(screen.getByRole("listitem")).toHaveAttribute("data-state", "pending");
  });

  it("orientation vertical reflete no data-attribute", () => {
    render(
      <Stepper orientation="vertical">
        <StepperItem>
          <StepperTitle>A</StepperTitle>
        </StepperItem>
      </Stepper>,
    );
    expect(screen.getByRole("list")).toHaveAttribute("data-orientation", "vertical");
    expect(screen.getByRole("list")).toHaveClass("w-full");
  });

  it("chama onValueChange ao clicar em um passo", () => {
    const onValueChange = vi.fn();
    render(<Exemplo onValueChange={onValueChange} />);
    fireEvent.click(screen.getByText("Confirmação"));
    expect(onValueChange).toHaveBeenCalledWith(2);
  });

  it("className mescla e a do usuário vence", () => {
    render(
      <Stepper className="w-1/2">
        <StepperItem className="gap-6">
          <StepperTitle className="text-destructive">A</StepperTitle>
        </StepperItem>
      </Stepper>,
    );
    expect(screen.getByRole("list")).toHaveClass("w-1/2");
    expect(screen.getByRole("list")).not.toHaveClass("w-full");
    expect(screen.getByRole("listitem")).toHaveClass("gap-6");
    expect(screen.getByRole("listitem")).not.toHaveClass("gap-3");
    expect(screen.getByText("A")).toHaveClass("text-destructive");
  });

  it("encaminha ref", () => {
    const ref = createRef<HTMLOListElement>();
    render(<Stepper ref={ref} />);
    expect(ref.current?.tagName).toBe("OL");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});

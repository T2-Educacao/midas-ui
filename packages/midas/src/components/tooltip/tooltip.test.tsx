import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Tooltip,
  TooltipContent,
  TooltipFooter,
  TooltipItem,
  TooltipTitle,
  TooltipTrigger,
} from "./tooltip";

function Exemplo() {
  return (
    <Tooltip>
      <TooltipTrigger>Detalhes</TooltipTrigger>
      <TooltipContent>
        <TooltipTitle>16 jul 2026</TooltipTitle>
        <TooltipItem label="Gestão de risco" value="50" color="#009adb" />
        <TooltipItem label="Análise de investimentos" value="30" indicator="line" />
        <TooltipFooter>
          <span>Total</span>
          <span>80</span>
        </TooltipFooter>
      </TooltipContent>
    </Tooltip>
  );
}

describe("Tooltip", () => {
  it("abre ao passar o mouse e mostra o conteúdo", async () => {
    render(<Exemplo />);
    await userEvent.hover(screen.getByRole("button", { name: "Detalhes" }));
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    expect(screen.getAllByText("16 jul 2026").length).toBeGreaterThan(0);
  });

  it("abre ao receber foco pelo teclado", async () => {
    render(<Exemplo />);
    await userEvent.tab();
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
  });

  it("TooltipItem mostra indicador, rótulo e valor", () => {
    render(<TooltipItem label="Gestão de risco" value="50" color="#009adb" />);
    const item = screen.getByText("Gestão de risco").parentElement as HTMLElement;
    expect(item.querySelector("[data-indicator=dot]")).not.toBeNull();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(item.style.getPropertyValue("--midas-tooltip-color")).toBe("#009adb");
  });

  it("TooltipItem aceita indicador em linha ou sem indicador", () => {
    const { rerender, container } = render(<TooltipItem label="A" indicator="line" />);
    expect(container.querySelector("[data-indicator=line]")).not.toBeNull();
    rerender(<TooltipItem label="A" indicator="none" />);
    expect(container.querySelector("[data-indicator]")).toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Exemplo />);
    await userEvent.hover(screen.getByRole("button", { name: "Detalhes" }));
    await screen.findByRole("tooltip");
    await expectNoA11yViolations(document.body);
  });

  it("abre em botão desabilitado envolvendo-o automaticamente", async () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button" disabled>
            Publicar
          </button>
        </TooltipTrigger>
        <TooltipContent>Preencha os campos</TooltipContent>
      </Tooltip>,
    );
    const button = screen.getByRole("button", { name: "Publicar" });
    expect(button.parentElement).toHaveAttribute("tabindex", "0");
    await userEvent.hover(button.parentElement as HTMLElement);
    expect((await screen.findAllByText("Preencha os campos")).length).toBeGreaterThan(0);
  });

  it("não envolve botão habilitado", () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button">Ok</button>
        </TooltipTrigger>
        <TooltipContent>Dica</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByRole("button", { name: "Ok" }).parentElement).not.toHaveAttribute(
      "tabindex",
    );
  });
});

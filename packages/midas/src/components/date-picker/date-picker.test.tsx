import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("mostra o placeholder, abre o calendário e fecha ao escolher", async () => {
    const onValueChange = vi.fn();
    render(
      <DatePicker
        aria-label="Data da prova"
        defaultValue={null}
        onValueChange={onValueChange}
        startMonth={new Date(2026, 1, 1)}
      />,
    );
    const trigger = screen.getByRole("button", { name: "Data da prova" });
    expect(trigger).toHaveTextContent("Selecione uma data");
    await userEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Calendário" })).toBeInTheDocument();
  });

  it("formata a data em português", () => {
    render(<DatePicker aria-label="Data" defaultValue={new Date(2026, 6, 16)} />);
    expect(screen.getByRole("button", { name: "Data" })).toHaveTextContent(/16 de jul/);
  });

  it("no modo range mostra o período", () => {
    render(
      <DatePicker
        mode="range"
        aria-label="Período"
        defaultValue={{ from: new Date(2026, 0, 20), to: new Date(2026, 1, 9) }}
      />,
    );
    expect(screen.getByRole("button", { name: "Período" })).toHaveTextContent(
      /20 de jan.*09 de fev/,
    );
  });

  it("gera um input hidden com a data ISO para formulários", () => {
    const { container } = render(
      <DatePicker aria-label="Data" name="data" defaultValue={new Date(2026, 6, 16)} />,
    );
    expect(container.querySelector("input[name=data]")).toHaveValue("2026-07-16");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<DatePicker aria-label="Data" />);
    await expectNoA11yViolations(container);
  });
});

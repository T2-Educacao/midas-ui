import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { DateSheet } from "./date-sheet";

describe("DateSheet", () => {
  it("escolhe uma data no calendário e confirma", async () => {
    const onValueChange = vi.fn();
    render(
      <DateSheet defaultOpen defaultValue={new Date(2026, 9, 14)} onValueChange={onValueChange} />,
    );
    await userEvent.click(screen.getByRole("button", { name: /20 de outubro/i }));
    await userEvent.click(screen.getByRole("button", { name: "Confirmar" }));
    const [date] = onValueChange.mock.calls[0] as [Date];
    expect(date.getDate()).toBe(20);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("modo roleta mostra as colunas dia, mês e ano", () => {
    render(<DateSheet defaultOpen type="wheel" defaultValue={new Date(2026, 9, 14)} />);
    expect(screen.getByRole("listbox", { name: "Dia" })).toBeInTheDocument();
    expect(screen.getByRole("listbox", { name: "Mês" })).toBeInTheDocument();
    expect(screen.getByRole("listbox", { name: "Ano" })).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<DateSheet defaultOpen defaultValue={new Date(2026, 9, 14)} />);
    await expectNoA11yViolations(document.body);
  });
});

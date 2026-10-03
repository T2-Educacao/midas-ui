import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("mostra o mês em português e seleciona um dia", async () => {
    const onSelect = vi.fn();
    render(<Calendar mode="single" defaultMonth={new Date(2026, 1, 1)} onSelect={onSelect} />);
    expect(screen.getByText(/fevereiro 2026/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /10 de fevereiro/i }));
    const [date] = onSelect.mock.calls[0] as [Date];
    expect(date.getDate()).toBe(10);
  });

  it("navega para o próximo mês", async () => {
    render(<Calendar mode="single" defaultMonth={new Date(2026, 1, 1)} />);
    await userEvent.click(screen.getByRole("button", { name: /próximo mês/i }));
    expect(screen.getByText(/março 2026/i)).toBeInTheDocument();
  });

  it("marca o dia selecionado", () => {
    render(
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 1, 1)}
        selected={new Date(2026, 1, 10)}
      />,
    );
    expect(document.querySelector("[data-selected-single]")).toHaveAttribute(
      "data-day",
      "2026-02-10",
    );
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { EventCalendar } from "./event-calendar";

const events = [
  { id: "1", title: "Simulado 03", date: new Date(2027, 7, 5), category: "simulado" as const },
  { id: "2", title: "C-Pro R", date: new Date(2027, 7, 11), category: "prova" as const },
  { id: "3", title: "Aula A", date: new Date(2027, 7, 11), category: "aula" as const },
  { id: "4", title: "Aula B", date: new Date(2027, 7, 11), category: "aula" as const },
];

describe("EventCalendar", () => {
  it("mostra o mês, os eventos e o resumo de excedentes", () => {
    render(<EventCalendar events={events} defaultMonth={new Date(2027, 7, 1)} />);
    expect(screen.getByText("Agosto de 2027")).toBeInTheDocument();
    expect(screen.getByText("Simulado 03")).toBeInTheDocument();
    expect(screen.getByText("+1 mais")).toBeInTheDocument();
    expect(screen.getByText("4 eventos")).toBeInTheDocument();
  });

  it("filtra por categoria", async () => {
    render(<EventCalendar events={events} defaultMonth={new Date(2027, 7, 1)} />);
    await userEvent.click(screen.getByRole("button", { name: "Simulados" }));
    expect(screen.queryByText("Simulado 03")).toBeNull();
  });

  it("navega entre meses e dispara onEventSelect", async () => {
    const onEventSelect = vi.fn();
    render(
      <EventCalendar
        events={events}
        defaultMonth={new Date(2027, 7, 1)}
        onEventSelect={onEventSelect}
      />,
    );
    await userEvent.click(screen.getByText("C-Pro R"));
    expect(onEventSelect).toHaveBeenCalledWith(expect.objectContaining({ id: "2" }));
    await userEvent.click(screen.getByRole("button", { name: "Próximo mês" }));
    expect(screen.getByText("Setembro de 2027")).toBeInTheDocument();
  });

  it("visão agenda lista os eventos", () => {
    render(<EventCalendar view="agenda" events={events} defaultMonth={new Date(2027, 7, 1)} />);
    expect(document.querySelector("[data-slot=event-calendar-agenda]")?.children).toHaveLength(4);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <EventCalendar events={events} defaultMonth={new Date(2027, 7, 1)} />,
    );
    await expectNoA11yViolations(container);
  });
});

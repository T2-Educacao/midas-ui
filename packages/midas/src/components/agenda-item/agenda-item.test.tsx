import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { AgendaItem } from "./agenda-item";

describe("AgendaItem", () => {
  it("mostra mês em mono, dia e título", () => {
    render(
      <AgendaItem month="AGO" day="11" description="Prova de certificação">
        C-Pro R
      </AgendaItem>,
    );
    expect(screen.getByText("AGO")).toHaveClass("text-mono-overline");
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("C-Pro R")).toHaveAttribute("data-slot", "agenda-item-title");
    expect(screen.getByText("Prova de certificação")).toBeInTheDocument();
  });

  it("tipo card ou row", () => {
    const { rerender } = render(
      <AgendaItem month="AGO" day="11" data-testid="item">
        A
      </AgendaItem>,
    );
    expect(screen.getByTestId("item")).toHaveClass("rounded-container", "shadow-elevation-card");
    rerender(
      <AgendaItem month="AGO" day="11" type="row" data-testid="item">
        A
      </AgendaItem>,
    );
    expect(screen.getByTestId("item")).toHaveAttribute("data-type", "row");
    expect(screen.getByTestId("item")).not.toHaveClass("shadow-elevation-card");
  });

  it("hoje destaca o selo e marca aria-current=date", () => {
    render(
      <AgendaItem month="AGO" day="11" today data-testid="item">
        A
      </AgendaItem>,
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveAttribute("aria-current", "date");
    expect(item).toHaveClass("bg-selection-bg");
    expect(item.querySelector("[data-slot=agenda-item-date]")).toHaveClass("bg-action-accent-bg");
  });

  it("tom neutral usa tokens neutros no estado hoje", () => {
    render(
      <AgendaItem month="AGO" day="11" today tone="neutral" data-testid="item">
        A
      </AgendaItem>,
    );
    expect(screen.getByTestId("item")).toHaveClass("bg-surface-muted");
  });

  it("asChild vira link com o selo dentro", () => {
    const ref = createRef<HTMLElement>();
    render(
      <AgendaItem asChild ref={ref} month="AGO" day="11" className="p-6">
        <a href="/prova">C-Pro R</a>
      </AgendaItem>,
    );
    const link = screen.getByRole("link", { name: /C-Pro R/ });
    expect(link).toHaveAttribute("href", "/prova");
    expect(ref.current).toBe(link);
    expect(link).toHaveClass("p-6");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ul>
        <li>
          <AgendaItem month="AGO" day="11" today>
            C-Pro R
          </AgendaItem>
        </li>
      </ul>,
    );
    await expectNoA11yViolations(container);
  });
});

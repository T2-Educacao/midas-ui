import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

function Exemplo(props: { defaultOpen?: boolean; onOpenChange?: (open: boolean) => void }) {
  return (
    <Collapsible defaultOpen={props.defaultOpen} onOpenChange={props.onOpenChange}>
      <CollapsibleTrigger>Mostrar detalhes</CollapsibleTrigger>
      <CollapsibleContent>Detalhes do curso</CollapsibleContent>
    </Collapsible>
  );
}

describe("Collapsible", () => {
  it("começa fechado e abre ao clicar", async () => {
    const onOpenChange = vi.fn();
    render(<Exemplo onOpenChange={onOpenChange} />);
    const gatilho = screen.getByRole("button", { name: "Mostrar detalhes" });
    expect(gatilho).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Detalhes do curso")).not.toBeInTheDocument();
    await userEvent.click(gatilho);
    expect(gatilho).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Detalhes do curso")).toBeVisible();
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("aceita defaultOpen e fecha ao clicar", async () => {
    render(<Exemplo defaultOpen />);
    expect(screen.getByText("Detalhes do curso")).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Mostrar detalhes" }));
    expect(screen.queryByText("Detalhes do curso")).not.toBeInTheDocument();
  });

  it("abre com o teclado", async () => {
    render(<Exemplo />);
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    expect(screen.getByText("Detalhes do curso")).toBeVisible();
  });

  it("define data-slot e encaminha ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Collapsible defaultOpen className="w-40">
        <CollapsibleTrigger ref={ref}>Gatilho</CollapsibleTrigger>
        <CollapsibleContent className="p-2">Conteúdo</CollapsibleContent>
      </Collapsible>,
    );
    expect(ref.current).toHaveAttribute("data-slot", "collapsible-trigger");
    expect(screen.getByText("Conteúdo")).toHaveAttribute("data-slot", "collapsible-content");
    expect(ref.current?.parentElement).toHaveAttribute("data-slot", "collapsible");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo defaultOpen />);
    await expectNoA11yViolations(container);
  });
});

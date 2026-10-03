import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

function Exemplo({ onValueChange }: { onValueChange?: (v: string) => void }) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger aria-label="Linhas por página">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
  );
}

describe("Select", () => {
  it("mostra o placeholder e seleciona uma opção", async () => {
    const onValueChange = vi.fn();
    render(<Exemplo onValueChange={onValueChange} />);
    const trigger = screen.getByRole("combobox", { name: "Linhas por página" });
    expect(trigger).toHaveTextContent("Selecione");
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole("option", { name: "25" }));
    expect(onValueChange).toHaveBeenCalledWith("25");
    expect(trigger).toHaveTextContent("25");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});

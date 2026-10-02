import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

function Exemplo() {
  return (
    <Popover>
      <PopoverTrigger>Dimensões</PopoverTrigger>
      <PopoverContent aria-labelledby="titulo-dimensoes">
        <PopoverHeader>
          <PopoverTitle id="titulo-dimensoes">Dimensões</PopoverTitle>
          <PopoverDescription>Defina o tamanho da camada.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

describe("Popover", () => {
  it("abre ao clicar e fecha com Esc", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Dimensões" }));
    expect(screen.getByRole("dialog")).toHaveTextContent("Defina o tamanho da camada.");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Dimensões" }));
    await expectNoA11yViolations(document.body);
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
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

describe("Popover (Figma)", () => {
  it("mostra seta e rodapé e aceita appearance glass", async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Abrir</PopoverTrigger>
        <PopoverContent appearance="glass" aria-label="Info">
          <PopoverFooter>Ações</PopoverFooter>
        </PopoverContent>
      </Popover>,
    );
    expect(document.querySelector("[data-slot=popover-arrow]")).not.toBeNull();
    expect(document.querySelector("[data-slot=popover-footer]")).not.toBeNull();
    expect(screen.getByRole("dialog")).toHaveClass("backdrop-blur-midas-lg");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

function Exemplo({ side }: { side?: "left" | "right" }) {
  return (
    <Drawer>
      <DrawerTrigger>Filtrar</DrawerTrigger>
      <DrawerContent side={side} className="custom">
        <DrawerHeader>
          <DrawerTitle>Filtrar cursos</DrawerTitle>
          <DrawerDescription>12 resultados</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>Conteúdo</DrawerBody>
        <DrawerFooter>Rodapé</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

describe("Drawer", () => {
  it("abre com nome acessível, aceita className e fecha com Esc", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Filtrar" }));
    const dialog = screen.getByRole("dialog", { name: "Filtrar cursos" });
    expect(dialog).toHaveClass("custom");
    expect(dialog).toHaveAttribute("data-side", "right");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("aplica o lado esquerdo", async () => {
    render(<Exemplo side="left" />);
    await userEvent.click(screen.getByRole("button", { name: "Filtrar" }));
    expect(screen.getByRole("dialog")).toHaveAttribute("data-side", "left");
  });

  it("fecha pelo botão do cabeçalho", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Filtrar" }));
    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Filtrar" }));
    await expectNoA11yViolations(document.body);
  });
});

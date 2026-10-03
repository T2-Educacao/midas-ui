import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

function Exemplo() {
  return (
    <Dialog>
      <DialogTrigger>Editar perfil</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>Altere seus dados.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Cancelar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

describe("Dialog", () => {
  it("abre com título e descrição ligados ao diálogo", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Editar perfil" }));
    const dialog = screen.getByRole("dialog", { name: "Editar perfil" });
    expect(dialog).toHaveAccessibleDescription("Altere seus dados.");
  });

  it("fecha pelo botão X, pelo DialogClose e com Esc", async () => {
    render(<Exemplo />);
    const abrir = screen.getByRole("button", { name: "Editar perfil" });
    await userEvent.click(abrir);
    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    await userEvent.click(abrir);
    await userEvent.click(screen.getByRole("button", { name: "Cancelar" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    await userEvent.click(abrir);
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Editar perfil" }));
    await expectNoA11yViolations(document.body);
  });
});

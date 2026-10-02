import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./dropdown-menu";

function Conta({ onSair }: { onSair?: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuItem>
          Perfil <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onSelect={onSair}>
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

describe("DropdownMenu", () => {
  it("abre o menu com itens, label e atalho", async () => {
    render(<Conta />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Minha conta")).toBeInTheDocument();
    expect(screen.getByText("⇧⌘P")).toHaveAttribute("data-slot", "dropdown-menu-shortcut");
    expect(screen.getByRole("menuitem", { name: "API" })).toHaveAttribute("data-disabled");
  });

  it("chama onSelect e fecha", async () => {
    const onSair = vi.fn();
    render(<Conta onSair={onSair} />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    const sair = screen.getByRole("menuitem", { name: "Sair" });
    expect(sair).toHaveAttribute("data-variant", "destructive");
    await userEvent.click(sair);
    expect(onSair).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("checkbox e radio mudam de estado", async () => {
    function Preferencias() {
      const [barra, setBarra] = useState(true);
      const [posicao, setPosicao] = useState("topo");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Preferências</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={barra} onCheckedChange={setBarra}>
              Barra de status
            </DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup value={posicao} onValueChange={setPosicao}>
              <DropdownMenuRadioItem value="topo">Topo</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="base">Base</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    render(<Preferencias />);
    await userEvent.click(screen.getByRole("button", { name: "Preferências" }));
    expect(screen.getByRole("menuitemcheckbox", { name: "Barra de status" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    await userEvent.click(screen.getByRole("menuitemradio", { name: "Base" }));
    await userEvent.click(screen.getByRole("button", { name: "Preferências" }));
    expect(screen.getByRole("menuitemradio", { name: "Base" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Conta />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    await expectNoA11yViolations(document.body);
  });
});

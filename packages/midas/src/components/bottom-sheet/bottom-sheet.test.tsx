import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "./bottom-sheet";

function Exemplo({ height }: { height?: "auto" | "half" | "full" }) {
  return (
    <BottomSheet>
      <BottomSheetTrigger>Abrir</BottomSheetTrigger>
      <BottomSheetContent height={height} aria-describedby={undefined}>
        <BottomSheetHeader>
          <BottomSheetTitle>Título da folha</BottomSheetTitle>
        </BottomSheetHeader>
        <BottomSheetBody>Conteúdo</BottomSheetBody>
        <BottomSheetFooter>
          <button type="button">Continuar</button>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}

describe("BottomSheet", () => {
  it("abre com alça e título, fecha com Esc", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    const dialog = screen.getByRole("dialog", { name: "Título da folha" });
    expect(dialog).toHaveAttribute("data-height", "auto");
    expect(dialog.querySelector("[data-slot=bottom-sheet-handle]")).not.toBeNull();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("aplica a altura", async () => {
    render(<Exemplo height="half" />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    expect(screen.getByRole("dialog")).toHaveClass("h-[50dvh]");
  });

  it("fecha pelo botão X", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    await expectNoA11yViolations(document.body);
  });
});

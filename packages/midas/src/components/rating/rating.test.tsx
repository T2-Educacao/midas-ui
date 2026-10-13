import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Rating, RatingSummary } from "./rating";

describe("Rating", () => {
  it("é um radiogroup com 5 itens nomeados", () => {
    render(<Rating aria-label="Avaliar aula" />);
    expect(screen.getByRole("radiogroup", { name: "Avaliar aula" })).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(5);
    expect(screen.getByRole("radio", { name: "4 de 5 estrelas — Muito bom" })).toBeInTheDocument();
  });

  it("seleciona ao clicar e mostra o rótulo do valor", async () => {
    const onValueChange = vi.fn();
    render(<Rating onValueChange={onValueChange} />);
    await userEvent.click(screen.getAllByRole("radio")[3] as HTMLElement);
    expect(onValueChange).toHaveBeenCalledWith(4);
    expect(screen.getByText("Muito bom")).toBeInTheDocument();
  });

  it("muda o valor com as setas", async () => {
    const onValueChange = vi.fn();
    render(<Rating defaultValue={2} onValueChange={onValueChange} />);
    screen.getAllByRole("radio")[1]?.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onValueChange).toHaveBeenCalledWith(3);
  });

  it("somente leitura não altera", async () => {
    const onValueChange = vi.fn();
    render(<Rating readOnly defaultValue={3} onValueChange={onValueChange} />);
    await userEvent.click(screen.getAllByRole("radio")[4] as HTMLElement);
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("NPS vai de 0 a 10 e escala 1-5 mostra rótulos das pontas", () => {
    const { unmount } = render(<Rating type="nps" />);
    expect(screen.getAllByRole("radio")).toHaveLength(11);
    expect(screen.getByText("Nada provável")).toBeInTheDocument();
    unmount();
    render(<Rating type="number" />);
    expect(screen.getByText("Muito satisfeito")).toBeInTheDocument();
  });

  it("humor tem rótulo textual", () => {
    render(<Rating type="emoji" defaultValue={5} />);
    expect(screen.getByText("Excelente")).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Rating aria-label="Avaliação" defaultValue={3} boxed />);
    await expectNoA11yViolations(container);
  });
});

describe("RatingSummary", () => {
  it("expõe texto equivalente", () => {
    render(<RatingSummary score={4.8} count={1284} />);
    expect(
      screen.getByRole("img", { name: "Avaliação 4,8 de 5, 1.284 avaliações" }),
    ).toBeInTheDocument();
  });
});

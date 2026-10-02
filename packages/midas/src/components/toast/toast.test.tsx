import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Toaster, toast } from "./toast";

afterEach(() => {
  act(() => {
    toast.dismiss();
  });
});

describe("Toast", () => {
  it("mostra o toast com título e descrição", async () => {
    render(<Toaster />);
    act(() => {
      toast("Evento criado", { description: "Domingo, 3 de dezembro às 9h" });
    });
    expect(await screen.findByText("Evento criado")).toBeInTheDocument();
    expect(screen.getByText("Domingo, 3 de dezembro às 9h")).toBeInTheDocument();
  });

  it("tem os tipos success, info, warning e error", async () => {
    render(<Toaster />);
    act(() => {
      toast.success("Sucesso");
      toast.info("Informação");
      toast.warning("Atenção");
      toast.error("Erro");
    });
    for (const texto of ["Sucesso", "Informação", "Atenção", "Erro"]) {
      expect(await screen.findByText(texto)).toBeInTheDocument();
    }
  });

  it("tem botão de fechar", async () => {
    render(<Toaster />);
    act(() => {
      toast("Com fechar");
    });
    await screen.findByText("Com fechar");
    expect(screen.getByRole("button", { name: /close|fechar/i })).toBeInTheDocument();
  });
});

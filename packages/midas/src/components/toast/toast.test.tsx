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

  it("aplica o estilo escolhido no Toaster", async () => {
    render(<Toaster toastStyle="inverse" />);
    act(() => {
      toast("Escuro");
    });
    await screen.findByText("Escuro");
    expect(document.querySelector("[data-sonner-toast]")).toHaveClass("bg-action-primary-bg");
  });

  it("usa raio de container e largura de 400px", async () => {
    render(<Toaster />);
    act(() => {
      toast("Padrão");
    });
    await screen.findByText("Padrão");
    expect(document.querySelector("[data-sonner-toast]")).toHaveClass(
      "rounded-container",
      "bg-surface-default",
    );
    expect(document.querySelector("[data-sonner-toaster]")).toHaveStyle("--width: 400px");
  });
});

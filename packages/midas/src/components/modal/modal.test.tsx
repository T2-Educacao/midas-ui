import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Modal,
  ModalError,
  ModalShare,
  ModalStatus,
  ModalSuccess,
  PermissionRequest,
} from "./modal";

describe("Modal", () => {
  it("renderiza como diálogo com título e descrição", async () => {
    render(
      <Modal
        defaultOpen
        title="Salvar alterações?"
        description="Você editou sua trilha."
        primaryAction={{ label: "Salvar" }}
        secondaryAction={{ label: "Descartar" }}
      />,
    );
    const dialog = screen.getByRole("dialog", { name: "Salvar alterações?" });
    expect(dialog).toHaveAccessibleDescription("Você editou sua trilha.");
    expect(dialog).toHaveAttribute("data-type", "basic");
    await expectNoA11yViolations(document.body);
  });

  it("confirm usa ação destrutiva e as ações fecham o modal", async () => {
    const onClick = vi.fn();
    render(
      <Modal
        defaultOpen
        type="confirm"
        title="Excluir meta?"
        primaryAction={{ label: "Excluir", onClick }}
        secondaryAction={{ label: "Cancelar" }}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Excluir" }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("promo mostra a mídia e mantém botão de fechar", () => {
    render(<Modal defaultOpen type="promo" title="50% off" image={<span>capa</span>} />);
    expect(document.querySelector("[data-slot=modal-media]")).not.toBeNull();
    expect(screen.getAllByRole("button", { name: "Fechar" })).toHaveLength(1);
  });

  it("ModalSuccess lista detalhes do recibo", async () => {
    render(
      <ModalSuccess
        defaultOpen
        type="receipt"
        title="Pagamento confirmado"
        details={[{ label: "Plano", value: "Business anual" }]}
        primaryAction={{ label: "Concluir" }}
      />,
    );
    expect(screen.getByText("Business anual")).toBeInTheDocument();
    await expectNoA11yViolations(document.body);
  });

  it("ModalError mostra detalhes do erro", () => {
    render(<ModalError defaultOpen title="Algo deu errado" errorDetails="500 ref 7F3A" />);
    expect(screen.getByText("500 ref 7F3A")).toBeInTheDocument();
  });

  it("ModalStatus mostra progresso", () => {
    render(<ModalStatus defaultOpen title="Enviando" progress={68} />);
    expect(screen.getByText("68%")).toBeInTheDocument();
  });

  it("PermissionRequest lista usos e rodapé", () => {
    render(
      <PermissionRequest
        defaultOpen
        type="camera"
        title="Permitir acesso à câmera"
        items={["Foto do documento"]}
        footnote="Você pode mudar isso depois."
        primaryAction={{ label: "Permitir" }}
        secondaryAction={{ label: "Agora não" }}
      />,
    );
    expect(screen.getByText("Foto do documento")).toBeInTheDocument();
    expect(screen.getByText("Você pode mudar isso depois.")).toBeInTheDocument();
  });

  it("ModalShare troca o formato", async () => {
    const onFormatChange = vi.fn();
    render(<ModalShare defaultOpen title="Compartilhar" onFormatChange={onFormatChange} />);
    await userEvent.click(screen.getByRole("radio", { name: /Instagram Feed/ }));
    expect(onFormatChange).toHaveBeenCalledWith("feed");
  });
});

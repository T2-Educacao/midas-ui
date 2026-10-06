import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { FileUpload } from "./file-upload";

const imagem = new File(["abc"], "foto.png", { type: "image/png" });
const pdf = new File(["abc"], "texto.pdf", { type: "application/pdf" });
const grande = new File(["a".repeat(100)], "grande.png", { type: "image/png" });

describe("FileUpload", () => {
  it("renderiza o input de arquivo ligado ao rótulo", () => {
    render(<FileUpload>Enviar arquivos</FileUpload>);
    expect(screen.getByLabelText("Enviar arquivos")).toHaveAttribute("type", "file");
    expect(screen.getByText("Enviar arquivos")).toHaveAttribute("data-slot", "file-upload");
  });

  it("chama onFilesChange ao selecionar", async () => {
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange}>Enviar</FileUpload>);
    await userEvent.upload(screen.getByLabelText("Enviar"), imagem);
    expect(onFilesChange).toHaveBeenCalledWith([imagem]);
  });

  it("recusa tipo fora de accept", async () => {
    const onFilesChange = vi.fn();
    const onReject = vi.fn();
    render(
      <FileUpload accept="image/*" onFilesChange={onFilesChange} onReject={onReject}>
        Enviar
      </FileUpload>,
    );
    const user = userEvent.setup({ applyAccept: false });
    await user.upload(screen.getByLabelText("Enviar"), pdf);
    expect(onFilesChange).not.toHaveBeenCalled();
    expect(onReject).toHaveBeenCalledWith([{ file: pdf, reason: "type" }]);
  });

  it("recusa arquivo acima de maxSize e aceita o restante", async () => {
    const onFilesChange = vi.fn();
    const onReject = vi.fn();
    render(
      <FileUpload multiple maxSize={10} onFilesChange={onFilesChange} onReject={onReject}>
        Enviar
      </FileUpload>,
    );
    await userEvent.upload(screen.getByLabelText("Enviar"), [imagem, grande]);
    expect(onFilesChange).toHaveBeenCalledWith([imagem]);
    expect(onReject).toHaveBeenCalledWith([{ file: grande, reason: "size" }]);
  });

  it("aceita arquivos arrastados e marca data-dragging", () => {
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange}>Enviar</FileUpload>);
    const zona = screen.getByText("Enviar");
    fireEvent.dragEnter(zona, { dataTransfer: { files: [imagem] } });
    expect(zona).toHaveAttribute("data-dragging", "true");
    fireEvent.drop(zona, { dataTransfer: { files: [imagem] } });
    expect(zona).not.toHaveAttribute("data-dragging");
    expect(onFilesChange).toHaveBeenCalledWith([imagem]);
  });

  it("sem multiple, solta só o primeiro arquivo", () => {
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange}>Enviar</FileUpload>);
    fireEvent.drop(screen.getByText("Enviar"), { dataTransfer: { files: [imagem, pdf] } });
    expect(onFilesChange).toHaveBeenCalledWith([imagem]);
  });

  it("desabilitado ignora arrastar e soltar", () => {
    const onFilesChange = vi.fn();
    render(
      <FileUpload disabled onFilesChange={onFilesChange}>
        Enviar
      </FileUpload>,
    );
    const zona = screen.getByText("Enviar");
    fireEvent.dragEnter(zona, { dataTransfer: { files: [imagem] } });
    expect(zona).not.toHaveAttribute("data-dragging");
    fireEvent.drop(zona, { dataTransfer: { files: [imagem] } });
    expect(onFilesChange).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Enviar")).toBeDisabled();
  });

  it("marca estado inválido", () => {
    render(<FileUpload invalid>Enviar</FileUpload>);
    expect(screen.getByText("Enviar")).toHaveAttribute("data-invalid", "true");
    expect(screen.getByLabelText("Enviar")).toHaveAttribute("aria-invalid", "true");
  });

  it("mescla className com a do usuário vencendo e encaminha a ref", () => {
    const ref = createRef<HTMLLabelElement>();
    render(
      <FileUpload ref={ref} className="py-2">
        Enviar
      </FileUpload>,
    );
    expect(ref.current).toHaveClass("py-2");
    expect(ref.current).not.toHaveClass("py-8");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<FileUpload>Arraste ou clique para enviar</FileUpload>);
    await expectNoA11yViolations(container);
  });
});

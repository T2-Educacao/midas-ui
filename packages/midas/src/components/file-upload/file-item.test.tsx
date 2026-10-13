import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { FileItem } from "./file-upload";

describe("FileItem", () => {
  it("mostra progresso ao enviar", () => {
    render(<FileItem name="extrato.pdf" state="uploading" progress={50} meta="1,2 MB de 2,4 MB" />);
    expect(screen.getByRole("progressbar", { name: "Enviando extrato.pdf" })).toBeInTheDocument();
  });

  it("estado de erro usa tokens de perigo e remove arquivo", async () => {
    const onRemove = vi.fn();
    const { container } = render(
      <FileItem name="extrato.pdf" state="error" meta="Falha no envio" onRemove={onRemove} />,
    );
    expect(container.firstChild).toHaveClass("border-status-danger-border");
    await userEvent.click(screen.getByRole("button", { name: "Remover extrato.pdf" }));
    expect(onRemove).toHaveBeenCalled();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <FileItem name="a.pdf" state="done" meta="2,4 MB · Enviado" onRemove={() => {}} />,
    );
    await expectNoA11yViolations(container);
  });
});

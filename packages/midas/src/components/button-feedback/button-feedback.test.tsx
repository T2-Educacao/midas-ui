import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Button } from "../button/button";
import { ButtonFeedback } from "./button-feedback";

describe("ButtonFeedback", () => {
  it("mostra o botão e a mensagem de sucesso com role status", () => {
    render(
      <ButtonFeedback status="success" text="Alterações salvas" time="· agora">
        <Button>Salvar alterações</Button>
      </ButtonFeedback>,
    );
    expect(screen.getByRole("button", { name: "Salvar alterações" })).toBeInTheDocument();
    const message = screen.getByRole("status");
    expect(message).toHaveTextContent("Alterações salvas");
    expect(message).toHaveTextContent("· agora");
  });

  it("erro e aviso usam role alert", () => {
    render(
      <div>
        <ButtonFeedback status="error" text="Não foi possível salvar">
          <Button>Salvar</Button>
        </ButtonFeedback>
        <ButtonFeedback status="warning" text="2 campos">
          <Button>Salvar</Button>
        </ButtonFeedback>
      </div>,
    );
    expect(screen.getAllByRole("alert")).toHaveLength(2);
  });

  it("pill aplica a cor do status e loading gira o ícone", () => {
    const { container } = render(
      <div>
        <ButtonFeedback status="success" message="pill" text="Salvo">
          <Button>Salvar</Button>
        </ButtonFeedback>
        <ButtonFeedback status="loading" text="Salvando…">
          <Button loading>Salvar</Button>
        </ButtonFeedback>
      </div>,
    );
    expect(screen.getByText("Salvo").parentElement).toHaveClass(
      "rounded-pill",
      "bg-status-success-subtle",
    );
    expect(container.querySelectorAll("svg.animate-spin").length).toBeGreaterThan(0);
  });

  it("placement left inverte a ordem, mescla className e encaminha ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <ButtonFeedback ref={ref} status="info" text="Aviso" placement="left" className="w-full">
        <Button>Ok</Button>
      </ButtonFeedback>,
    );
    expect(ref.current).toHaveClass("flex-row-reverse", "w-full");
    expect(ref.current).toHaveAttribute("data-slot", "button-feedback");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ButtonFeedback status="success" text="Salvo" time="· agora">
        <Button>Salvar</Button>
      </ButtonFeedback>,
    );
    await expectNoA11yViolations(container);
  });
});

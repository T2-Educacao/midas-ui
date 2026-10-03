import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Questionnaire, type QuestionnaireQuestion } from "./questionnaire";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "certificacao",
    title: "Qual certificação você vai tirar?",
    description: "Escolha uma.",
    options: [
      { value: "cpa", label: "CPA" },
      { value: "cpro-r", label: "CPRO-R" },
    ],
  },
  {
    id: "temas",
    title: "Quais temas você quer revisar?",
    type: "multiple",
    options: [
      { value: "etica", label: "Ética" },
      { value: "investimentos", label: "Investimentos" },
    ],
    other: { placeholder: "Outro tema" },
  },
];

describe("Questionnaire", () => {
  it("mostra o progresso, bloqueia Próxima até responder e avança", async () => {
    render(<Questionnaire questions={perguntas} />);
    expect(screen.getByText("Pergunta 1 de 2")).toBeInTheDocument();
    const proxima = screen.getByRole("button", { name: "Próxima" });
    expect(proxima).toBeDisabled();
    await userEvent.click(screen.getByRole("radio", { name: "CPA" }));
    expect(proxima).toBeEnabled();
    await userEvent.click(proxima);
    expect(screen.getByText("Quais temas você quer revisar?")).toBeInTheDocument();
  });

  it("aceita múltipla escolha, resposta livre e conclui", async () => {
    const onComplete = vi.fn();
    render(<Questionnaire questions={perguntas} defaultStep={1} onComplete={onComplete} />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Ética" }));
    await userEvent.click(screen.getByRole("checkbox", { name: "Investimentos" }));
    await userEvent.type(screen.getByPlaceholderText("Outro tema"), "Previdência");
    await userEvent.click(screen.getByRole("button", { name: "Enviar" }));
    expect(onComplete).toHaveBeenCalledWith({
      temas: { values: ["etica", "investimentos"], other: "Previdência", skipped: false },
    });
  });

  it("volta para a pergunta anterior", async () => {
    render(<Questionnaire questions={perguntas} defaultStep={1} />);
    await userEvent.click(screen.getByRole("button", { name: "Voltar" }));
    expect(screen.getByText("Qual certificação você vai tirar?")).toBeInTheDocument();
  });

  it("seleciona pelo atalho de teclado", async () => {
    render(<Questionnaire questions={perguntas} shortcuts="letters" />);
    await userEvent.click(screen.getByRole("radio", { name: "CPA" }));
    await userEvent.keyboard("b");
    expect(screen.getByRole("radio", { name: "CPRO-R" })).toBeChecked();
  });

  it("mostra a mensagem da validação personalizada", async () => {
    render(
      <Questionnaire
        questions={[
          {
            ...perguntas[1],
            validate: (answer) =>
              answer.values.length < 2 ? "Escolha pelo menos dois temas." : undefined,
          } as QuestionnaireQuestion,
        ]}
      />,
    );
    await userEvent.click(screen.getByRole("checkbox", { name: "Ética" }));
    await userEvent.click(screen.getByRole("button", { name: "Enviar" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Escolha pelo menos dois temas.");
  });

  it("permite pular perguntas com skippable", async () => {
    const onValueChange = vi.fn();
    render(
      <Questionnaire
        questions={[
          { ...perguntas[0], skippable: true } as QuestionnaireQuestion,
          perguntas[1] as QuestionnaireQuestion,
        ]}
        onValueChange={onValueChange}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Pular" }));
    expect(onValueChange).toHaveBeenCalledWith({ certificacao: { values: [], skipped: true } });
    expect(screen.getByText("Pergunta 2 de 2")).toBeInTheDocument();
  });

  it("esconde perguntas condicionais com when", () => {
    render(
      <Questionnaire
        questions={[
          perguntas[0] as QuestionnaireQuestion,
          {
            ...perguntas[1],
            when: (a) => a.certificacao?.values[0] === "cpro-r",
          } as QuestionnaireQuestion,
        ]}
      />,
    );
    expect(screen.queryByText(/de 2/)).toBeNull();
  });

  it("mostra barra de progresso e variante card", () => {
    const { rerender } = render(<Questionnaire questions={perguntas} progress="bar" />);
    expect(screen.getByRole("progressbar", { name: "Progresso" })).toHaveAttribute(
      "aria-valuenow",
      "1",
    );
    rerender(<Questionnaire questions={perguntas} variant="card" progress="fraction" />);
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Questionnaire questions={perguntas} shortcuts="letters" />);
    await expectNoA11yViolations(container);
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { AnswerOption, AnswerOptionGroup } from "./answer-option";

describe("AnswerOption", () => {
  it("renderiza alternativas como radios com letra e texto no nome", async () => {
    const onValueChange = vi.fn();
    render(
      <AnswerOptionGroup aria-label="Questão 3" onValueChange={onValueChange}>
        <AnswerOption value="a" letter="A">
          Poupança
        </AnswerOption>
        <AnswerOption value="b" letter="B">
          Tesouro Selic
        </AnswerOption>
      </AnswerOptionGroup>,
    );
    await userEvent.click(screen.getByRole("radio", { name: "B Tesouro Selic" }));
    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it.each([
    ["correct", "Correta"],
    ["incorrect", "Sua resposta"],
    ["missed", "Resposta certa"],
  ] as const)("mostra o feedback %s com texto", (result, texto) => {
    render(
      <AnswerOptionGroup aria-label="Questão">
        <AnswerOption value="a" letter="A" result={result}>
          Resposta
        </AnswerOption>
      </AnswerOptionGroup>,
    );
    const radio = screen.getByRole("radio");
    expect(radio).toHaveAttribute("data-result", result);
    expect(radio).toHaveAccessibleDescription(texto);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <AnswerOptionGroup aria-label="Questão" defaultValue="a">
        <AnswerOption value="a" letter="A" result="correct">
          Poupança
        </AnswerOption>
        <AnswerOption value="b" letter="B" disabled>
          Ações
        </AnswerOption>
      </AnswerOptionGroup>,
    );
    await expectNoA11yViolations(container);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Badge } from "../badge/badge";
import { Input } from "../input/input";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "./field";

describe("Field", () => {
  it("liga label e campo pelo htmlFor", () => {
    render(
      <Field>
        <FieldLabel htmlFor="nome">Nome</FieldLabel>
        <Input id="nome" />
        <FieldDescription>Como aparece no certificado.</FieldDescription>
      </Field>,
    );
    expect(screen.getByLabelText("Nome")).toHaveAttribute("id", "nome");
    expect(screen.getByText("Como aparece no certificado.")).toHaveAttribute(
      "data-slot",
      "field-description",
    );
  });

  it("mostra asterisco quando obrigatório", () => {
    render(
      <Field>
        <FieldLabel htmlFor="email" required>
          E-mail
        </FieldLabel>
        <Input id="email" required />
      </Field>,
    );
    expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("marca o grupo como inválido e mostra o erro como alerta", () => {
    render(
      <Field invalid>
        <FieldLabel htmlFor="cpf">CPF</FieldLabel>
        <Input id="cpf" aria-invalid />
        <FieldError>CPF inválido.</FieldError>
      </Field>,
    );
    expect(screen.getByRole("group")).toHaveAttribute("data-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("CPF inválido.");
  });

  it("FieldError sem conteúdo não renderiza nada", () => {
    const { container } = render(<FieldError />);
    expect(container).toBeEmptyDOMElement();
  });

  it("aceita orientação horizontal e badge no label", () => {
    render(
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="url">
            Webhook <Badge>Beta</Badge>
          </FieldLabel>
          <Input id="url" />
        </Field>
      </FieldGroup>,
    );
    expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "horizontal");
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Field invalid>
        <FieldLabel htmlFor="a11y" required>
          Nome
        </FieldLabel>
        <Input id="a11y" aria-invalid aria-describedby="a11y-erro" />
        <FieldError id="a11y-erro">Preencha o nome.</FieldError>
      </Field>,
    );
    await expectNoA11yViolations(container);
  });
});

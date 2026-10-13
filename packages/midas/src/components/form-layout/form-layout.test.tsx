import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Input } from "../input/input";
import { FormActions, FormLayout, FormLayoutItem, FormSection } from "./form-layout";

describe("FormLayout", () => {
  it("aplica colunas responsivas", () => {
    const { container } = render(
      <FormLayout columns={3}>
        <FormLayoutItem span="full">
          <Input aria-label="Endereço" />
        </FormLayoutItem>
      </FormLayout>,
    );
    expect(container.querySelector("[data-slot=form-layout]")).toHaveClass("md:grid-cols-3");
    expect(container.querySelector("[data-slot=form-layout-item]")).toHaveClass("col-span-full");
  });

  it("agrupa seções com fieldset e legenda", () => {
    render(
      <FormSection title="Perfil" description="Informações públicas" layout="side-by-side">
        <Input aria-label="Nome" />
      </FormSection>,
    );
    expect(screen.getByRole("group", { name: "Perfil" })).toBeInTheDocument();
    expect(screen.getByText("Informações públicas")).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <form>
        <FormSection title="Dados">
          <FormLayout columns={2}>
            <Input aria-label="Nome" />
            <Input aria-label="Sobrenome" />
          </FormLayout>
        </FormSection>
        <FormActions />
      </form>,
    );
    await expectNoA11yViolations(container);
  });
});

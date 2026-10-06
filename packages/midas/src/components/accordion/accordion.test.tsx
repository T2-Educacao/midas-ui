import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

function Exemplo(props: { type?: "single" | "multiple" }) {
  const itens = (
    <>
      <AccordionItem value="a">
        <AccordionTrigger>Como funciona?</AccordionTrigger>
        <AccordionContent>Resposta A</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Posso cancelar?</AccordionTrigger>
        <AccordionContent>Resposta B</AccordionContent>
      </AccordionItem>
      <AccordionItem value="c" disabled>
        <AccordionTrigger>Desabilitado</AccordionTrigger>
        <AccordionContent>Resposta C</AccordionContent>
      </AccordionItem>
    </>
  );
  return props.type === "multiple" ? (
    <Accordion type="multiple">{itens}</Accordion>
  ) : (
    <Accordion type="single" collapsible>
      {itens}
    </Accordion>
  );
}

describe("Accordion", () => {
  it("renderiza gatilhos como botões fechados", () => {
    render(<Exemplo />);
    const gatilho = screen.getByRole("button", { name: "Como funciona?" });
    expect(gatilho).toHaveAttribute("aria-expanded", "false");
    expect(gatilho).toHaveAttribute("data-slot", "accordion-trigger");
    expect(screen.queryByText("Resposta A")).not.toBeInTheDocument();
  });

  it("abre e fecha ao clicar", async () => {
    render(<Exemplo />);
    const gatilho = screen.getByRole("button", { name: "Como funciona?" });
    await userEvent.click(gatilho);
    expect(gatilho).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Resposta A")).toBeVisible();
    await userEvent.click(gatilho);
    expect(gatilho).toHaveAttribute("aria-expanded", "false");
  });

  it("no modo single fecha o item anterior", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Como funciona?" }));
    await userEvent.click(screen.getByRole("button", { name: "Posso cancelar?" }));
    expect(screen.getByRole("button", { name: "Como funciona?" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("no modo multiple mantém vários abertos", async () => {
    render(<Exemplo type="multiple" />);
    await userEvent.click(screen.getByRole("button", { name: "Como funciona?" }));
    await userEvent.click(screen.getByRole("button", { name: "Posso cancelar?" }));
    expect(screen.getByRole("button", { name: "Como funciona?" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("button", { name: "Posso cancelar?" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("abre com o teclado", async () => {
    render(<Exemplo />);
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    expect(screen.getByRole("button", { name: "Como funciona?" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("não abre item desabilitado", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Desabilitado" }));
    expect(screen.queryByText("Resposta C")).not.toBeInTheDocument();
  });

  it("mescla className e encaminha ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a" className="border-primary">
          <AccordionTrigger ref={ref} className="py-2">
            Título
          </AccordionTrigger>
          <AccordionContent>Texto</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref.current).toBe(screen.getByRole("button"));
    expect(ref.current).toHaveClass("py-2");
    expect(ref.current).not.toHaveClass("py-4");
    expect(ref.current?.closest("[data-slot=accordion-item]")).toHaveClass("border-primary");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await userEvent.click(screen.getByRole("button", { name: "Como funciona?" }));
    await expectNoA11yViolations(container);
  });
});

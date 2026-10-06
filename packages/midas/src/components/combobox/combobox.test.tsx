import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Combobox, type ComboboxOption } from "./combobox";

const certificacoes: ComboboxOption[] = [
  { value: "cpa", label: "CPA" },
  { value: "cpro-r", label: "CPRO-R" },
  { value: "cpro-i", label: "CPRO-I" },
  { value: "cfp", label: "CFP®", disabled: true },
];

describe("Combobox", () => {
  it("abre a lista ao focar e filtra ao digitar", async () => {
    render(<Combobox options={certificacoes} aria-label="Certificação" />);
    const input = screen.getByRole("combobox", { name: "Certificação" });
    await userEvent.click(input);
    expect(screen.getAllByRole("option")).toHaveLength(4);
    await userEvent.type(input, "cpro");
    expect(screen.getAllByRole("option").map((o) => o.textContent)).toEqual(["CPRO-R", "CPRO-I"]);
  });

  it("seleciona com o mouse, mostra o rótulo e fecha", async () => {
    const onValueChange = vi.fn();
    render(
      <Combobox options={certificacoes} aria-label="Certificação" onValueChange={onValueChange} />,
    );
    const input = screen.getByRole("combobox");
    await userEvent.click(input);
    await userEvent.click(screen.getByRole("option", { name: "CPRO-I" }));
    expect(onValueChange).toHaveBeenCalledWith("cpro-i");
    expect(input).toHaveValue("CPRO-I");
    expect(screen.queryByRole("option")).toBeNull();
  });

  it("seleciona com o teclado", async () => {
    const onValueChange = vi.fn();
    render(
      <Combobox options={certificacoes} aria-label="Certificação" onValueChange={onValueChange} />,
    );
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(onValueChange).toHaveBeenCalledWith("cpro-r");
  });

  it("mostra mensagem quando nada é encontrado", async () => {
    render(<Combobox options={certificacoes} aria-label="Certificação" />);
    await userEvent.type(screen.getByRole("combobox"), "xyz");
    expect(screen.getByText("Nenhum resultado encontrado.")).toBeInTheDocument();
  });

  it("no modo múltiplo mostra chips e permite remover", async () => {
    const onValueChange = vi.fn();
    render(
      <Combobox
        multiple
        options={certificacoes}
        defaultValue={["cpa"]}
        aria-label="Certificações"
        onValueChange={onValueChange}
      />,
    );
    expect(screen.getByText("CPA").closest("[data-slot=combobox-chip]")).not.toBeNull();
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByRole("option", { name: "CPRO-R" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["cpa", "cpro-r"]);
    await userEvent.click(screen.getByRole("button", { name: "Remover CPA" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["cpro-r"]);
  });

  it("com clearable mostra o botão de limpar quando há valor", async () => {
    const onValueChange = vi.fn();
    render(
      <Combobox
        clearable
        options={certificacoes}
        defaultValue="cpa"
        aria-label="Certificação"
        onValueChange={onValueChange}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Limpar seleção" }));
    expect(onValueChange).toHaveBeenCalledWith(null);
  });

  it("agrupa opções pelo campo group", async () => {
    render(
      <Combobox
        aria-label="Fuso"
        options={[
          { value: "sp", label: "São Paulo", group: "Américas" },
          { value: "lisboa", label: "Lisboa", group: "Europa" },
        ]}
      />,
    );
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByText("Américas")).toBeInTheDocument();
    expect(screen.getByText("Europa")).toBeInTheDocument();
  });

  it("no modo button abre um popup com busca", async () => {
    render(<Combobox trigger="button" options={certificacoes} placeholder="Escolha" />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByPlaceholderText("Buscar")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("option", { name: "CPA" }));
    expect(screen.getByRole("combobox")).toHaveTextContent("CPA");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Combobox options={certificacoes} aria-label="Certificação" />);
    await expectNoA11yViolations(container);
  });

  it("ignora acentos e maiúsculas na busca", async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        aria-label="Cidade"
        options={[
          { value: "sp", label: "São Paulo" },
          { value: "bh", label: "Belo Horizonte" },
        ]}
      />,
    );
    await user.type(screen.getByRole("combobox", { name: "Cidade" }), "sao");
    expect(screen.getByRole("option", { name: "São Paulo" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Belo Horizonte" })).not.toBeInTheDocument();
  });

  it("mostra a descrição do item selecionado no gatilho de botão", () => {
    render(
      <Combobox
        trigger="button"
        aria-label="Plano"
        showSelectedDescription
        defaultValue="pro"
        options={[{ value: "pro", label: "Pro", description: "R$ 99/mês" }]}
      />,
    );
    expect(screen.getByRole("combobox", { name: "Plano" })).toHaveTextContent("Pro");
    expect(screen.getByText("R$ 99/mês")).toBeInTheDocument();
  });
});

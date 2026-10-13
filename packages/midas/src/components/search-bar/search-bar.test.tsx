import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { SearchBar } from "./search-bar";

describe("SearchBar", () => {
  it("renderiza uma região de busca com campo", () => {
    render(<SearchBar aria-label="Buscar" />);
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("searchbox", { name: "Buscar" })).toBeInTheDocument();
  });

  it("digita, mostra o botão de limpar e limpa", async () => {
    const onValueChange = vi.fn();
    render(<SearchBar aria-label="Buscar" onValueChange={onValueChange} />);
    await userEvent.type(screen.getByRole("searchbox"), "ab");
    expect(onValueChange).toHaveBeenLastCalledWith("ab");
    await userEvent.click(screen.getByRole("button", { name: "Limpar busca" }));
    expect(screen.getByRole("searchbox")).toHaveValue("");
  });

  it("mostra atalho e botão de filtros com contador", async () => {
    const onFilterClick = vi.fn();
    render(
      <SearchBar aria-label="Buscar" shortcut="⌘K" onFilterClick={onFilterClick} filterCount={2} />,
    );
    expect(screen.getByText("⌘K")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Filtros, 2 ativos" }));
    expect(onFilterClick).toHaveBeenCalled();
  });

  it("tamanho lg e forma pill", () => {
    const { container } = render(<SearchBar aria-label="Buscar" size="lg" shape="pill" />);
    expect(container.querySelector("[data-slot=search-bar-field]")).toHaveClass(
      "h-control-2xl",
      "rounded-pill",
    );
  });

  it("encaminha a ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<SearchBar ref={ref} aria-label="Buscar" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<SearchBar aria-label="Buscar" defaultValue="x" />);
    await expectNoA11yViolations(container);
  });
});

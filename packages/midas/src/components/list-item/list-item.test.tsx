import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemTitle,
} from "./list-item";

describe("ListItem", () => {
  it("renderiza um div quando não é interativo", () => {
    render(
      <ListItem data-testid="item">
        <ListItemContent>
          <ListItemTitle>Módulo 1</ListItemTitle>
          <ListItemDescription>12 aulas</ListItemDescription>
        </ListItemContent>
      </ListItem>,
    );
    const item = screen.getByTestId("item");
    expect(item.tagName).toBe("DIV");
    expect(item).toHaveAttribute("data-slot", "list-item");
    expect(item).not.toHaveClass("cursor-pointer");
    expect(screen.getByText("Módulo 1")).toHaveAttribute("data-slot", "list-item-title");
    expect(screen.getByText("12 aulas")).toHaveAttribute("data-slot", "list-item-description");
  });

  it("renderiza leading e trailing", () => {
    render(<ListItem leading={<i>L</i>} trailing={<i>T</i>} data-testid="item" />);
    expect(screen.getByText("L").parentElement).toHaveAttribute("data-slot", "list-item-leading");
    expect(screen.getByText("T").parentElement).toHaveAttribute("data-slot", "list-item-trailing");
  });

  it("interactive aplica estilos de hover e foco", () => {
    render(<ListItem interactive data-testid="item" />);
    const item = screen.getByTestId("item");
    expect(item).toHaveClass("cursor-pointer", "hover:bg-accent");
  });

  it("selected define data-selected", () => {
    render(<ListItem selected data-testid="item" />);
    expect(screen.getByTestId("item")).toHaveAttribute("data-selected", "true");
  });

  it("asChild vira link e mantém leading e trailing", () => {
    render(
      <ListItem asChild interactive leading={<i>L</i>} trailing={<i>T</i>}>
        <a href="/curso">Curso</a>
      </ListItem>,
    );
    const link = screen.getByRole("link", { name: /Curso/ });
    expect(link).toHaveAttribute("href", "/curso");
    expect(link).toHaveAttribute("data-slot", "list-item");
    expect(link).toHaveClass("cursor-pointer");
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
  });

  it("asChild vira botão e responde ao clique", async () => {
    const onClick = vi.fn();
    render(
      <ListItem asChild interactive>
        <button type="button" onClick={onClick}>
          Abrir
        </button>
      </ListItem>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Abrir" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("mescla className e encaminha ref", () => {
    const ref = { current: null as HTMLElement | null };
    render(<ListItem ref={ref} className="bg-muted" data-testid="item" />);
    expect(screen.getByTestId("item")).toHaveClass("bg-muted");
    expect(ref.current).toBe(screen.getByTestId("item"));
  });

  it("grupo semântico com ul e li não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ListItemGroup asChild>
        <ul>
          <ListItem asChild>
            <li>Primeiro</li>
          </ListItem>
          <ListItem asChild selected>
            <li>Segundo</li>
          </ListItem>
        </ul>
      </ListItemGroup>,
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("list")).toHaveAttribute("data-slot", "list-item-group");
    await expectNoA11yViolations(container);
  });

  it("item interativo não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ListItemGroup>
        <ListItem asChild interactive leading={<span aria-hidden="true">*</span>}>
          <button type="button">
            <ListItemContent>
              <ListItemTitle>Aula 1</ListItemTitle>
              <ListItemDescription>10 min</ListItemDescription>
            </ListItemContent>
          </button>
        </ListItem>
      </ListItemGroup>,
    );
    await expectNoA11yViolations(container);
  });
});

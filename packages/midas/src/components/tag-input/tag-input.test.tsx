import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { TagInput } from "./tag-input";

describe("TagInput", () => {
  it("adiciona tags com Enter e vírgula", async () => {
    const onValueChange = vi.fn();
    render(<TagInput aria-label="Tags" onValueChange={onValueChange} />);
    await userEvent.type(screen.getByRole("textbox"), "UI Kit{Enter}Design,");
    expect(onValueChange).toHaveBeenLastCalledWith(["UI Kit", "Design"]);
    expect(screen.getByText("UI Kit")).toBeInTheDocument();
  });

  it("não repete tags e respeita o limite", async () => {
    render(<TagInput aria-label="Tags" defaultValue={["a"]} maxTags={2} />);
    await userEvent.type(screen.getByRole("textbox"), "a{Enter}b{Enter}c{Enter}");
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("remove por botão e com Backspace", async () => {
    render(<TagInput aria-label="Tags" defaultValue={["a", "b", "c"]} />);
    await userEvent.click(screen.getByRole("button", { name: "Remover a" }));
    expect(screen.queryByText("a")).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "{Backspace}");
    expect(screen.queryByText("c")).not.toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<TagInput aria-label="Tags" defaultValue={["a"]} />);
    await expectNoA11yViolations(container);
  });
});

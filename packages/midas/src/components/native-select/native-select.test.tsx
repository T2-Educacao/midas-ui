import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { NativeSelect } from "./native-select";

describe("NativeSelect", () => {
  it("usa o select nativo do navegador", async () => {
    render(
      <NativeSelect aria-label="Estado" defaultValue="sp">
        <option value="sp">São Paulo</option>
        <option value="rj">Rio de Janeiro</option>
      </NativeSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Estado" });
    await userEvent.selectOptions(select, "rj");
    expect(select).toHaveValue("rj");
  });

  it("aplica o tamanho sm", () => {
    render(
      <NativeSelect aria-label="Itens" size="sm">
        <option>10</option>
      </NativeSelect>,
    );
    expect(screen.getByRole("combobox")).toHaveAttribute("data-size", "sm");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <NativeSelect aria-label="Estado">
        <option>São Paulo</option>
      </NativeSelect>,
    );
    await expectNoA11yViolations(container);
  });
});

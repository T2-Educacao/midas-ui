import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { WheelPicker } from "./wheel-picker";

const columns = [
  {
    id: "mes",
    label: "Mês",
    options: [
      { value: "1", label: "Agosto" },
      { value: "2", label: "Setembro" },
      { value: "3", label: "Outubro" },
    ],
  },
];

describe("WheelPicker", () => {
  it("marca a opção selecionada e muda ao clicar", async () => {
    const onValueChange = vi.fn();
    render(
      <WheelPicker columns={columns} defaultValue={{ mes: "1" }} onValueChange={onValueChange} />,
    );
    expect(screen.getByRole("option", { name: "Agosto" })).toHaveAttribute("aria-selected", "true");
    await userEvent.click(screen.getByRole("option", { name: "Outubro" }));
    expect(onValueChange).toHaveBeenCalledWith({ mes: "3" });
    expect(screen.getByRole("option", { name: "Outubro" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("navega com as setas", async () => {
    render(<WheelPicker columns={columns} defaultValue={{ mes: "1" }} />);
    screen.getByRole("listbox", { name: "Mês" }).focus();
    await userEvent.keyboard("{ArrowDown}");
    expect(screen.getByRole("option", { name: "Setembro" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<WheelPicker columns={columns} />);
    await expectNoA11yViolations(container);
  });
});

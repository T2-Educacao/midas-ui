import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Chip } from "./chip";

describe("Chip", () => {
  it("renderiza a variante default sem botão quando não é removível", () => {
    render(<Chip>React</Chip>);
    expect(screen.getByText("React")).toHaveClass("bg-secondary", "rounded-full");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it.each([
    ["outline", "border-border"],
    ["primary", "bg-primary"],
  ] as const)("aplica a variante %s", (variant, cls) => {
    render(<Chip variant={variant}>Tag</Chip>);
    expect(screen.getByText("Tag")).toHaveClass(cls);
  });

  it("aplica o tamanho sm", () => {
    render(<Chip size="sm">Tag</Chip>);
    expect(screen.getByText("Tag")).toHaveClass("h-6", "text-xs");
  });

  it("chama onRemove ao clicar no botão com rótulo acessível", async () => {
    const onRemove = vi.fn();
    render(<Chip onRemove={onRemove}>React</Chip>);
    await userEvent.click(screen.getByRole("button", { name: "Remover React" }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("usa removeLabel personalizado", () => {
    render(
      <Chip onRemove={() => {}} removeLabel="Excluir">
        CPA
      </Chip>,
    );
    expect(screen.getByRole("button", { name: "Excluir CPA" })).toBeInTheDocument();
  });

  it("não dispara onRemove quando desabilitado", async () => {
    const onRemove = vi.fn();
    render(
      <Chip onRemove={onRemove} disabled>
        React
      </Chip>,
    );
    const button = screen.getByRole("button", { name: "Remover React" });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("mescla className e encaminha ref", () => {
    const ref = { current: null as HTMLSpanElement | null };
    render(
      <Chip ref={ref} className="bg-muted">
        Tag
      </Chip>,
    );
    expect(screen.getByText("Tag")).toHaveClass("bg-muted");
    expect(screen.getByText("Tag")).toHaveAttribute("data-slot", "chip");
    expect(ref.current).toBe(screen.getByText("Tag"));
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Chip onRemove={() => {}}>React</Chip>);
    await expectNoA11yViolations(container);
  });
});

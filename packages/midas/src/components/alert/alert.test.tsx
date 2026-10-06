import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  it("renderiza com role status na variante default", () => {
    render(
      <Alert>
        <AlertTitle>Aviso</AlertTitle>
        <AlertDescription>Corpo</AlertDescription>
      </Alert>,
    );
    const alert = screen.getByRole("status");
    expect(alert).toHaveAttribute("data-slot", "alert");
    expect(alert).toHaveClass("bg-card");
    expect(screen.getByText("Aviso")).toHaveAttribute("data-slot", "alert-title");
    expect(screen.getByText("Corpo")).toHaveAttribute("data-slot", "alert-description");
  });

  it.each([
    ["info", "status", "text-info"],
    ["success", "status", "text-success"],
    ["warning", "alert", "text-warning"],
    ["destructive", "alert", "text-destructive"],
  ] as const)("variante %s usa role %s", (variant, role, cls) => {
    render(<Alert variant={variant}>Mensagem</Alert>);
    expect(screen.getByRole(role)).toHaveClass(cls);
  });

  it("permite sobrescrever o role", () => {
    render(
      <Alert variant="destructive" role="status">
        Mensagem
      </Alert>,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renderiza a ação", () => {
    render(
      <Alert>
        Texto
        <AlertAction>
          <button type="button">Desfazer</button>
        </AlertAction>
      </Alert>,
    );
    expect(screen.getByRole("button", { name: "Desfazer" }).parentElement).toHaveAttribute(
      "data-slot",
      "alert-action",
    );
  });

  it("mescla className e encaminha ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(
      <Alert ref={ref} className="bg-muted">
        Texto
      </Alert>,
    );
    expect(screen.getByRole("status")).toHaveClass("bg-muted");
    expect(ref.current).toBe(screen.getByRole("status"));
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Alert variant="info">
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6" />
        </svg>
        <AlertTitle>Novidade</AlertTitle>
        <AlertDescription>Descrição</AlertDescription>
      </Alert>,
    );
    await expectNoA11yViolations(container);
  });
});

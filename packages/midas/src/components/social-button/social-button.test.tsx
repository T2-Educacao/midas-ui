import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { SocialButton, SocialLogo } from "./social-button";

describe("SocialButton", () => {
  it("renderiza o texto padrão do provedor, type='button' e altura md", () => {
    render(<SocialButton provider="google" />);
    const button = screen.getByRole("button", { name: "Continuar com Google" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("data-provider", "google");
    expect(button).toHaveClass("h-control-lg", "border-border-default", "rounded-control");
  });

  it("aceita texto próprio e o provedor LinkedIn", () => {
    render(<SocialButton provider="linkedin">Entrar com LinkedIn</SocialButton>);
    expect(screen.getByRole("button", { name: "Entrar com LinkedIn" })).toBeInTheDocument();
  });

  it("aplica estilos, tamanho lg e forma pill", () => {
    render(
      <div>
        <SocialButton provider="google" variant="inverse" size="lg" shape="pill" />
        <SocialButton provider="linkedin" variant="filled" />
        <SocialButton provider="linkedin" variant="glass" />
      </div>,
    );
    const [inverse, filled, glass] = screen.getAllByRole("button");
    expect(inverse).toHaveClass("bg-action-primary-bg", "h-control-xl", "rounded-pill");
    expect(filled).toHaveClass("bg-surface-muted");
    expect(glass).toHaveClass("bg-material-glass-surface");
  });

  it("layout icon mostra só o logo e mantém o nome acessível", () => {
    render(<SocialButton provider="google" layout="icon" />);
    const button = screen.getByRole("button", { name: "Continuar com Google" });
    expect(button).toHaveClass("size-control-lg");
    expect(button).toHaveTextContent("");
    expect(button.querySelector("[data-slot=social-logo]")).not.toBeNull();
  });

  it("dispara onClick e respeita disabled", async () => {
    const onClick = vi.fn();
    const { rerender } = render(<SocialButton provider="google" onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
    rerender(<SocialButton provider="google" onClick={onClick} disabled />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("encaminha a ref e mescla className", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<SocialButton ref={ref} provider="google" className="w-full" />);
    expect(ref.current).toHaveClass("w-full");
  });

  it("SocialLogo é decorativo", () => {
    const { container } = render(<SocialLogo provider="linkedin" />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <div>
        <SocialButton provider="google" />
        <SocialButton provider="linkedin" layout="icon" />
      </div>,
    );
    await expectNoA11yViolations(container);
  });
});

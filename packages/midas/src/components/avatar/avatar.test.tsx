import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "./avatar";

describe("Avatar", () => {
  it("mostra o fallback quando não há imagem", () => {
    render(
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("AS")).toHaveAttribute("data-slot", "avatar-fallback");
  });

  it("aceita tamanhos", () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>,
    );
    expect(container.querySelector("[data-slot=avatar]")).toHaveAttribute("data-size", "lg");
  });

  it("mostra badge de status e de ícone", () => {
    render(
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
        <AvatarBadge aria-label="Online" />
      </Avatar>,
    );
    expect(screen.getByLabelText("Online")).toHaveAttribute("data-variant", "status");
  });

  it("agrupa avatares com contador", () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>,
    );
    expect(screen.getByText("+3")).toHaveAttribute("data-slot", "avatar-group-count");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>,
    );
    await expectNoA11yViolations(container);
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Avatar,
  AvatarAdd,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarOption,
} from "./avatar";

describe("Avatar", () => {
  it("mostra o fallback com iniciais sobre surface-muted", () => {
    render(
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("AS")).toHaveAttribute("data-slot", "avatar-fallback");
    expect(screen.getByText("AS")).toHaveClass("bg-surface-muted", "text-content-primary");
  });

  it("aceita os seis tamanhos do Figma e o legado default", () => {
    const { container } = render(
      <>
        <Avatar size="xs" />
        <Avatar size="2xl" />
        <Avatar />
      </>,
    );
    const avatars = container.querySelectorAll("[data-slot=avatar]");
    expect(avatars[0]).toHaveAttribute("data-size", "xs");
    expect(avatars[1]).toHaveAttribute("data-size", "2xl");
    expect(avatars[2]).toHaveAttribute("data-size", "sm");
  });

  it("formas circle e rounded", () => {
    const { container } = render(
      <>
        <Avatar />
        <Avatar shape="rounded" size="md" />
      </>,
    );
    const avatars = container.querySelectorAll("[data-slot=avatar]");
    expect(avatars[0]).toHaveClass("rounded-full");
    expect(avatars[1]).toHaveAttribute("data-shape", "rounded");
    expect(avatars[1]).toHaveClass("data-[size=md]:rounded-lg");
  });

  it("ring adiciona o anel na cor do fundo", () => {
    const { container } = render(<Avatar ring />);
    expect(container.querySelector("[data-slot=avatar]")).toHaveClass(
      "ring-2",
      "ring-surface-canvas",
    );
  });

  it("tamanho numérico define a variável de tamanho", () => {
    const { container } = render(<Avatar size={56} />);
    expect(container.querySelector("[data-slot=avatar]")).toHaveAttribute("data-size", "custom");
  });

  it("badge de status traz o nome acessível", () => {
    render(
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
        <AvatarBadge status="away" />
      </Avatar>,
    );
    expect(screen.getByRole("img", { name: "Ausente" })).toHaveClass(
      "data-[status=away]:bg-status-warning-fill",
    );
  });

  it("badge online é o padrão e variant icon vira verificado", () => {
    render(
      <>
        <AvatarBadge />
        <AvatarBadge variant="icon" />
      </>,
    );
    expect(screen.getByRole("img", { name: "Online" })).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Verificado" }).querySelector("svg"),
    ).toBeInTheDocument();
  });

  it("badge count mostra o número", () => {
    render(
      <AvatarBadge status="count" aria-label="3 notificações">
        3
      </AvatarBadge>,
    );
    expect(screen.getByRole("img", { name: "3 notificações" })).toHaveTextContent("3");
  });

  it("AvatarAdd é um botão tracejado", async () => {
    const onClick = vi.fn();
    render(<AvatarAdd aria-label="Convidar" onClick={onClick} />);
    await userEvent.click(screen.getByRole("button", { name: "Convidar" }));
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByRole("button")).toHaveClass("border-dashed");
  });

  it("grupo sobrepõe conforme o tamanho e aceita +N", () => {
    const { container } = render(
      <AvatarGroup size="md">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+5</AvatarGroupCount>
      </AvatarGroup>,
    );
    expect(container.querySelector("[data-slot=avatar-group]")).toHaveClass("-space-x-2.5");
    expect(screen.getByText("+5")).toHaveAttribute("data-slot", "avatar-group-count");
  });

  it("+N com asChild vira botão", () => {
    render(
      <AvatarGroupCount asChild>
        <button type="button" aria-label="Ver mais 5 pessoas">
          +5
        </button>
      </AvatarGroupCount>,
    );
    expect(screen.getByRole("button", { name: "Ver mais 5 pessoas" })).toHaveAttribute(
      "data-slot",
      "avatar-group-count",
    );
  });

  it("AvatarOption alterna o estado selecionado", () => {
    render(
      <>
        <AvatarOption aria-label="Opção 1" selected />
        <AvatarOption aria-label="Opção 2" />
      </>,
    );
    expect(screen.getByRole("button", { name: "Opção 1" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Opção 2" })).toHaveAttribute(
      "data-state",
      "default",
    );
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
          <AvatarBadge status="online" />
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>,
    );
    await expectNoA11yViolations(container);
  });
});

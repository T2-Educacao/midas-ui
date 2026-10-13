import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  NotificationBell,
  NotificationCenter,
  NotificationCenterContent,
  NotificationCenterFooter,
  NotificationCenterHeader,
  NotificationGroup,
  NotificationItem,
} from "./notification";

describe("NotificationItem", () => {
  it("renderiza mensagem, citação e tempo", () => {
    render(
      <NotificationItem
        type="mention"
        quote="@Laura, você tem o resumo?"
        meta="há 12 min · Comunidade"
      >
        Ana Lima mencionou você
      </NotificationItem>,
    );
    expect(screen.getByText("Ana Lima mencionou você")).toHaveAttribute(
      "data-slot",
      "notification-message",
    );
    expect(screen.getByText("@Laura, você tem o resumo?")).toHaveAttribute(
      "data-slot",
      "notification-quote",
    );
    expect(screen.getByText("há 12 min · Comunidade")).toHaveClass("text-mono-sm");
  });

  it("não lida ganha fundo leve e ponto visível", () => {
    const { container } = render(
      <NotificationItem unread data-testid="item">
        Nova aula
      </NotificationItem>,
    );
    expect(screen.getByTestId("item")).toHaveClass("bg-selection-bg/40");
    expect(screen.getByTestId("item")).toHaveAttribute("data-unread");
    expect(container.querySelector("[data-slot=notification-unread]")).not.toHaveClass("invisible");
  });

  it("lida esconde o ponto", () => {
    const { container } = render(<NotificationItem>Lida</NotificationItem>);
    expect(container.querySelector("[data-slot=notification-unread]")).toHaveClass("invisible");
  });

  it("cada tipo usa o seu tile", () => {
    render(
      <>
        <NotificationItem type="exam" data-testid="exam">
          Prova
        </NotificationItem>
        <NotificationItem type="achievement" data-testid="ach">
          Conquista
        </NotificationItem>
      </>,
    );
    expect(screen.getByTestId("exam")).toHaveAttribute("data-type", "exam");
    expect(
      screen.getByTestId("exam").querySelector(".bg-status-warning-subtle"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("ach").querySelector(".bg-status-success-subtle"),
    ).toBeInTheDocument();
  });

  it("aceita ação, miniatura e leading próprio", () => {
    render(
      <NotificationItem
        leading={<span data-testid="avatar">AL</span>}
        action={<button type="button">Ver local</button>}
        thumbnail={<img alt="Capa" src="data:," />}
      >
        Prova
      </NotificationItem>,
    );
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ver local" })).toBeInTheDocument();
    expect(screen.getByAltText("Capa")).toBeInTheDocument();
  });

  it("botão de mais opções chama onMore", async () => {
    const onMore = vi.fn();
    render(<NotificationItem onMore={onMore}>Item</NotificationItem>);
    await userEvent.click(screen.getByRole("button", { name: "Mais opções" }));
    expect(onMore).toHaveBeenCalled();
  });

  it("com asChild vira link", () => {
    render(
      <NotificationItem asChild>
        <a href="/aula">Aula nova</a>
      </NotificationItem>,
    );
    expect(screen.getByRole("link", { name: "Aula nova" })).toHaveAttribute(
      "data-slot",
      "notification-item",
    );
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <NotificationItem ref={ref} className="py-5">
        x
      </NotificationItem>,
    );
    expect(ref.current).toHaveClass("py-5");
    expect(ref.current).not.toHaveClass("py-3");
  });
});

describe("NotificationBell", () => {
  it("sem notificações tem nome simples e sem contador", () => {
    render(<NotificationBell />);
    expect(screen.getByRole("button", { name: "Notificações" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(document.querySelector("[data-slot=badge]")).toBeNull();
  });

  it("com contador anuncia as não lidas e mostra o badge", () => {
    render(<NotificationBell count={3} />);
    expect(screen.getByRole("button", { name: "Notificações, 3 não lidas" })).toBeInTheDocument();
    expect(document.querySelector("[data-slot=badge]")).toHaveTextContent("3");
  });

  it("aberto ganha fundo e aria-expanded", () => {
    render(<NotificationBell open />);
    const bell = screen.getByRole("button");
    expect(bell).toHaveAttribute("aria-expanded", "true");
    expect(bell).toHaveAttribute("data-state", "open");
  });

  it("tom neutral usa badge de perigo suave", () => {
    render(<NotificationBell count={2} tone="neutral" />);
    expect(document.querySelector("[data-slot=badge]")).toHaveClass("bg-status-danger-fill");
  });
});

describe("NotificationCenter", () => {
  it("monta cabeçalho, grupos, itens e rodapé", async () => {
    const { container } = render(
      <NotificationCenter>
        <NotificationCenterHeader count={3} />
        <NotificationCenterContent>
          <NotificationGroup label="HOJE">
            <NotificationItem unread>Nova aula</NotificationItem>
          </NotificationGroup>
        </NotificationCenterContent>
        <NotificationCenterFooter>
          <button type="button">Marcar todas como lidas</button>
        </NotificationCenterFooter>
      </NotificationCenter>,
    );
    expect(screen.getByRole("heading", { name: "Notificações" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "HOJE" })).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("shadow-elevation-overlay", "rounded-2xl");
    await expectNoA11yViolations(container);
  });

  it("variante drawer e mobile", () => {
    render(
      <>
        <NotificationCenter type="drawer" data-testid="d" />
        <NotificationCenter type="mobile" data-testid="m" />
      </>,
    );
    expect(screen.getByTestId("d")).toHaveClass("shadow-elevation-modal");
    expect(screen.getByTestId("m")).toHaveClass("w-full");
  });
});

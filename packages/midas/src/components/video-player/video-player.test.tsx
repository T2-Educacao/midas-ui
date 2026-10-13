import { act, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { formatVideoTime, MiniPlayer, VideoPlayer } from "./video-player";

beforeEach(() => {
  vi.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    Object.defineProperty(this, "paused", { value: false, configurable: true });
    this.dispatchEvent(new Event("play"));
    return Promise.resolve();
  });
  vi.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(function (
    this: HTMLMediaElement,
  ) {
    Object.defineProperty(this, "paused", { value: true, configurable: true });
    this.dispatchEvent(new Event("pause"));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("formatVideoTime", () => {
  it("formata minutos e horas", () => {
    expect(formatVideoTime(252)).toBe("04:12");
    expect(formatVideoTime(3725)).toBe("1:02:05");
    expect(formatVideoTime(Number.NaN)).toBe("00:00");
  });
});

describe("VideoPlayer", () => {
  it("renderiza grupo nomeado, tempo e ref", async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <VideoPlayer
        ref={ref}
        title="Come-cotas na prática"
        eyebrow="MÓDULO 3 · AULA 05"
        durationHint={760}
        className="extra"
      />,
    );
    const player = screen.getByRole("group", { name: "Come-cotas na prática" });
    expect(player).toHaveAttribute("data-slot", "video-player");
    expect(player.className).toContain("extra");
    expect(player.className).toContain("aspect-video");
    expect(ref.current).toBe(player);
    expect(screen.getByText("00:00 / 12:40")).toBeInTheDocument();
    await expectNoA11yViolations(container);
  });

  it("alterna reprodução e dispara onPlayingChange", () => {
    const onPlayingChange = vi.fn();
    render(<VideoPlayer title="Aula" onPlayingChange={onPlayingChange} />);
    fireEvent.click(screen.getAllByRole("button", { name: "Reproduzir" })[0] as HTMLElement);
    expect(onPlayingChange).toHaveBeenLastCalledWith(true);
    expect(screen.getByRole("group").getAttribute("data-state")).toBe("playing");
    fireEvent.click(screen.getByRole("button", { name: "Pausar" }));
    expect(onPlayingChange).toHaveBeenLastCalledWith(false);
  });

  it("espaço no contêiner reproduz e a linha do tempo busca", () => {
    const onTimeChange = vi.fn();
    render(<VideoPlayer title="Aula" durationHint={100} onTimeChange={onTimeChange} />);
    const player = screen.getByRole("group");
    fireEvent.keyDown(player, { key: " " });
    expect(player.getAttribute("data-state")).toBe("playing");
    fireEvent.change(screen.getByRole("slider", { name: "Linha do tempo" }), {
      target: { value: "42" },
    });
    expect(onTimeChange).toHaveBeenCalledWith(42);
    expect(screen.getByText("00:42 / 01:40")).toBeInTheDocument();
  });

  it("abre configurações e troca a velocidade", () => {
    render(<VideoPlayer title="Aula" />);
    fireEvent.click(screen.getByRole("button", { name: "Configurações" }));
    expect(screen.getByRole("dialog", { name: "Configurações do vídeo" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "1,5x" }));
    expect(screen.getByRole("button", { name: "1,5x" })).toHaveAttribute("aria-pressed", "true");
  });

  it("controles somem após o atraso durante a reprodução", () => {
    vi.useFakeTimers();
    render(<VideoPlayer title="Aula" hideDelay={3000} />);
    const controls = document.querySelector("[data-slot=video-player-controls]");
    fireEvent.keyDown(screen.getByRole("group"), { key: " " });
    expect(controls?.className).toContain("opacity-100");
    act(() => {
      vi.advanceTimersByTime(3100);
    });
    expect(controls?.className).toContain("opacity-0");
  });

  it("estado ended mostra a próxima aula com contagem e ações", () => {
    const onNext = vi.fn();
    const onNextCancel = vi.fn();
    render(
      <VideoPlayer
        title="Aula"
        state="ended"
        nextLesson={{ title: "Tributação de fundos", meta: "Aula 06 · 18 min" }}
        onNext={onNext}
        onNextCancel={onNextCancel}
      />,
    );
    expect(screen.getByText("Tributação de fundos")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Assistir agora" }));
    expect(onNext).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Cancelar" }));
    expect(onNextCancel).toHaveBeenCalled();
  });

  it("estado buffering mostra indicador de carregamento", () => {
    render(<VideoPlayer title="Aula" state="buffering" />);
    expect(screen.getByRole("status", { name: "Carregando" })).toBeInTheDocument();
  });

  it("formatos verticais usam layout imersivo com ações", () => {
    render(
      <VideoPlayer title="Aula" ratio="9:16" actions={<button type="button">Salvar</button>} />,
    );
    expect(screen.getByRole("group").className).toContain("aspect-[9/16]");
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Voltar 10 segundos" })).toBeNull();
  });
});

describe("MiniPlayer", () => {
  it("mostra progresso e dispara ações", async () => {
    const onTogglePlay = vi.fn();
    const onClose = vi.fn();
    const { container } = render(
      <MiniPlayer
        title="Come-cotas em 5 min"
        playing
        currentTime={72}
        duration={300}
        onTogglePlay={onTogglePlay}
        onClose={onClose}
      />,
    );
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "24");
    fireEvent.click(screen.getByRole("button", { name: "Pausar" }));
    expect(onTogglePlay).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(onClose).toHaveBeenCalled();
    expect(screen.getByText("01:12 / 05:00")).toBeInTheDocument();
    await expectNoA11yViolations(container);
  });
});

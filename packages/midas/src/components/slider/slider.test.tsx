import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Slider } from "./slider";

describe("Slider", () => {
  it("renderiza um thumb com role slider para valor único", () => {
    render(<Slider defaultValue={[30]} />);
    const thumb = screen.getByRole("slider");
    expect(thumb).toHaveAttribute("aria-valuenow", "30");
    expect(thumb).toHaveAttribute("data-slot", "slider-thumb");
  });

  it("renderiza um thumb por valor em intervalos", () => {
    render(<Slider defaultValue={[20, 80]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs).toHaveLength(2);
    expect(thumbs[0]).toHaveAttribute("aria-valuenow", "20");
    expect(thumbs[1]).toHaveAttribute("aria-valuenow", "80");
  });

  it("muda o valor pelo teclado", () => {
    const onValueChange = vi.fn();
    render(<Slider defaultValue={[30]} onValueChange={onValueChange} />);
    fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" });
    expect(onValueChange).toHaveBeenCalledWith([31]);
  });

  it("aplica orientação vertical", () => {
    const { container } = render(<Slider defaultValue={[50]} orientation="vertical" />);
    expect(container.querySelector("[data-slot='slider']")).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
  });

  it("fica desabilitado", () => {
    const { container } = render(<Slider defaultValue={[50]} disabled />);
    expect(container.querySelector("[data-slot='slider']")).toHaveAttribute("data-disabled");
  });

  it("mescla className e encaminha ref", () => {
    const ref = { current: null as HTMLSpanElement | null };
    const { container } = render(<Slider ref={ref} defaultValue={[50]} className="w-1/2" />);
    expect(container.querySelector("[data-slot='slider']")).toHaveClass("w-1/2");
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Slider defaultValue={[50]} aria-label="Volume" />);
    await expectNoA11yViolations(container);
  });
});

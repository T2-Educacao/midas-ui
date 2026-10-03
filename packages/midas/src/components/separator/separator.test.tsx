import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./separator";

describe("Separator", () => {
  it("é horizontal e decorativo por padrão", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector("[data-slot=separator]");
    expect(sep).toHaveClass("h-px", "w-full");
    expect(sep).toHaveAttribute("role", "none");
  });

  it("aceita orientação vertical e semântica", () => {
    const { getByRole } = render(<Separator orientation="vertical" decorative={false} />);
    expect(getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });
});

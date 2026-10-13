import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { CourseCover } from "./course-cover";

describe("CourseCover", () => {
  it("renderiza imagem, título, progresso, ref e className", async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <CourseCover
        ref={ref}
        src="/capa.jpg"
        alt="Capa do CPA-20"
        title="Preparatório CPA-20"
        eyebrow="CURSO"
        progress={40}
        ratio="4:3"
        className="extra"
      />,
    );
    const cover = container.querySelector("[data-slot=course-cover]");
    expect(cover?.className).toContain("extra");
    expect(cover?.className).toContain("aspect-[4/3]");
    expect(ref.current).toBe(cover);
    expect(screen.getByRole("img", { name: "Capa do CPA-20" })).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "40");
    await expectNoA11yViolations(container);
  });

  it("sem imagem mostra só o fundo e o selo", () => {
    render(<CourseCover badge={<span>Novo</span>} />);
    expect(screen.getByText("Novo")).toBeInTheDocument();
  });
});

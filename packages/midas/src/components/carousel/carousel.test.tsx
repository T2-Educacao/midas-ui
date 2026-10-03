import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

function Exemplo({ setApi }: { setApi?: () => void }) {
  return (
    <Carousel aria-label="Cursos em destaque" setApi={setApi}>
      <CarouselContent>
        {[1, 2, 3].map((n) => (
          <CarouselItem key={n}>Slide {n}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

describe("Carousel", () => {
  it("renderiza a região, os slides e os botões", () => {
    render(<Exemplo />);
    expect(screen.getByRole("region", { name: "Cursos em destaque" })).toHaveAttribute(
      "aria-roledescription",
      "carrossel",
    );
    expect(screen.getAllByRole("group")).toHaveLength(3);
    expect(screen.getByRole("button", { name: "Slide anterior" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Próximo slide" })).toBeInTheDocument();
  });

  it("entrega a API do embla pelo setApi", () => {
    const setApi = vi.fn();
    render(<Exemplo setApi={setApi} />);
    expect(setApi).toHaveBeenCalled();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});

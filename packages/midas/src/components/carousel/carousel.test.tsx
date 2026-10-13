import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselEyebrow,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTitle,
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

  it("tipo spotlight marca o slide ativo e escala os demais", () => {
    render(
      <Carousel aria-label="Destaques" type="spotlight">
        <CarouselContent>
          {[1, 2, 3].map((n) => (
            <CarouselItem key={n}>Slide {n}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>,
    );
    expect(screen.getByRole("region")).toHaveAttribute("data-type", "spotlight");
    expect(screen.getAllByRole("group")[0]).toHaveClass("scale-90");
  });

  it("cabeçalho, controles inline e pontos", () => {
    render(
      <Carousel aria-label="Continue aprendendo">
        <CarouselHeader>
          <div>
            <CarouselEyebrow>EM ALTA</CarouselEyebrow>
            <CarouselTitle>Continue aprendendo</CarouselTitle>
          </div>
          <CarouselControls>
            <CarouselPrevious inline />
            <CarouselNext inline />
          </CarouselControls>
        </CarouselHeader>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselDots data-testid="pontos" />
      </Carousel>,
    );
    expect(screen.getByText("EM ALTA")).toHaveClass("text-mono-overline");
    expect(screen.getByRole("heading", { name: "Continue aprendendo" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Próximo slide" })).not.toHaveClass("absolute");
    expect(screen.getByTestId("pontos")).toHaveAttribute("aria-hidden", "true");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});

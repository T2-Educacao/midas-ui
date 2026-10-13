import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Skeleton,
  SkeletonCard,
  SkeletonCourseCard,
  SkeletonHero,
  SkeletonListItem,
  SkeletonNotification,
  SkeletonProfile,
  SkeletonTable,
  SkeletonText,
} from "./skeleton";

describe("Skeleton", () => {
  it("renderiza escondido de leitores de tela com shimmer e token de borda", () => {
    render(<Skeleton data-testid="sk" />);
    const el = screen.getByTestId("sk");
    expect(el).toHaveAttribute("aria-hidden", "true");
    expect(el).toHaveAttribute("data-slot", "skeleton");
    expect(el).toHaveClass(
      "animate-pulse",
      "bg-border-default",
      "rounded-sm",
      "motion-reduce:animate-none",
    );
  });

  it("aplica as formas do Figma", () => {
    render(
      <>
        <Skeleton data-testid="circle" shape="circle" />
        <Skeleton data-testid="rect" shape="rect" />
        <Skeleton data-testid="pill" shape="pill" />
      </>,
    );
    expect(screen.getByTestId("circle")).toHaveClass("rounded-full", "size-10");
    expect(screen.getByTestId("rect")).toHaveClass("rounded-xl");
    expect(screen.getByTestId("pill")).toHaveClass("rounded-pill");
  });

  it("static não anima", () => {
    render(<Skeleton data-testid="sk" animation="static" />);
    expect(screen.getByTestId("sk")).not.toHaveClass("animate-pulse");
  });

  it("mescla className com a do usuário vencendo", () => {
    render(<Skeleton data-testid="sk" className="rounded-full h-4" />);
    expect(screen.getByTestId("sk")).toHaveClass("rounded-full", "h-4");
    expect(screen.getByTestId("sk")).not.toHaveClass("rounded-sm");
  });

  it("encaminha a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("renderiza todos os padrões, escondidos de leitores de tela", () => {
    const { container } = render(
      <>
        <SkeletonText />
        <SkeletonListItem />
        <SkeletonCard />
        <SkeletonCourseCard />
        <SkeletonNotification />
        <SkeletonProfile />
        <SkeletonTable />
        <SkeletonHero />
      </>,
    );
    const slots = [
      "skeleton-text",
      "skeleton-list-item",
      "skeleton-card",
      "skeleton-course-card",
      "skeleton-notification",
      "skeleton-profile",
      "skeleton-table",
      "skeleton-hero",
    ];
    for (const slot of slots) {
      expect(container.querySelector(`[data-slot=${slot}]`)).toHaveAttribute("aria-hidden", "true");
    }
  });

  it("padrão static propaga a animação aos blocos", () => {
    const { container } = render(<SkeletonText animation="static" className="max-w-lg" />);
    expect(container.querySelector(".animate-pulse")).toBeNull();
    expect(container.querySelector("[data-slot=skeleton-text]")).toHaveClass("max-w-lg");
    expect(container.querySelector("[data-slot=skeleton-text]")).not.toHaveClass("max-w-sm");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <div aria-busy="true">
        <Skeleton className="h-4 w-32" />
        <SkeletonCard />
      </div>,
    );
    await expectNoA11yViolations(container);
  });
});

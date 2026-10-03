import { CaretLeft, CaretRight, DotsThree } from "@phosphor-icons/react/ssr";
import * as React from "react";
import { cn } from "../../lib/cn";
import { type ButtonProps, buttonVariants } from "../button/button";

export const Pagination = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Paginação"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  ),
);
Pagination.displayName = "Pagination";

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-slot="pagination-content"
    className={cn("flex items-center gap-0.5", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>((props, ref) => <li ref={ref} data-slot="pagination-item" {...props} />);
PaginationItem.displayName = "PaginationItem";

export type PaginationLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "size" | "rounded"> & {
    isActive?: boolean;
  };

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "icon", rounded, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive || undefined}
      className={cn(
        buttonVariants({ variant: isActive ? "outline" : "ghost", size, rounded }),
        "cursor-pointer aria-disabled:pointer-events-none aria-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
PaginationLink.displayName = "PaginationLink";

export interface PaginationNavProps extends PaginationLinkProps {
  label?: string;
}

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationNavProps>(
  ({ className, label = "Anterior", ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Ir para a página anterior"
      size="default"
      rounded
      className={cn("ps-2", className)}
      {...props}
    >
      <CaretLeft className="rtl:rotate-180" />
      <span className="hidden sm:block">{label}</span>
    </PaginationLink>
  ),
);
PaginationPrevious.displayName = "PaginationPrevious";

export const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationNavProps>(
  ({ className, label = "Próxima", ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Ir para a próxima página"
      size="default"
      rounded
      className={cn("pe-2", className)}
      {...props}
    >
      <span className="hidden sm:block">{label}</span>
      <CaretRight className="rtl:rotate-180" />
    </PaginationLink>
  ),
);
PaginationNext.displayName = "PaginationNext";

export function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-8 items-center justify-center text-muted-foreground", className)}
      {...props}
    >
      <DotsThree className="size-4" />
      <span className="sr-only">Mais páginas</span>
    </span>
  );
}

export type PageRangeItem = number | "ellipsis-start" | "ellipsis-end";

export function getPageRange(current: number, total: number, siblings = 1): PageRangeItem[] {
  if (total <= 0) return [];
  const window = siblings * 2 + 5;
  if (total <= window) return Array.from({ length: total }, (_, i) => i + 1);

  const start = Math.max(current - siblings, 2);
  const end = Math.min(current + siblings, total - 1);
  const showLeft = start > 3;
  const showRight = end < total - 2;

  if (!showLeft) {
    const count = siblings * 2 + 3;
    return [...Array.from({ length: count }, (_, i) => i + 1), "ellipsis-end", total];
  }
  if (!showRight) {
    const count = siblings * 2 + 3;
    return [1, "ellipsis-start", ...Array.from({ length: count }, (_, i) => total - count + i + 1)];
  }
  return [
    1,
    "ellipsis-start",
    ...Array.from({ length: end - start + 1 }, (_, i) => start + i),
    "ellipsis-end",
    total,
  ];
}

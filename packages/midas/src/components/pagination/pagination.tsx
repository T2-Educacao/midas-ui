import { IconChevronLeft, IconChevronRight, IconDots } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Button, type ButtonProps } from "../button/button";

export const paginationVariants = cva("group/pagination mx-auto flex w-full justify-center", {
  variants: {
    size: { md: "", sm: "" },
    tone: { brand: "", neutral: "" },
  },
  defaultVariants: { size: "md", tone: "brand" },
});

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof paginationVariants> {}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, size, tone, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Paginação"
      data-slot="pagination"
      data-size={size ?? "md"}
      data-tone={tone ?? "brand"}
      className={cn(paginationVariants({ size, tone }), className)}
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
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>((props, ref) => <li ref={ref} data-slot="pagination-item" {...props} />);
PaginationItem.displayName = "PaginationItem";

export const paginationLinkVariants = cva(
  [
    "inline-flex cursor-pointer select-none items-center justify-center gap-1 border border-transparent text-content-secondary outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring",
    "aria-disabled:pointer-events-none aria-disabled:text-content-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-sm",
    "group-data-[size=md]/pagination:h-control-md group-data-[size=md]/pagination:text-mono-md",
    "group-data-[size=sm]/pagination:h-control-sm group-data-[size=sm]/pagination:text-mono-sm",
    "aria-[current=page]:text-selection-content",
    "group-data-[tone=brand]/pagination:aria-[current=page]:border-selection-border group-data-[tone=brand]/pagination:aria-[current=page]:bg-selection-bg",
    "group-data-[tone=neutral]/pagination:aria-[current=page]:bg-action-primary-bg group-data-[tone=neutral]/pagination:aria-[current=page]:text-action-primary-content",
  ],
  {
    variants: {
      shape: {
        square:
          "group-data-[size=md]/pagination:min-w-control-md group-data-[size=sm]/pagination:min-w-control-sm",
        wide: "px-2",
      },
      rounded: {
        true: "rounded-pill",
        false: "rounded-control",
      },
    },
    defaultVariants: { shape: "square", rounded: false },
  },
);

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
        paginationLinkVariants({
          shape: typeof size === "string" && size.startsWith("icon") ? "square" : "wide",
          rounded: Boolean(rounded),
        }),
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
      className={cn("ps-1.5 font-sans text-label-md", className)}
      {...props}
    >
      <IconChevronLeft aria-hidden="true" className="rtl:rotate-180" />
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
      className={cn("pe-1.5 font-sans text-label-md", className)}
      {...props}
    >
      <span className="hidden sm:block">{label}</span>
      <IconChevronRight aria-hidden="true" className="rtl:rotate-180" />
    </PaginationLink>
  ),
);
PaginationNext.displayName = "PaginationNext";

export function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex items-center justify-center text-content-secondary group-data-[size=md]/pagination:size-control-md group-data-[size=sm]/pagination:size-control-sm",
        className,
      )}
      {...props}
    >
      <IconDots className="size-icon-sm" />
      <span className="sr-only">Mais páginas</span>
    </span>
  );
}

export const PaginationSummary = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="pagination-summary"
    className={cn("text-mono-md text-content-secondary", className)}
    {...props}
  />
));
PaginationSummary.displayName = "PaginationSummary";

export interface PaginationCompactProps extends React.HTMLAttributes<HTMLSpanElement> {
  page: number;
  total: number;
}

export const PaginationCompact = React.forwardRef<HTMLSpanElement, PaginationCompactProps>(
  ({ className, page, total, ...props }, ref) => (
    <span
      ref={ref}
      role="img"
      data-slot="pagination-compact"
      aria-label={`Página ${page} de ${total}`}
      className={cn("text-mono-md text-content-secondary", className)}
      {...props}
    >
      <span aria-hidden="true">
        <span className="text-content-primary">{page}</span> / {total}
      </span>
    </span>
  ),
);
PaginationCompact.displayName = "PaginationCompact";

export interface PaginationDotsProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number;
  current: number;
}

export const PaginationDots = React.forwardRef<HTMLSpanElement, PaginationDotsProps>(
  ({ className, count, current, ...props }, ref) => (
    <span
      ref={ref}
      role="img"
      aria-label={`Página ${current + 1} de ${count}`}
      data-slot="pagination-dots"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    >
      {Array.from({ length: count }, (_, position) => position).map((index) => (
        <span
          key={index}
          aria-hidden="true"
          data-active={index === current ? "true" : undefined}
          className={cn(
            "h-1.5 rounded-pill transition-[width,background-color] duration-150 motion-reduce:transition-none",
            index === current ? "w-5 bg-action-accent-bg" : "w-1.5 bg-border-strong",
          )}
        />
      ))}
    </span>
  ),
);
PaginationDots.displayName = "PaginationDots";

export interface PaginationLoadMoreProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  shown: number;
  total: number;
  label?: string;
  onLoadMore?: () => void;
  loading?: boolean;
}

export const PaginationLoadMore = React.forwardRef<HTMLDivElement, PaginationLoadMoreProps>(
  ({ className, shown, total, label = "Carregar mais", onLoadMore, loading, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="pagination-load-more"
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    >
      <p className="text-mono-md text-content-secondary">
        Mostrando {shown} de {total}
      </p>
      <div
        role="progressbar"
        aria-label="Itens carregados"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={shown}
        className="h-1 w-40 overflow-hidden rounded-pill bg-border-default"
      >
        <div
          className="h-full rounded-pill bg-action-accent-bg"
          style={{ width: `${total > 0 ? Math.min(100, (shown / total) * 100) : 0}%` }}
        />
      </div>
      <Button variant="outline" rounded disabled={loading || shown >= total} onClick={onLoadMore}>
        {label}
      </Button>
    </div>
  ),
);
PaginationLoadMore.displayName = "PaginationLoadMore";

export interface PaginationShowMoreProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  onShowMore?: () => void;
}

export const PaginationShowMore = React.forwardRef<HTMLDivElement, PaginationShowMoreProps>(
  ({ className, glass = false, onShowMore, children = "Ver mais", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="pagination-show-more"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center bg-linear-to-b from-transparent to-surface-canvas pb-4",
        className,
      )}
      {...props}
    >
      <Button
        rounded
        variant={glass ? "glass" : "outline"}
        onClick={onShowMore}
        className="pointer-events-auto"
      >
        {children}
      </Button>
    </div>
  ),
);
PaginationShowMore.displayName = "PaginationShowMore";

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

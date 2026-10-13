import * as React from "react";
import { cn } from "../../lib/cn";
import {
  getPageRange,
  Pagination,
  PaginationCompact,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationSummary,
} from "../pagination/pagination";

export interface TablePaginationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  page: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
  range?: React.ReactNode;
  type?: "numbers" | "simple";
  tone?: "brand" | "neutral";
  getHref?: (page: number) => string;
}

export const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    { className, page, pageCount, onPageChange, range, type = "numbers", tone, getHref, ...props },
    ref,
  ) => {
    const go = (target: number) => (event: React.MouseEvent) => {
      if (!getHref) event.preventDefault();
      if (target >= 1 && target <= pageCount && target !== page) onPageChange?.(target);
    };
    const hrefOf = (target: number) => (getHref ? getHref(target) : "#");
    const first = page <= 1;
    const last = page >= pageCount;
    return (
      <div
        ref={ref}
        data-slot="table-pagination"
        data-type={type}
        className={cn(
          "flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle px-4 py-3",
          className,
        )}
        {...props}
      >
        {range ? <PaginationSummary>{range}</PaginationSummary> : <span />}
        <Pagination className="mx-0 w-auto" size="sm" tone={tone}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={hrefOf(page - 1)}
                aria-disabled={first || undefined}
                onClick={go(page - 1)}
              />
            </PaginationItem>
            {type === "simple" ? (
              <PaginationItem>
                <PaginationCompact page={page} total={pageCount} />
              </PaginationItem>
            ) : (
              getPageRange(page, pageCount).map((item) =>
                typeof item === "string" ? (
                  <PaginationItem key={item}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={item}>
                    <PaginationLink href={hrefOf(item)} isActive={item === page} onClick={go(item)}>
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )
            )}
            <PaginationItem>
              <PaginationNext
                href={hrefOf(page + 1)}
                aria-disabled={last || undefined}
                onClick={go(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
);
TablePagination.displayName = "TablePagination";

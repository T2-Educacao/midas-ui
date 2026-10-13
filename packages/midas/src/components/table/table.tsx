import { IconChevronDown, IconChevronUp, IconSelector } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const tableVariants = cva(
  "group/table w-full caption-bottom border-collapse text-body-md text-content-primary",
  {
    variants: {
      size: {
        default: "",
        sm: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const tableContainerVariants = cva("relative w-full overflow-x-auto", {
  variants: {
    surface: {
      solid:
        "rounded-container border border-border-subtle bg-surface-default shadow-elevation-card",
      glass: "material-glass rounded-container border border-material-glass-border",
      plain: "",
    },
  },
  defaultVariants: {
    surface: "solid",
  },
});

export interface TableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, "surface">,
    VariantProps<typeof tableVariants>,
    VariantProps<typeof tableContainerVariants> {
  containerClassName?: string;
  density?: "default" | "compact";
  tone?: "brand" | "neutral";
  striped?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      containerClassName,
      size,
      density,
      surface,
      tone = "brand",
      striped = false,
      ...props
    },
    ref,
  ) => {
    const resolvedSize = size ?? (density === "compact" ? "sm" : "default");
    return (
      <div
        data-slot="table-container"
        data-surface={surface ?? "solid"}
        className={cn(tableContainerVariants({ surface }), containerClassName)}
      >
        <table
          ref={ref}
          data-slot="table"
          data-size={resolvedSize}
          data-tone={tone}
          data-striped={striped ? "true" : undefined}
          className={cn(tableVariants({ size: resolvedSize }), className)}
          {...props}
        />
      </div>
    );
  },
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    data-slot="table-header"
    className={cn("[&_tr]:border-b [&_tr]:border-border-subtle", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    data-slot="table-body"
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    data-slot="table-footer"
    className={cn(
      "border-t border-border-subtle bg-surface-muted text-label-md [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    data-slot="table-row"
    className={cn(
      "h-14 border-b border-border-subtle transition-colors motion-reduce:transition-none",
      "hover:bg-state-hover group-data-[size=sm]/table:h-10",
      "group-data-[striped=true]/table:even:bg-surface-muted",
      "data-[state=selected]:bg-selection-bg group-data-[tone=neutral]/table:data-[state=selected]:bg-surface-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableGroupRow = React.forwardRef<
  HTMLTableRowElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { colSpan: number }
>(({ className, colSpan, children, ...props }, ref) => (
  <tr
    ref={ref}
    data-slot="table-group-row"
    className="h-10 border-b border-border-subtle bg-surface-muted"
  >
    <th
      colSpan={colSpan}
      scope="colgroup"
      className={cn("px-4 text-start text-mono-overline text-content-secondary", className)}
      {...props}
    >
      {children}
    </th>
  </tr>
));
TableGroupRow.displayName = "TableGroupRow";

export interface TableHeadProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "align"> {
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | false;
  onSort?: () => void;
  align?: "start" | "end";
}

const ariaSortByDirection = {
  asc: "ascending",
  desc: "descending",
} as const;

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      className,
      children,
      sortable = false,
      sortDirection = false,
      onSort,
      align = "start",
      "aria-sort": ariaSort,
      ...props
    },
    ref,
  ) => {
    const SortIcon =
      sortDirection === "asc"
        ? IconChevronUp
        : sortDirection === "desc"
          ? IconChevronDown
          : IconSelector;
    return (
      <th
        ref={ref}
        data-slot="table-head"
        aria-sort={
          sortable ? (sortDirection ? ariaSortByDirection[sortDirection] : "none") : ariaSort
        }
        className={cn(
          "h-10 whitespace-nowrap px-4 align-middle text-mono-overline text-content-secondary group-data-[size=sm]/table:h-8",
          align === "end" ? "text-end" : "text-start",
          className,
        )}
        {...props}
      >
        {sortable ? (
          <button
            type="button"
            data-slot="table-sort"
            onClick={onSort}
            className={cn(
              "-mx-1 inline-flex items-center gap-1 rounded-xs px-1 py-0.5 text-mono-overline outline-none transition-colors",
              "hover:text-content-primary focus-visible:focus-ring motion-reduce:transition-none",
              sortDirection && "text-content-primary",
              align === "end" && "flex-row-reverse",
            )}
          >
            {children}
            <SortIcon aria-hidden="true" className="size-icon-xs shrink-0" />
          </button>
        ) : (
          children
        )}
      </th>
    );
  },
);
TableHead.displayName = "TableHead";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, numeric = false, ...props }, ref) => (
    <td
      ref={ref}
      data-slot="table-cell"
      className={cn(
        "px-4 py-3 align-middle group-data-[size=sm]/table:py-2 group-data-[size=sm]/table:text-body-sm",
        numeric && "text-end text-mono-md tabular-nums",
        className,
      )}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    data-slot="table-caption"
    className={cn("mt-3 text-body-sm text-content-secondary", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

"use client";

import { IconAdjustments, IconSearch, IconX } from "@tabler/icons-react";
import * as React from "react";
import { cn } from "../../lib/cn";
import { fieldGroupVariants } from "../../lib/field-styles";
import { Kbd } from "../kbd/kbd";

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: "md" | "lg";
  appearance?: "outline" | "filled" | "glass";
  tone?: "brand" | "neutral";
  shape?: "rounded" | "pill";
  shortcut?: React.ReactNode;
  scope?: React.ReactNode;
  onFilterClick?: () => void;
  filterCount?: number;
  filterLabel?: string;
  clearLabel?: string;
  wrapperClassName?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      wrapperClassName,
      value,
      defaultValue = "",
      onValueChange,
      onChange,
      size = "md",
      appearance,
      tone,
      shape,
      shortcut,
      scope,
      onFilterClick,
      filterCount,
      filterLabel = "Filtros",
      clearLabel = "Limpar busca",
      placeholder = "Buscar cursos, trilhas e aulas",
      disabled,
      ...props
    },
    forwardedRef,
  ) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const current = value ?? internal;
    const innerRef = React.useRef<HTMLInputElement | null>(null);
    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const update = (next: string) => {
      if (value === undefined) setInternal(next);
      onValueChange?.(next);
    };

    return (
      <div
        role="search"
        data-slot="search-bar"
        className={cn("flex w-full items-center gap-2", wrapperClassName)}
      >
        <div
          data-slot="search-bar-field"
          className={cn(fieldGroupVariants({ size, appearance, tone, shape }), "pe-2", className)}
        >
          {scope ? (
            <>
              <span data-slot="search-bar-scope" className="flex shrink-0 items-center">
                {scope}
              </span>
              <span aria-hidden="true" className="mx-2.5 h-5 w-px shrink-0 bg-border-subtle" />
            </>
          ) : null}
          <IconSearch aria-hidden="true" className="size-icon-md shrink-0 text-content-secondary" />
          <input
            ref={setRefs}
            type="search"
            data-slot="input-group-control"
            value={current}
            disabled={disabled}
            placeholder={placeholder}
            onChange={(event) => {
              onChange?.(event);
              update(event.target.value);
            }}
            className="h-full min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-[length:inherit] text-content-primary outline-none placeholder:text-content-secondary disabled:cursor-not-allowed disabled:text-content-disabled [&::-webkit-search-cancel-button]:hidden"
            {...props}
          />
          {current && !disabled ? (
            <button
              type="button"
              aria-label={clearLabel}
              onClick={() => {
                update("");
                innerRef.current?.focus();
              }}
              className="flex size-7 shrink-0 items-center justify-center rounded-pill text-content-secondary outline-none hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring"
            >
              <IconX aria-hidden="true" className="size-icon-sm" />
            </button>
          ) : shortcut ? (
            <Kbd aria-hidden="true">{shortcut}</Kbd>
          ) : null}
        </div>
        {onFilterClick ? (
          <button
            type="button"
            data-slot="search-bar-filter"
            aria-label={filterCount ? `${filterLabel}, ${filterCount} ativos` : filterLabel}
            disabled={disabled}
            onClick={onFilterClick}
            className={cn(
              "relative inline-flex shrink-0 items-center justify-center rounded-control border border-border-subtle bg-surface-canvas text-content-primary shadow-elevation-control outline-none",
              "transition-[background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
              "hover:border-border-default hover:bg-state-hover focus-visible:focus-ring disabled:pointer-events-none disabled:bg-disabled-bg disabled:text-content-disabled",
              size === "lg" ? "size-control-2xl" : "size-control-xl",
            )}
          >
            <IconAdjustments aria-hidden="true" className="size-icon-md" />
            {filterCount ? (
              <span
                aria-hidden="true"
                className="absolute -end-1 -top-1 flex size-4 items-center justify-center rounded-pill bg-action-accent-bg text-mono-sm text-action-accent-content"
              >
                {filterCount}
              </span>
            ) : null}
          </button>
        ) : null}
      </div>
    );
  },
);
SearchBar.displayName = "SearchBar";

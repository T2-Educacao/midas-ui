"use client";

import { CaretDown, Check, X } from "@phosphor-icons/react/ssr";
import { Command as CommandPrimitive, useCommandState } from "cmdk";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  group?: string;
  keywords?: string[];
}

interface ComboboxBaseProps {
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: React.ReactNode;
  trigger?: "input" | "button";
  startAddon?: React.ReactNode;
  clearable?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  name?: string;
  className?: string;
  contentClassName?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
}

export interface ComboboxSingleProps extends ComboboxBaseProps {
  multiple?: false;
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
}

export interface ComboboxMultipleProps extends ComboboxBaseProps {
  multiple: true;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps;

const normalize = (value: string | string[] | null | undefined) =>
  value == null ? [] : Array.isArray(value) ? value : [value];

const matches = (option: ComboboxOption, search: string) => {
  const term = search.trim().toLocaleLowerCase("pt-BR");
  if (!term) return true;
  return [option.label, option.value, option.description, ...(option.keywords ?? [])]
    .filter(Boolean)
    .some((text) => (text as string).toLocaleLowerCase("pt-BR").includes(term));
};

const fieldClasses = [
  "group/combobox relative flex min-h-8 w-full min-w-0 items-center rounded-lg border border-input bg-transparent text-sm outline-none",
  "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none dark:bg-input/30",
  "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
  "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-3 has-[[aria-invalid=true]]:ring-destructive/20",
  "has-disabled:pointer-events-none has-disabled:bg-input/50 has-disabled:opacity-50",
];

const addonClasses =
  "flex shrink-0 items-center text-muted-foreground [&_svg:not([class*='size-'])]:size-4";

export function Combobox(props: ComboboxProps) {
  const {
    options,
    placeholder = "Selecione",
    searchPlaceholder = "Buscar",
    emptyMessage = "Nenhum resultado encontrado.",
    trigger = "input",
    startAddon,
    clearable = false,
    disabled = false,
    invalid = false,
    id,
    name,
    className,
    contentClassName,
    multiple = false,
  } = props;

  const [internal, setInternal] = React.useState<string[]>(() => normalize(props.defaultValue));
  const selected = props.value !== undefined ? normalize(props.value) : internal;
  const [openState, setOpenState] = React.useState(false);
  const open = props.open ?? openState;
  const [search, setSearch] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const contentId = React.useId();

  const byValue = React.useMemo(() => new Map(options.map((o) => [o.value, o])), [options]);
  const selectedLabel = !multiple && selected[0] ? (byValue.get(selected[0])?.label ?? "") : "";

  const setOpen = (next: boolean) => {
    if (disabled) return;
    if (props.open === undefined) setOpenState(next);
    props.onOpenChange?.(next);
    if (!next) {
      setSearch("");
      setTyping(false);
    }
  };

  const commit = (next: string[]) => {
    if (props.value === undefined) setInternal(next);
    if (props.multiple) props.onValueChange?.(next);
    else (props as ComboboxSingleProps).onValueChange?.(next[0] ?? null);
  };

  const select = (value: string) => {
    if (multiple) {
      commit(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);
      setSearch("");
      setTyping(false);
      inputRef.current?.focus();
      return;
    }
    commit([value]);
    setOpen(false);
  };

  const remove = (value: string) => commit(selected.filter((v) => v !== value));
  const clear = () => {
    commit([]);
    setSearch("");
    inputRef.current?.focus();
  };

  const filtered = options.filter((option) => matches(option, typing ? search : ""));
  const groups = filtered.reduce<Map<string, ComboboxOption[]>>((acc, option) => {
    const key = option.group ?? "";
    acc.set(key, [...(acc.get(key) ?? []), option]);
    return acc;
  }, new Map());

  const showClear = clearable && selected.length > 0 && !disabled;

  const list = (
    <CommandPrimitive.List
      data-slot="combobox-list"
      className="max-h-72 scroll-py-1 overflow-y-auto overflow-x-hidden"
    >
      {filtered.length === 0 && (
        <div data-slot="combobox-empty" className="py-6 text-center text-sm text-muted-foreground">
          {emptyMessage}
        </div>
      )}
      {[...groups.entries()].map(([group, items], index) => (
        <React.Fragment key={group || "sem-grupo"}>
          {index > 0 && group && (
            <CommandPrimitive.Separator className="-mx-1 my-1 h-px bg-border" />
          )}
          <CommandPrimitive.Group
            heading={group || undefined}
            className="**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-muted-foreground"
          >
            {items.map((option) => (
              <ComboboxItem
                key={option.value}
                option={option}
                checked={selected.includes(option.value)}
                onSelect={() => select(option.value)}
              />
            ))}
          </CommandPrimitive.Group>
        </React.Fragment>
      ))}
    </CommandPrimitive.List>
  );

  const content = (children: React.ReactNode, autoFocus: boolean) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        id={contentId}
        data-slot="combobox-content"
        align="start"
        sideOffset={4}
        onOpenAutoFocus={(event) => {
          if (!autoFocus) event.preventDefault();
        }}
        onCloseAutoFocus={(event) => event.preventDefault()}
        onInteractOutside={(event) => {
          if (anchorRef.current?.contains(event.target as Node)) event.preventDefault();
        }}
        className={cn(
          "z-50 w-(--radix-popover-trigger-width) min-w-48 overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
          "origin-(--radix-popover-content-transform-origin) animate-midas-in motion-reduce:animate-none",
          contentClassName,
        )}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );

  if (trigger === "button") {
    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <div ref={anchorRef} className={cn("w-full", className)}>
          <PopoverPrimitive.Trigger asChild disabled={disabled}>
            <button
              type="button"
              id={id}
              role="combobox"
              aria-expanded={open}
              aria-invalid={invalid || undefined}
              aria-label={props["aria-label"]}
              aria-describedby={props["aria-describedby"]}
              data-slot="combobox-trigger"
              className={cn(
                fieldClasses,
                "h-8 cursor-default gap-2 px-2 text-start focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              )}
            >
              {startAddon && <span className={addonClasses}>{startAddon}</span>}
              <span className={cn("flex-1 truncate", !selected.length && "text-muted-foreground")}>
                {multiple
                  ? selected.length
                    ? selected.map((v) => byValue.get(v)?.label ?? v).join(", ")
                    : placeholder
                  : selectedLabel || placeholder}
              </span>
              <CaretDown className="size-4 shrink-0 text-muted-foreground" />
            </button>
          </PopoverPrimitive.Trigger>
          {name && <input type="hidden" name={name} value={selected.join(",")} />}
        </div>
        {content(
          <CommandPrimitive shouldFilter={false} loop className="flex flex-col gap-1">
            <CommandPrimitive.Input
              value={search}
              onValueChange={(value) => {
                setSearch(value);
                setTyping(true);
              }}
              placeholder={searchPlaceholder}
              data-slot="combobox-search"
              className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
            />
            {list}
          </CommandPrimitive>,
          true,
        )}
      </PopoverPrimitive.Root>
    );
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <CommandPrimitive shouldFilter={false} loop className={cn("w-full", className)}>
        <PopoverPrimitive.Anchor asChild>
          <div
            ref={anchorRef}
            data-slot="combobox"
            className={cn(fieldClasses, multiple && "flex-wrap gap-1 p-1")}
          >
            {startAddon && <span className={cn(addonClasses, "ps-2")}>{startAddon}</span>}
            {multiple &&
              selected.map((value) => (
                <ComboboxChip
                  key={value}
                  label={byValue.get(value)?.label ?? value}
                  disabled={disabled}
                  onRemove={() => remove(value)}
                />
              ))}
            <ComboboxInputElement
              ref={inputRef}
              id={id}
              popupId={open ? contentId : undefined}
              aria-labelledby={props["aria-labelledby"]}
              disabled={disabled}
              aria-invalid={invalid || undefined}
              aria-label={props["aria-label"]}
              aria-describedby={props["aria-describedby"]}
              aria-expanded={open}
              data-slot="combobox-input"
              placeholder={multiple && selected.length ? "" : placeholder}
              value={typing || multiple ? search : selectedLabel}
              onChange={(event) => {
                setSearch(event.target.value);
                setTyping(true);
                if (!open) setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onClick={() => setOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setOpen(false);
                if (event.key === "ArrowDown" && !open) setOpen(true);
                if (multiple && event.key === "Backspace" && !search && selected.length) {
                  remove(selected[selected.length - 1] as string);
                }
              }}
              className={cn(
                "h-full min-w-16 flex-1 bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
                multiple ? "h-6 px-1.5 py-0" : "px-2",
              )}
            />
            {name && <input type="hidden" name={name} value={selected.join(",")} />}
            {showClear ? (
              <button
                type="button"
                aria-label="Limpar seleção"
                onClick={clear}
                className={cn(
                  addonClasses,
                  "rounded-md text-foreground hover:text-muted-foreground",
                  multiple ? "px-1.5" : "pe-2",
                )}
              >
                <X />
              </button>
            ) : (
              <span aria-hidden className={cn(addonClasses, multiple ? "px-1.5" : "pe-2")}>
                <CaretDown />
              </span>
            )}
          </div>
        </PopoverPrimitive.Anchor>
        {content(list, false)}
      </CommandPrimitive>
    </PopoverPrimitive.Root>
  );
}

const ComboboxInputElement = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { popupId?: string }
>(({ popupId, "aria-expanded": expanded, ...props }, ref) => {
  const activeId = useCommandState(
    (state) => (state as { selectedItemId?: string }).selectedItemId,
  );
  return (
    <input
      ref={ref}
      type="text"
      role="combobox"
      aria-expanded={expanded ?? false}
      autoComplete="off"
      aria-autocomplete="list"
      aria-controls={popupId}
      aria-activedescendant={popupId ? activeId : undefined}
      {...props}
    />
  );
});
ComboboxInputElement.displayName = "ComboboxInputElement";

function ComboboxItem({
  option,
  checked,
  onSelect,
}: {
  option: ComboboxOption;
  checked: boolean;
  onSelect: () => void;
}) {
  return (
    <CommandPrimitive.Item
      value={option.value}
      disabled={option.disabled}
      onSelect={onSelect}
      data-slot="combobox-item"
      data-checked={checked || undefined}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-md py-1 pe-8 ps-1.5 text-sm outline-none",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      )}
    >
      {option.icon}
      <span className="flex min-w-0 flex-col">
        <span className={cn("truncate", option.description && "font-medium")}>{option.label}</span>
        {option.description && (
          <span className="truncate text-xs text-muted-foreground">{option.description}</span>
        )}
      </span>
      {checked && <Check aria-hidden className="absolute end-2" />}
    </CommandPrimitive.Item>
  );
}

export function ComboboxChip({
  label,
  disabled,
  onRemove,
}: {
  label: string;
  disabled?: boolean;
  onRemove: () => void;
}) {
  return (
    <span
      data-slot="combobox-chip"
      className="flex h-5.25 items-center gap-1 rounded-sm bg-muted ps-1.5 text-xs font-medium text-foreground"
    >
      {label}
      <button
        type="button"
        disabled={disabled}
        aria-label={`Remover ${label}`}
        onClick={onRemove}
        className="flex h-full items-center rounded-sm px-1 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none"
      >
        <X className="size-3" />
      </button>
    </span>
  );
}

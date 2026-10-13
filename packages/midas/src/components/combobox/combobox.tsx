"use client";

import { IconCheck, IconChevronDown, IconX } from "@tabler/icons-react";
import { Command as CommandPrimitive, useCommandState } from "cmdk";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { type FieldControlVariantProps, fieldControlVariants } from "../../lib/field-styles";

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
  showSelectedDescription?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  size?: FieldControlVariantProps["size"];
  appearance?: FieldControlVariantProps["appearance"];
  tone?: FieldControlVariantProps["tone"];
  shape?: FieldControlVariantProps["shape"];
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

const fold = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("pt-BR");

const matches = (option: ComboboxOption, search: string) => {
  const term = fold(search.trim());
  if (!term) return true;
  return [option.label, option.value, option.description, ...(option.keywords ?? [])]
    .filter(Boolean)
    .some((text) => fold(text as string).includes(term));
};

const heightClasses = {
  sm: "min-h-control-lg",
  md: "min-h-control-xl",
  lg: "min-h-control-2xl",
};

function fieldClasses({
  size = "md",
  appearance,
  tone,
  shape,
}: Pick<FieldControlVariantProps, "size" | "appearance" | "tone" | "shape">) {
  return cn(
    fieldControlVariants({ size, appearance, tone, shape }),
    "group/combobox relative flex h-auto w-full items-center",
    heightClasses[size ?? "md"],
    tone === "neutral" ? "focus-within:focus-ring-neutral" : "focus-within:focus-ring",
    "has-[[aria-invalid=true]]:border-status-danger-border has-[[aria-invalid=true]]:bg-status-danger-subtle",
    "has-disabled:pointer-events-none has-disabled:border-disabled-border has-disabled:bg-disabled-bg has-disabled:text-content-disabled has-disabled:shadow-none",
  );
}

const addonClasses =
  "flex shrink-0 items-center text-content-secondary [&_svg:not([class*='size-'])]:size-icon-md";

export function Combobox(props: ComboboxProps) {
  const {
    options,
    placeholder = "Selecione",
    searchPlaceholder = "Buscar",
    emptyMessage = "Nenhum resultado encontrado.",
    trigger = "input",
    startAddon,
    clearable = false,
    showSelectedDescription = false,
    disabled = false,
    invalid = false,
    size,
    appearance,
    tone,
    shape,
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
  const selectedDescription =
    showSelectedDescription && !multiple && selected[0]
      ? byValue.get(selected[0])?.description
      : undefined;
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
        <div
          data-slot="combobox-empty"
          className="py-6 text-center text-body-sm text-content-secondary"
        >
          {emptyMessage}
        </div>
      )}
      {[...groups.entries()].map(([group, items], index) => (
        <React.Fragment key={group || "sem-grupo"}>
          {index > 0 && group && (
            <CommandPrimitive.Separator className="-mx-1.5 my-1 h-px bg-border-subtle" />
          )}
          <CommandPrimitive.Group
            heading={group || undefined}
            className="**:[[cmdk-group-heading]]:px-2.5 **:[[cmdk-group-heading]]:pt-2 **:[[cmdk-group-heading]]:pb-1 **:[[cmdk-group-heading]]:text-mono-overline **:[[cmdk-group-heading]]:text-content-secondary"
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
          "z-(--midas-z-popup) w-(--radix-popover-trigger-width) min-w-48 overflow-hidden rounded-overlay border border-border-subtle bg-overlay-surface p-1.5 text-content-primary shadow-elevation-overlay outline-none",
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
                fieldClasses({ size, appearance, tone, shape }),
                "cursor-default gap-2 text-start",
                tone === "neutral"
                  ? "focus-visible:focus-ring-neutral"
                  : "focus-visible:focus-ring",
              )}
            >
              {startAddon && <span className={addonClasses}>{startAddon}</span>}
              <span className={cn("flex-1 truncate", !selected.length && "text-content-secondary")}>
                {multiple
                  ? selected.length
                    ? selected.map((v) => byValue.get(v)?.label ?? v).join(", ")
                    : placeholder
                  : selectedLabel || placeholder}
                {selectedDescription && (
                  <span
                    data-slot="combobox-trigger-description"
                    className="ms-2 text-content-secondary"
                  >
                    {selectedDescription}
                  </span>
                )}
              </span>
              <IconChevronDown className="size-icon-md shrink-0 text-content-secondary" />
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
              className={cn(
                fieldControlVariants({ size: "sm", appearance: "outline", tone, shape: "rounded" }),
                "shadow-none",
              )}
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
            className={cn(
              fieldClasses({ size, appearance, tone, shape }),
              multiple && "flex-wrap gap-1 py-1.5",
            )}
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
                "h-full min-w-16 flex-1 bg-transparent py-1.5 text-[length:inherit] text-content-primary outline-none placeholder:text-content-secondary disabled:cursor-not-allowed",
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
                  "rounded-control text-content-primary hover:text-content-secondary",
                  multiple ? "px-1.5" : "pe-2",
                )}
              >
                <IconX className="size-icon-md" />
              </button>
            ) : (
              <span aria-hidden className={cn(addonClasses, multiple ? "px-1.5" : "pe-2")}>
                <IconChevronDown className="size-icon-md" />
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
        "relative flex cursor-default select-none items-center gap-2 rounded-lg py-2 pe-9 ps-2.5 text-body-sm text-content-primary outline-none",
        "data-[selected=true]:bg-overlay-hover",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:text-content-disabled",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-md",
      )}
    >
      {option.icon}
      <span className="flex min-w-0 flex-col">
        <span className={cn("truncate", option.description && "text-label-md")}>
          {option.label}
        </span>
        {option.description && (
          <span className="truncate text-caption text-content-secondary">{option.description}</span>
        )}
      </span>
      {checked && <IconCheck aria-hidden className="absolute end-2.5 text-selection-content" />}
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
      className="flex h-6 items-center gap-1 rounded-pill bg-surface-muted ps-2.5 text-label-sm text-content-primary"
    >
      {label}
      <button
        type="button"
        disabled={disabled}
        aria-label={`Remover ${label}`}
        onClick={onRemove}
        className="flex h-full items-center rounded-pill pe-2 ps-1 text-content-secondary hover:text-content-primary focus-visible:focus-ring disabled:pointer-events-none"
      >
        <IconX className="size-icon-xs" />
      </button>
    </span>
  );
}

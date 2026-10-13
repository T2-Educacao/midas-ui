"use client";

import {
  IconAlertCircle,
  IconCircleCheck,
  IconFileText,
  IconPhoto,
  IconX,
} from "@tabler/icons-react";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Progress } from "../progress/progress";

export type FileRejection = {
  file: File;
  reason: "type" | "size";
};

export type FileUploadProps = Omit<React.HTMLAttributes<HTMLLabelElement>, "onChange"> & {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  disabled?: boolean;
  invalid?: boolean;
  appearance?: "outline" | "filled" | "glass";
  tone?: "brand" | "neutral";
  shape?: "rounded" | "pill";
  layout?: "dropzone" | "inline";
  name?: string;
  onFilesChange?: (files: File[]) => void;
  onReject?: (rejections: FileRejection[]) => void;
};

function matchesAccept(file: File, accept: string | undefined) {
  if (!accept) return true;
  const rules = accept
    .split(",")
    .map((rule) => rule.trim().toLowerCase())
    .filter(Boolean);
  if (rules.length === 0) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return rules.some((rule) => {
    if (rule.startsWith(".")) return name.endsWith(rule);
    if (rule.endsWith("/*")) return type.startsWith(rule.slice(0, -1));
    return type === rule;
  });
}

export const FileUpload = React.forwardRef<HTMLLabelElement, FileUploadProps>(
  (
    {
      className,
      children,
      accept,
      multiple,
      maxSize,
      disabled,
      invalid,
      appearance = "outline",
      tone = "brand",
      shape = "rounded",
      layout = "dropzone",
      name,
      onFilesChange,
      onReject,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
      ...props
    },
    ref,
  ) => {
    const [dragging, setDragging] = React.useState(false);

    const handleFiles = (list: FileList | File[] | null) => {
      if (!list) return;
      const incoming = Array.from(list);
      const candidates = multiple ? incoming : incoming.slice(0, 1);
      const accepted: File[] = [];
      const rejections: FileRejection[] = [];
      for (const file of candidates) {
        if (!matchesAccept(file, accept)) {
          rejections.push({ file, reason: "type" });
        } else if (maxSize !== undefined && file.size > maxSize) {
          rejections.push({ file, reason: "size" });
        } else {
          accepted.push(file);
        }
      }
      if (rejections.length > 0) onReject?.(rejections);
      if (accepted.length > 0) onFilesChange?.(accepted);
    };

    return (
      <label
        ref={ref}
        data-slot="file-upload"
        data-dragging={dragging ? "true" : undefined}
        data-invalid={invalid ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        className={cn(
          "relative flex w-full cursor-pointer border text-center text-body-sm text-content-secondary outline-none",
          "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
          layout === "dropzone"
            ? cn(
                "flex-col items-center justify-center gap-2.5 border-dashed px-6 py-7",
                shape === "pill" ? "rounded-[28px]" : "rounded-2xl",
              )
            : cn(
                "items-center gap-2.5 px-3.5 py-2 text-start",
                shape === "pill" ? "rounded-pill" : "rounded-overlay",
              ),
          appearance === "outline" &&
            "border-border-subtle bg-surface-canvas hover:border-border-default hover:bg-state-hover",
          appearance === "filled" &&
            "border-transparent bg-surface-muted hover:border-border-default",
          appearance === "glass" &&
            "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-md hover:border-border-default",
          tone === "neutral"
            ? "has-[:focus-visible]:focus-ring-neutral data-[dragging=true]:border-border-strong data-[dragging=true]:bg-surface-muted"
            : "has-[:focus-visible]:focus-ring data-[dragging=true]:border-selection-border data-[dragging=true]:bg-selection-bg",
          "data-[invalid=true]:border-status-danger-border",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-disabled-border data-[disabled=true]:bg-disabled-bg data-[disabled=true]:text-content-disabled data-[disabled=true]:hover:bg-disabled-bg",
          className,
        )}
        onDragEnter={(event) => {
          onDragEnter?.(event);
          if (disabled) return;
          event.preventDefault();
          setDragging(true);
        }}
        onDragOver={(event) => {
          onDragOver?.(event);
          if (disabled) return;
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={(event) => {
          onDragLeave?.(event);
          if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
          setDragging(false);
        }}
        onDrop={(event) => {
          onDrop?.(event);
          if (disabled) return;
          event.preventDefault();
          setDragging(false);
          handleFiles(event.dataTransfer.files);
        }}
        {...props}
      >
        <input
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className="sr-only"
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
        />
        {children}
      </label>
    );
  },
);
FileUpload.displayName = "FileUpload";

export type FileItemState = "uploading" | "done" | "error";

export interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  meta?: React.ReactNode;
  type?: "document" | "image";
  state?: FileItemState;
  progress?: number;
  onRemove?: () => void;
  removeLabel?: string;
  thumbnail?: React.ReactNode;
}

export const FileItem = React.forwardRef<HTMLDivElement, FileItemProps>(
  (
    {
      className,
      name,
      meta,
      type = "document",
      state = "done",
      progress = 0,
      onRemove,
      removeLabel,
      thumbnail,
      ...props
    },
    ref,
  ) => {
    const TypeIcon = type === "image" ? IconPhoto : IconFileText;
    const StatusIcon = state === "error" ? IconAlertCircle : IconCircleCheck;
    return (
      <div
        ref={ref}
        data-slot="file-item"
        data-state={state}
        className={cn(
          "flex items-start gap-3 rounded-xl border p-3 shadow-elevation-control",
          state === "error"
            ? "border-status-danger-border bg-status-danger-subtle"
            : "border-border-subtle bg-surface-canvas",
          className,
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-overlay border border-border-subtle bg-surface-muted text-content-secondary"
        >
          {thumbnail ?? <TypeIcon className="size-icon-md" />}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="truncate text-label-md text-content-primary">{name}</span>
          {meta ? (
            <span
              className={cn(
                "flex items-center gap-1 text-body-sm",
                state === "error" ? "text-status-danger-content" : "text-content-secondary",
              )}
            >
              {state !== "uploading" ? (
                <StatusIcon
                  aria-hidden="true"
                  className={cn(
                    "size-icon-sm shrink-0",
                    state === "error"
                      ? "text-status-danger-content"
                      : "text-status-success-content",
                  )}
                />
              ) : null}
              {meta}
            </span>
          ) : null}
          {state === "uploading" ? (
            <Progress value={progress} size="sm" aria-label={`Enviando ${name}`} />
          ) : null}
        </div>
        {onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            aria-label={removeLabel ?? `Remover ${name}`}
            className="flex size-7 shrink-0 items-center justify-center rounded-pill text-content-secondary outline-none hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring"
          >
            <IconX aria-hidden="true" className="size-icon-sm" />
          </button>
        ) : null}
      </div>
    );
  },
);
FileItem.displayName = "FileItem";

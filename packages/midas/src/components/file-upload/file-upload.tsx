"use client";

import * as React from "react";
import { cn } from "../../lib/cn";

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
          "relative flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input bg-transparent px-6 py-8 text-center text-sm text-muted-foreground",
          "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
          "hover:bg-accent/50",
          "has-[:focus-visible]:border-ring has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
          "data-[dragging=true]:border-ring data-[dragging=true]:bg-accent",
          "data-[invalid=true]:border-destructive data-[invalid=true]:ring-3 data-[invalid=true]:ring-destructive/20",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:bg-transparent",
          "dark:bg-input/30",
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

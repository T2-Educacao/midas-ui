"use client";

import {
  IconAlertCircle,
  IconAlertTriangle,
  IconBell,
  IconCamera,
  IconCheck,
  IconCircleCheck,
  IconClockExclamation,
  IconConfetti,
  IconCreditCardOff,
  IconInfoCircle,
  IconLockOpen,
  IconMapPin,
  IconPhoto,
  IconReceipt,
  IconSend,
  IconWifiOff,
  IconX,
} from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import type { OverlayAppearance, OverlayTone } from "../../lib/overlay-styles";
import { Button } from "../button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  type DialogContentProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog/dialog";
import { Progress } from "../progress/progress";

export type ModalStatusTone = "success" | "warning" | "danger" | "info" | "brand";

export const modalIconVariants = cva(
  "flex size-14 shrink-0 items-center justify-center rounded-pill border [&_svg]:size-icon-lg",
  {
    variants: {
      status: {
        success:
          "border-status-success-border bg-status-success-subtle text-status-success-content",
        warning:
          "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
        danger: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
        info: "border-status-info-border bg-status-info-subtle text-status-info-content",
        brand: "border-border-subtle bg-selection-bg text-brand-content",
      },
    },
    defaultVariants: { status: "brand" },
  },
);

export const modalStatusGradientVariants = cva(
  "pointer-events-none absolute inset-y-0 start-0 w-32 bg-linear-to-r to-transparent rtl:bg-linear-to-l",
  {
    variants: {
      status: {
        success: "from-status-success-subtle",
        warning: "from-status-warning-subtle",
        danger: "from-status-danger-subtle",
        info: "from-status-info-subtle",
        brand: "from-selection-bg",
      },
    },
    defaultVariants: { status: "brand" },
  },
);

export interface ModalAction {
  label: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  keepOpen?: boolean;
}

export interface ModalBaseProps
  extends Omit<DialogContentProps, "title" | "children" | "appearance"> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  appearance?: OverlayAppearance;
  tone?: OverlayTone;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
}

type ShellProps = ModalBaseProps & {
  status?: ModalStatusTone;
  icon?: React.ReactNode;
  destructive?: boolean;
  media?: React.ReactNode;
  footer?: React.ReactNode;
  ghostSecondary?: boolean;
};

function ActionButton({
  action,
  variant,
  primary,
}: {
  action: ModalAction;
  variant: React.ComponentProps<typeof Button>["variant"];
  primary?: boolean;
}) {
  const button = (
    <Button
      type="button"
      variant={variant}
      size="lg"
      disabled={action.disabled}
      onClick={action.onClick}
      data-slot={primary ? "modal-primary-action" : "modal-secondary-action"}
      className="max-sm:h-control-xl max-sm:w-full"
    >
      {action.icon}
      {action.label}
    </Button>
  );
  return action.keepOpen ? button : <DialogClose asChild>{button}</DialogClose>;
}

function ModalActions({
  primary,
  secondary,
  primaryVariant,
  secondaryVariant = "secondary",
}: {
  primary?: ModalAction;
  secondary?: ModalAction;
  primaryVariant: React.ComponentProps<typeof Button>["variant"];
  secondaryVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  if (!primary && !secondary) return null;
  return (
    <DialogFooter>
      {secondary && <ActionButton action={secondary} variant={secondaryVariant} />}
      {primary && <ActionButton primary action={primary} variant={primaryVariant} />}
    </DialogFooter>
  );
}

const ModalShell = React.forwardRef<HTMLDivElement, ShellProps>(
  (
    {
      open,
      defaultOpen,
      onOpenChange,
      trigger,
      appearance,
      tone = "brand",
      title,
      description,
      children,
      primaryAction,
      secondaryAction,
      status,
      icon,
      destructive,
      media,
      footer,
      ghostSecondary,
      className,
      ...props
    },
    ref,
  ) => {
    const primaryVariant = destructive ? "destructive" : tone === "neutral" ? "default" : "accent";
    return (
      <Dialog open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent
          ref={ref}
          appearance={appearance}
          data-tone={tone}
          showCloseButton={!media}
          className={cn(
            media && "gap-0 overflow-hidden p-0 max-sm:px-0 max-sm:pt-0 max-sm:pb-0",
            className,
          )}
          {...props}
        >
          {media && (
            <div
              data-slot="modal-media"
              className="relative flex h-55 items-center justify-center overflow-hidden bg-surface-muted max-sm:h-50"
            >
              {media}
              <DialogClose className="material-glass absolute end-4 top-4 flex size-control-md items-center justify-center rounded-pill text-content-primary outline-none focus-visible:focus-ring">
                <IconX aria-hidden className="size-icon-md" />
                <span className="sr-only">Fechar</span>
              </DialogClose>
            </div>
          )}
          <div className={cn("grid gap-5", media && "p-6 max-sm:px-5 max-sm:pb-8")}>
            {icon && (
              <span data-slot="modal-icon" className={modalIconVariants({ status })}>
                {icon}
              </span>
            )}
            <DialogHeader className={cn(media && "pe-0")}>
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
            {children}
            {footer}
            <ModalActions
              primary={primaryAction}
              secondary={secondaryAction}
              primaryVariant={primaryVariant}
              secondaryVariant={ghostSecondary ? "ghost" : "secondary"}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);
ModalShell.displayName = "ModalShell";

const basicIcons = {
  confirm: { icon: <IconAlertTriangle />, status: "warning" },
  success: { icon: <IconCircleCheck />, status: "success" },
  error: { icon: <IconAlertCircle />, status: "danger" },
  info: { icon: <IconInfoCircle />, status: "info" },
} as const;

export interface ModalProps extends ModalBaseProps {
  type?: "basic" | "confirm" | "success" | "error" | "info" | "promo";
  image?: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ type = "basic", image, ...props }, ref) => {
    const preset = type in basicIcons ? basicIcons[type as keyof typeof basicIcons] : undefined;
    return (
      <ModalShell
        ref={ref}
        data-slot="modal"
        data-type={type}
        size={type === "basic" ? "md" : "sm"}
        icon={preset?.icon}
        status={preset?.status}
        destructive={type === "confirm" || type === "error"}
        media={type === "promo" ? (image ?? <span aria-hidden />) : undefined}
        ghostSecondary={type === "promo"}
        {...props}
      />
    );
  },
);
Modal.displayName = "Modal";

const successIcons = {
  check: <IconCheck />,
  confetti: <IconConfetti />,
  receipt: <IconReceipt />,
  unlock: <IconLockOpen />,
  sent: <IconSend />,
};

export interface ModalDetail {
  label: React.ReactNode;
  value: React.ReactNode;
}

function ModalDetails({ items }: { items: ModalDetail[] }) {
  return (
    <dl
      data-slot="modal-details"
      className="grid gap-3 rounded-container border border-border-subtle bg-surface-muted p-4"
    >
      {items.map((item) => (
        <div key={String(item.label)} className="flex items-baseline justify-between gap-4">
          <dt className="text-body-sm text-content-secondary">{item.label}</dt>
          <dd className="text-end text-label-md text-content-primary">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export interface ModalSuccessProps extends ModalBaseProps {
  type?: "check" | "confetti" | "receipt" | "unlock" | "sent";
  details?: ModalDetail[];
}

export const ModalSuccess = React.forwardRef<HTMLDivElement, ModalSuccessProps>(
  ({ type = "check", details, children, ...props }, ref) => (
    <ModalShell
      ref={ref}
      data-slot="modal-success"
      data-type={type}
      size="sm"
      status="success"
      icon={successIcons[type]}
      {...props}
    >
      {details && details.length > 0 && <ModalDetails items={details} />}
      {children}
    </ModalShell>
  ),
);
ModalSuccess.displayName = "ModalSuccess";

const errorIcons = {
  error: <IconAlertCircle />,
  payment: <IconCreditCardOff />,
  warning: <IconAlertTriangle />,
  offline: <IconWifiOff />,
  expired: <IconClockExclamation />,
};

export interface ModalErrorProps extends ModalBaseProps {
  type?: "error" | "payment" | "warning" | "offline" | "expired";
  errorDetails?: React.ReactNode;
}

export const ModalError = React.forwardRef<HTMLDivElement, ModalErrorProps>(
  ({ type = "error", errorDetails, children, ...props }, ref) => (
    <ModalShell
      ref={ref}
      data-slot="modal-error"
      data-type={type}
      size="sm"
      status={type === "warning" || type === "expired" ? "warning" : "danger"}
      icon={errorIcons[type]}
      destructive={false}
      {...props}
    >
      {errorDetails && (
        <div
          data-slot="modal-error-details"
          className="grid gap-1 rounded-container border border-border-subtle bg-surface-muted p-3"
        >
          <span className="text-mono-overline text-content-secondary">Detalhes do erro</span>
          <span className="text-mono-sm text-content-primary">{errorDetails}</span>
        </div>
      )}
      {children}
    </ModalShell>
  ),
);
ModalError.displayName = "ModalError";

const statusMeta = {
  progress: { tone: "brand", icon: null },
  success: { tone: "success", icon: <IconCircleCheck /> },
  error: { tone: "danger", icon: <IconAlertCircle /> },
  warning: { tone: "warning", icon: <IconAlertTriangle /> },
} as const;

export interface ModalStatusProps
  extends Omit<ModalBaseProps, "size" | "device" | "children" | "showCloseButton"> {
  status?: "progress" | "success" | "error" | "warning";
  progress?: number;
}

export const ModalStatus = React.forwardRef<HTMLDivElement, ModalStatusProps>(
  (
    {
      status = "progress",
      progress,
      title,
      description,
      primaryAction,
      secondaryAction,
      tone = "brand",
      appearance,
      className,
      open,
      defaultOpen,
      onOpenChange,
      trigger,
      ...props
    },
    ref,
  ) => {
    const meta = statusMeta[status];
    return (
      <Dialog open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent
          ref={ref}
          data-slot="modal-status"
          data-status={status}
          appearance={appearance}
          showCloseButton={false}
          size="md"
          device="desktop"
          className={cn("relative gap-4 overflow-hidden", className)}
          {...props}
        >
          <span aria-hidden className={modalStatusGradientVariants({ status: meta.tone })} />
          <div className="relative flex items-start gap-4">
            <span className={modalIconVariants({ status: meta.tone })}>
              {meta.icon ?? <span className="text-label-md tabular-nums">{progress ?? 0}%</span>}
            </span>
            <DialogHeader className="min-w-0 flex-1 pe-0">
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          </div>
          {status === "progress" && progress !== undefined && (
            <Progress value={progress} aria-label="Progresso" />
          )}
          <ModalActions
            primary={primaryAction}
            secondary={secondaryAction}
            primaryVariant={tone === "neutral" ? "default" : "accent"}
          />
        </DialogContent>
      </Dialog>
    );
  },
);
ModalStatus.displayName = "ModalStatus";

const permissionIcons = {
  camera: <IconCamera />,
  notifications: <IconBell />,
  gallery: <IconPhoto />,
  location: <IconMapPin />,
};

export interface PermissionRequestProps extends ModalBaseProps {
  type?: "camera" | "notifications" | "gallery" | "location";
  items?: React.ReactNode[];
  footnote?: React.ReactNode;
}

export const PermissionRequest = React.forwardRef<HTMLDivElement, PermissionRequestProps>(
  ({ type = "camera", items, footnote, children, ...props }, ref) => (
    <ModalShell
      ref={ref}
      data-slot="permission-request"
      data-type={type}
      size="sm"
      icon={permissionIcons[type]}
      status="brand"
      ghostSecondary
      footer={
        footnote ? (
          <p
            data-slot="permission-request-footnote"
            className="text-center text-caption text-content-secondary"
          >
            {footnote}
          </p>
        ) : undefined
      }
      {...props}
    >
      {items && items.length > 0 && (
        <ul data-slot="permission-request-items" className="grid gap-2.5">
          {items.map((item) => (
            <li
              key={String(item)}
              className="flex items-center gap-2.5 text-body-sm text-content-primary"
            >
              <IconCheck aria-hidden className="size-icon-sm shrink-0 text-brand-content" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </ModalShell>
  ),
);
PermissionRequest.displayName = "PermissionRequest";

export type ModalShareFormat = "stories" | "feed" | "linkedin";

const shareFormats: { value: ModalShareFormat; label: string; size: string; ratio: string }[] = [
  { value: "stories", label: "Instagram Stories", size: "1080×1920", ratio: "aspect-[9/16] w-32" },
  { value: "feed", label: "Instagram Feed", size: "1080×1350", ratio: "aspect-[4/5] w-40" },
  { value: "linkedin", label: "LinkedIn", size: "1200×627", ratio: "aspect-[1.91/1] w-56" },
];

export interface ModalShareProps extends Omit<ModalBaseProps, "children"> {
  art?: React.ReactNode;
  format?: ModalShareFormat;
  defaultFormat?: ModalShareFormat;
  onFormatChange?: (format: ModalShareFormat) => void;
  caption?: React.ReactNode;
}

export const ModalShare = React.forwardRef<HTMLDivElement, ModalShareProps>(
  ({ art, format, defaultFormat = "stories", onFormatChange, caption, ...props }, ref) => {
    const [internal, setInternal] = React.useState<ModalShareFormat>(defaultFormat);
    const current = format ?? internal;
    const active = shareFormats.find((item) => item.value === current) ?? shareFormats[0];
    const labelId = React.useId();
    return (
      <ModalShell ref={ref} data-slot="modal-share" size="lg" {...props}>
        <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
          <div
            data-slot="modal-share-art"
            className={cn(
              "flex items-center justify-center justify-self-center overflow-hidden rounded-container border border-dashed border-border-default bg-surface-muted text-center text-mono-sm text-content-secondary",
              active?.ratio,
            )}
          >
            {art ?? (
              <span className="grid gap-1 p-2">
                <span>A arte entra aqui</span>
                <span>{active?.size}</span>
              </span>
            )}
          </div>
          <div className="grid content-start gap-4">
            <div className="grid gap-2">
              <span id={labelId} className="text-label-md text-content-primary">
                Formato
              </span>
              <div role="radiogroup" aria-labelledby={labelId} className="grid gap-2">
                {shareFormats.map((item) => {
                  const checked = item.value === current;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      role="radio"
                      aria-checked={checked}
                      data-state={checked ? "checked" : "unchecked"}
                      onClick={() => {
                        setInternal(item.value);
                        onFormatChange?.(item.value);
                      }}
                      className="flex items-center justify-between rounded-control border border-border-default bg-surface-default px-3 py-2 text-start outline-none transition-colors hover:bg-state-hover focus-visible:focus-ring data-[state=checked]:border-selection-border data-[state=checked]:bg-selection-bg motion-reduce:transition-none"
                    >
                      <span className="text-label-md text-content-primary">{item.label}</span>
                      <span className="text-mono-sm text-content-secondary">{item.size}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {caption && (
              <div className="grid gap-1.5">
                <span className="text-label-md text-content-primary">Legenda sugerida</span>
                <p className="rounded-control bg-surface-muted p-3 text-body-sm text-content-secondary">
                  {caption}
                </p>
              </div>
            )}
          </div>
        </div>
      </ModalShell>
    );
  },
);
ModalShare.displayName = "ModalShare";

import {
  IconAt,
  IconBell,
  IconCalendarEvent,
  IconDots,
  IconFlame,
  IconMessageCircle,
  IconSchool,
  IconSettings,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Badge } from "../badge/badge";

export type NotificationType = "mention" | "comment" | "course" | "exam" | "achievement" | "system";

const typeIcon: Record<NotificationType, React.ReactNode> = {
  mention: <IconAt />,
  comment: <IconMessageCircle />,
  course: <IconSchool />,
  exam: <IconCalendarEvent />,
  achievement: <IconFlame />,
  system: <IconSettings />,
};

const typeTile: Record<NotificationType, string> = {
  mention: "bg-selection-bg text-brand-content",
  comment: "bg-selection-bg text-brand-content",
  course: "bg-selection-bg text-brand-content",
  exam: "bg-status-warning-subtle text-status-warning-content",
  achievement: "bg-status-success-subtle text-status-success-content",
  system: "bg-surface-muted text-content-secondary",
};

export const notificationItemVariants = cva(
  "group/notification relative flex w-full items-start gap-2.5 rounded-xl py-3 ps-2.5 pe-3 text-start transition-[background-color] duration-150 motion-reduce:transition-none",
  {
    variants: {
      unread: {
        true: "bg-selection-bg/40",
        false: "",
      },
    },
    defaultVariants: {
      unread: false,
    },
  },
);

export interface NotificationItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof notificationItemVariants> {
  type?: NotificationType;
  leading?: React.ReactNode;
  quote?: React.ReactNode;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  thumbnail?: React.ReactNode;
  onMore?: () => void;
  moreLabel?: string;
  asChild?: boolean;
}

export const NotificationItem = React.forwardRef<HTMLDivElement, NotificationItemProps>(
  (
    {
      className,
      type = "mention",
      unread = false,
      leading,
      quote,
      meta,
      action,
      thumbnail,
      onMore,
      moreLabel = "Mais opções",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedType = (type ?? "mention") as NotificationType;
    const Comp = asChild ? Slot.Root : "div";
    const body = (
      <>
        <span aria-hidden="true" className="flex h-6 w-2 shrink-0 items-end pb-1">
          <span
            data-slot="notification-unread"
            className={cn("size-2 rounded-full bg-brand-primary", !unread && "invisible")}
          />
        </span>
        <span data-slot="notification-leading" className="relative shrink-0">
          {leading ?? (
            <span
              aria-hidden="true"
              className={cn(
                "flex size-10 items-center justify-center rounded-xl [&>svg]:size-icon-md",
                typeTile[resolvedType],
              )}
            >
              {typeIcon[resolvedType]}
            </span>
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span
            data-slot="notification-message"
            className={cn(
              "text-body-sm text-content-secondary [&_strong]:font-semibold [&_strong]:text-content-primary",
              unread && "text-content-primary",
            )}
          >
            {children}
          </span>
          {quote ? (
            <span
              data-slot="notification-quote"
              className="rounded-md bg-surface-muted px-2.5 py-1.5 text-body-sm text-content-primary"
            >
              {quote}
            </span>
          ) : null}
          {meta ? (
            <span data-slot="notification-meta" className="text-mono-sm text-content-secondary">
              {meta}
            </span>
          ) : null}
          {action ? <span className="pt-0.5">{action}</span> : null}
        </span>
        {thumbnail ? (
          <span
            data-slot="notification-thumbnail"
            className="h-10 w-14 shrink-0 overflow-hidden rounded-md bg-surface-muted [&>img]:size-full [&>img]:object-cover"
          >
            {thumbnail}
          </span>
        ) : null}
      </>
    );

    return (
      <Comp
        ref={ref}
        data-slot="notification-item"
        data-type={resolvedType}
        data-unread={unread ? "" : undefined}
        className={cn(notificationItemVariants({ unread }), "hover:bg-state-hover", className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {body}
            {onMore ? (
              <button
                type="button"
                data-slot="notification-more"
                aria-label={moreLabel}
                onClick={onMore}
                className="absolute end-2 top-2 hidden size-6 items-center justify-center rounded-xs outline-none hover:bg-state-pressed focus-visible:flex focus-visible:focus-ring group-hover/notification:flex [&>svg]:size-icon-sm"
              >
                <IconDots aria-hidden="true" />
              </button>
            ) : null}
          </>
        )}
      </Comp>
    );
  },
);
NotificationItem.displayName = "NotificationItem";

export interface NotificationBellProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number;
  open?: boolean;
  tone?: "brand" | "neutral";
}

export const NotificationBell = React.forwardRef<HTMLButtonElement, NotificationBellProps>(
  (
    { className, count = 0, open = false, tone = "brand", "aria-label": ariaLabel, ...props },
    ref,
  ) => {
    const label = ariaLabel ?? (count > 0 ? `Notificações, ${count} não lidas` : "Notificações");
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        aria-expanded={open}
        data-slot="notification-bell"
        data-state={open ? "open" : "closed"}
        data-tone={tone}
        className={cn(
          "relative inline-flex size-control-lg items-center justify-center rounded-control text-content-primary outline-none",
          "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
          "hover:bg-state-hover focus-visible:focus-ring [&>svg]:size-icon-md",
          "data-[state=open]:border data-[state=open]:border-border-default data-[state=open]:bg-surface-default data-[state=open]:shadow-elevation-control",
          className,
        )}
        {...props}
      >
        <IconBell aria-hidden="true" />
        {count > 0 ? (
          <Badge
            type="count"
            count={count}
            tone={tone === "brand" ? "brand" : "danger"}
            size="md"
            aria-hidden="true"
            className="absolute -end-0.5 -top-0.5"
          />
        ) : null}
      </button>
    );
  },
);
NotificationBell.displayName = "NotificationBell";

export const notificationCenterVariants = cva(
  "flex flex-col overflow-hidden border border-border-default bg-overlay-surface text-content-primary",
  {
    variants: {
      type: {
        dropdown: "w-105 max-w-full rounded-2xl shadow-elevation-overlay",
        drawer: "h-full w-105 max-w-full border-y-0 border-e-0 shadow-elevation-modal",
        mobile: "h-full w-full border-0",
      },
    },
    defaultVariants: {
      type: "dropdown",
    },
  },
);

export interface NotificationCenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationCenterVariants> {}

export const NotificationCenter = React.forwardRef<HTMLDivElement, NotificationCenterProps>(
  ({ className, type, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="notification-center"
      data-type={type ?? "dropdown"}
      className={cn(notificationCenterVariants({ type }), className)}
      {...props}
    />
  ),
);
NotificationCenter.displayName = "NotificationCenter";

export interface NotificationCenterHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  count?: number;
}

export const NotificationCenterHeader = React.forwardRef<
  HTMLDivElement,
  NotificationCenterHeaderProps
>(({ className, title = "Notificações", count, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="notification-center-header"
    className={cn("flex items-center gap-2 py-3.5 ps-4 pe-2", className)}
    {...props}
  >
    <h2 className="text-heading-sm">{title}</h2>
    {count ? <Badge type="count" count={count} size="md" /> : null}
    <div className="ms-auto flex items-center gap-1">
      {children ?? (
        <span aria-hidden="true" className="text-content-secondary [&>svg]:size-icon-sm">
          <IconSettings />
        </span>
      )}
    </div>
  </div>
));
NotificationCenterHeader.displayName = "NotificationCenterHeader";

export const NotificationCenterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="notification-center-content"
    className={cn("flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-1.5 pb-2", className)}
    {...props}
  />
));
NotificationCenterContent.displayName = "NotificationCenterContent";

export interface NotificationGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  label: React.ReactNode;
}

export const NotificationGroup = React.forwardRef<HTMLDivElement, NotificationGroupProps>(
  ({ className, label, children, ...props }, ref) => {
    const labelId = React.useId();
    return (
      <section
        ref={ref}
        aria-labelledby={labelId}
        data-slot="notification-group"
        className={cn("flex flex-col gap-0.5", className)}
        {...props}
      >
        <h3 id={labelId} className="px-4 pt-3 pb-1 text-mono-overline text-content-secondary">
          {label}
        </h3>
        {children}
      </section>
    );
  },
);
NotificationGroup.displayName = "NotificationGroup";

export const NotificationCenterFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="notification-center-footer"
    className={cn(
      "flex items-center justify-between gap-3 border-t border-border-default px-4 py-3 text-label-md text-content-secondary",
      className,
    )}
    {...props}
  />
));
NotificationCenterFooter.displayName = "NotificationCenterFooter";

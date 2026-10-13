import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const skeletonVariants = cva("bg-border-default", {
  variants: {
    shape: {
      line: "h-3 w-full rounded-sm",
      circle: "size-10 rounded-full",
      rect: "h-30 w-full rounded-xl",
      pill: "h-6 w-20 rounded-pill",
    },
    animation: {
      shimmer: "animate-pulse motion-reduce:animate-none",
      static: "",
    },
  },
  defaultVariants: {
    shape: "line",
    animation: "shimmer",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, shape, animation, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      data-slot="skeleton"
      data-shape={shape ?? "line"}
      className={cn(skeletonVariants({ shape, animation }), className)}
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";

export interface SkeletonPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "shimmer" | "static";
}

const surface = "rounded-container border border-border-default bg-surface-default";

const pattern = (displayName: string, slot: string, render: PatternRender) => {
  const Component = React.forwardRef<HTMLDivElement, SkeletonPatternProps>(
    ({ className, animation = "shimmer", ...props }, ref) => (
      <div
        ref={ref}
        aria-hidden="true"
        data-slot={slot}
        className={cn(render.className, className)}
        {...props}
      >
        {render.children(animation)}
      </div>
    ),
  );
  Component.displayName = displayName;
  return Component;
};

interface PatternRender {
  className: string;
  children: (animation: "shimmer" | "static") => React.ReactNode;
}

const Block = ({
  animation,
  className,
  shape = "line",
}: {
  animation: "shimmer" | "static";
  className?: string;
  shape?: "line" | "circle" | "rect" | "pill";
}) => <Skeleton animation={animation} shape={shape} className={className} />;

export const SkeletonText = pattern("SkeletonText", "skeleton-text", {
  className: cn(surface, "flex w-full max-w-sm flex-col gap-2.5 p-5"),
  children: (animation) => (
    <>
      <Block animation={animation} className="h-5 w-[45%]" />
      <Block animation={animation} />
      <Block animation={animation} className="w-[94%]" />
      <Block animation={animation} />
      <Block animation={animation} className="w-[60%]" />
    </>
  ),
});

const ListRow = ({ animation }: { animation: "shimmer" | "static" }) => (
  <div className="flex items-center gap-3">
    <Block animation={animation} shape="circle" className="shrink-0" />
    <div className="flex flex-1 flex-col gap-2">
      <Block animation={animation} />
      <Block animation={animation} className="h-2.5 w-[70%]" />
    </div>
  </div>
);

export const SkeletonListItem = pattern("SkeletonListItem", "skeleton-list-item", {
  className: cn(surface, "flex w-full max-w-sm flex-col gap-4 p-5"),
  children: (animation) => (
    <>
      <ListRow animation={animation} />
      <ListRow animation={animation} />
      <ListRow animation={animation} />
    </>
  ),
});

export const SkeletonCard = pattern("SkeletonCard", "skeleton-card", {
  className: cn(surface, "flex w-full max-w-xs flex-col gap-3 p-4"),
  children: (animation) => (
    <>
      <Block animation={animation} shape="rect" className="h-35" />
      <Block animation={animation} className="h-3.5 w-[66%]" />
      <Block animation={animation} className="h-2.5 w-[80%]" />
      <div className="flex gap-2">
        <Block animation={animation} shape="pill" className="h-5.5 w-16" />
        <Block animation={animation} shape="pill" className="h-5.5 w-20" />
      </div>
    </>
  ),
});

export const SkeletonCourseCard = pattern("SkeletonCourseCard", "skeleton-course-card", {
  className: cn(surface, "flex w-full max-w-xs flex-col overflow-hidden pb-4"),
  children: (animation) => (
    <>
      <Block animation={animation} shape="rect" className="h-42 rounded-none" />
      <div className="flex flex-col gap-2.5 px-4 pt-4">
        <Block animation={animation} className="h-2.5 w-20" />
        <Block animation={animation} className="h-4 w-[80%]" />
        <Block animation={animation} className="h-1.5" />
        <div className="flex items-center gap-2 pt-1.5">
          <Block animation={animation} shape="circle" className="size-6" />
          <Block animation={animation} className="h-2.5 w-24" />
        </div>
      </div>
    </>
  ),
});

export const SkeletonNotification = pattern("SkeletonNotification", "skeleton-notification", {
  className: cn(surface, "flex w-full max-w-sm flex-col gap-1 p-5"),
  children: (animation) => (
    <>
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-start gap-3 p-3">
          <Block animation={animation} shape="circle" className="shrink-0" />
          <div className="flex flex-1 flex-col gap-2">
            <Block animation={animation} />
            <Block animation={animation} className="w-[70%]" />
            <Block animation={animation} className="h-2.5 w-24" />
          </div>
        </div>
      ))}
    </>
  ),
});

export const SkeletonProfile = pattern("SkeletonProfile", "skeleton-profile", {
  className: cn(surface, "flex w-full max-w-xs flex-col items-center gap-3 px-4 py-6"),
  children: (animation) => (
    <>
      <Block animation={animation} shape="circle" className="size-18 rounded-3xl" />
      <Block animation={animation} className="h-4 w-40" />
      <Block animation={animation} className="h-2.5 w-30" />
      <div className="flex gap-6 pt-2">
        {[0, 1, 2].map((stat) => (
          <div key={stat} className="flex flex-col items-center gap-1.5">
            <Block animation={animation} className="h-3.5 w-8" />
            <Block animation={animation} className="h-2.5 w-14" />
          </div>
        ))}
      </div>
    </>
  ),
});

export const SkeletonTable = pattern("SkeletonTable", "skeleton-table", {
  className: cn(surface, "flex w-full flex-col overflow-hidden"),
  children: (animation) => (
    <>
      <div className="flex items-center gap-4 border-b border-border-default bg-surface-muted px-4 py-3">
        <Block animation={animation} className="h-2.5 w-24" />
        <Block animation={animation} className="h-2.5 w-32" />
        <Block animation={animation} className="h-2.5 ms-auto w-16" />
      </div>
      {[0, 1, 2, 3].map((row) => (
        <div
          key={row}
          className="flex items-center gap-4 border-b border-border-subtle px-4 py-3 last:border-b-0"
        >
          <Block animation={animation} shape="circle" className="size-7" />
          <Block animation={animation} className="h-3 w-32" />
          <Block animation={animation} className="h-3 w-40" />
          <Block animation={animation} shape="pill" className="ms-auto h-5 w-16" />
        </div>
      ))}
    </>
  ),
});

export const SkeletonHero = pattern("SkeletonHero", "skeleton-hero", {
  className: cn(surface, "flex w-full flex-col gap-4 p-8"),
  children: (animation) => (
    <>
      <Block animation={animation} shape="pill" className="h-5 w-28" />
      <Block animation={animation} className="h-8 w-[60%]" />
      <Block animation={animation} className="h-8 w-[40%]" />
      <Block animation={animation} className="h-3 w-[70%]" />
      <div className="flex gap-3 pt-2">
        <Block animation={animation} shape="pill" className="h-control-lg w-36 rounded-control" />
        <Block animation={animation} shape="pill" className="h-control-lg w-28 rounded-control" />
      </div>
    </>
  ),
});

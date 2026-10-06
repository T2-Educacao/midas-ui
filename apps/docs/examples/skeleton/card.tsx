import { Skeleton } from "@t2-educacao/midas";

export default function SkeletonCard() {
  return (
    <div className="flex w-72 flex-col gap-3 rounded-xl border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-24 w-full" />
    </div>
  );
}

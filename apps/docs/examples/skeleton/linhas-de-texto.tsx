import { Skeleton } from "@t2-educacao/midas";

export default function SkeletonLinhasDeTexto() {
  return (
    <div className="flex w-72 flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

import {
  Skeleton,
  SkeletonCard,
  SkeletonCourseCard,
  SkeletonListItem,
  SkeletonTable,
} from "@t2-educacao/midas";

export default function SkeletonPadroes() {
  return (
    <div aria-busy="true" className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-4">
        <Skeleton />
        <Skeleton shape="circle" className="shrink-0" />
        <Skeleton shape="pill" className="shrink-0" />
      </div>
      <div className="flex flex-wrap gap-4">
        <SkeletonCard />
        <SkeletonCourseCard animation="static" />
        <SkeletonListItem />
      </div>
      <SkeletonTable />
    </div>
  );
}

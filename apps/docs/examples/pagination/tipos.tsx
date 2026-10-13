import {
  Pagination,
  PaginationCompact,
  PaginationContent,
  PaginationDots,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationSummary,
} from "@t2-educacao/midas";

export default function PaginationTipos() {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex w-full items-center justify-between">
        <PaginationSummary>11–20 de 128</PaginationSummary>
        <Pagination className="mx-0 w-auto" tone="neutral" size="sm">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#anterior" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#1">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#2" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#3">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#proxima" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#anterior" label="" />
          </PaginationItem>
          <PaginationItem>
            <PaginationCompact page={2} total={13} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#proxima" label="" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <PaginationDots count={5} current={1} />
    </div>
  );
}

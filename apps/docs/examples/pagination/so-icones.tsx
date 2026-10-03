import {
  Field,
  FieldLabel,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@t2-educacao/midas";

export default function PaginationSoIcones() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="linhas" className="whitespace-nowrap">
          Linhas por página
        </FieldLabel>
        <Select defaultValue="25">
          <SelectTrigger id="linhas" className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

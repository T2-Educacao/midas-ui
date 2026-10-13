import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@t2-educacao/midas";

export default function BreadcrumbSobreHero() {
  return (
    <div className="flex h-40 items-start rounded-container bg-linear-to-br from-action-accent-bg to-action-primary-bg p-6">
      <Breadcrumb tone="media" contained aria-label="Trilha sobre o Hero">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbHome href="#inicio" />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#cursos">Cursos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Módulo 3</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

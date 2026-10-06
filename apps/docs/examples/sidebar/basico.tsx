import {
  NavItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@t2-educacao/midas";
import { BookOpen, Gear, House } from "@t2-educacao/midas/icons";

export default function SidebarBasico() {
  return (
    <Sidebar className="h-96" aria-label="Principal">
      <SidebarHeader>Midas</SidebarHeader>
      <SidebarContent aria-label="Navegação">
        <SidebarGroup>
          <SidebarGroupLabel>Geral</SidebarGroupLabel>
          <NavItem asChild active icon={<House aria-hidden="true" />}>
            <a href="#inicio">Início</a>
          </NavItem>
          <NavItem asChild icon={<BookOpen aria-hidden="true" />} badge="3">
            <a href="#cursos">Cursos</a>
          </NavItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Conta</SidebarGroupLabel>
          <NavItem asChild icon={<Gear aria-hidden="true" />}>
            <a href="#configuracoes">Configurações</a>
          </NavItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Rafael</SidebarFooter>
    </Sidebar>
  );
}

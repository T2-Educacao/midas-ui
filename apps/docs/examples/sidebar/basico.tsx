import {
  NavItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@t2-educacao/midas";
import { IconBook, IconHome, IconSettings } from "@t2-educacao/midas/icons";

export default function SidebarBasico() {
  return (
    <Sidebar className="h-96" aria-label="Principal">
      <SidebarHeader>Midas</SidebarHeader>
      <SidebarContent aria-label="Navegação">
        <SidebarGroup>
          <SidebarGroupLabel>Geral</SidebarGroupLabel>
          <NavItem asChild active icon={<IconHome aria-hidden="true" />}>
            <a href="#inicio">Início</a>
          </NavItem>
          <NavItem asChild icon={<IconBook aria-hidden="true" />} badge="3">
            <a href="#cursos">Cursos</a>
          </NavItem>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Conta</SidebarGroupLabel>
          <NavItem asChild icon={<IconSettings aria-hidden="true" />}>
            <a href="#configuracoes">Configurações</a>
          </NavItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Rafael</SidebarFooter>
    </Sidebar>
  );
}

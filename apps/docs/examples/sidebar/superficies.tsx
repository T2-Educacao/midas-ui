import {
  NavItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@t2-educacao/midas";
import { IconBook, IconCertificate, IconHome, IconUsers } from "@t2-educacao/midas/icons";

function Menu() {
  return (
    <>
      <SidebarHeader>T2</SidebarHeader>
      <SidebarContent aria-label="Principal">
        <SidebarGroup aria-label="Menu">
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <NavItem asChild active icon={<IconHome />}>
            <a href="#inicio">Início</a>
          </NavItem>
          <NavItem asChild icon={<IconBook />} badge="3">
            <a href="#trilhas">Trilhas</a>
          </NavItem>
          <NavItem asChild icon={<IconUsers />}>
            <a href="#comunidade">Comunidade</a>
          </NavItem>
          <NavItem asChild icon={<IconCertificate />}>
            <a href="#certificados">Certificados</a>
          </NavItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Laura Costa</SidebarFooter>
    </>
  );
}

export default function SidebarSuperficies() {
  return (
    <div className="flex h-96 gap-4">
      <Sidebar aria-label="Solid" className="rounded-container border">
        <Menu />
      </Sidebar>
      <Sidebar
        aria-label="Minimal inverse"
        type="minimal"
        surface="inverse"
        className="rounded-container border"
      >
        <Menu />
      </Sidebar>
      <Sidebar aria-label="Recolhida" collapsed className="rounded-container border">
        <Menu />
      </Sidebar>
    </div>
  );
}

"use client";

import { NavItem, Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "@t2-educacao/midas";
import { BookOpen, House, List } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function SidebarRecolhido() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar collapsed={collapsed} className="h-80" aria-label="Principal">
      <SidebarHeader>
        <NavItem
          icon={<List aria-hidden="true" />}
          onClick={() => setCollapsed((atual) => !atual)}
          aria-expanded={!collapsed}
        >
          {collapsed ? "Expandir" : "Recolher"}
        </NavItem>
      </SidebarHeader>
      <SidebarContent aria-label="Navegação">
        <SidebarGroup>
          <NavItem asChild active icon={<House aria-hidden="true" />}>
            <a href="#inicio">Início</a>
          </NavItem>
          <NavItem asChild icon={<BookOpen aria-hidden="true" />}>
            <a href="#cursos">Cursos</a>
          </NavItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

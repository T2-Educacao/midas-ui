"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, NavItem } from "@t2-educacao/midas";
import { IconBell, IconBook, IconHome } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function SidebarTiposDeItem() {
  const [aberto, setAberto] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-64 flex-col gap-1">
        <NavItem active icon={<IconHome />}>
          Início (selected)
        </NavItem>
        <NavItem active emphasis="neutral" icon={<IconBell />} badge="3">
          Notificações (active)
        </NavItem>
        <Collapsible open={aberto} onOpenChange={setAberto}>
          <CollapsibleTrigger asChild>
            <NavItem icon={<IconBook />} showChevron expanded={aberto}>
              Trilhas
            </NavItem>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-1">
            <NavItem type="sub" active>
              Renda fixa
            </NavItem>
            <NavItem type="sub">Ações</NavItem>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="flex gap-2">
        <NavItem type="rail" active icon={<IconHome />}>
          Início
        </NavItem>
        <NavItem type="rail" icon={<IconBook />}>
          Trilhas
        </NavItem>
      </div>
    </div>
  );
}

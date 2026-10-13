"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownTrigger,
} from "@t2-educacao/midas";
import { IconLogout, IconSettings, IconUser } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function DropdownMenuGatilhos() {
  const [ordem, setOrdem] = useState("acesso");
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DropdownTrigger prefix="Ordenar:">Último acesso</DropdownTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={ordem} onValueChange={setOrdem}>
            <DropdownMenuRadioItem value="acesso">Último acesso</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="nome">Nome A–Z</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="progresso">Progresso</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <DropdownTrigger kind="ghost" size="sm">
            Conta
          </DropdownTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent tone="neutral">
          <DropdownMenuLabel>Conta</DropdownMenuLabel>
          <DropdownMenuItem>
            <IconUser /> Meu perfil <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconSettings /> Configurações
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <IconLogout /> Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

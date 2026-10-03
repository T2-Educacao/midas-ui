"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import {
  Export,
  File,
  FloppyDisk,
  FolderOpen,
  Gear,
  Question,
  SignOut,
  User,
} from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function DropdownMenuComplexo() {
  const [barraLateral, setBarraLateral] = useState(true);
  const [tema, setTema] = useState("sistema");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu completo</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Arquivo</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <File /> Novo arquivo <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FolderOpen /> Abrir recente
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FloppyDisk /> Salvar <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Export /> Exportar
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>PDF</DropdownMenuItem>
              <DropdownMenuItem>Planilha</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Exibição</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={barraLateral} onCheckedChange={setBarraLateral}>
          Barra lateral
        </DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Tema</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={tema} onValueChange={setTema}>
              <DropdownMenuRadioItem value="claro">Claro</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="escuro">Escuro</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="sistema">Sistema</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuItem>
          <User /> Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Gear /> Configurações
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Question /> Ajuda e suporte
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <SignOut /> Sair <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

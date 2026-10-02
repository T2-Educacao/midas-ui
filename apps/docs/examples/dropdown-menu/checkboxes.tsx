"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { useState } from "react";

export default function DropdownMenuCheckboxes() {
  const [barra, setBarra] = useState(true);
  const [atividade, setAtividade] = useState(false);
  const [painel, setPainel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Aparência</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Aparência</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={barra} onCheckedChange={setBarra}>
          Barra de status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={atividade} onCheckedChange={setAtividade} disabled>
          Barra de atividade
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={painel} onCheckedChange={setPainel}>
          Painel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

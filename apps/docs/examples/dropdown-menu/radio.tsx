"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { useState } from "react";

export default function DropdownMenuRadio() {
  const [pagamento, setPagamento] = useState("pix");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Forma de pagamento</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Selecione</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={pagamento} onValueChange={setPagamento}>
          <DropdownMenuRadioItem value="cartao">Cartão de crédito</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pix">Pix</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="boleto">Boleto</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

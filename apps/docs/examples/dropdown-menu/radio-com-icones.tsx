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
import { Bank, CreditCard, PixLogo } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function DropdownMenuRadioComIcones() {
  const [pagamento, setPagamento] = useState("pix");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Forma de pagamento</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Selecione</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={pagamento} onValueChange={setPagamento}>
          <DropdownMenuRadioItem value="cartao">
            <CreditCard /> Cartão de crédito
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pix">
            <PixLogo /> Pix
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="boleto">
            <Bank /> Boleto
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

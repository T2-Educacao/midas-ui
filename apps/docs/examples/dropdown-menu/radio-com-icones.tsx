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
import { IconBuildingBank, IconCreditCard, IconQrcode } from "@t2-educacao/midas/icons";
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
            <IconCreditCard /> Cartão de crédito
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pix">
            <IconQrcode /> Pix
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="boleto">
            <IconBuildingBank /> Boleto
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

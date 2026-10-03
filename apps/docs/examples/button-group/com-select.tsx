"use client";

import {
  ButtonGroup,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@t2-educacao/midas";

export default function ButtonGroupComSelect() {
  return (
    <ButtonGroup className="w-full max-w-xs">
      <Select defaultValue="brl">
        <SelectTrigger aria-label="Moeda" className="font-mono">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="brl">R$</SelectItem>
          <SelectItem value="usd">US$</SelectItem>
          <SelectItem value="eur">€</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="10,00" aria-label="Valor" />
    </ButtonGroup>
  );
}

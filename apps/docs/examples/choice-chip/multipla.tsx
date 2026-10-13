"use client";

import { ChoiceChip, ChoiceChipGroup } from "@t2-educacao/midas";
import { IconChartLine } from "@t2-educacao/midas/icons";
import * as React from "react";

export default function ChoiceChipMultipla() {
  const [temas, setTemas] = React.useState<string[]>(["rf"]);

  return (
    <ChoiceChipGroup
      aria-label="Temas de interesse"
      type="multiple"
      value={temas}
      onValueChange={setTemas}
    >
      <ChoiceChip value="rf" icon={<IconChartLine />}>
        Renda fixa
      </ChoiceChip>
      <ChoiceChip value="acoes">Ações</ChoiceChip>
      <ChoiceChip value="fiis">Fundos imobiliários</ChoiceChip>
      <ChoiceChip value="cripto">Cripto</ChoiceChip>
    </ChoiceChipGroup>
  );
}

"use client";

import {
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemTitle,
} from "@t2-educacao/midas";
import { useState } from "react";

const planos = [
  { id: "mensal", titulo: "Mensal", descricao: "R$ 49 por mês" },
  { id: "anual", titulo: "Anual", descricao: "R$ 490 por ano" },
];

export default function ListItemSelecionado() {
  const [ativo, setAtivo] = useState("mensal");

  return (
    <ListItemGroup className="max-w-md">
      {planos.map((plano) => (
        <ListItem key={plano.id} asChild interactive selected={ativo === plano.id}>
          <button
            type="button"
            aria-pressed={ativo === plano.id}
            onClick={() => setAtivo(plano.id)}
          >
            <ListItemContent>
              <ListItemTitle>{plano.titulo}</ListItemTitle>
              <ListItemDescription>{plano.descricao}</ListItemDescription>
            </ListItemContent>
          </button>
        </ListItem>
      ))}
    </ListItemGroup>
  );
}

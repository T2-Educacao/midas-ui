"use client";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@t2-educacao/midas";
import { useState } from "react";

const itens = [
  { id: "a", nome: "Curso de Álgebra", preco: 120 },
  { id: "b", nome: "Curso de Geometria", preco: 90 },
  { id: "c", nome: "Curso de Redação", preco: 150 },
];

export default function TableSelecaoERodape() {
  const [selecionados, setSelecionados] = useState<string[]>(["a"]);

  const alternar = (id: string, marcado: boolean) =>
    setSelecionados((atual) => (marcado ? [...atual, id] : atual.filter((item) => item !== id)));

  const total = itens
    .filter((item) => selecionados.includes(item.id))
    .reduce((soma, item) => soma + item.preco, 0);

  return (
    <div className="w-full max-w-md">
      <Table size="sm">
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <span className="sr-only">Selecionar</span>
            </TableHead>
            <TableHead>Curso</TableHead>
            <TableHead className="text-end">Preço</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itens.map((item) => (
            <TableRow
              key={item.id}
              data-state={selecionados.includes(item.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  aria-label={`Selecionar ${item.nome}`}
                  checked={selecionados.includes(item.id)}
                  onCheckedChange={(valor) => alternar(item.id, valor === true)}
                />
              </TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell className="text-end">R$ {item.preco},00</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total selecionado</TableCell>
            <TableCell className="text-end">R$ {total},00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
